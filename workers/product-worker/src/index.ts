import { config } from 'dotenv';
import { resolve } from 'path';
import { Worker } from 'bullmq';
import { optimizeProduct } from '@opticatalog/ai';
import { JobStatus, createPrismaClient } from '@opticatalog/database';

/** Même nom que dans apps/api/src/queue/constants.ts */
const OPTIMIZE_PRODUCT_QUEUE = 'optimize-product';

config({ path: resolve(__dirname, '../../../.env') });
config({ path: resolve(__dirname, '../../../apps/api/.env') });

type OptimizeJobData = {
  dbJobId: string;
  projectId: string;
  productId: string;
  userId: string;
};

async function main() {
  const redisUrl = process.env.REDIS_URL;
  const databaseUrl = process.env.DATABASE_URL;
  if (!redisUrl) {
    throw new Error('REDIS_URL est requis pour le worker.');
  }
  if (!databaseUrl) {
    throw new Error('DATABASE_URL est requis pour le worker.');
  }

  const prisma = createPrismaClient(databaseUrl);

  const worker = new Worker<OptimizeJobData>(
    OPTIMIZE_PRODUCT_QUEUE,
    async (job) => {
      const { dbJobId, projectId, productId, userId } = job.data;

      await prisma.job.update({
        where: { id: dbJobId },
        data: {
          status: JobStatus.PROCESSING,
          progress: 5,
          errorMessage: null,
        },
      });

      const product = await prisma.product.findFirst({
        where: { id: productId, projectId },
        include: { project: { select: { userId: true } } },
      });

      if (!product || product.project.userId !== userId) {
        await prisma.job.update({
          where: { id: dbJobId },
          data: {
            status: JobStatus.FAILED,
            progress: 0,
            errorMessage: 'Produit introuvable ou accès refusé.',
          },
        });
        return;
      }

      await prisma.job.update({
        where: { id: dbJobId },
        data: { progress: 35 },
      });

      try {
        const result = await optimizeProduct(
          {
            title: product.originalTitle,
            description: product.originalDescription,
          },
          {
            openaiApiKey: process.env.OPENAI_API_KEY,
            model: process.env.OPENAI_MODEL,
          },
        );

        await prisma.generation.upsert({
          where: { productId: product.id },
          create: {
            productId: product.id,
            optimizedTitle: result.optimizedTitle,
            optimizedDescription: result.optimizedDescription,
            seoKeywords: result.seoKeywords,
            seoScore: result.seoScore,
          },
          update: {
            optimizedTitle: result.optimizedTitle,
            optimizedDescription: result.optimizedDescription,
            seoKeywords: result.seoKeywords,
            seoScore: result.seoScore,
          },
        });

        await prisma.job.update({
          where: { id: dbJobId },
          data: { status: JobStatus.DONE, progress: 100 },
        });
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e);
        await prisma.job.update({
          where: { id: dbJobId },
          data: {
            status: JobStatus.FAILED,
            progress: 0,
            errorMessage: msg.slice(0, 2000),
          },
        });
        throw e;
      }
    },
    { connection: { url: redisUrl } },
  );

  worker.on('failed', (job, err) => {
    console.error('[product-worker] job échoué', job?.id, err?.message ?? err);
  });

  console.log(
    `[product-worker] écoute la file "${OPTIMIZE_PRODUCT_QUEUE}" (Redis + Prisma OK).`,
  );
}

void main().catch((e) => {
  console.error(e);
  process.exit(1);
});
