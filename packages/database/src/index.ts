import { PrismaClient } from './generated/client';

// Singleton : on réutilise la même connexion au lieu d'en ouvrir une nouvelle à chaque appel
const prisma = new PrismaClient();

export { prisma };

// Réexporte les types générés par Prisma pour qu'ils soient disponibles depuis @opticatalog/database
export * from './generated/client';
