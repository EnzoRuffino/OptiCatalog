import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AiService } from './ai.service';

@Controller('ai')
@UseGuards(AuthGuard('jwt'))
export class AiController {
  constructor(private readonly ai: AiService) {}

  @Post('preview-optimize')
  preview(@Body() body: { title: string; description: string }) {
    return this.ai.optimize(body.title ?? '', body.description ?? '');
  }
}
