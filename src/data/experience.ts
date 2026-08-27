import { ExperienceItem, EducationItem, AchievementItem, CertificateItem } from '../types/experience';

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
    degree: "Data Science and Engineering",
    period: "Nov 2022 — Aug 2026",
    location: "Phnom Penh, Cambodia",
    type: "Bachelor's Degree",
    honors: "Major in Data Science & AI Engineering",
    description: "Focusing on artificial intelligence, machine learning pipelines, data analytics, database engineering (SQL & NoSQL), and software design principles."
  },
  {
    institution: "Frontend Master",
    degree: "Web Development (Short Course — Online)",
    period: "Nov 2025 — Jan 2026",
    location: "Online",
    type: "Specialized Short Course",
    description: "Intensive training in modern web development, JavaScript & frontend architecture, state management, and responsive user interfaces."
  },
  {
    institution: "DTC Center",
    degree: "Graphic Design — Short Course",
    period: "Nov 2022 — Apr 2023",
    location: "Obekaom, Phnom Penh, Cambodia",
    type: "Short Course",
    description: "Professional short course focusing on visual design, branding identity, typography, and marketing assets using Adobe Photoshop & Illustrator."
  },
  {
    institution: "Chankresna High School",
    degree: "Bacc II — (National Examination)",
    period: "Jan 2018 — Jan 2021",
    location: "Mesang District, Prey Veng Province, Cambodia",
    type: "High School Diploma",
    honors: "National Examination (Bacc II) Completed",
    description: "National high school examination (Bacc II) curriculum with focus on mathematics, natural sciences, and analytical problem-solving."
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

export const certificates: CertificateItem[] = [
  {
    id: "cert-frontend-master",
    title: "Web Development (Short Course)",
    issuer: "Frontend Master",
    issueDate: "Nov 2025 — Jan 2026",
    type: "Online Certification",
    category: "web",
    imageUrl: "", // Paste your certificate image path here (e.g., "/images/certificates/web-dev.png")
    skills: ["JavaScript", "HTML5", "CSS3", "Frontend Architecture", "Web APIs"],
    description: "In-depth modern web development, responsive application architecture, client-side rendering, and API integration."
  },
  {
    id: "cert-dtc-graphic-design",
    title: "Graphic Design (Short Course)",
    issuer: "DTC Center",
    issueDate: "Nov 2022 — Apr 2023",
    type: "Professional Certification",
    category: "design",
    imageUrl: "", // Paste your certificate image path here (e.g., "/images/certificates/graphic-design.png")
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Visual Branding", "UI Assets"],
    description: "Professional digital design, vector branding assets, typography, and marketing collateral production."
  },
  {
    id: "cert-ai-ml-specialization",
    title: "Machine Learning & AI Engineering",
    issuer: "Research and Data Analytics Lab (ReDA Lab)",
    issueDate: "July 2025 — Oct 2025",
    type: "Applied Research & Internship",
    category: "ai-ml",
    imageUrl: "", // Paste your certificate image path here (e.g., "/images/certificates/ai-ml.png")
    skills: ["Python", "PyTorch", "Scikit-Learn", "OpenCV", "Pandas", "NumPy"],
    description: "Hands-on machine learning model training, computer vision pipelines, feature engineering, and neural network tuning."
  },
  {
    id: "cert-data-analytics-bi",
    title: "Data Analytics & Business Intelligence",
    issuer: "Data Analytics Foundation",
    issueDate: "2024 — 2025",
    type: "Technical Specialization",
    category: "data",
    imageUrl: "", // Paste your certificate image path here (e.g., "/images/certificates/data-analytics.png")
    skills: ["SQL", "Power BI", "Tableau", "PostgreSQL", "Data Modeling"],
    description: "End-to-end relational data extraction, SQL optimization, KPI calculation scripts, and interactive executive reporting."
  }
];
