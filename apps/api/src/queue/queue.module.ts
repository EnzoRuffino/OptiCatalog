import { BullModule } from '@nestjs/bullmq';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OPTIMIZE_COLLECTION_QUEUE, OPTIMIZE_PRODUCT_QUEUE } from './constants';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        connection: {
          url: config.getOrThrow<string>('REDIS_URL'),
        },
      }),
      inject: [ConfigService],
    }),
    BullModule.registerQueue({ name: OPTIMIZE_PRODUCT_QUEUE }),
    BullModule.registerQueue({ name: OPTIMIZE_COLLECTION_QUEUE }),
  ],
  exports: [BullModule],
})
export class QueueModule {}
