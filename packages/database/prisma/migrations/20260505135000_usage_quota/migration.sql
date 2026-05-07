-- CreateEnum
CREATE TYPE "SubscriptionPlan" AS ENUM ('STARTER', 'PRO', 'SCALE');

-- AlterTable
ALTER TABLE "User" ADD COLUMN "plan" "SubscriptionPlan" NOT NULL DEFAULT 'STARTER';

-- CreateTable
CREATE TABLE "UsageMonthly" (
  "id" TEXT NOT NULL,
  "userId" TEXT NOT NULL,
  "monthKey" TEXT NOT NULL,
  "optimizedProducts" INTEGER NOT NULL DEFAULT 0,
  "estimatedCostCents" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "UsageMonthly_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsageMonthly_userId_monthKey_key" ON "UsageMonthly"("userId", "monthKey");

-- AddForeignKey
ALTER TABLE "UsageMonthly" ADD CONSTRAINT "UsageMonthly_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
