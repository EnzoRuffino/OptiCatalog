import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JobStatus, Prisma } from '@opticatalog/database';
import { buildProductsExportCsv } from '@opticatalog/csv';
import { Queue } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';
import { OPTIMIZE_PRODUCT_QUEUE } from '../queue/constants';
import { ProjectsService } from '../projects/projects.service';
import { CreateProductDto } from './dto/create-product.dto';

/** Payload BullMQ — aligné avec le worker. */
export type OptimizeProductJobPayload = {
  dbJobId: string;
  projectId: string;
  productId: string;
  userId: string;
};

@Injectable()
export class ProductsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projects: ProjectsService,
    @InjectQueue(OPTIMIZE_PRODUCT_QUEUE)
    private readonly optimizeQueue: Queue<OptimizeProductJobPayload>,
  ) {}

  async list(projectId: string, userId: string) {
    await this.projects.getByIdForUser(projectId, userId);
    return this.prisma.product.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
      include: { generation: true },
    });
  }

  async create(projectId: string, userId: string, dto: CreateProductDto) {
    await this.projects.getByIdForUser(projectId, userId);
    const attributes = (dto.attributes ?? {}) as Prisma.InputJsonValue;
    return this.prisma.product.create({
      data: {
        projectId,
        originalTitle: dto.originalTitle,
        originalDescription: dto.originalDescription,
        price: dto.price,
        attributes,
        imageUrl: dto.imageUrl,
        imageAlt: dto.imageAlt,
      },
      include: { generation: true },
    });
  }

  async getOne(projectId: string, productId: string, userId: string) {
    await this.projects.getByIdForUser(projectId, userId);
    const product = await this.prisma.product.findFirst({
      where: { id: productId, projectId },
      include: { generation: true },
    });
    if (!product) {
      throw new NotFoundException('Produit introuvable.');
    }
    return product;
  }

  /**
   * Met en file d’attente une optimisation IA (traitée par le worker BullMQ).
   */
  async enqueueOptimize(projectId: string, productId: string, userId: string) {
    await this.getOne(projectId, productId, userId);
    const job = await this.prisma.job.create({
      data: {
        projectId,
        status: JobStatus.PENDING,
        progress: 0,
      },
    });
    const payload: OptimizeProductJobPayload = {
      dbJobId: job.id,
      projectId,
      productId,
      userId,
    };
    await this.optimizeQueue.add('optimize-product', payload, {
      jobId: job.id,
    });
    return {
      jobId: job.id,
      status: job.status,
      message:
        'Optimisation en file d’attente. Poll GET /projects/:projectId/jobs/:jobId',
    };
  }

  async buildExportCsv(projectId: string, userId: string): Promise<string> {
    await this.projects.getByIdForUser(projectId, userId);
    const products = await this.prisma.product.findMany({
      where: { projectId },
      include: { generation: true },
      orderBy: { createdAt: 'asc' },
    });
    const rows = products.map((p) => ({
      id: p.id,
      originalTitle: p.originalTitle,
      originalDescription: p.originalDescription,
      price: p.price,
      optimizedTitle: p.generation?.optimizedTitle ?? '',
      optimizedDescription: p.generation?.optimizedDescription ?? '',
      seoKeywords: p.generation?.seoKeywords ?? '',
      seoScore: p.generation ? String(p.generation.seoScore) : '',
    }));
    return buildProductsExportCsv(rows);
  }
}
