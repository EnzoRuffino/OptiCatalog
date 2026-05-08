import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  StreamableFile,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  CurrentUser,
  type AuthUser,
} from '../common/decorators/current-user.decorator';
import { UploadsService } from './uploads.service';

const MAX_CSV_BYTES = 15 * 1024 * 1024;

@Controller('projects/:projectId/uploads')
@UseGuards(AuthGuard('jwt'))
export class UploadsController {
  constructor(private readonly uploads: UploadsService) {}

  @Get('csv/template')
  async csvTemplate(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
  ): Promise<StreamableFile> {
    const csv = await this.uploads.getImportTemplate(projectId, user.id);
    const buf = Buffer.from(csv, 'utf8');
    return new StreamableFile(buf, {
      type: 'text/csv; charset=utf-8',
      disposition: 'attachment; filename="opticatalog-products-import.csv"',
    });
  }

  @Post('csv/preview')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: MAX_CSV_BYTES },
    }),
  )
  async previewCsv(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @UploadedFile() file: Express.Multer.File | undefined,
  ) {
    if (!file?.buffer) {
      throw new BadRequestException(
        'Fichier CSV manquant (champ multipart "file").',
      );
    }
    const raw = file.buffer.toString('utf8');
    return this.uploads.previewProductsCsv(projectId, user.id, raw);
  }

  @Post('csv')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: MAX_CSV_BYTES },
    }),
  )
  async uploadCsv(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @UploadedFile() file: Express.Multer.File | undefined,
    @Body('mapping') mappingRaw?: string,
  ) {
    if (!file?.buffer) {
      throw new BadRequestException(
        'Fichier CSV manquant (champ multipart "file").',
      );
    }
    const raw = file.buffer.toString('utf8');

    let mapping;
    if (mappingRaw != null && String(mappingRaw).trim() !== '') {
      let parsed: unknown;
      try {
        parsed = JSON.parse(String(mappingRaw));
      } catch {
        throw new BadRequestException('Champ mapping : JSON invalide.');
      }
      mapping = this.uploads.normalizeProductCsvMappingPayload(parsed);
    }

    return this.uploads.importProductsFromCsv(projectId, user.id, raw, mapping);
  }
}
