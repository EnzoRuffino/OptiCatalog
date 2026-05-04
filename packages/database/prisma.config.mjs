import dotenv from 'dotenv';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, env } from 'prisma/config';

const pkgRoot = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(pkgRoot, '.env') });
dotenv.config({ path: path.join(pkgRoot, '..', '..', '.env') });

const root = pkgRoot;

export default defineConfig({
  schema: path.join(root, 'prisma', 'schema.prisma'),
  migrations: {
    path: path.join(root, 'prisma', 'migrations'),
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
