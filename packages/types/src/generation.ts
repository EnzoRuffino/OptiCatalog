export interface Generation {
  id: string;
  productId: string;
  optimizedTitle: string;
  optimizedDescription: string;
  // Mots-clés SEO séparés par des virgules
  seoKeywords: string;
  // Score de 0 à 100 calculé par l'IA
  seoScore: number;
  createdAt: Date;
}
