export interface CreateProjectDTO {
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  featured?: boolean;
  order?: number;
}
export interface UpdateProjectDTO extends Partial<CreateProjectDTO> {}
