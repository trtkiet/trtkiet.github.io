export interface Education {
  school: string;
  degree: string;
  period: string;
  location: string;
  achievements: string[];
}

export interface Project {
  title: string;
  type: 'Project' | 'Research';
  techStack: string[];
  description: string[];
  link?: string; // Optional link
  role?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}