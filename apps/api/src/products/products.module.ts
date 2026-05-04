import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { ProjectsModule } from '../projects/projects.module';
import { QueueModule } from '../queue/queue.module';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports: [AuthModule, ProjectsModule, QueueModule],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
