import { Injectable } from '@nestjs/common';
import { optimizeProduct } from '@opticatalog/ai';

@Injectable()
export class AiService {
  optimize(title: string, description: string) {
    return optimizeProduct(
      { title, description },
      {
        openaiApiKey: process.env.OPENAI_API_KEY,
        model: process.env.OPENAI_MODEL,
        baseURL: process.env.OPENAI_BASE_URL,
      },
    );
  }
}
