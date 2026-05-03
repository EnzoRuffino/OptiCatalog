// Les états possibles d'un job de traitement
export type JobStatus = 'pending' | 'processing' | 'done' | 'failed';

export interface Job {
  id: string;
  projectId: string;
  status: JobStatus;
  // Progression de 0 à 100
  progress: number;
  createdAt: Date;
}
