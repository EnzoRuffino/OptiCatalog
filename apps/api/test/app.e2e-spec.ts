import { INestApplication, ValidationPipe } from '@nestjs/common';
import { getQueueToken } from '@nestjs/bullmq';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from './../src/app.module';
import {
  OPTIMIZE_COLLECTION_QUEUE,
  OPTIMIZE_PRODUCT_QUEUE,
} from './../src/queue/constants';
import { PrismaService } from './../src/prisma/prisma.service';

describe('App (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(PrismaService)
      .useValue({
        onModuleInit: jest.fn().mockResolvedValue(undefined),
        onModuleDestroy: jest.fn().mockResolvedValue(undefined),
        $connect: jest.fn().mockResolvedValue(undefined),
        $disconnect: jest.fn().mockResolvedValue(undefined),
      })
      .overrideProvider(getQueueToken(OPTIMIZE_PRODUCT_QUEUE))
      .useValue({
        add: jest.fn().mockResolvedValue({ id: 'test-job' }),
        close: jest.fn().mockResolvedValue(undefined),
      })
      .overrideProvider(getQueueToken(OPTIMIZE_COLLECTION_QUEUE))
      .useValue({
        add: jest.fn().mockResolvedValue({ id: 'test-job' }),
        close: jest.fn().mockResolvedValue(undefined),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('GET /api/health', () => {
    return request(app.getHttpServer())
      .get('/api/health')
      .expect(200)
      .expect((res) => {
        const body = res.body as { ok: boolean };
        expect(body.ok).toBe(true);
      });
  });

  afterEach(async () => {
    await app.close();
  });
});
