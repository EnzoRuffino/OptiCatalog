import { JobStatus } from '@opticatalog/database';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  it('enqueueOptimize creates DB job and queue job', async () => {
    const prisma = {
      product: {
        findFirst: jest.fn().mockResolvedValue({
          id: 'prod1',
          projectId: 'proj1',
          originalTitle: 'A',
          originalDescription: 'B',
          price: 10,
          generation: null,
        }),
      },
      job: {
        create: jest.fn().mockResolvedValue({
          id: 'job1',
          projectId: 'proj1',
          status: JobStatus.PENDING,
          progress: 0,
        }),
      },
    } as any;

    const projects = {
      getByIdForUser: jest.fn().mockResolvedValue({ id: 'proj1', userId: 'u1' }),
    } as any;

    const queue = {
      add: jest.fn().mockResolvedValue({ id: 'job1' }),
    } as any;

    const billing = { assertCanEnqueueOptimization: jest.fn().mockResolvedValue(undefined) } as any;
    const service = new ProductsService(prisma, projects, billing, queue);
    const result = await service.enqueueOptimize('proj1', 'prod1', 'u1');

    expect(prisma.job.create).toHaveBeenCalled();
    expect(queue.add).toHaveBeenCalledWith(
      'optimize-product',
      expect.objectContaining({ dbJobId: 'job1', productId: 'prod1' }),
      expect.objectContaining({ jobId: 'job1' }),
    );
    expect(result).toEqual(
      expect.objectContaining({ jobId: 'job1', status: JobStatus.PENDING }),
    );
  });

  it('buildExportCsv includes generation columns', async () => {
    const prisma = {
      product: {
        findMany: jest.fn().mockResolvedValue([
          {
            id: 'p1',
            originalTitle: 'T1',
            originalDescription: 'D1',
            price: 10,
            createdAt: new Date(),
            projectId: 'proj1',
            generation: {
              optimizedTitle: 'OT1',
              optimizedDescription: 'OD1',
              seoKeywords: 'k1,k2',
              seoScore: 91,
            },
          },
        ]),
      },
    } as any;

    const projects = {
      getByIdForUser: jest.fn().mockResolvedValue({ id: 'proj1', userId: 'u1' }),
    } as any;

    const queue = { add: jest.fn() } as any;
    const billing = { assertCanEnqueueOptimization: jest.fn().mockResolvedValue(undefined) } as any;
    const service = new ProductsService(prisma, projects, billing, queue);

    const csv = await service.buildExportCsv('proj1', 'u1');
    expect(csv).toContain('optimizedTitle');
    expect(csv).toContain('OT1');
    expect(csv).toContain('91');
  });
});
