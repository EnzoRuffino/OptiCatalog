import { buildCollectionDraft } from './draft';
import { createOpenAiClient } from './openaiClient';

export type OptimizeCollectionInput = { label: string; description: string };

export type OptimizeCollectionResult = {
  optimizedTitle: string;
  optimizedDescription: string;
  seoKeywords: string;
  seoScore: number;
};

const SYSTEM = `You are an e-commerce SEO copywriter specializing in category and collection listing pages (PLP).
Reply with one JSON object only, keys:
optimizedTitle (string, concise H1 / meta title in French, under ~65 characters if possible),
optimizedDescription (string, meta description plus a short introductory paragraph for the listing page, in French; 2–4 sentences),
seoKeywords (string, comma-separated French keywords),
seoScore (integer 0-100 estimating SEO quality for a category/collection page).`;

export async function optimizeCollectionPage(
  input: OptimizeCollectionInput,
  options?: { openaiApiKey?: string; model?: string; baseURL?: string },
): Promise<OptimizeCollectionResult> {
  const client = createOpenAiClient({
    openaiApiKey: options?.openaiApiKey,
    baseURL: options?.baseURL,
  });
  if (!client) {
    return buildCollectionDraft({ label: input.label, description: input.description });
  }
  const model = options?.model ?? 'gpt-4o-mini';
  const payload = JSON.stringify({
    label: input.label,
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
        content: `Optimize this category or collection page for French e-commerce SEO (listing page, not a single product):\n${payload}`,
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
