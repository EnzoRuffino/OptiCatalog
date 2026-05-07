import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  CurrentUser,
  type AuthUser,
} from '../common/decorators/current-user.decorator';
import { CollectionsService } from './collections.service';
import { CreateCollectionDto } from './dto/create-collection.dto';

@Controller('projects/:projectId/collections')
@UseGuards(AuthGuard('jwt'))
export class CollectionsController {
  constructor(private readonly collections: CollectionsService) {}

  @Get()
  list(@CurrentUser() user: AuthUser, @Param('projectId') projectId: string) {
    return this.collections.list(projectId, user.id);
  }

  @Post()
  create(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Body() dto: CreateCollectionDto,
  ) {
    return this.collections.create(projectId, user.id, dto);
  }

  @Post(':collectionId/optimize')
  optimize(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Param('collectionId') collectionId: string,
  ) {
    return this.collections.enqueueOptimize(projectId, collectionId, user.id);
  }

  @Get(':collectionId')
  getOne(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Param('collectionId') collectionId: string,
  ) {
    return this.collections.getOne(projectId, collectionId, user.id);
  }
}
