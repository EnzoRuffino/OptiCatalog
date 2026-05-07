export interface CollectionPage {
  id: string;
  projectId: string;
  label: string;
  originalDescription: string;
  createdAt: Date;
}

export interface CreateCollectionDto {
  projectId: string;
  label: string;
  originalDescription?: string;
}
