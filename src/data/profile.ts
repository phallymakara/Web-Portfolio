export const profile = {
  name: "Makara Phally",
  role: "AI Engineer",
  location: "Phnom Penh, Cambodia",
  tagline: "Designing and integrating AI solutions into real-world applications and web systems.",
  shortBio: "I am an AI Engineer with a strong foundation in machine learning, data analytics, and web development. I focus on designing and integrating AI solutions into real-world applications, developing AI-powered features and agents, and connecting them with web and backend systems to solve business problems. I am a lifelong learner who values collaboration, continuous improvement, and knowledge sharing.",
  avatarUrl: "/images/profile.jpg",
  email: "phallymakara.dev@gmail.com",
  github: "https://github.com/phallymakara",
  linkedin: "https://linkedin.com/in/phallymakara",
  twitter: "https://x.com/phallymakara",
  resumeUrl: "#download-cv",
  
  about: {
    introduction: {
      headline: "Crafting durable software at the intersection of distributed systems and autonomous AI.",
      body: [
        "I am a software engineer with over 6 years of experience architecting large-scale backends, production machine learning pipelines, and responsive web platforms. My engineering ethos revolves around removing accidental complexity, favoring explicit state machines over implicit magic.",
        "Over the years, I've designed streaming data engines handling millions of daily events, built self-healing multi-agent LLM systems for enterprise automation, and structured resilient microservices with strict SLAs.",
      ],
    },
    background: {
      headline: "From low-level systems and distributed microservices to modern AI orchestrations.",
      paragraphs: [
        "My journey began with systems programming and backend engineering—building high-throughput APIs in Go and Rust, modeling relational data schemas, and tuning distributed queues for predictable latency under load.",
        "As generative models and reasoning frameworks matured, I pivoted into production AI engineering. Rather than building ephemeral wrappers, I design agentic cognitive loops, retrieval-augmented generation (RAG) graphs with dense/sparse hybrid search, and deterministic validation layers that bridge probabilistic models with rigid enterprise databases.",
        "I regularly contribute to open-source developer tooling, mentor aspiring engineers, and write technical post-mortems on distributed consensus and AI agent reliability.",
      ],
    },
    philosophy: [
      {
        number: "01",
        title: "Deterministic Guardrails Over Probabilistic Chaos",
        description: "AI agents and LLMs are probabilistic by definition. Great engineering means wrapping them in rigid state machines, type-checked schemas (Pydantic / Zod), and deterministic fallbacks so the system never fails silently.",
      },
      {
        number: "02",
        title: "Boring Technology With Deliberate Modernity",
        description: "Postgres, Go, Redis, and clean Linux primitives solve 99% of architectural challenges. We reach for bleeding-edge frameworks only when they provide a 10x multiplier on user experience or developer leverage.",
      },
      {
        number: "03",
        title: "Zero Inherent Magic",
        description: "Code should be easy to trace with a simple `grep` or step debugger. Implicit global state, hidden reflections, and magic ORM mutations are replaced by explicit dependency injection and clear data flow.",
      },
      {
        number: "04",
        title: "Extreme Empathy for the End User & Maintainer",
        description: "Software is read far more often than it is written. Clean modular boundaries, zero bloated container hierarchies, and non-cryptic error handling are core engineering values.",
      },
    ],
  },
};
