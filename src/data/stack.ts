import { StackGroup } from '../types/stack';

export const stackGroups: StackGroup[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    tagline: "Autonomous agent execution, retrieval graphs, vector search, and model serving.",
    items: [
      {
        name: "Python",
        category: "ai-ml",
        role: "Primary Language for AI / ML",
        experienceYears: "5+ yrs",
        proficiency: "Daily Driver",
        description: "Asynchronous backends, custom evaluation pipelines, PyTorch inference scripts, and Pydantic V2 data validation.",
        librariesOrTools: ["Python 3.12", "Pydantic V2", "NumPy", "Asyncio"]
      },
      {
        name: "LangGraph & State Machines",
        category: "ai-ml",
        role: "Agent Orchestration",
        experienceYears: "2+ yrs",
        proficiency: "Daily Driver",
        description: "Constructing cyclic graphs, multi-agent debate protocols, durable checkpointing, and tool sandboxing.",
        librariesOrTools: ["LangGraph", "LangChain Core", "Custom Graph Engine"]
      },
      {
        name: "Vector Databases & Search",
        category: "ai-ml",
        role: "Semantic Retrieval",
        experienceYears: "3+ yrs",
        proficiency: "Production Ready",
        description: "Dense vector indexing, HNSW index parameter tuning, sparse BM25 indexing, and reciprocal rank fusion.",
        librariesOrTools: ["Qdrant", "pgvector", "ChromaDB", "BM25"]
      },
      {
        name: "Model Serving & LLM APIs",
        category: "ai-ml",
        role: "Inference & Tooling",
        experienceYears: "3+ yrs",
        proficiency: "Daily Driver",
        description: "Anthropic Claude SDK, OpenAI API, Ollama local inference, vLLM self-hosted clusters, and streaming SSE protocols.",
        librariesOrTools: ["Claude 3.5/3.7", "GPT-4o", "Ollama", "vLLM", "HuggingFace"]
      }
    ]
  },
  {
    id: "backend",
    title: "Backend Systems",
    tagline: "Distributed architectures, microservices, high-throughput APIs, and relational modeling.",
    items: [
      {
        name: "Go (Golang)",
        category: "backend",
        role: "High-Throughput Services",
        experienceYears: "4+ yrs",
        proficiency: "Daily Driver",
        description: "Concurrent microservices, gRPC stream handlers, memory-efficient proxy systems, and CLI developer tooling.",
        librariesOrTools: ["Goroutines", "gRPC / Protobuf", "Chi", "Gin", "SQLX"]
      },
      {
        name: "PostgreSQL & Relational Data",
        category: "backend",
        role: "Primary OLTP Database",
        experienceYears: "6+ yrs",
        proficiency: "Daily Driver",
        description: "Schema design, composite indexes, query optimization, connection pooling with PgBouncer, and ACID transaction guarantees.",
        librariesOrTools: ["PostgreSQL 16", "pgvector", "Flyway", "Prisma / Drizzle"]
      },
      {
        name: "Redis",
        category: "backend",
        role: "Caching & Pub/Sub",
        experienceYears: "5+ yrs",
        proficiency: "Daily Driver",
        description: "Distributed rate-limiting Lua scripts, cache stampede prevention, session storage, and in-memory message brokers.",
        librariesOrTools: ["Redis Cluster", "Redis Streams", "Lua Scripting"]
      },
      {
        name: "Rust",
        category: "backend",
        role: "Low-Level & Performance-Critical Code",
        experienceYears: "2+ yrs",
        proficiency: "Production Ready",
        description: "Zero-copy parsers, memory-mapped file engines, and async concurrency with Tokio.",
        librariesOrTools: ["Tokio", "Axum", "Serde", "FlatBuffers"]
      },
      {
        name: "Node.js & TypeScript",
        category: "backend",
        role: "Backend & Serverless",
        experienceYears: "5+ yrs",
        proficiency: "Daily Driver",
        description: "Fast REST and GraphQL APIs, event loop optimization, worker threads, and type-safe integration services.",
        librariesOrTools: ["Node.js", "Express", "Fastify", "Zod", "TypeScript"]
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    tagline: "Modern web interfaces, design systems, editorial layouts, and sub-millisecond interaction responsiveness.",
    items: [
      {
        name: "React & Next.js",
        category: "frontend",
        role: "Modern Web UI",
        experienceYears: "5+ yrs",
        proficiency: "Daily Driver",
        description: "Single-page apps, server components, optimistic UI patterns, state modeling with Zustand, and performant virtual lists.",
        librariesOrTools: ["React 18/19", "Next.js", "Vite", "Zustand"]
      },
      {
        name: "TypeScript",
        category: "frontend",
        role: "Type-Safe Architecture",
        experienceYears: "5+ yrs",
        proficiency: "Daily Driver",
        description: "Strict compiler configuration, discriminated unions, generic type constraints, and schema-driven development.",
        librariesOrTools: ["TypeScript 5.x", "Zod", "TS-Pattern"]
      },
      {
        name: "Tailwind CSS & Styling",
        category: "frontend",
        role: "Design Systems & Editorial UI",
        experienceYears: "4+ yrs",
        proficiency: "Daily Driver",
        description: "Clean hairline borders, responsive token architecture, dark mode, zero-shadow minimal designs, and CSS grid layouts.",
        librariesOrTools: ["Tailwind CSS", "PostCSS", "CSS Modules"]
      }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure & DevOps",
    tagline: "Containerization, CI/CD pipelines, cloud deployment, and system telemetry.",
    items: [
      {
        name: "Docker & Containerization",
        category: "infrastructure",
        role: "Container Runtimes",
        experienceYears: "5+ yrs",
        proficiency: "Daily Driver",
        description: "Multi-stage minimal distroless builds, local development orchestration, and container sandboxing.",
        librariesOrTools: ["Docker", "Docker Compose", "BuildKit"]
      },
      {
        name: "Linux & Systems Administration",
        category: "infrastructure",
        role: "OS & Server Management",
        experienceYears: "6+ yrs",
        proficiency: "Daily Driver",
        description: "Kernel parameter tuning, systemd service management, network socket tuning, and bash scripting.",
        librariesOrTools: ["Ubuntu", "Debian", "systemd", "SSH", "Bash"]
      },
      {
        name: "Observability & Monitoring",
        category: "infrastructure",
        role: "Telemetry & Performance",
        experienceYears: "4+ yrs",
        proficiency: "Production Ready",
        description: "Distributed tracing, Prometheus metric scrapers, Grafana dashboards, and structured JSON log pipelines.",
        librariesOrTools: ["OpenTelemetry", "Prometheus", "Grafana", "Jaeger"]
      },
      {
        name: "CI / CD & Cloud",
        category: "infrastructure",
        role: "Automation & Deployment",
        experienceYears: "4+ yrs",
        proficiency: "Production Ready",
        description: "GitHub Actions workflows, AWS (ECS, S3, RDS, CloudFront), automated regression gates, and zero-downtime deploys.",
        librariesOrTools: ["GitHub Actions", "AWS", "Vercel", "Cloudflare"]
      }
    ]
  }
];
