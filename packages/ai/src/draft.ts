/**
 * Brouillon d’optimisation sans API externe (tests / pas de clé OpenAI).
 */
export function buildOptimizedDraft(input: { title: string; description: string }) {
  const keywords = ['e-commerce', 'catalogue', 'produit'];
  return {
    optimizedTitle: `${input.title.trim()} — offre soignée`,
    optimizedDescription: `${input.description.trim()}\n\nPoints forts : clarté, confiance, appel à l’action pour le référencement naturel.`,
    seoKeywords: keywords.join(', '),
    seoScore: Math.min(95, 60 + Math.floor(input.title.length % 20)),
  };
}
