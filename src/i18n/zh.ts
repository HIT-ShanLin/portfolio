import type { Translations } from './types';

export const zh: Translations = {
  site: {
    title: 'Shan Lin - 系统研发工程师',
    description: 'Shan Lin 的个人主页 - 专注于分布式系统、云计算基础设施与性能优化',
  },
  hero: {
    name: 'Shan Lin',
    role: '系统研发工程师 @ 腾讯',
    tagline: '热衷于底层系统与分布式基础设施，追求极致性能与工程美学',
  },
  sidebar: {
    bio: '腾讯系统研发工程师，专注于大规模分布式系统、云计算基础设施与性能优化。',
    university: '哈尔滨工业大学 · 计算机硕士',
    location: '中国 · 上海',
    navAbout: '关于',
    navTimeline: '经历',
    navSkills: '技能',
    navProjects: '项目',
  },
  about: {
    title: '关于我',
    paragraphs: [
      '我是一名系统研发工程师，目前就职于腾讯。我对计算机底层机制有着深厚的好奇心，热衷于搞懂事物的基本运行原理——从一次系统调用到跨区域数据一致性，从自旋锁到超大规模集群调度。',
      '我毕业于哈尔滨工业大学计算机科学与技术专业（硕士），具备扎实的计算机体系结构基础，对操作系统、计算机网络、分布式系统等核心领域有系统性理解。我的技术栈涵盖 C/C++、Rust、Python、Go 等语言，有良好的系统编程能力和代码质量意识。',
      '在工程实践中，我始终追求简洁明了、可维护的代码美学。我相信，基础设施是智能时代的坚实底座，每一层设计都需要从第一性原理出发，让每一份算力都极致高效地服务于上层应用。',
    ],
  },
  timeline: {
    title: '经历',
    workLabel: '工作',
    internshipLabel: '实习',
    items: [
      {
        company: '腾讯',
        role: '后台开发',
        period: '2026.06 - 至今',
        description: '负责腾讯云大规模分布式系统的设计与研发，参与边缘推理平台的架构优化，解决复杂系统栈中的性能瓶颈与可靠性问题，覆盖从操作系统层到应用层调度与管控面的全栈优化。',
        type: 'work',
      },
      {
        company: '腾讯',
        role: '后台开发',
        period: '2025.12 - 2026.05',
        description: '参与边缘AI推理引擎的研发，负责推理框架的性能优化与异构硬件适配，深入分析端到端延迟瓶颈，通过系统级调优将推理吞吐提升至 SOTA 水平，涉及 Linux 内核参数调优、I/O 路径优化与资源隔离。',
        type: 'internship',
      },
      {
        company: '腾讯',
        role: '后台开发',
        period: '2026.03 - 2026.10',
        description: '参与 CDN 大规模分布式系统的规则引擎开发，负责流量调度策略、内容分发与负载均衡等核心模块的设计与实现。深入理解大规模网络系统中的架构 trade-off，积累了对高并发、高可用系统的工程实践经验。',
        type: 'internship',
      },
      {
        company: '京东',
        role: '后端开发',
        period: '2025.09 - 2026.03',
        description: '负责 AI 推荐与数据分析相关后端系统的开发，参与构建数据密集型应用的服务架构，积累了分布式系统开发与大规模数据处理的经验。',
        type: 'internship',
      },
    ],
  },
  skills: {
    title: '技术能力',
    categories: [
      { name: '系统编程', items: ['Rust', 'C/C++', 'Python', 'Go', 'Linux 系统编程'] },
      { name: '分布式系统', items: ['分布式调度', 'CDN 架构', '负载均衡', '高可用设计', 'RPC 框架'] },
      { name: '性能优化', items: ['端到端性能调优', 'Profiling', 'I/O 优化', '内核调优', '推理加速'] },
      { name: '基础设施', items: ['Docker', 'Kubernetes', '虚拟化', '容器化', '沙箱技术'] },
      { name: '计算机网络', items: ['TCP/IP 协议栈', 'RDMA', 'SDN', '流量调度', '网络性能分析'] },
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
