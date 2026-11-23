export type PageId =
  | 'accueil'
  | 'apropos'
  | 'projets'
  | 'competences'
  | 'certifications'
  | 'contact';

export type ProjectCategory = 'UX/UI Design' | 'Marketing Digital';

export interface PersonaItem {
  name: string;
  role: string;
  need: string;
  frustration: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  nature: string; // e.g., "Projet de formation · Marketing Digital" or "Concept UX/UI"
  category: ProjectCategory;
  year: string;
  featured: boolean;
  summary: string;
  context: string;
  userNeed: string;
  approach: string[];
  personas: PersonaItem[];
  userFlow: string[];
  deliverables: string[];
  tools: string[];
  visualTheme: 'galsenfrika' | 'kerfacile' | 'ideaflow' | 'mairie' | 'karaange' | 'sangalkam';
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  status: string;
  summary: string;
  competencies: string[];
  verificationNote: string;
  verificationUrl?: string;
}

export interface EducationItem {
  institution: string;
  program: string;
  period: string;
  focus: string;
}
