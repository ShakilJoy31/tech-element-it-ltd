export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  link: string;
  image: string;
  video: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: Project;
}