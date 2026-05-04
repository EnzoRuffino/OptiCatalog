import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProjectsService } from '../projects/projects.service';

@Injectable()
export class JobsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly projects: ProjectsService,
  ) {}

  async getByIdForUser(jobId: string, projectId: string, userId: string) {
    await this.projects.getByIdForUser(projectId, userId);
    const job = await this.prisma.job.findFirst({
      where: { id: jobId, projectId },
    });
    if (!job) {
      throw new NotFoundException('Job introuvable.');
    }
    return job;
  }
}
