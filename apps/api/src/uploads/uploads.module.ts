import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProjectsModule } from '../projects/projects.module';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';

@Module({
  imports: [PrismaModule, ProjectsModule],
  controllers: [UploadsController],
  providers: [UploadsService],
})
export class UploadsModule {}
