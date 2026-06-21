import prisma from '../config/prisma';
import { CreateProjectDTO, UpdateProjectDTO } from '../types/project.types';

export const getAllProjectsService = async () => {
  return prisma.project.findMany({
    orderBy: [
      { order: 'asc' },
      { createdAt: 'desc' }
    ]
  });
};

export const createProjectService = async (dto: CreateProjectDTO) => {
  return prisma.project.create({
    data: {
      title: dto.title,
      description: dto.description,
      imageUrl: dto.imageUrl || null,
      githubUrl: dto.githubUrl || null,
      liveUrl: dto.liveUrl || null,
      tags: dto.tags,
      featured: dto.featured || false,
      order: dto.order || 0
    }
  });
};

export const updateProjectService = async (id: number, dto: UpdateProjectDTO) => {
  return prisma.project.update({
    where: { id },
    data: dto
  });
};

export const deleteProjectService = async (id: number) => {
  return prisma.project.delete({
    where: { id }
  });
};
