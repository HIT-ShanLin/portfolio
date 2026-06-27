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
      'I am a Systems Engineer at Tencent, focused on large-scale distributed systems and cloud infrastructure. I have a deep curiosity about low-level computer mechanisms — from CPU microarchitecture, memory subsystems, and on-chip / network interconnects, to system calls and cross-region data consistency, from spinlocks to hyperscale cluster scheduling. I am driven to understand every layer of the system stack from first principles.',

      'I hold a Master\'s degree in Computer Science from Harbin Institute of Technology (HIT), with a solid foundation in computer architecture. I bring systematic understanding of operating systems, computer networks, and distributed systems — able to reason about performance optimization and system complexity across the full stack, from hardware microarchitecture to application-layer design. My primary languages are Rust, C/C++, Python, and Go, with strong systems programming skills and a commitment to engineering design and code quality. I have hands-on experience in Linux systems programming, kernel parameter tuning, and I/O path optimization.',

      'At Tencent, I contributed to the R&D of an edge AI inference engine, focusing on inference framework performance optimization and heterogeneous hardware (CPU/GPU/NPU) adaptation. Through end-to-end latency bottleneck analysis, Linux kernel tuning, and resource isolation strategies, I helped achieve SOTA inference throughput. I also participated in designing and implementing a large-scale CDN distributed system\'s rule engine, responsible for core modules including traffic scheduling, content delivery, and load balancing — building solid engineering experience with high-concurrency, high-availability systems.',

      'My deep understanding of distributed systems spans distributed task scheduling, resource orchestration, and high-availability architecture design. In containerized infrastructure, I am familiar with the underlying implementation of container runtimes (cgroup, namespace) and orchestration systems (Kubernetes), including resource isolation, scheduling, and QoS mechanisms. At the network layer, I have in-depth understanding of the TCP/IP stack, RDMA (RoCEv2 / InfiniBand), multipath load balancing, and congestion control.',

      'In engineering practice, I pursue clean, maintainable code aesthetics. I believe infrastructure is the solid foundation of the intelligent era — every layer of design should start from first principles, converting every watt of power into effective compute, and grounding every model training and inference run on an极致 efficient compute base. I hold independent thinking and persistent curiosity about the technical path to AGI, and look forward to contributing to the next generation of hyperscale computing infrastructure.',
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
      {
        name: 'Languages & Systems Programming',
        items: [
          { name: 'Rust', desc: 'Systems-level programming experience. Deep understanding of ownership model, lifetimes, async programming (Tokio), and FFI design. Capable of writing high-performance, memory-safe systems software.' },
          { name: 'C/C++', desc: 'Deep understanding of memory model, compiler optimizations, and low-level system call interfaces. Hands-on experience with Linux kernel module development and performance profiling (perf, eBPF).' },
          { name: 'Python', desc: 'Proficient in system tooling, performance data analysis, and automation. Familiar with Cython/pybind11 for Python-C++ hybrid optimization.' },
          { name: 'Go', desc: 'Well-versed in Goroutine scheduling and concurrency patterns. Experience building high-performance RPC services, control plane services, and CLI tools.' },
          { name: 'Linux Systems Programming', desc: 'Deep understanding of process/thread scheduling (sched_ext), memory management, filesystems, and network stack. Skilled with strace, perf, eBPF for system-level diagnosis and tuning.' },
        ],
      },
      {
        name: 'Distributed Systems',
        items: [
          { name: 'Distributed Scheduling', desc: 'Understanding of large-scale heterogeneous resource (CPU/GPU/NPU) abstraction, pooling, and topology-aware scheduling — balancing task throughput, queueing delay, and resource utilization.' },
          { name: 'CDN Architecture', desc: 'Hands-on experience with large-scale CDN distributed systems. Deep understanding of rule engines, content delivery, origin offloading, and edge node management.' },
          { name: 'Load Balancing & HA', desc: 'Familiar with L4/L7 load balancing, health checking, failover, and circuit-breaking strategies. Practical experience engineering high-concurrency, high-availability systems.' },
          { name: 'RPC Frameworks', desc: 'Understanding of high-performance RPC communication: serialization design, connection pooling, service discovery, and load balancing.' },
          { name: 'Distributed Consensus', desc: 'Understanding of Raft/Paxos consensus algorithms, distributed locking, transactions, and data consistency models. Practical experience with state coordination in distributed systems.' },
        ],
      },
      {
        name: 'Performance Optimization',
        items: [
          { name: 'End-to-End Tuning', desc: 'Capable of full-stack performance tuning from a cluster-wide perspective — covering compute task optimization, Linux kernel, I/O, and network stack.' },
          { name: 'Profiling & Observability', desc: 'Skilled with perf, flame graphs, eBPF, and ftrace to pinpoint bottlenecks. Building cluster-wide observability systems, leading fault diagnosis and performance regression analysis.' },
          { name: 'Inference Acceleration', desc: 'Experience optimizing AI inference engines through graph optimization, operator fusion, quantization/compression, and memory planning to maximize throughput.' },
          { name: 'Kernel Tuning', desc: 'In-depth tuning of CPU scheduler, memory allocator, I/O scheduler, and network parameters to eliminate system-level performance bottlenecks.' },
          { name: 'Heterogeneous Hardware', desc: 'Understanding of CPU/GPU/NPU architectural differences. Capable of optimizing compute scheduling and data layout for specific hardware characteristics.' },
        ],
      },
      {
        name: 'Containers & Infrastructure',
        items: [
          { name: 'Docker / Container Runtime', desc: 'Deep understanding of container runtime internals (cgroup v2, namespaces, unionfs). Practical experience with resource isolation, QoS, and security sandboxing.' },
          { name: 'Kubernetes', desc: 'Understanding of scheduler, controller, and CRD extension mechanisms. Hands-on experience with cluster management, job lifecycle management, and automated disaster recovery.' },
          { name: 'Virtualization', desc: 'Understanding of KVM/QEMU virtualization, virtio paravirtualization, and SR-IOV device passthrough. Research experience with lightweight VMs and microVMs.' },
          { name: 'CI/CD & GitOps', desc: 'Familiar with GitHub Actions, ArgoCD, and continuous delivery toolchains. Engineering practice in automated build, test, and deployment pipelines.' },
        ],
      },
      {
        name: 'Computer Networking',
        items: [
          { name: 'TCP/IP Stack', desc: 'Deep understanding of TCP congestion control (BBR/CUBIC), flow control, and retransmission mechanisms. Experience in network performance analysis and tuning.' },
          { name: 'RDMA', desc: 'Understanding of RoCEv2 / InfiniBand protocol stacks. Familiar with congestion control (DCQCN), multipath, and adaptive routing mechanisms.' },
          { name: 'SDN & Programmable Networks', desc: 'Familiar with P4 programmable switches and SmartNIC/DPU fundamentals. Following next-generation datacenter network architectures.' },
          { name: 'Traffic Scheduling', desc: 'Design experience with large-scale network traffic scheduling and load balancing systems. Understanding of DNS, Anycast, and ECMP routing strategies.' },
        ],
      },
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
