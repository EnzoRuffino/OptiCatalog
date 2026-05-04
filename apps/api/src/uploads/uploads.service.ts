import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { Prisma } from '@opticatalog/database';
import { parseProductCsv } from '@opticatalog/csv';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectsService } from '../projects/projects.service';

@Injectable()
export class UploadsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projects: ProjectsService,
  ) {}

  async importProductsFromCsv(projectId: string, userId: string, rawCsv: string) {
    await this.projects.getByIdForUser(projectId, userId);
    let rows;
    try {
      rows = parseProductCsv(rawCsv);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'CSV invalide.';
      throw new BadRequestException(msg);
    }
    if (rows.length === 0) {
      return { created: 0 };
    }
    const data = rows.map((r) => ({
      projectId,
      originalTitle: r.originalTitle,
      originalDescription: r.originalDescription,
      price: r.price,
      attributes: r.attributes as Prisma.InputJsonValue,
      imageUrl: r.imageUrl ?? null,
      imageAlt: r.imageAlt ?? null,
    }));
    const result = await this.prisma.product.createMany({ data });
    return { created: result.count };
  }
}
