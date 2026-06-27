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
      '我是一名系统研发工程师，目前就职于腾讯，专注于大规模分布式系统与云计算基础设施。毕业于哈尔滨工业大学计算机科学与技术专业（硕士），具备扎实的计算机体系结构基础，对操作系统、计算机网络、分布式系统等核心领域有系统性理解。',

      '我的主力语言包括 Rust、C/C++、Python 和 Go，有良好的系统编程能力和代码质量意识。在腾讯期间参与了边缘 AI 推理引擎的性能优化与异构硬件适配、CDN 大规模分布式系统规则引擎的设计与实现，积累了丰富的系统级性能调优和高并发系统工程经验。',

      '在工程实践中，我始终追求简洁明了、可维护的代码美学。我相信基础设施是智能时代的坚实底座——每一层设计都应该从第一性原理出发，让每一份算力都极致高效地服务于上层应用。',
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
      {
        name: '编程语言与系统编程',
        items: [
          { name: 'Rust', desc: '具备系统级编程经验，深入理解所有权模型、生命周期、异步编程（Tokio）与 FFI 接口设计，能够编写高性能、内存安全的系统软件' },
          { name: 'C/C++', desc: '深入理解内存模型、编译优化、底层系统调用接口，有 Linux 内核模块开发与性能剖析（perf、eBPF）的实践经验' },
          { name: 'Python', desc: '熟练用于系统工具开发、性能数据分析与自动化运维，熟悉 Cython/pybind11 等 Python-C++ 混合编程优化' },
          { name: 'Go', desc: '熟悉 Goroutine 调度模型与并发编程范式，有高性能 RPC 服务、控制面服务与 CLI 工具的开发经验' },
          { name: 'Linux 系统编程', desc: '深入理解进程/线程调度（sched_ext）、内存管理、文件系统与网络协议栈，熟练使用 strace、perf、eBPF 等工具进行系统级诊断与调优' },
        ],
      },
      {
        name: '分布式系统',
        items: [
          { name: '分布式调度', desc: '理解大规模异构计算资源（CPU/GPU/NPU）的抽象、池化与拓扑感知调度，在任务吞吐、排队延迟与资源利用率之间取得均衡' },
          { name: 'CDN 架构', desc: '有大规模 CDN 分布式系统实战经验，深入理解规则引擎、内容分发、源站卸载与边缘节点管理' },
          { name: '负载均衡与高可用', desc: '熟悉四/七层负载均衡、健康检查、故障转移与熔断降级策略，有高并发高可用系统的工程实践经验' },
          { name: 'RPC 框架', desc: '理解高性能 RPC 通信原理，包括序列化协议设计、连接池管理、服务发现与负载均衡' },
          { name: '分布式一致性', desc: '理解 Raft/Paxos 共识算法、分布式锁、事务与数据一致性模型，有分布式系统中状态协调的实践经验' },
        ],
      },
      {
        name: '性能优化',
        items: [
          { name: '端到端性能调优', desc: '具备从集群视角进行全系统栈性能调优的能力，覆盖计算任务优化、Linux 内核、I/O 和网络协议栈' },
          { name: 'Profiling 与可观测性', desc: '熟练使用 perf、火焰图、eBPF、ftrace 等工具定位性能瓶颈，构建集群可观测性体系，主导故障诊断与性能回归分析' },
          { name: '推理加速', desc: '有 AI 推理引擎性能优化经验，通过图优化、算子融合、量化压缩与内存规划等手段提升推理吞吐' },
          { name: '内核调优', desc: '深入调整 CPU 调度器、内存分配策略、I/O 调度器与网络参数，消除系统级性能瓶颈' },
          { name: '异构硬件适配', desc: '理解 CPU/GPU/NPU 体系结构差异，能够针对不同硬件特性优化计算任务调度与数据布局' },
        ],
      },
      {
        name: '容器与基础设施',
        items: [
          { name: 'Docker / 容器运行时', desc: '深入理解容器运行时底层实现（cgroup v2、namespace、unionfs），有资源隔离、QoS 与安全沙箱的实践经验' },
          { name: 'Kubernetes', desc: '理解调度器、控制器与 CRD 扩展机制，有集群管理、任务生命周期管理与故障自动容灾的实战经验' },
          { name: '虚拟化', desc: '理解 KVM/QEMU 虚拟化原理、virtio 半虚拟化与 SR-IOV 设备直通，有轻量级虚拟化与微VM 的调研经验' },
          { name: 'CI/CD 与 GitOps', desc: '熟悉 GitHub Actions、ArgoCD 等持续交付工具链，有自动化构建、测试与部署的工程实践' },
        ],
      },
      {
        name: '计算机网络',
        items: [
          { name: 'TCP/IP 协议栈', desc: '深入理解 TCP 拥塞控制（BBR/CUBIC）、流控与重传机制，有网络性能分析与调优经验' },
          { name: 'RDMA', desc: '理解 RoCEv2 / InfiniBand 协议栈，熟悉拥塞控制（DCQCN）、多路径与自适应路由等机制' },
          { name: 'SDN 与可编程网络', desc: '了解 P4 可编程交换机与智能网卡 DPU 的基本原理，关注下一代数据中心网络架构' },
          { name: '流量调度', desc: '有大规模网络流量调度与负载均衡系统的设计经验，理解 DNS、Anycast 与 ECMP 等路由策略' },
        ],
      },
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
