export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
  featured: boolean;
  order: number;
  createdAt: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location?: string;
  duration: string;
  description: string[];
  category: 'Work' | 'Education';
  order: number;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
  order: number;
}

export interface GroupedSkills {
  [category: string]: Skill[];
}
