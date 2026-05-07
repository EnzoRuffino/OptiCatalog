import { config } from 'dotenv';
import { resolve } from 'path';
import { Worker } from 'bullmq';
import { optimizeCollectionPage, optimizeProduct } from '@opticatalog/ai';
import { JobStatus, createPrismaClient } from '@opticatalog/database';

/** Aligné avec apps/api/src/queue/constants.ts */
const OPTIMIZE_PRODUCT_QUEUE = 'optimize-product';
const OPTIMIZE_COLLECTION_QUEUE = 'optimize-collection';

config({ path: resolve(__dirname, '../../../.env') });
config({ path: resolve(__dirname, '../../../apps/api/.env') });

type OptimizeProductJobData = {
  dbJobId: string;
  projectId: string;
  productId: string;
  userId: string;
};

type OptimizeCollectionJobData = {
  dbJobId: string;
  projectId: string;
  collectionPageId: string;
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

  const productWorker = new Worker<OptimizeProductJobData>(
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

        const monthKey = `${new Date().getUTCFullYear()}-${String(new Date().getUTCMonth() + 1).padStart(2, '0')}`;
        const estCostCents = Math.max(1, Math.round((product.originalTitle.length + product.originalDescription.length + result.optimizedDescription.length) / 250));
        await prisma.usageMonthly.upsert({
          where: { userId_monthKey: { userId, monthKey } },
          create: {
            userId,
            monthKey,
            optimizedProducts: 1,
            estimatedCostCents: estCostCents,
          },
          update: {
            optimizedProducts: { increment: 1 },
            estimatedCostCents: { increment: estCostCents },
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

  const collectionWorker = new Worker<OptimizeCollectionJobData>(
    OPTIMIZE_COLLECTION_QUEUE,
    async (job) => {
      const { dbJobId, projectId, collectionPageId, userId } = job.data;

      await prisma.job.update({
        where: { id: dbJobId },
        data: {
          status: JobStatus.PROCESSING,
          progress: 5,
          errorMessage: null,
        },
      });

      const page = await prisma.collectionPage.findFirst({
        where: { id: collectionPageId, projectId },
        include: { project: { select: { userId: true } } },
      });

      if (!page || page.project.userId !== userId) {
        await prisma.job.update({
          where: { id: dbJobId },
          data: {
            status: JobStatus.FAILED,
            progress: 0,
            errorMessage: 'Page collection introuvable ou accès refusé.',
          },
        });
        return;
      }

      await prisma.job.update({
        where: { id: dbJobId },
        data: { progress: 35 },
      });

      try {
        const result = await optimizeCollectionPage(
          {
            label: page.label,
            description: page.originalDescription,
          },
          {
            openaiApiKey: process.env.OPENAI_API_KEY,
            model: process.env.OPENAI_MODEL,
          },
        );

        await prisma.collectionGeneration.upsert({
          where: { collectionPageId: page.id },
          create: {
            collectionPageId: page.id,
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

        const monthKey = `${new Date().getUTCFullYear()}-${String(new Date().getUTCMonth() + 1).padStart(2, '0')}`;
        const estCostCents = Math.max(
          1,
          Math.round(
            (page.label.length +
              page.originalDescription.length +
              result.optimizedDescription.length) /
              250,
          ),
        );
        await prisma.usageMonthly.upsert({
          where: { userId_monthKey: { userId, monthKey } },
          create: {
            userId,
            monthKey,
            optimizedProducts: 1,
            estimatedCostCents: estCostCents,
          },
          update: {
            optimizedProducts: { increment: 1 },
            estimatedCostCents: { increment: estCostCents },
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

  productWorker.on('failed', (job, err) => {
    console.error('[product-worker] produit échoué', job?.id, err?.message ?? err);
  });
  collectionWorker.on('failed', (job, err) => {
    console.error('[product-worker] collection échouée', job?.id, err?.message ?? err);
  });

  console.log(
    `[product-worker] files "${OPTIMIZE_PRODUCT_QUEUE}" et "${OPTIMIZE_COLLECTION_QUEUE}" (Redis + Prisma OK).`,
  );
}

void main().catch((e) => {
  console.error(e);
  process.exit(1);
});
