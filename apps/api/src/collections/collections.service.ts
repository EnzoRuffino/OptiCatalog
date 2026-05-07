import { InjectQueue } from '@nestjs/bullmq';
import { Injectable, NotFoundException } from '@nestjs/common';
import { JobStatus } from '@opticatalog/database';
import { Queue } from 'bullmq';
import { BillingService } from '../billing/billing.service';
import { PrismaService } from '../prisma/prisma.service';
import { OPTIMIZE_COLLECTION_QUEUE } from '../queue/constants';
import { ProjectsService } from '../projects/projects.service';
import { CreateCollectionDto } from './dto/create-collection.dto';

export type OptimizeCollectionJobPayload = {
  dbJobId: string;
  projectId: string;
  collectionPageId: string;
  userId: string;
};

@Injectable()
export class CollectionsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projects: ProjectsService,
    private readonly billing: BillingService,
    @InjectQueue(OPTIMIZE_COLLECTION_QUEUE)
    private readonly optimizeQueue: Queue<OptimizeCollectionJobPayload>,
  ) {}

  async list(projectId: string, userId: string) {
    await this.projects.getByIdForUser(projectId, userId);
    return this.prisma.collectionPage.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
      include: { generation: true },
    });
  }

  async create(projectId: string, userId: string, dto: CreateCollectionDto) {
    await this.projects.getByIdForUser(projectId, userId);
    return this.prisma.collectionPage.create({
      data: {
        projectId,
        label: dto.label,
        originalDescription: dto.originalDescription?.trim() ?? '',
      },
      include: { generation: true },
    });
  }

  async getOne(projectId: string, collectionPageId: string, userId: string) {
    await this.projects.getByIdForUser(projectId, userId);
    const page = await this.prisma.collectionPage.findFirst({
      where: { id: collectionPageId, projectId },
      include: { generation: true },
    });
    if (!page) {
      throw new NotFoundException('Page collection introuvable.');
    }
    return page;
  }

  async enqueueOptimize(
    projectId: string,
    collectionPageId: string,
    userId: string,
  ) {
    await this.getOne(projectId, collectionPageId, userId);
    await this.billing.assertCanEnqueueOptimization(userId);
    const job = await this.prisma.job.create({
      data: {
        projectId,
        status: JobStatus.PENDING,
        progress: 0,
      },
    });
    const payload: OptimizeCollectionJobPayload = {
      dbJobId: job.id,
      projectId,
      collectionPageId,
      userId,
    };
    await this.optimizeQueue.add('optimize-collection', payload, {
      jobId: job.id,
    });
    return {
      jobId: job.id,
      status: job.status,
      message:
        'Optimisation en file d’attente. Poll GET /projects/:projectId/jobs/:jobId',
    };
  }
}
