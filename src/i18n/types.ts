export interface HeroTranslations {
  name: string;
  role: string;
  tagline: string;
}

export interface SidebarTranslations {
  bio: string;
  university: string;
  location: string;
  navAbout: string;
  navTimeline: string;
  navSkills: string;
  navProjects: string;
}

export interface AboutTranslations {
  title: string;
  paragraphs: string[];
}

export interface TimelineItem {
  company: string;
  role: string;
  period: string;
  description: string;
  type: 'work' | 'internship';
}

export interface TimelineTranslations {
  title: string;
  workLabel: string;
  internshipLabel: string;
  items: TimelineItem[];
}

export interface SkillItem {
  name: string;
  desc: string;
}

export interface SkillCategory {
  name: string;
  items: SkillItem[];
}

export interface SkillsTranslations {
  title: string;
  categories: SkillCategory[];
}

export interface ProjectsTranslations {
  title: string;
  loading: string;
  error: string;
  noProjects: string;
  stars: string;
  viewOnGithub: string;
  language: string;
}

export interface FooterTranslations {
  copyright: string;
  builtWith: string;
}

export interface Translations {
  site: { title: string; description: string };
  hero: HeroTranslations;
  sidebar: SidebarTranslations;
  about: AboutTranslations;
  timeline: TimelineTranslations;
  skills: SkillsTranslations;
  projects: ProjectsTranslations;
  footer: FooterTranslations;
}
