import api from './api';
import { Project } from '../types/project.types';

export const projectService = {
  getAll: async (): Promise<Project[]> => {
    return api.get<Project[]>('/projects');
  },

  create: async (projectData: Partial<Project>, token: string): Promise<Project> => {
    return api.post<Project>('/projects', projectData, {
      'Authorization': `Bearer ${token}`
    });
  }
};
