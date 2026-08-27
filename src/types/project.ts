export type ProjectCategory = 'ai-ml' | 'ai-agents' | 'backend' | 'full-stack';

export interface ProjectDetailSection {
  problem: string;
  solution: string;
  architecture: {
    overview: string;
    components: string[];
    diagramNote?: string;
  };
  technologies: string[];
  implementation: string[];
  challenges: string[];
  results: {
    metric: string;
    label: string;
  }[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  tags: string[];
  details: ProjectDetailSection;
}
