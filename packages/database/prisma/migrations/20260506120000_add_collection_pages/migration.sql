-- CreateTable
CREATE TABLE "CollectionPage" (
    "id" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "originalDescription" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "projectId" TEXT NOT NULL,

    CONSTRAINT "CollectionPage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionGeneration" (
    "id" TEXT NOT NULL,
    "optimizedTitle" TEXT NOT NULL,
    "optimizedDescription" TEXT NOT NULL,
    "seoKeywords" TEXT NOT NULL,
    "seoScore" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "collectionPageId" TEXT NOT NULL,

    CONSTRAINT "CollectionGeneration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CollectionGeneration_collectionPageId_key" ON "CollectionGeneration"("collectionPageId");

-- AddForeignKey
ALTER TABLE "CollectionPage" ADD CONSTRAINT "CollectionPage_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionGeneration" ADD CONSTRAINT "CollectionGeneration_collectionPageId_fkey" FOREIGN KEY ("collectionPageId") REFERENCES "CollectionPage"("id") ON DELETE CASCADE ON UPDATE CASCADE;
