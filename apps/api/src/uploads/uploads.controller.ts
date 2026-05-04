import {
  BadRequestException,
  Controller,
  Param,
  Post,
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
  ) {
    if (!file?.buffer) {
      throw new BadRequestException(
        'Fichier CSV manquant (champ multipart "file").',
      );
    }
    const raw = file.buffer.toString('utf8');
    return this.uploads.importProductsFromCsv(projectId, user.id, raw);
  }
}
