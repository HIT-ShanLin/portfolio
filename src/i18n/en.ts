import type { Translations } from './types';

export const en: Translations = {
  site: {
    title: 'Shan Lin - Systems Engineer',
    description: 'Personal portfolio of Shan Lin - distributed systems, cloud infrastructure, and performance optimization',
  },
  hero: {
    name: 'Shan Lin',
    role: 'Systems Engineer @ Tencent',
    tagline: 'Passionate about low-level systems and distributed infrastructure. Pursuing极致 performance and engineering aesthetics.',
  },
  sidebar: {
    bio: 'Systems Engineer at Tencent, focused on large-scale distributed systems, cloud infrastructure, and performance optimization.',
    university: 'Harbin Institute of Technology · M.S. Computer Science',
    location: 'Shanghai, China',
    navAbout: 'About',
    navTimeline: 'Experience',
    navSkills: 'Skills',
    navProjects: 'Projects',
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'I am a Systems Engineer at Tencent. I have a deep curiosity about low-level computer mechanisms and a passion for understanding how things work — from a single system call to cross-region data consistency, from spinlocks to hyperscale cluster scheduling.',
      'I hold a Master\'s degree in Computer Science from Harbin Institute of Technology (HIT), with a solid foundation in computer architecture, operating systems, computer networks, and distributed systems. My technical stack spans Rust, C/C++, Python, and Go, with strong systems programming skills and a commitment to code quality.',
      'In engineering practice, I pursue clean, maintainable code aesthetics. I believe infrastructure is the solid foundation of the intelligent era — every layer of design should start from first principles, making every unit of compute serve upper-layer applications with极致 efficiency.',
    ],
  },
  timeline: {
    title: 'Experience',
    workLabel: 'Work',
    internshipLabel: 'Internship',
    items: [
      {
        company: 'Tencent',
        role: 'Backend Developer',
        period: '2026.06 - Present',
        description: 'Responsible for design and development of large-scale distributed systems on Tencent Cloud. Participating in architecture optimization of edge inference platforms, solving performance bottlenecks and reliability challenges across the full system stack — from OS-level to application-layer scheduling and control plane services.',
        type: 'work' as const,
      },
      {
        company: 'Tencent',
        role: 'Backend Developer',
        period: '2025.12 - 2026.05',
        description: 'Contributed to edge AI inference engine R&D, responsible for inference framework performance optimization and heterogeneous hardware adaptation. Conducted end-to-end latency bottleneck analysis, achieving SOTA inference throughput through system-level tuning — including Linux kernel parameter optimization, I/O path optimization, and resource isolation.',
        type: 'internship' as const,
      },
      {
        company: 'Tencent',
        role: 'Backend Developer',
        period: '2026.03 - 2026.10',
        description: 'Participated in the development of a large-scale CDN distributed system\'s rule engine, responsible for core modules including traffic scheduling strategy, content delivery, and load balancing. Gained deep understanding of architectural trade-offs in large-scale network systems and practical experience with high-concurrency, high-availability system engineering.',
        type: 'internship' as const,
      },
      {
        company: 'JD.com',
        role: 'Backend Developer',
        period: '2025.09 - 2026.03',
        description: 'Responsible for backend system development for AI recommendation and data analysis platforms. Participated in building service architectures for data-intensive applications, accumulating experience in distributed system development and large-scale data processing.',
        type: 'internship' as const,
      },
    ],
  },
  skills: {
    title: 'Technical Skills',
    categories: [
      { name: 'Systems Programming', items: ['Rust', 'C/C++', 'Python', 'Go', 'Linux Systems Programming'] },
      { name: 'Distributed Systems', items: ['Distributed Scheduling', 'CDN Architecture', 'Load Balancing', 'HA Design', 'RPC Frameworks'] },
      { name: 'Performance', items: ['End-to-End Tuning', 'Profiling', 'I/O Optimization', 'Kernel Tuning', 'Inference Acceleration'] },
      { name: 'Infrastructure', items: ['Docker', 'Kubernetes', 'Virtualization', 'Containerization', 'Sandboxing'] },
      { name: 'Networking', items: ['TCP/IP Stack', 'RDMA', 'SDN', 'Traffic Scheduling', 'Network Performance'] },
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
