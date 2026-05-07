import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ProjectsModule } from '../projects/projects.module';
import { GenerationsController } from './generations.controller';
import { GenerationsService } from './generations.service';

@Module({
  imports: [AuthModule, PrismaModule, ProjectsModule],
  controllers: [GenerationsController],
  providers: [GenerationsService],
})
export class GenerationsModule {}
