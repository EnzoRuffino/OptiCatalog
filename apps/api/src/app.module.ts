import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AiModule } from './ai/ai.module';
import { AuthModule } from './auth/auth.module';
import { BillingModule } from './billing/billing.module';
import { CollectionsModule } from './collections/collections.module';
import { GenerationsModule } from './generations/generations.module';
import { JobsModule } from './jobs/jobs.module';
import { MediaModule } from './media/media.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { ProjectsModule } from './projects/projects.module';
import { UploadsModule } from './uploads/uploads.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '../../.env'],
    }),
    PrismaModule,
    UsersModule,
    AuthModule,
    BillingModule,
    AiModule,
    ProjectsModule,
    ProductsModule,
    CollectionsModule,
    GenerationsModule,
    UploadsModule,
    JobsModule,
    MediaModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
