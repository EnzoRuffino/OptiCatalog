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

export function buildCollectionDraft(input: { label: string; description: string }) {
  const label = input.label.trim();
  const desc = input.description.trim();
  const keywords = ['catégorie', 'collection', 'boutique en ligne'];
  return {
    optimizedTitle: `${label} — sélection e-commerce`,
    optimizedDescription: `${desc ? `${desc}\n\n` : ''}Découvrez notre sélection ${label.toLowerCase()} : produits choisis, livraison et service client.`,
    seoKeywords: [...keywords, label.toLowerCase()].join(', '),
    seoScore: Math.min(92, 58 + Math.floor(label.length % 18)),
  };
}
