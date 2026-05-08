import OpenAI from 'openai';

export type OpenAiGatewayOptions = {
  openaiApiKey?: string;
  /** Ex. passerelle Requesty : https://router.requesty.ai/v1 */
  baseURL?: string;
};

export function createOpenAiClient(options?: OpenAiGatewayOptions): OpenAI | null {
  const key = options?.openaiApiKey?.trim();
  if (!key) {
    return null;
  }
  const baseURL = options?.baseURL?.trim();
  return baseURL ? new OpenAI({ apiKey: key, baseURL }) : new OpenAI({ apiKey: key });
}
