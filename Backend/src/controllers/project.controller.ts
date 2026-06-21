import { Request, Response, NextFunction } from 'express';
import {
  getAllProjectsService,
  createProjectService,
  updateProjectService,
  deleteProjectService
} from '../services/project.service';

export const getProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const projects = await getAllProjectsService();
    res.json(projects);
  } catch (error) {
    next(error);
  }
};

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project = await createProjectService(req.body);
    res.status(201).json({ success: true, message: 'Project created successfully!', data: project });
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const project = await updateProjectService(Number(id), req.body);
    res.json({ success: true, message: 'Project updated successfully!', data: project });
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    await deleteProjectService(Number(id));
    res.json({ success: true, message: 'Project deleted successfully!' });
  } catch (error) {
    next(error);
  }
};
