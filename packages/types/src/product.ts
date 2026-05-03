export interface Product {
  id: string;
  projectId: string;
  originalTitle: string;
  originalDescription: string;
  price: number;
  // Attributs libres (couleur, taille, matière...) stockés en JSON
  attributes: Record<string, string>;
  imageUrl?: string;
  imageAlt?: string;
  createdAt: Date;
}

export interface CreateProductDto {
  projectId: string;
  originalTitle: string;
  originalDescription: string;
  price: number;
  attributes?: Record<string, string>;
  imageUrl?: string;
  imageAlt?: string;
}
