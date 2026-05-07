import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  CurrentUser,
  type AuthUser,
} from '../common/decorators/current-user.decorator';
import { GenerationsService } from './generations.service';

@Controller('projects/:projectId/products/:productId/generation')
@UseGuards(AuthGuard('jwt'))
export class GenerationsController {
  constructor(private readonly generations: GenerationsService) {}

  @Get()
  getOne(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Param('productId') productId: string,
  ) {
    return this.generations.getByProduct(projectId, productId, user.id);
  }
}
