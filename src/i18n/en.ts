import type { Translations } from './types';

export const en: Translations = {
  site: {
    title: 'Shan Lin - Portfolio',
    description: 'Personal portfolio of Shan Lin - work experience, skills, and projects',
  },
  hero: {
    name: 'Shan Lin',
    role: 'Software Engineer',
    tagline: 'Passionate about technology, focused on building great software products',
  },
  sidebar: {
    bio: 'Software engineer focused on [your field]. Graduated from [your school], currently at [your organization].',
    navAbout: 'About',
    navTimeline: 'Experience',
    navSkills: 'Skills',
    navProjects: 'Projects',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a passionate software engineer. I focus on solving real-world problems with technology and building high-quality software products.',
      'In my spare time, I enjoy contributing to open-source projects, exploring new technologies, and continuously improving my engineering skills.',
    ],
  },
  timeline: {
    title: 'Experience',
    workLabel: 'Work',
    internshipLabel: 'Internship',
    items: [
      {
        company: '[Company]',
        role: '[Role]',
        period: '2024 - Present',
        description: '[Fill in your job description here]',
        type: 'work' as const,
      },
      {
        company: '[Internship Company]',
        role: '[Intern Role]',
        period: '2023 - 2024',
        description: '[Fill in your internship description here]',
        type: 'internship' as const,
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      { name: 'Languages', items: ['TypeScript', 'Python', 'Java', 'Go'] },
      { name: 'Frontend', items: ['React', 'Vue', 'Astro', 'Next.js', 'Tailwind CSS'] },
      { name: 'Backend', items: ['Node.js', 'Express', 'FastAPI'] },
      { name: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { name: 'Tools & Platforms', items: ['Git', 'Docker', 'Linux', 'GitHub Actions'] },
    ],
  },
  projects: {
    title: 'Projects',
    loading: 'Loading...',
    error: 'Failed to load projects, please try again later',
    noProjects: 'No public projects yet',
    stars: 'stars',
    viewOnGithub: 'View more on GitHub',
    language: 'Language',
  },
  footer: {
    copyright: '© 2026 Shan Lin. All rights reserved.',
    builtWith: 'Built with Astro, hosted on GitHub Pages',
  },
};
