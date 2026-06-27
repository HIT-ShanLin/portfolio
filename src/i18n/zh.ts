import type { Translations } from './types';

export const zh: Translations = {
  site: {
    title: 'Shan Lin - 个人简介',
    description: 'Shan Lin 的个人主页 - 工作经历、技术能力与项目展示',
  },
  nav: {
    about: '关于',
    skills: '技能',
    timeline: '经历',
    projects: '项目',
  },
  hero: {
    name: 'Shan Lin',
    role: '软件工程师',
    tagline: '热爱技术，专注于构建优秀的软件产品',
  },
  about: {
    title: '关于我',
    paragraphs: [
      '我是一名充满热情的软件工程师。我专注于用技术解决实际问题，致力于构建高质量的软件产品。',
      '在业余时间，我喜欢参与开源项目，探索新技术，并持续提升自己的工程能力。',
    ],
  },
  timeline: {
    title: '经历',
    workLabel: '工作',
    internshipLabel: '实习',
    items: [
      {
        company: '[公司名称]',
        role: '[职位]',
        period: '2024 - 至今',
        description: '[在此填写你的工作内容描述]',
        type: 'work',
      },
      {
        company: '[实习公司]',
        role: '[实习职位]',
        period: '2023 - 2024',
        description: '[在此填写你的实习内容描述]',
        type: 'internship',
      },
    ],
  },
  skills: {
    title: '技术能力',
    categories: [
      { name: '编程语言', items: ['TypeScript', 'Python', 'Java', 'Go'] },
      { name: '前端', items: ['React', 'Vue', 'Astro', 'Next.js', 'Tailwind CSS'] },
      { name: '后端', items: ['Node.js', 'Express', 'FastAPI'] },
      { name: '数据库', items: ['PostgreSQL', 'MongoDB', 'Redis'] },
      { name: '工具 & 平台', items: ['Git', 'Docker', 'Linux', 'GitHub Actions'] },
    ],
  },
  projects: {
    title: '项目',
    loading: '加载中...',
    error: '无法加载项目，请稍后再试',
    noProjects: '暂无公开项目',
    stars: '星',
    viewOnGithub: '在 GitHub 上查看更多',
    language: '语言',
  },
  footer: {
    copyright: '© 2026 Shan Lin. All rights reserved.',
    builtWith: '由 Astro 构建，托管于 GitHub Pages',
  },
};
