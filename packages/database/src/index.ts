import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient } from './generated/client';

/**
 * Client Prisma ORM 7 : l’URL ne vit plus dans le schéma ; on passe un adaptateur `pg`.
 */
export function createPrismaClient(connectionString: string): PrismaClient {
  const pool = new Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({ adapter });
}

export * from './generated/client';
