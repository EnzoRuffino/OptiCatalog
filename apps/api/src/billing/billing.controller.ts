import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  CurrentUser,
  type AuthUser,
} from '../common/decorators/current-user.decorator';
import { BillingService } from './billing.service';

@Controller('billing')
@UseGuards(AuthGuard('jwt'))
export class BillingController {
  constructor(private readonly billing: BillingService) {}

  @Get('usage')
  usage(@CurrentUser() user: AuthUser) {
    return this.billing.getUsageSnapshot(user.id);
  }
}
