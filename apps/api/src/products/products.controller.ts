import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import type { Response } from 'express';
import {
  CurrentUser,
  type AuthUser,
} from '../common/decorators/current-user.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('projects/:projectId/products')
@UseGuards(AuthGuard('jwt'))
export class ProductsController {
  constructor(private readonly products: ProductsService) {}

  /** Routes statiques avant :productId */
  @Get('export/csv')
  @Header('Content-Type', 'text/csv; charset=utf-8')
  async exportCsv(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Res({ passthrough: false }) res: Response,
  ) {
    const csv = await this.products.buildExportCsv(projectId, user.id);
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="catalog-${projectId}.csv"`,
    );
    res.send(csv);
  }

  @Get()
  list(@CurrentUser() user: AuthUser, @Param('projectId') projectId: string) {
    return this.products.list(projectId, user.id);
  }

  @Post()
  create(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Body() dto: CreateProductDto,
  ) {
    return this.products.create(projectId, user.id, dto);
  }

  @Post(':productId/optimize')
  optimize(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Param('productId') productId: string,
  ) {
    return this.products.enqueueOptimize(projectId, productId, user.id);
  }

  @Get(':productId')
  getOne(
    @CurrentUser() user: AuthUser,
    @Param('projectId') projectId: string,
    @Param('productId') productId: string,
  ) {
    return this.products.getOne(projectId, productId, user.id);
  }
}
