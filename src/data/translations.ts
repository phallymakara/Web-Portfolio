export type Language = 'en' | 'km';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    about: string;
    education: string;
    skills: string;
    experience: string;
    projects: string;
    stack: string;
    work: string;
    contact: string;
    now: string;
    blog: string;
  };
  // Hero
  hero: {
    statusBadge: string;
    role: string;
    location: string;
    bioLine1: string;
    bioLine2: string;
    getInTouch: string;
    downloadCv: string;
    directChannels: string;
    telegram: string;
    email: string;
    copyEmail: string;
    copied: string;
    chatDirectly: string;
    openEmailClient: string;
  };
  // Sections
  sections: {
    educationNumber: string;
    educationTitle: string;
    educationSubtitle: string;

    certNumber: string;
    certTitle: string;
    certSubtitle: string;
    exploreStack: string;
    certificationsHeading: string;
    certificatePreview: string;
    certFilterAll: string;
    certFilterAiMl: string;
    certFilterWeb: string;
    certFilterData: string;
    certFilterDesign: string;

    skillStackHeading: string;
    filterAll: string;
    filterAiMl: string;
    filterLanguages: string;
    filterDatabases: string;
    filterTools: string;

    experienceNumber: string;
    experienceTitle: string;
    experienceSubtitle: string;
    viewFullCareer: string;
    keyAccomplishments: string;

    projectsNumber: string;
    projectsTitle: string;
    projectsSubtitle: string;
    viewAllProjects: string;
    viewSourceCode: string;
    liveDemo: string;
    projectFilterAll: string;
    projectFilterAiAgents: string;
    projectFilterAiMl: string;
    projectFilterBackend: string;
    projectFilterFullStack: string;

    aboutNumber: string;
    aboutTitle: string;
    aboutSubtitle: string;
    readFullBackground: string;
    corePrinciples: string;
    principles: string[];

    contactNumber: string;
    contactTitle: string;
    contactSubtitle: string;
    initiateDiscussion: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSend: string;
    formSending: string;
    formSuccessTitle: string;
    formSuccessMsg: string;
    formSendAnother: string;
    formRequiredNotice: string;
    directInquiries: string;
  };
  // Education Items
  educationItems: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    description: string;
    keyAreasTitle?: string;
    keyAreas?: string[];
  }[];
  // Experience Items
  experienceItems: {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
  }[];
  // Footer
  footer: {
    status: string;
    network: string;
    sitemap: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      education: 'Education',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      stack: 'Stack',
      work: 'Work',
      contact: 'Contact',
      now: 'Now',
      blog: 'Blog',
    },
    hero: {
      statusBadge: 'AVAILABLE FOR ENGINEERING ENGAGEMENTS',
      role: 'AI Engineer',
      location: 'Phnom Penh, Cambodia',
      bioLine1: 'Specializing in AI/ML systems, autonomous agent execution pipelines, distributed high-throughput backends, and deterministic verification architectures.',
      bioLine2: 'Designing robust data engines, relational database architectures, and type-safe modern web applications.',
      getInTouch: 'Get in Touch',
      downloadCv: 'Download CV',
      directChannels: 'Direct Channels',
      telegram: 'Telegram',
      email: 'Email',
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      chatDirectly: 'Chat directly on Telegram',
      openEmailClient: 'Send via default email client',
    },
    sections: {
      educationNumber: '01 // ACADEMIC FOUNDATION',
      educationTitle: 'Education & Academic Journey',
      educationSubtitle: 'Chronological progression through formal higher education and foundational studies.',

      certNumber: '02 // CONTINUOUS LEARNING',
      certTitle: 'Continuous Learning & Skill Stack',
      certSubtitle: 'Certificates and tool proficiency across AI, backend, data, and design.',
      exploreStack: 'Explore Complete Stack',
      certificationsHeading: 'Certifications',
      certificatePreview: 'Certificate Preview',
      certFilterAll: 'All',
      certFilterAiMl: 'AI & ML',
      certFilterWeb: 'Web Dev',
      certFilterData: 'Data & BI',
      certFilterDesign: 'Design',

      skillStackHeading: 'Skill Stack',
      filterAll: 'All',
      filterAiMl: 'AI & ML',
      filterLanguages: 'Languages & Web',
      filterDatabases: 'Databases',
      filterTools: 'Tools & Design',

      experienceNumber: '03 // EXPERIENCE',
      experienceTitle: 'Work Experience',
      experienceSubtitle: 'Engineering contributions, architectural leadership, and production system scaling.',
      viewFullCareer: 'View Full Career',
      keyAccomplishments: 'Key Accomplishments:',

      projectsNumber: '04 // SELECTED PROJECTS',
      projectsTitle: 'PROJECT',
      projectsSubtitle: 'AI Application, Web Application, Data Science Project',
      viewAllProjects: 'View All Projects',
      viewSourceCode: 'View Source Code',
      liveDemo: 'Live Demo',
      projectFilterAll: 'All',
      projectFilterAiAgents: 'AI Agents',
      projectFilterAiMl: 'AI & ML',
      projectFilterBackend: 'Backend',
      projectFilterFullStack: 'Full-Stack',

      aboutNumber: '05 // SHORT ABOUT',
      aboutTitle: 'Engineering Philosophy & Trajectory',
      aboutSubtitle: 'Simplicity, explicit state machines, and high operational reliability.',
      readFullBackground: 'Read Full Background',
      corePrinciples: 'Core Principles',
      principles: [
        'Deterministic agent guardrails',
        'Sub-millisecond latency focus',
        'Zero bloated container hierarchy',
        'Type-safe end-to-end guarantees',
      ],

      contactNumber: '05 // CONTACT CTA',
      contactTitle: 'Have a project or architectural challenge?',
      contactSubtitle: 'I am open to consulting engagements, distributed backend design, and high-reliability AI agent pipelines.',
      initiateDiscussion: 'Initiate Discussion',
      formName: 'Your Name',
      formEmail: 'Email Address',
      formMessage: 'Message',
      formSend: 'Send Message',
      formSending: 'Sending...',
      formSuccessTitle: 'Message Delivered',
      formSuccessMsg: 'Thank you for reaching out. I usually review and respond to inquiries within 24 hours.',
      formSendAnother: 'Send Another Message',
      formRequiredNotice: '* All fields are required.',
      directInquiries: 'Direct Inquiries:',
    },
    educationItems: [
      {
        degree: "Data Science and Engineering — Bachelor's Degree",
        institution: "Institute of Technology of Cambodia",
        period: "Nov 2022 — Aug 2026",
        location: "Phnom Penh, Cambodia",
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
        degree: "Web Development (Short Course — Online)",
        institution: "Frontend Master",
        period: "Nov 2025 — Jan 2026",
        location: "Online",
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
        degree: "Graphic Design — Short Course",
        institution: "DTC Center",
        period: "Nov 2022 — Apr 2023",
        location: "Obekaom, Phnom Penh, Cambodia",
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
        degree: "Bacc II — (National Examination)",
        institution: "Chankresna High School",
        period: "Jan 2018 — Jan 2021",
        location: "Mesang District, Prey Veng Province, Cambodia",
        description: "Completed Grade 12 in 2021, with a strong foundation in Mathematics, Physics, Biology, and Chemistry. Developed essential academic skills in problem-solving, critical thinking, scientific analysis, and independent learning through coursework and examination preparation. Demonstrated commitment, discipline, and perseverance while completing secondary education and preparing for future academic and professional opportunities."
      }
    ],
    experienceItems: [
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
    ],
    footer: {
      status: 'AVAILABLE FOR CONTRACT & FULL-TIME ROLES',
      network: 'Network',
      sitemap: 'Sitemap',
      rights: 'All rights reserved.',
    }
  },
  km: {
    nav: {
      home: 'ទំព័រដើម',
      about: 'អំពីខ្ញុំ',
      education: 'ការសិក្សា',
      skills: 'ជំនាញ',
      experience: 'បទពិសោធន៍',
      projects: 'គម្រោង',
      stack: 'បច្ចេកវិទ្យា',
      work: 'ការងារ',
      contact: 'ទំនាក់ទំនង',
      now: 'បច្ចុប្បន្ន',
      blog: 'អត្ថបទ',
    },
    hero: {
      statusBadge: 'ត្រៀមខ្លួនរួចរាល់សម្រាប់ការងារ និងគម្រោងថ្មីៗ',
      role: 'វិស្វករ AI',
      location: 'រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា',
      bioLine1: 'ជំនាញឯកទេសលើប្រព័ន្ធ AI/ML, ដំណើរការស្វ័យប្រវត្តិនៃ AI Agents, ស្ថាបត្យកម្ម Backend ដែលមានល្បឿនលឿន និងប្រព័ន្ធផ្ទៀងផ្ទាត់ទិន្នន័យជាក់លាក់។',
      bioLine2: 'រៀបចំប្រព័ន្ធទិន្នន័យរឹងមាំ ស្ថាបត្យកម្មមូលដ្ឋានទិន្នន័យ Relational Database និងកម្មវិធីគេហទំព័រទំនើបដែលមានសុវត្ថិភាពខ្ពស់។',
      getInTouch: 'ទាក់ទងមកខ្ញុំ',
      downloadCv: 'ទាញយក CV',
      directChannels: 'បណ្តាញទំនាក់ទំនងផ្ទាល់',
      telegram: 'Telegram',
      email: 'Email',
      copyEmail: 'ចម្លង Email',
      copied: 'បានចម្លងរួចរាល់!',
      chatDirectly: 'ជជែកផ្ទាល់តាម Telegram',
      openEmailClient: 'ផ្ញើសារតាមរយៈកម្មវិធី Email',
    },
    sections: {
      educationNumber: '០១ // មូលដ្ឋានគ្រឹះអប់រំ',
      educationTitle: 'ប្រវត្តិ និងដំណើរការសិក្សា',
      educationSubtitle: 'ដំណើរការនៃការអប់រំកម្រិតឧត្តមសិក្សា និងការបណ្តុះបណ្តាលមូលដ្ឋានគ្រឹះរឹងមាំ។',

      certNumber: '០២ // ការរៀនសូត្របន្ត',
      certTitle: 'ការរៀនសូត្របន្ត & ជំនាញបច្ចេកវិទ្យា',
      certSubtitle: 'វិញ្ញាបនបត្របញ្ជាក់សមត្ថភាព និងភាពស្ទាត់ជំនាញលើឧបករណ៍ AI, Backend, Data និងការរចនា។',
      exploreStack: 'ស្វែងយល់ពីបច្ចេកវិទ្យាទាំងអស់',
      certificationsHeading: 'វិញ្ញាបនបត្រ',
      certificatePreview: 'គំរូវិញ្ញាបនបត្រ',
      certFilterAll: 'ទាំងអស់',
      certFilterAiMl: 'AI & ML',
      certFilterWeb: 'អភិវឌ្ឍន៍ Web',
      certFilterData: 'ទិន្នន័យ & BI',
      certFilterDesign: 'ការរចនា',

      skillStackHeading: 'ជំនាញបច្ចេកវិទ្យា',
      filterAll: 'ទាំងអស់',
      filterAiMl: 'AI & ML',
      filterLanguages: 'ភាសា & Web',
      filterDatabases: 'មូលដ្ឋានទិន្នន័យ',
      filterTools: 'ឧបករណ៍ & រចនា',

      experienceNumber: '០៣ // បទពិសោធន៍ការងារ',
      experienceTitle: 'បទពិសោធន៍ការងារ និងសមិទ្ធផល',
      experienceSubtitle: 'ការចូលរួមចំណែកផ្នែកវិស្វកម្ម ការដឹកនាំស្ថាបត្យកម្ម និងការពង្រីកប្រព័ន្ធប្រតិបត្តិការខ្នាតធំ។',
      viewFullCareer: 'មើលប្រវត្តិការងារពេញលេញ',
      keyAccomplishments: 'សមិទ្ធផលសំខាន់ៗ៖',

      projectsNumber: '០៤ // គម្រោងលេចធ្លោ',
      projectsTitle: 'ស្ថាបត្យកម្ម និងវិស្វកម្មគំរូ',
      projectsSubtitle: 'ការជ្រើសរើសគម្រោងប្រព័ន្ធ AI Agent, Semantic Retrieval Engines និង Backend ប្រព័ន្ធ។',
      viewAllProjects: 'មើលគម្រោងទាំងអស់',
      viewSourceCode: 'មើលកូដ (Source Code)',
      liveDemo: 'ទស្សនាផ្ទាល់',
      projectFilterAll: 'ទាំងអស់',
      projectFilterAiAgents: 'AI Agents',
      projectFilterAiMl: 'AI & ML',
      projectFilterBackend: 'Backend',
      projectFilterFullStack: 'Full-Stack',

      aboutNumber: '០៥ // ទស្សនវិជ្ជាវិស្វកម្ម',
      aboutTitle: 'ទស្សនវិជ្ជាវិស្វកម្ម និងគោលការណ៍ស្នូល',
      aboutSubtitle: 'ភាពសាមញ្ញ ភាពច្បាស់លាស់នៃ State Machines និងទំនុកចិត្តខ្ពស់ក្នុងប្រតិបត្តិការ។',
      readFullBackground: 'អានជីវប្រវត្តិពេញលេញ',
      corePrinciples: 'គោលការណ៍ស្នូល',
      principles: [
        'រនាំងការពារសុវត្ថិភាពច្បាស់លាស់សម្រាប់ AI Agents',
        'ផ្តោតសំខាន់លើល្បឿនប្រតិបត្តិការកម្រិត Millisecond',
        'កាត់បន្ថយភាពស្មុគស្មាញនៃប្រព័ន្ធ Container',
        'ធានាសុវត្ថិភាព Type-safe ពីដើមដល់ចប់',
      ],

      contactNumber: '០៥ // ទំនាក់ទំនង',
      contactTitle: 'មានគម្រោង ឬតម្រូវការប្រឹក្សាយោបល់?',
      contactSubtitle: 'ខ្ញុំត្រៀមខ្លួនជាស្រេចសម្រាប់ការពិគ្រោះយោបល់ ការរៀបចំស្ថាបត្យកម្មប្រព័ន្ធ និងដំណោះស្រាយ AI ប្រកបដោយប្រសិទ្ធភាពខ្ពស់។',
      initiateDiscussion: 'ចាប់ផ្តើមទំនាក់ទំនង',
      formName: 'ឈ្មោះរបស់អ្នក',
      formEmail: 'អាសយដ្ឋាន Email',
      formMessage: 'សាររបស់អ្នក',
      formSend: 'ផ្ញើសារ',
      formSending: 'កំពុងផ្ញើ...',
      formSuccessTitle: 'សារត្រូវបានផ្ញើជោគជ័យ',
      formSuccessMsg: 'សូមអរគុណសម្រាប់ការទាក់ទងមកកាន់ខ្ញុំ។ ខ្ញុំនឹងពិនិត្យ និងឆ្លើយតបក្នុងរយៈពេល ២៤ ម៉ោង។',
      formSendAnother: 'ផ្ញើសារថ្មីមួយទៀត',
      formRequiredNotice: '* សូមបំពេញព័ត៌មានទាំងអស់។',
      directInquiries: 'ទំនាក់ទំនងផ្ទាល់៖',
    },
    educationItems: [
      {
        degree: "វិទ្យាសាស្ត្រទិន្នន័យ និងវិស្វកម្ម — បរិញ្ញាបត្រ",
        institution: "វិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា (ITC)",
        period: "វិច្ឆិកា ២០២២ — សីហា ២០២៦",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "សិក្សាផ្តោតលើបញ្ញាសិប្បនិម្មិត (AI), Machine Learning, ការវិភាគទិន្នន័យ (Data Analytics) និងវិស្វកម្មមូលដ្ឋានទិន្នន័យ។",
        keyAreasTitle: "មុខវិជ្ជា និងជំនាញស្រាវជ្រាវស្នូល",
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
        degree: "ការអភិវឌ្ឍគេហទំព័រ (វគ្គខ្លី — អនឡាញ)",
        institution: "Frontend Master",
        period: "វិច្ឆិកា ២០២៥ — មករា ២០២៦",
        location: "អនឡាញ",
        description: "វគ្គខ្លីលើការអភិវឌ្ឍគេហទំព័រទំនើប, JavaScript, ស្ថាបត្យកម្ម Frontend និងការបង្កើតគេហទំព័រ Responsive។",
        keyAreasTitle: "មុខវិជ្ជា និងជំនាញស្រាវជ្រាវស្នូល",
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
        degree: "ការរចនាក្រាហ្វិក (Graphic Design — វគ្គខ្លី)",
        institution: "មជ្ឈមណ្ឌល DTC (DTC Center)",
        period: "វិច្ឆិកា ២០២២ — មេសា ២០២៣",
        location: "អូរបែកក្អម, រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "វគ្គខ្លីផ្តោតលើការរចនាក្រាហ្វិក, អត្តសញ្ញាណម៉ាកយីហោ (Branding), Typography និងការបង្កើតផ្ទាំងផ្សព្វផ្សាយដោយប្រើប្រាស់ Adobe Photoshop & Illustrator។",
        keyAreasTitle: "មុខវិជ្ជា និងជំនាញស្រាវជ្រាវស្នូល",
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
        degree: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)",
        institution: "វិទ្យាល័យចាន់គ្រឹះស្នា (Chankresna High School)",
        period: "មករា ២០១៨ — មករា ២០២១",
        location: "ស្រុកមេសាង, ខេត្តព្រៃវែង, ប្រទេសកម្ពុជា",
        description: "បានបញ្ចប់ការសិក្សាថ្នាក់ទី១២ ក្នុងឆ្នាំ២០២១ ជាមួយនឹងមូលដ្ឋានគ្រឹះរឹងមាំលើមុខវិជ្ជា គណិតវិទ្យា រូបវិទ្យា ជីវវិទ្យា និងគីមីវិទ្យា។ បណ្តុះបណ្តាលជំនាញសិក្សាស្នូលលើការដោះស្រាយបញ្ហា ការគិតបែបស៊ីជម្រៅ ការវិភាគវិទ្យាសាស្ត្រ និងការរៀនសូត្រដោយឯករាជ្យតាមរយៈការត្រៀមប្រឡងថ្នាក់ជាតិ (បាក់ឌុប)។"
      }
    ],
    experienceItems: [
      {
        company: "AI & Intelligent Systems",
        role: "វិស្វករ AI (AI Engineer)",
        period: "ចុងឆ្នាំ ២០២៥ — បច្ចុប្បន្ន",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "បង្កើត និងតភ្ជាប់កម្មវិធីដំណើរការដោយ AI, ប្រព័ន្ធឆ្លាតវៃ និងស្ថាបត្យកម្ម Backend APIs និងប្រព័ន្ធមូលដ្ឋានទិន្នន័យ។",
        highlights: [
          "បង្កើត និងតភ្ជាប់កម្មវិធីដំណើរការដោយ AI និងប្រព័ន្ធឆ្លាតវៃ។",
          "ធ្វើការជាមួយ Python, Machine Learning, LLMs, RAG និងបច្ចេកវិទ្យា AI Agents។",
          "រចនា និងអនុវត្តដំណោះស្រាយ AI ជាមួយ Backend APIs និងប្រព័ន្ធមូលដ្ឋានទិន្នន័យ។",
          "បង្កើត សាកល្បង និងដាក់ឱ្យដំណើរការមុខងារ AI សម្រាប់កម្មវិធីជាក់ស្តែង។"
        ]
      },
      {
        company: "Tech Education",
        role: "គ្រូបង្រៀនសរសេរកូដ Python (Python Programming Instructor)",
        period: "~៦ ខែ",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "បង្រៀនមូលដ្ឋានគ្រឹះសរសេរកូដ Python និងគោលគំនិតសរសេរកម្មវិធីជាក់ស្តែងដល់និស្សិតសាកលវិទ្យាល័យ និងអ្នកសិក្សា។",
        highlights: [
          "បង្រៀនមូលដ្ឋានគ្រឹះសរសេរកូដ Python និងគោលគំនិតសរសេរកម្មវិធីជាក់ស្តែង។",
          "ណែនាំសិស្សក្នុងការដោះស្រាយបញ្ហា ក្បួនដោះស្រាយ (Algorithms) និងការអនុវត្តកូដជាក់ស្តែង។",
          "ជួយអ្នកសិក្សាកសាងមូលដ្ឋានគ្រឹះយ៉ាងរឹងមាំក្នុងការសរសេរកម្មវិធី Python។"
        ]
      },
      {
        company: "Private School Education",
        role: "គ្រូបង្រៀនគណិតវិទ្យា (Mathematics Teacher)",
        period: "~២ ឆ្នាំ",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "បង្រៀនគណិតវិទ្យាដល់សិស្សានុសិស្សគ្រប់កម្រិតសិក្សា ដោយសង្កត់ធ្ងន់លើការគិតបែបវិភាគ និងការដោះស្រាយបញ្ហាតាមបែបឡូជីខល។",
        highlights: [
          "បង្រៀនគណិតវិទ្យាដល់សិស្សានុសិស្សគ្រប់កម្រិតសិក្សាផ្សេងៗគ្នា។",
          "ពន្យល់ពីគោលគំនិតគណិតវិទ្យាតាមរយៈឧទាហរណ៍ជាក់ស្តែង និងការដោះស្រាយបញ្ហា។",
          "អភិវឌ្ឍការគិតវិភាគ ការគិតបែបឡូជីខល និងជំនាញដោះស្រាយបញ្ហារបស់សិស្ស។"
        ]
      }
    ],
    footer: {
      status: 'ត្រៀមខ្លួនរួចរាល់សម្រាប់ការងារកិច្ចសន្យា និងការងារពេញម៉ោង',
      network: 'បណ្តាញសង្គម',
      sitemap: 'មាតិកាទំព័រ',
      rights: 'រក្សាសិទ្ធិគ្រប់យ៉ាង។',
    }
  }
};
