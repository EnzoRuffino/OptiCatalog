import { ForbiddenException, Injectable } from '@nestjs/common';
import { SubscriptionPlan } from '@opticatalog/database';
import { PrismaService } from '../prisma/prisma.service';

export type UsageSnapshot = {
  monthKey: string;
  plan: SubscriptionPlan;
  limit: number;
  used: number;
  queued: number;
  remaining: number;
  estimatedCostCents: number;
};

@Injectable()
export class BillingService {
  constructor(private readonly prisma: PrismaService) {}

  getMonthKey(now = new Date()) {
    return `${now.getUTCFullYear()}-${String(now.getUTCMonth() + 1).padStart(2, '0')}`;
  }

  getPlanLimit(plan: SubscriptionPlan): number {
    const fromEnv = {
      [SubscriptionPlan.STARTER]: Number(process.env.PLAN_LIMIT_STARTER ?? 2000),
      [SubscriptionPlan.PRO]: Number(process.env.PLAN_LIMIT_PRO ?? 10000),
      [SubscriptionPlan.SCALE]: Number(process.env.PLAN_LIMIT_SCALE ?? 35000),
    }[plan];
    return Number.isFinite(fromEnv) && fromEnv > 0 ? fromEnv : 2000;
  }

  async getUsageSnapshot(userId: string): Promise<UsageSnapshot> {
    const monthKey = this.getMonthKey();
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { plan: true },
    });
    const plan = user?.plan ?? SubscriptionPlan.STARTER;
    const usage = await this.prisma.usageMonthly.findUnique({
      where: { userId_monthKey: { userId, monthKey } },
      select: { optimizedProducts: true, estimatedCostCents: true },
    });
    const queued = await this.prisma.job.count({
      where: {
        status: { in: ['PENDING', 'PROCESSING'] },
        project: { userId },
      },
    });
    const used = usage?.optimizedProducts ?? 0;
    const limit = this.getPlanLimit(plan);
    const remaining = Math.max(0, limit - used - queued);
    return {
      monthKey,
      plan,
      limit,
      used,
      queued,
      remaining,
      estimatedCostCents: usage?.estimatedCostCents ?? 0,
    };
  }

  async assertCanEnqueueOptimization(userId: string) {
    const snapshot = await this.getUsageSnapshot(userId);
    if (snapshot.remaining <= 0) {
      throw new ForbiddenException(
        `Quota atteint pour ${snapshot.monthKey} (${snapshot.used + snapshot.queued}/${snapshot.limit}).`,
      );
    }
  }
}
