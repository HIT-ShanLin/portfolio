import type { Translations } from './types';

export const zh: Translations = {
  site: {
    title: 'Shan Lin - 个人简介',
    description: 'Shan Lin 的个人主页 - 腾讯云边缘推理与边缘AI',
  },
  hero: {
    name: 'Shan Lin',
    role: '软件工程师 @ 腾讯',
    tagline: '专注于腾讯云边缘推理与边缘AI技术',
  },
  sidebar: {
    bio: '腾讯软件工程师，专注于腾讯云边缘推理与边缘AI。毕业于哈尔滨工业大学计算机专业（硕士）。',
    navAbout: '关于',
    navTimeline: '经历',
    navSkills: '技能',
    navProjects: '项目',
  },
  about: {
    title: '关于我',
    paragraphs: [
      '我是腾讯的一名软件工程师，专注于腾讯云的边缘推理与边缘AI领域。我致力于将AI能力推向边缘，让计算更靠近数据源，提供更低延迟、更高效率的智能服务。',
      '我毕业于哈尔滨工业大学计算机科学与技术专业，获硕士学位。在业余时间，我喜欢参与开源项目，探索前沿技术，并持续提升自己的工程能力。',
    ],
  },
  timeline: {
    title: '经历',
    workLabel: '工作',
    internshipLabel: '实习',
    items: [
      {
        company: '腾讯',
        role: '软件工程师',
        period: '2024 - 至今',
        description: '负责腾讯云边缘推理与边缘AI相关产品的研发，涵盖边缘推理框架优化、模型部署加速、边缘智能调度等方向。',
        type: 'work',
      },
    ],
  },
  skills: {
    title: '技术能力',
    categories: [
      { name: '编程语言', items: ['TypeScript', 'Python', 'C++', 'Go'] },
      { name: 'AI / 推理', items: ['ONNX Runtime', 'TensorRT', 'OpenVINO', '模型量化', '边缘推理'] },
      { name: '云 & 基础设施', items: ['Docker', 'Kubernetes', 'Linux', '腾讯云'] },
      { name: '前端 & 工具', items: ['React', 'Next.js', 'Node.js', 'Git', 'GitHub Actions'] },
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
    copyright: '© 2026 Shan Lin',
    builtWith: '由 Astro 构建，托管于 GitHub Pages',
  },
};
