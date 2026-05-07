import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectsService } from '../projects/projects.service';

@Injectable()
export class GenerationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projects: ProjectsService,
  ) {}

  async getByProduct(projectId: string, productId: string, userId: string) {
    await this.projects.getByIdForUser(projectId, userId);
    const product = await this.prisma.product.findFirst({
      where: { id: productId, projectId },
      include: { generation: true },
    });
    if (!product) {
      throw new NotFoundException('Produit introuvable.');
    }
    return product.generation;
  }
}
