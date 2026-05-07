import { BadRequestException } from '@nestjs/common';
import { UploadsService } from './uploads.service';

describe('UploadsService', () => {
  it('returns created count on valid csv', async () => {
    const prisma = {
      product: { createMany: jest.fn().mockResolvedValue({ count: 2 }) },
    } as any;
    const projects = {
      getByIdForUser: jest.fn().mockResolvedValue({ id: 'p1', userId: 'u1' }),
    } as any;

    const service = new UploadsService(prisma, projects);

    const csv = [
      'title,description,price',
      'Produit A,Description A,12.5',
      'Produit B,Description B,20',
    ].join('\n');

    await expect(service.importProductsFromCsv('p1', 'u1', csv)).resolves.toEqual({
      created: 2,
    });
  });

  it('throws BadRequestException on invalid csv', async () => {
    const prisma = { product: { createMany: jest.fn() } } as any;
    const projects = {
      getByIdForUser: jest.fn().mockResolvedValue({ id: 'p1', userId: 'u1' }),
    } as any;
    const service = new UploadsService(prisma, projects);

    const invalid = 'title,description,price\nX,Y,not-a-number';
    await expect(service.importProductsFromCsv('p1', 'u1', invalid)).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });
});
