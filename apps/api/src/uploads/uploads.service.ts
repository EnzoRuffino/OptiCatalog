import {
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { Prisma } from '@opticatalog/database';
import {
  PRODUCT_IMPORT_CSV_TEMPLATE,
  parseProductCsv,
  parseProductCsvWithMapping,
  previewProductCsv,
  type ProductCsvColumnMapping,
} from '@opticatalog/csv';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectsService } from '../projects/projects.service';

@Injectable()
export class UploadsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projects: ProjectsService,
  ) {}

  async getImportTemplate(projectId: string, userId: string): Promise<string> {
    await this.projects.getByIdForUser(projectId, userId);
    return PRODUCT_IMPORT_CSV_TEMPLATE;
  }

  async previewProductsCsv(projectId: string, userId: string, rawCsv: string) {
    await this.projects.getByIdForUser(projectId, userId);
    return previewProductCsv(rawCsv, { maxRows: 5 });
  }

  /** À utiliser après JSON.parse du champ multipart `mapping`. */
  normalizeProductCsvMappingPayload(raw: unknown): ProductCsvColumnMapping {
    if (!raw || typeof raw !== 'object') {
      throw new BadRequestException('Mapping : objet JSON attendu.');
    }
    const o = raw as Record<string, unknown>;
    const title = o['title'];
    const description = o['description'];
    const price = o['price'];
    if (typeof title !== 'string' || !title.trim()) {
      throw new BadRequestException(
        'Mapping : indique la colonne titre (clé normalisée renvoyée par l’aperçu).',
      );
    }
    if (typeof description !== 'string' || !description.trim()) {
      throw new BadRequestException(
        'Mapping : indique la colonne description (clé renvoyée par l’aperçu).',
      );
    }
    if (typeof price !== 'string' || !price.trim()) {
      throw new BadRequestException(
        'Mapping : indique la colonne prix (clé renvoyée par l’aperçu).',
      );
    }

    const pickOpt = (key: string): string | undefined => {
      const v = o[key];
      if (v === undefined || v === null || v === '') {
        return undefined;
      }
      if (typeof v !== 'string') {
        throw new BadRequestException(`Mapping : champ "${key}" doit être une chaîne.`);
      }
      const t = v.trim();
      return t || undefined;
    };

    return {
      title: title.trim(),
      description: description.trim(),
      price: price.trim(),
      imageUrl: pickOpt('imageUrl'),
      imageAlt: pickOpt('imageAlt'),
      attributes: pickOpt('attributes'),
    };
  }

  async importProductsFromCsv(
    projectId: string,
    userId: string,
    rawCsv: string,
    mapping?: ProductCsvColumnMapping,
  ) {
    await this.projects.getByIdForUser(projectId, userId);
    let rows;
    try {
      rows = mapping
        ? parseProductCsvWithMapping(rawCsv, mapping)
        : parseProductCsv(rawCsv);
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
