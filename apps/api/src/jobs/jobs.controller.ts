import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  CurrentUser,
  type AuthUser,
} from '../common/decorators/current-user.decorator';
import { JobsService } from './jobs.service';

@Controller('projects/:projectId/jobs')
@UseGuards(AuthGuard('jwt'))
export class JobsController {
  constructor(private readonly jobs: JobsService) {}

  @Get(':jobId')
  getOne(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Param('jobId') jobId: string,
  ) {
    return this.jobs.getByIdForUser(jobId, projectId, user.id);
  }
}
