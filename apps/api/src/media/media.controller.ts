import { Controller, Get } from '@nestjs/common';

@Controller('media')
export class MediaController {
  @Get('capabilities')
  capabilities() {
    return {
      enabled: false,
      message:
        'Module media prêt pour la suite (alt text, naming, compression, enhancement).',
      planned: ['alt-text', 'file-naming', 'compression', 'ai-enhancement'],
    };
  }
}
