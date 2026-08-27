export type StackCategory = 'ai-ml' | 'backend' | 'frontend' | 'infrastructure';

export interface TechItem {
  name: string;
  category: StackCategory;
  role: string;
  experienceYears: string;
  proficiency: 'Daily Driver' | 'Production Ready' | 'Active Exploration';
  description: string;
  librariesOrTools?: string[];
}

export interface StackGroup {
  id: StackCategory;
  title: string;
  tagline: string;
  items: TechItem[];
}
