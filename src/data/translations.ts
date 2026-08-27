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
        degree: "Bachelor of Science in Computer Science",
        institution: "Paragon International University",
        period: "2021 — 2025",
        location: "Phnom Penh, Cambodia",
        description: "Specialized in advanced algorithms, artificial intelligence, software engineering methodologies, distributed systems, and computer vision. Developed autonomous robotics navigation and ML pipelines for research thesis."
      },
      {
        degree: "English for Academic Purposes & Advanced ESL",
        institution: "Australian Centre for Education (ACE)",
        period: "2019 — 2022",
        location: "Phnom Penh, Cambodia",
        description: "Intensive training in international academic writing, technical research dissemination, presentation delivery, and professional global team collaboration."
      },
      {
        degree: "General English Program (GEP Level 12)",
        institution: "Australian Centre for Education (ACE)",
        period: "2017 — 2019",
        location: "Phnom Penh, Cambodia",
        description: "Advanced fluency in professional English communication, structured debate, contextual analysis, and cross-cultural technical documentation."
      },
      {
        degree: "High School National Diploma",
        institution: "Hun Sen Kampong Leav High School",
        period: "2015 — 2021",
        location: "Prey Veng, Cambodia",
        description: "Graduated with highest honors with focus in advanced mathematics, physics, and natural sciences. Active participant in national STEM competitions."
      }
    ],
    experienceItems: [
      {
        company: "Apex Neural Labs",
        role: "Lead AI & Backend Systems Engineer",
        period: "2024 — Present",
        location: "Remote / Singapore",
        description: "Leading the core platform engineering team responsible for high-throughput multi-agent execution engines, retrieval infrastructure, and distributed microservices.",
        highlights: [
          "Architected an asynchronous multi-agent orchestration runtime handling over 2.5 million daily agentic reasoning turns.",
          "Reduced LLM inference cost by 42% through semantic caching, cross-encoder thresholding, and prompt distillation."
        ]
      },
      {
        company: "Vanguard Tech Solutions",
        role: "Senior Backend Engineer",
        period: "2022 — 2024",
        location: "Phnom Penh, Cambodia",
        description: "Designed distributed transaction engines, microservice gateways, and real-time streaming architectures for financial and logistics clients.",
        highlights: [
          "Engineered an event-driven payment reconciliation system processing $18M+ monthly transactions with zero data loss.",
          "Implemented a zero-trust API gateway handling 15,000 requests/sec with p99 latency under 4ms."
        ]
      },
      {
        company: "Kiri Data Systems",
        role: "Full-Stack Software Engineer",
        period: "2020 — 2022",
        location: "Phnom Penh, Cambodia",
        description: "Built scalable web applications, internal telemetry dashboards, and automated CI pipelines for client enterprise systems.",
        highlights: [
          "Developed high-density analytics dashboards using React, TypeScript, and WebSockets.",
          "Authored REST APIs and background worker queues in Node.js and Python."
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
        degree: "បរិញ្ញាបត្រវិទ្យាសាស្ត្រកុំព្យូទ័រ (Computer Science)",
        institution: "សាកលវិទ្យាល័យអន្តរជាតិ ផារ៉ាហ្គន (ParagonU)",
        period: "២០២១ — ២០២៥",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "ជំនាញឯកទេសលើក្បួនដោះស្រាយកម្រិតខ្ពស់ (Algorithms), បញ្ញាសិប្បនិម្មិត (AI), វិធីសាស្ត្រវិស្វកម្មផ្នែកទន់, ប្រព័ន្ធចែកចាយ (Distributed Systems) និង Computer Vision។ បានស្រាវជ្រាវ និងបង្កើតប្រព័ន្ធរ៉ូបូតស្វ័យប្រវត្ត និង Machine Learning សម្រាប់សារណាបញ្ចប់ការសិក្សា។"
      },
      {
        degree: "ភាសាអង់គ្លេសសម្រាប់ការសិក្សា & កម្រិតខ្ពស់ (EAP)",
        institution: "មជ្ឈមណ្ឌលអូស្ត្រាលីសម្រាប់ការបណ្តុះបណ្តាល (ACE)",
        period: "២០១៩ — ២០២២",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "ការបណ្តុះបណ្តាលស៊ីជម្រៅលើការសរសេរឯកសារស្រាវជ្រាវបែបបច្ចេកទេស ការធ្វើបទបង្ហាញកម្រិតអន្តរជាតិ និងការធ្វើការងារជាក្រុមប្រកបដោយវិជ្ជាជីវៈ។"
      },
      {
        degree: "កម្មវិធីភាសាអង់គ្លេសទូទៅ (GEP Level 12)",
        institution: "មជ្ឈមណ្ឌលអូស្ត្រាលីសម្រាប់ការបណ្តុះបណ្តាល (ACE)",
        period: "២០១៧ — ២០១៩",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "ភាពស្ទាត់ជំនាញកម្រិតខ្ពស់ក្នុងការប្រាស្រ័យទាក់ទងភាសាអង់គ្លេសបែបវិជ្ជាជីវៈ ការជជែកដេញដោល និងការវិភាគទិន្នន័យបច្ចេកទេស។"
      },
      {
        degree: "សញ្ញាបត្រមធ្យមសិក្សាទុតិយភូមិ (បាក់ឌុប)",
        institution: "វិទ្យាល័យ ហ៊ុន សែន កំពង់លាវ",
        period: "២០១៥ — ២០២១",
        location: "ខេត្តព្រៃវែង, ប្រទេសកម្ពុជា",
        description: "បានបញ្ចប់ការសិក្សាដោយទទួលបាននិទ្ទេសល្អប្រសើរ លើមុខវិជ្ជាគណិតវិទ្យា រូបវិទ្យា និងវិទ្យាសាស្ត្រពិត ព្រមទាំងបានចូលរួមយ៉ាងសកម្មក្នុងការប្រកួតប្រជែង STEM ថ្នាក់ជាតិ។"
      }
    ],
    experienceItems: [
      {
        company: "Apex Neural Labs",
        role: "ប្រធានវិស្វករប្រព័ន្ធ AI & Backend",
        period: "២០២៤ — បច្ចុប្បន្ន",
        location: "ពីចម្ងាយ / ប្រទេសសិង្ហបុរី",
        description: "ដឹកនាំក្រុមវិស្វកម្មស្នូលក្នុងការបង្កើតប្រព័ន្ធប្រតិបត្តិការ Multi-Agent AI ខ្នាតធំ ស្ថាបត្យកម្ម Retrieval និងប្រព័ន្ធ Microservices ចែកចាយ។",
        highlights: [
          "បង្កើតស្ថាបត្យកម្ម Asynchronous Multi-Agent Runtime ដែលដំណើរការជាង ២.៥ លាន Agentic Reasoning Turns ប្រចាំថ្ងៃ។",
          "កាត់បន្ថយថ្លៃចំណាយលើ LLM Inference រហូតដល់ ៤២% តាមរយៈ Semantic Caching និង Prompt Distillation។"
        ]
      },
      {
        company: "Vanguard Tech Solutions",
        role: "វិស្វករជាន់ខ្ពស់ Backend",
        period: "២០២២ — ២០២៤",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "រៀបចំប្រព័ន្ធ Transaction Engine ប្រព័ន្ធ API Gateway និងប្រព័ន្ធ Real-time Streaming សម្រាប់អតិថិជនវិស័យហិរញ្ញវត្ថុ និងដឹកជញ្ជូន។",
        highlights: [
          "បង្កើតប្រព័ន្ធផ្ទៀងផ្ទាត់ការទូទាត់បែប Event-driven ដែលដំណើរការប្រតិបត្តិការជាង $18M+ ប្រចាំខែដោយគ្មានការបាត់បង់ទិន្នន័យ។",
          "អនុវត្តប្រព័ន្ធ Zero-trust API Gateway ដំណើរការ ១៥,០០០ សំណើ/វិនាទី ជាមួយ Latency ក្រោម 4ms។"
        ]
      },
      {
        company: "Kiri Data Systems",
        role: "វិស្វករផ្នែកទន់ Full-Stack",
        period: "២០២០ — ២០២២",
        location: "រាជធានីភ្នំពេញ, ប្រទេសកម្ពុជា",
        description: "បង្កើតកម្មវិធីគេហទំព័រខ្នាតធំ ផ្ទាំងគ្រប់គ្រងទិន្នន័យ (Telemetry Dashboards) និងស្វ័យប្រវត្តិកម្ម CI/CD សម្រាប់ប្រព័ន្ធសហគ្រាស។",
        highlights: [
          "បង្កើតផ្ទាំងវិភាគទិន្នន័យកម្រិតខ្ពស់ដោយប្រើប្រាស់ React, TypeScript និង WebSockets។",
          "បង្កើត REST APIs និងប្រព័ន្ធ Background Worker Queues ដោយប្រើប្រាស់ Node.js និង Python។"
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
