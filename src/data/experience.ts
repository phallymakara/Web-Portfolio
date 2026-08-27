import { ExperienceItem, EducationItem, AchievementItem, CertificateItem } from '../types/experience';

export const experience: ExperienceItem[] = [
  {
    company: "AI & Intelligent Systems",
    role: "AI Engineer",
    period: "Late 2025 — Present",
    location: "Phnom Penh, Cambodia",
    description: "Develop and integrate AI-powered applications and intelligent systems with modern backend APIs and database architectures.",
    highlights: [
      "Develop and integrate AI-powered applications and intelligent systems.",
      "Work with Python, machine learning, LLMs, RAG, and AI agent technologies.",
      "Design and implement AI solutions with backend APIs and database integration.",
      "Build, test, and deploy AI features for real-world applications."
    ]
  },
  {
    company: "Tech Education",
    role: "Python Programming Instructor",
    period: "~6 Months",
    location: "Phnom Penh, Cambodia",
    description: "Taught Python programming fundamentals and practical software concepts to learners and university students.",
    highlights: [
      "Taught Python programming fundamentals and practical programming concepts.",
      "Guided students through problem-solving, algorithms, and hands-on coding exercises.",
      "Helped learners develop a strong foundation in Python programming."
    ]
  },
  {
    company: "Private School Education",
    role: "Mathematics Teacher",
    period: "~2 Years",
    location: "Phnom Penh, Cambodia",
    description: "Taught mathematics to students across various learning levels with emphasis on analytical problem-solving and logical reasoning.",
    highlights: [
      "Taught mathematics to students across different learning levels.",
      "Explained mathematical concepts through practical examples and problem-solving.",
      "Developed students' analytical thinking, logical reasoning, and problem-solving skills."
    ]
  }
];

export const education: EducationItem[] = [
  {
    institution: "Institute of Technology of Cambodia",
    degree: "Data Science and Engineering — Bachelor's Degree",
    period: "Nov 2022 — Aug 2026",
    location: "Phnom Penh, Cambodia",
    type: "Bachelor's Degree",
    honors: "Major in Data Science and Engineering",
    description: "Specializing in artificial intelligence, machine learning pipelines, data analytics, and database engineering.",
    keyAreasTitle: "Key Areas of Study",
    keyAreas: [
      "Data Science & Statistical Analysis",
      "Machine Learning & Artificial Intelligence",
      "Deep Learning & Neural Networks",
      "Data Analytics & Visualization",
      "Database Engineering & SQL",
      "Data Engineering & ETL Pipelines"
    ]
  },
  {
    institution: "Frontend Master",
    degree: "Web Development (Short Course — Online)",
    period: "Nov 2025 — Jan 2026",
    location: "Online",
    type: "Short Course — Online",
    description: "Short course in modern web development, JavaScript frontend architectures, and responsive user interfaces.",
    keyAreasTitle: "Key Areas of Study",
    keyAreas: [
      "HTML5, CSS3 & Modern Web Standards",
      "JavaScript & TypeScript",
      "React.js & Component-Based Architecture",
      "State Management & React Hooks",
      "Responsive Web Design & UI/UX Implementation",
      "REST API Integration & Frontend–Backend Communication",
      "Modern Frontend Development with Vite",
      "Tailwind CSS & Modern UI Development",
      "Advanced React Patterns & Application Architecture",
      "Git, GitHub & Frontend Development Workflow"
    ]
  },
  {
    institution: "DTC Center",
    degree: "Graphic Design — Short Course",
    period: "Nov 2022 — Apr 2023",
    location: "Obekaom, Phnom Penh, Cambodia",
    type: "Short Course",
    description: "Short course focusing on graphic design, visual branding, typography, and marketing assets with Adobe Photoshop & Illustrator.",
    keyAreasTitle: "Key Areas of Study",
    keyAreas: [
      "Graphic Design Fundamentals & Design Principles",
      "Adobe Photoshop & Image Editing",
      "Adobe Illustrator & Vector Graphics",
      "Typography & Color Theory",
      "Logo & Brand Identity Design",
      "Poster, Banner & Social Media Design",
      "Layout Composition & Visual Communication",
      "Print & Digital Design Production"
    ]
  },
  {
    institution: "Chankresna High School",
    degree: "Bacc II — (National Examination)",
    period: "Jan 2018 — Jan 2021",
    location: "Mesang District, Prey Veng Province, Cambodia",
    type: "High School Diploma",
    honors: "Bacc II — National Examination",
    description: "Completed Grade 12 in 2021, with a strong foundation in Mathematics, Physics, Biology, and Chemistry. Developed essential academic skills in problem-solving, critical thinking, scientific analysis, and independent learning through coursework and examination preparation. Demonstrated commitment, discipline, and perseverance while completing secondary education and preparing for future academic and professional opportunities."
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
