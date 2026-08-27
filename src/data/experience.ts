import { ExperienceItem, EducationItem, AchievementItem } from '../types/experience';

export const experience: ExperienceItem[] = [
  {
    company: "Apex Neural Labs",
    role: "Lead AI & Backend Systems Engineer",
    period: "2024 — Present",
    location: "Remote / Singapore",
    description: "Leading the core platform engineering team responsible for high-throughput multi-agent execution engines, retrieval infrastructure, and distributed microservices.",
    highlights: [
      "Architected an asynchronous multi-agent orchestration runtime handling over 2.5 million daily agentic reasoning turns.",
      "Reduced LLM inference cost by 42% through semantic caching, cross-encoder thresholding, and prompt distillation.",
      "Mentored a team of 8 backend and ML engineers, establishing rigorous CI/CD test standards and deterministic evaluation suites."
    ],
    tech: ["Python", "FastAPI", "Go", "Qdrant", "PostgreSQL", "LangGraph", "Docker", "Kubernetes"]
  },
  {
    company: "Vanguard Tech Solutions",
    role: "Senior Backend Engineer",
    period: "2022 — 2024",
    location: "Phnom Penh, Cambodia",
    description: "Designed distributed transaction engines, microservice gateways, and real-time streaming architectures for financial and logistics clients.",
    highlights: [
      "Engineered an event-driven payment reconciliation system processing $18M+ monthly transactions with zero data loss.",
      "Implemented a zero-trust API gateway handling 15,000 requests/sec with p99 latency under 4ms.",
      "Transitioned monolithic legacy services into cleanly bounded Go microservices with gRPC transport."
    ],
    tech: ["Go", "gRPC", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "AWS"]
  },
  {
    company: "Kiri Data Systems",
    role: "Full-Stack Software Engineer",
    period: "2020 — 2022",
    location: "Phnom Penh, Cambodia",
    description: "Built scalable web applications, internal telemetry dashboards, and automated CI pipelines for client enterprise systems.",
    highlights: [
      "Developed high-density analytics dashboards using React, TypeScript, and WebSockets.",
      "Authored REST APIs and background worker queues in Node.js and Python.",
      "Streamlined database query patterns and index schemas, cutting average page load times by 65%."
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Redis"]
  }
];

export const education: EducationItem[] = [
  {
    institution: "Institute of Technology of Cambodia",
    degree: "Bachelor of Science in Computer Science & Information Engineering",
    period: "2016 — 2020",
    location: "Phnom Penh, Cambodia",
    honors: "First Class Honors • Top 5% of Graduating Class",
    relevantCoursework: [
      "Distributed Systems & Concurrency",
      "Data Structures & Algorithms",
      "Advanced Database Systems",
      "Computer Networks & Security",
      "Operating Systems & Compilers"
    ]
  }
];

export const achievements: AchievementItem[] = [
  {
    title: "1st Place — National AI & Algorithmic Hackathon",
    issuer: "Ministry of Post and Telecommunications",
    year: "2025",
    description: "Developed an autonomous offline multi-agent disaster response coordination tool using local LLMs and mesh networking."
  },
  {
    title: "Open Source Contributor Recognition",
    issuer: "Qdrant & LangGraph Ecosystem",
    year: "2024",
    description: "Recognized for contributions to sparse-dense hybrid search algorithms and async graph execution state serialization."
  },
  {
    title: "Outstanding Engineering Leadership Award",
    issuer: "Vanguard Tech Solutions",
    year: "2023",
    description: "Awarded for exceptional architectural leadership during the core banking microservice migration."
  }
];
