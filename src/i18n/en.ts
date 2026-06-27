import type { Translations } from './types';

export const en: Translations = {
  site: {
    title: 'Shan Lin - Portfolio',
    description: 'Personal portfolio of Shan Lin - Edge Inference & Edge AI at Tencent Cloud',
  },
  hero: {
    name: 'Shan Lin',
    role: 'Software Engineer @ Tencent',
    tagline: 'Focused on Tencent Cloud edge inference and edge AI technologies',
  },
  sidebar: {
    bio: 'Software Engineer at Tencent, focused on edge inference and edge AI for Tencent Cloud. M.S. in Computer Science from Harbin Institute of Technology.',
    navAbout: 'About',
    navTimeline: 'Experience',
    navSkills: 'Skills',
    navProjects: 'Projects',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a Software Engineer at Tencent, focusing on edge inference and edge AI for Tencent Cloud. I am dedicated to bringing AI capabilities to the edge — enabling computation closer to data sources for lower latency and higher efficiency.',
      'I hold a Master\'s degree in Computer Science from Harbin Institute of Technology (HIT). In my spare time, I enjoy contributing to open-source projects, exploring cutting-edge technologies, and continuously improving my engineering skills.',
    ],
  },
  timeline: {
    title: 'Experience',
    workLabel: 'Work',
    internshipLabel: 'Internship',
    items: [
      {
        company: 'Tencent',
        role: 'Software Engineer',
        period: '2026.06 - Present',
        description: 'Responsible for R&D of Tencent Cloud edge inference and edge AI products, covering edge inference framework optimization, model deployment acceleration, and edge intelligent scheduling.',
        type: 'work' as const,
      },
      {
        company: 'Tencent',
        role: 'Edge AI Intern',
        period: '2025.12 - 2026.05',
        description: 'Participated in Tencent Cloud edge AI projects, responsible for optimizing and adapting edge inference engines, and exploring model deployment solutions for edge scenarios.',
        type: 'internship' as const,
      },
      {
        company: 'Tencent',
        role: 'CDN Rule Engine Intern',
        period: '2026.03 - 2026.10',
        description: 'Participated in the development of Tencent Cloud CDN rule engine, responsible for rule configuration, traffic scheduling, and content delivery strategy optimization.',
        type: 'internship' as const,
      },
      {
        company: 'JD.com',
        role: 'AI Intern',
        period: '2025.09 - 2026.03',
        description: 'Responsible for AI shopping guide and health detection projects, participating in intelligent recommendation algorithm development and health data analysis model construction.',
        type: 'internship' as const,
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      { name: 'Languages', items: ['TypeScript', 'Python', 'C++', 'Go'] },
      { name: 'AI / Inference', items: ['ONNX Runtime', 'TensorRT', 'OpenVINO', 'Model Quantization', 'Edge Inference'] },
      { name: 'Cloud & Infra', items: ['Docker', 'Kubernetes', 'Linux', 'Tencent Cloud'] },
      { name: 'Frontend & Tools', items: ['React', 'Next.js', 'Node.js', 'Git', 'GitHub Actions'] },
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
    copyright: '© 2026 Shan Lin',
    builtWith: 'Built with Astro, hosted on GitHub Pages',
  },
};
