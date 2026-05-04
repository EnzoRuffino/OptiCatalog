import OpenAI from 'openai';
import { buildOptimizedDraft } from './draft';

export type OptimizeProductInput = { title: string; description: string };

export type OptimizeProductResult = {
  optimizedTitle: string;
  optimizedDescription: string;
  seoKeywords: string;
  seoScore: number;
};

const SYSTEM = `You are an e-commerce SEO copywriter. Reply with one JSON object only, keys:
optimizedTitle (string),
optimizedDescription (string),
seoKeywords (string, comma-separated French keywords),
seoScore (integer 0-100 estimating SEO quality).`;

/**
 * Si \`openaiApiKey\` est absent ou vide, utilise le brouillon local (pas d’appel réseau).
 */
export async function optimizeProduct(
  input: OptimizeProductInput,
  options?: { openaiApiKey?: string; model?: string },
): Promise<OptimizeProductResult> {
  const key = options?.openaiApiKey?.trim();
  if (!key) {
    return buildOptimizedDraft({ title: input.title, description: input.description });
  }

  const client = new OpenAI({ apiKey: key });
  const model = options?.model ?? 'gpt-4o-mini';
  const payload = JSON.stringify({
    title: input.title,
    description: input.description,
  });

  const completion = await client.chat.completions.create({
    model,
    temperature: 0.35,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: SYSTEM },
      {
        role: 'user',
        content: `Optimize this product listing for French e-commerce SEO and conversions:\n${payload}`,
      },
    ],
  });

  const text = completion.choices[0]?.message?.content;
  if (!text) {
    throw new Error('OpenAI: empty completion');
  }

  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(text) as Record<string, unknown>;
  } catch {
    throw new Error('OpenAI: invalid JSON in completion');
  }

  const optimizedTitle = String(parsed['optimizedTitle'] ?? '').trim();
  const optimizedDescription = String(parsed['optimizedDescription'] ?? '').trim();
  let seoKeywordsRaw = parsed['seoKeywords'];
  if (Array.isArray(seoKeywordsRaw)) {
    seoKeywordsRaw = seoKeywordsRaw.join(', ');
  }
  const seoKeywords = String(seoKeywordsRaw ?? '').trim();
  let seoScore = Number(parsed['seoScore']);
  if (!Number.isFinite(seoScore)) {
    seoScore = 72;
  }
  seoScore = Math.max(0, Math.min(100, Math.round(seoScore)));

  if (!optimizedTitle || !optimizedDescription) {
    throw new Error('OpenAI: missing optimizedTitle or optimizedDescription in JSON');
  }

  return { optimizedTitle, optimizedDescription, seoKeywords, seoScore };
}
