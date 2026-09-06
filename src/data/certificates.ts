import { CertificateItem } from '../types/experience';

/**
 * Structured, non-hardcoded certificate database.
 * Assets are organized in /public/certificates/ (PDFs) and /public/certificates/thumbnails/ (optimized images).
 * Theme-aware: both light and dark variations are supported where available.
 * Categorized strictly according to portfolio filter buttons:
 * - 'ai-ml': AI & Machine Learning, Prompt Engineering
 * - 'web': Web Development, React, Next.js, JavaScript, TypeScript
 * - 'data': Data Analysis, Python, Object-Oriented Programming (OOP)
 * - 'design': UI/UX Design, CSS Architecture, Web Accessibility (WCAG)
 */
export const certificates: CertificateItem[] = [
  // ── AI & ML CATEGORY ──
  {
    id: "cert-prompt-engineering",
    title: "Practical Prompt Engineering",
    issuer: "Frontend Masters",
    issueDate: "Mar 28, 2026",
    type: "Professional Certification",
    category: "ai-ml",
    imageUrl: "/certificates/thumbnails/prompt-engineering.jpg",
    imageUrlDark: "/certificates/thumbnails/prompt-engineering-dark.jpg",
    fileUrl: "/certificates/prompt-engineering.pdf",
    fileUrlDark: "/certificates/prompt-engineering-dark.pdf",
    skills: ["Prompt Engineering", "LLMs", "Copilot", "Generative AI", "Context Optimization"],
    description: "Systematic prompt design, in-context learning, structured outputs, evaluation metrics, and generative AI orchestration."
  },

  // ── WEB DEVELOPMENT CATEGORY ──
  {
    id: "cert-enterprise-ui-dev-v2",
    title: "Enterprise UI Development: Microfrontends, Testing, & Code Quality",
    issuer: "Frontend Masters",
    issueDate: "Apr 22, 2026",
    type: "Professional Certification",
    category: "web",
    imageUrl: "/certificates/thumbnails/enterprise-ui-dev-v2.jpg",
    imageUrlDark: "/certificates/thumbnails/enterprise-ui-dev-v2-dark.jpg",
    fileUrl: "/certificates/enterprise-ui-dev-v2.pdf",
    fileUrlDark: "/certificates/enterprise-ui-dev-v2-dark.pdf",
    skills: ["Microfrontends", "Code Quality", "Automated Testing", "Enterprise Architecture", "Component Libraries"],
    description: "Architecting scalable enterprise user interfaces with microfrontends, automated test suites, and strict code quality standards."
  },
  {
    id: "cert-next-js-v4",
    title: "Next.js Fundamentals, v4",
    issuer: "Frontend Masters",
    issueDate: "Apr 6, 2026",
    type: "Professional Certification",
    category: "web",
    imageUrl: "/certificates/thumbnails/next-js-v4.jpg",
    imageUrlDark: "/certificates/thumbnails/next-js-v4-dark.jpg",
    fileUrl: "/certificates/next-js-v4.pdf",
    fileUrlDark: "/certificates/next-js-v4-dark.pdf",
    skills: ["Next.js", "Server Components", "Server Actions", "App Router", "SSR / SSG", "Streaming"],
    description: "Building production full-stack web applications with Next.js App Router, React Server Components (RSC), and streaming rendering."
  },
  {
    id: "cert-react-typescript-v3",
    title: "React and TypeScript, v3",
    issuer: "Frontend Masters",
    issueDate: "Apr 17, 2026",
    type: "Professional Certification",
    category: "web",
    imageUrl: "/certificates/thumbnails/react-typescript-v3.jpg",
    imageUrlDark: "/certificates/thumbnails/react-typescript-v3-dark.jpg",
    fileUrl: "/certificates/react-typescript-v3.pdf",
    fileUrlDark: "/certificates/react-typescript-v3-dark.pdf",
    skills: ["React", "TypeScript", "Generics", "Type Inference", "Custom Hooks", "State Types"],
    description: "Type-safe React development with TypeScript generics, custom hooks, typed component props, and complex event handlers."
  },
  {
    id: "cert-intermediate-react-v6",
    title: "Intermediate React, v6: RSCs, Hooks, & Performance",
    issuer: "Frontend Masters",
    issueDate: "Jan 5, 2026",
    type: "Professional Certification",
    category: "web",
    imageUrl: "/certificates/thumbnails/intermediate-react-v6.jpg",
    imageUrlDark: "/certificates/thumbnails/intermediate-react-v6-dark.jpg",
    fileUrl: "/certificates/intermediate-react-v6.pdf",
    fileUrlDark: "/certificates/intermediate-react-v6-dark.pdf",
    skills: ["React", "Server Components (RSCs)", "Hooks Architecture", "Performance Optimization", "Suspense"],
    description: "Advanced React architecture, React Server Components, custom hook patterns, memoization, and rendering performance profiling."
  },
  {
    id: "cert-javascript-first-steps",
    title: "JavaScript: From First Steps to Professional",
    issuer: "Frontend Masters",
    issueDate: "Dec 16, 2025",
    type: "Professional Certification",
    category: "web",
    imageUrl: "/certificates/thumbnails/javascript-first-steps.jpg",
    imageUrlDark: "/certificates/thumbnails/javascript-first-steps-dark.jpg",
    fileUrl: "/certificates/javascript-first-steps.pdf",
    fileUrlDark: "/certificates/javascript-first-steps-dark.pdf",
    skills: ["JavaScript (ES6+)", "Functional Programming", "Async / Await", "Data Structures", "Event Loop"],
    description: "Comprehensive JavaScript mastery covering language mechanics, functional paradigms, asynchronous flows, and professional practices."
  },
  {
    id: "cert-getting-started-javascript-v3",
    title: "Getting Started with JavaScript, v3",
    issuer: "Frontend Masters",
    issueDate: "Nov 25, 2025",
    type: "Professional Certification",
    category: "web",
    imageUrl: "/certificates/thumbnails/getting-started-javascript-v3.jpg",
    imageUrlDark: "/certificates/thumbnails/getting-started-javascript-v3-dark.jpg",
    fileUrl: "/certificates/getting-started-javascript-v3.pdf",
    fileUrlDark: "/certificates/getting-started-javascript-v3-dark.pdf",
    skills: ["JavaScript", "DOM Manipulation", "Event Listeners", "Browser APIs", "Logic Building"],
    description: "Foundational JavaScript programming, modern browser DOM manipulation, and interactive web application features."
  },

  // ── DATA & BI CATEGORY ──
  {
    id: "cert-python-fundamental",
    title: "Python Fundamentals",
    issuer: "Kovid Panthy",
    issueDate: "Sep 8, 2024",
    type: "Technical Specialization",
    category: "data",
    imageUrl: "/certificates/thumbnails/python_fundamental.jpg",
    fileUrl: "/certificates/python_fundamental.pdf",
    skills: ["Python", "Data Processing", "Automation", "Data Structures", "Scripting"],
    description: "Fundamental Python programming, data types, procedural control structures, and analytical data scripting."
  },
  {
    id: "cert-oop-python",
    title: "OOP in Python",
    issuer: "Kovid Panthy",
    issueDate: "Sep 19, 2024",
    type: "Technical Specialization",
    category: "data",
    imageUrl: "/certificates/thumbnails/OOP.jpg",
    fileUrl: "/certificates/OOP.pdf",
    skills: ["Python OOP", "Classes & Objects", "Inheritance", "Encapsulation", "Polymorphism", "Data Modeling"],
    description: "Object-oriented design paradigms in Python, class modeling, inheritance hierarchies, and structured software architecture."
  },

  // ── DESIGN CATEGORY ──
  {
    id: "cert-accessibility-v3",
    title: "Website Accessibility, v3",
    issuer: "Frontend Masters",
    issueDate: "Dec 17, 2025",
    type: "Professional Certification",
    category: "design",
    imageUrl: "/certificates/thumbnails/accessibility-v3.jpg",
    imageUrlDark: "/certificates/thumbnails/accessibility-v3-dark.jpg",
    fileUrl: "/certificates/accessibility-v3.pdf",
    fileUrlDark: "/certificates/accessibility-v3-dark.pdf",
    skills: ["WCAG 2.2", "WAI-ARIA", "Accessible UI/UX", "Screen Readers", "Color Contrast", "Keyboard Nav"],
    description: "Building inclusive, accessible digital user experiences meeting WCAG compliance, ARIA standards, and assistive device requirements."
  },
  {
    id: "cert-css-foundations",
    title: "CSS Foundations",
    issuer: "Frontend Masters",
    issueDate: "Nov 29, 2025",
    type: "Professional Certification",
    category: "design",
    imageUrl: "/certificates/thumbnails/css-foundations.jpg",
    imageUrlDark: "/certificates/thumbnails/css-foundations-dark.jpg",
    fileUrl: "/certificates/css-foundations.pdf",
    fileUrlDark: "/certificates/css-foundations-dark.pdf",
    skills: ["CSS3", "Box Model", "Flexbox", "CSS Grid", "Responsive Layouts", "Typography"],
    description: "Deep dive into CSS layout algorithms, cascade hierarchy, modern flexbox and grid systems, and responsive design execution."
  },
  {
    id: "cert-getting-started-css-v2",
    title: "Getting Started with CSS, v2",
    issuer: "Frontend Masters",
    issueDate: "Nov 21, 2025",
    type: "Professional Certification",
    category: "design",
    imageUrl: "/certificates/thumbnails/getting-started-css-v2.jpg",
    imageUrlDark: "/certificates/thumbnails/getting-started-css-v2-dark.jpg",
    fileUrl: "/certificates/getting-started-css-v2.pdf",
    fileUrlDark: "/certificates/getting-started-css-v2-dark.pdf",
    skills: ["CSS Fundamentals", "Web Typography", "Color Systems", "Visual Hierarchy", "Layouts"],
    description: "Foundations of web design, visual styling principles, semantic markup decoration, and typography systems."
  }
];
