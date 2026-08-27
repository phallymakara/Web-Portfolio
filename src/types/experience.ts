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
  honors?: string;
  relevantCoursework?: string[];
}

export interface AchievementItem {
  title: string;
  issuer: string;
  year: string;
  description: string;
}
