export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  type?: string;
  description?: string;
  honors?: string;
  relevantCoursework?: string[];
}

export interface AchievementItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  imageUrl?: string;
  skills: string[];
  type?: string;
  description?: string;
  category?: 'ai-ml' | 'web' | 'data' | 'design' | string;
}
