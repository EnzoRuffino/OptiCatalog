export interface Project {
  id: string;
  userId: string;
  name: string;
  createdAt: Date;
}

export interface CreateProjectDto {
  name: string;
}
