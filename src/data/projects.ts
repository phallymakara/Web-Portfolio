import { Project } from '../types/project';

export const projects: Project[] = [
  {
    slug: "nexus-agentic-workflow-engine",
    title: "Nexus Multi-Agent Orchestrator",
    tagline: "Autonomous multi-agent execution pipeline with graph-based state machines and deterministic verification.",
    description: "An open-source distributed runtime for multi-agent reasoning. Coordinates asynchronous LLM tool callers with self-correcting validation loops and transactional checkpoints.",
    category: "ai-ml",
    categoryLabel: "AI / ML",
    year: "2026",
    featured: true,
    githubUrl: "https://github.com/phallymakara/nexus-agent-engine",
    liveUrl: "https://nexus-engine.demo.phallymakara.dev",
    tags: ["Python", "LangGraph", "FastAPI", "Temporal", "PostgreSQL", "Redis"],
    details: {
      problem: "Standard LLM agent chains frequently hallucinate parameters, enter infinite tool-calling recursion, and fail silently when third-party APIs return non-standard payloads, resulting in non-deterministic operational risk in automated pipelines.",
      solution: "Engineered a directed acyclic graph (DAG) agent orchestration runtime with checkpointed state persistence, dynamic schema reflection, and a deterministic verifier agent that validates output against formal constraints before state transition.",
      architecture: {
        overview: "A decentralized event-driven graph architecture separating reasoning planners from isolated execution sandboxes with continuous state synchronization.",
        components: [
          "State Coordinator: Manages graph state checkpoints in PostgreSQL and in-memory Redis buffers.",
          "Agent Sandbox Workers: Docker-isolated micro-containers executing dynamic tool calls with strict resource quotas.",
          "Deterministic Validation Gate: Runtime schema and invariant validator using Pydantic V2 and AST parsing.",
          "Telemetry & Tracing: OpenTelemetry spans capturing every thought, tool call argument, and confidence score."
        ],
        diagramNote: "Planner -> Tool Sandbox Worker -> Deterministic Verification Gate -> Checkpoint Engine -> Response Streamer"
      },
      technologies: [
        "Python 3.12 & Rust Extensions",
        "LangGraph / Custom State Machine",
        "Temporal.io for long-lived workflows",
        "FastAPI & WebSockets for real-time trace streaming",
        "PostgreSQL 16 with pgvector & Redis Cluster"
      ],
      implementation: [
        "Implemented custom graph compilation step converting human-readable YAML agent workflows into optimized state machines.",
        "Built automatic rollback recovery where transient tool timeouts trigger alternative routing paths without discarding upstream context.",
        "Created real-time streaming protocol displaying agent internal monologue, token usage, and step-by-step artifact generation to client UIs."
      ],
      challenges: [
        "Mitigating non-deterministic JSON generation without incurring multi-second latency overhead per step.",
        "Handling concurrent tool execution when sub-agents compete for shared memory state."
      ],
      results: [
        { metric: "99.4%", label: "Workflow completion accuracy across 10k synthetic test suites" },
        { metric: "3.2x", label: "Throughput improvement over vanilla iterative agent loops" },
        { metric: "0", label: "Silent runtime state corruptions via strict transaction rollback" }
      ]
    }
  },
  {
    slug: "synapse-hybrid-rag-engine",
    title: "Synapse Neural RAG Platform",
    tagline: "Enterprise semantic knowledge platform combining dense vector retrieval, BM25 sparse index, and cross-encoder re-ranking.",
    description: "Production retrieval engine processing over 500,000 internal documents with sub-80ms semantic retrieval and source-grounded hallucination detection.",
    category: "ai-ml",
    categoryLabel: "AI / ML",
    year: "2025",
    featured: true,
    githubUrl: "https://github.com/phallymakara/synapse-rag",
    liveUrl: "https://synapse-rag.demo.phallymakara.dev",
    tags: ["Go", "Python", "Qdrant", "BM25", "HuggingFace", "gRPC"],
    details: {
      problem: "Traditional pure-vector semantic search fails on domain-specific acronyms, exact part numbers, and multi-tenant permission ACLs, causing high hallucination rates in enterprise assistant queries.",
      solution: "Developed a hybrid retrieval engine uniting Qdrant vector embeddings, custom Go-based BM25 sparse inverted indices, and a lightweight ONNX cross-encoder re-ranking pipeline running directly on CPU clusters.",
      architecture: {
        overview: "Two-stage retrieval pipeline with pre-filtering security ACLs and dynamic reciprocal rank fusion (RRF).",
        components: [
          "Document Ingestion & Chunking Worker: Semantic-boundary document parser with automatic metadata tagging.",
          "Dense Retriever: Qdrant cluster indexing text-embedding-3 vectors.",
          "Sparse Retriever: Custom high-performance Go inverted index with token normalization.",
          "Fusion & Reranker: Reciprocal Rank Fusion followed by a quantized ONNX re-ranker."
        ]
      },
      technologies: [
        "Go (Golang) for ingestion and sparse index query layer",
        "Python & ONNX Runtime for re-ranking models",
        "Qdrant Vector Database",
        "Apache Kafka for document ingestion pipeline",
        "gRPC & Protobuf interface"
      ],
      implementation: [
        "Formulated dynamic chunking algorithm based on markdown hierarchy and paragraph boundaries rather than fixed token slices.",
        "Integrated sentence-level citation mapping ensuring every generated claim references exact source line coordinates.",
        "Built tenant isolation layer with cryptographically signed retrieval filters."
      ],
      challenges: [
        "Optimizing cross-encoder CPU inference time from 220ms down to under 35ms per batch.",
        "Synchronizing distributed BM25 index updates without stopping query workloads."
      ],
      results: [
        { metric: "68ms", label: "P95 End-to-End Retrieval Latency" },
        { metric: "94.2%", label: "Context precision score verified by human evaluators" },
        { metric: "500k+", label: "Indexed technical documents across 12 enterprise formats" }
      ]
    }
  },
  {
    slug: "aether-distributed-event-broker",
    title: "Aether Event Streaming Engine",
    tagline: "Ultra-low latency message broker with memory-mapped commit logs and Raft consensus.",
    description: "A distributed log engine designed for high-concurrency event ingestion, partition rebalancing, and exactly-once delivery guarantees.",
    category: "backend",
    categoryLabel: "Backend",
    year: "2025",
    featured: true,
    githubUrl: "https://github.com/phallymakara/aether-broker",
    liveUrl: "https://aether.phallymakara.dev",
    tags: ["Rust", "Raft", "Tokio", "Zero-Copy", "Docker", "Prometheus"],
    details: {
      problem: "Existing heavyweight message brokers incurred massive memory footprints and complex JVM tuning overhead for edge microservices needing ultra-low jitter message queuing.",
      solution: "Architected a zero-copy append-only commit log engine in Rust with memory-mapped disk storage, custom Raft cluster membership, and a binary TCP protocol.",
      architecture: {
        overview: "Leader-follower partition cluster utilizing memory-mapped segments and async I/O via Tokio.",
        components: [
          "Commit Log Engine: Sequential disk writer leveraging OS page cache and mmap.",
          "Raft Consensus Coordinator: Handles leader election and replication heartbeat.",
          "Client Network Layer: Async TCP framing with zero-copy buffer slicing."
        ]
      },
      technologies: [
        "Rust (2021 edition)",
        "Tokio asynchronous runtime",
        "Raft distributed consensus",
        "FlatBuffers for zero-alloc serialization",
        "Prometheus metrics exporter"
      ],
      implementation: [
        "Engineered segmented log rolling mechanism with automatic background compaction and tombstone sweeping.",
        "Implemented batching ring buffer capable of coalescing 50,000 messages per flush tick.",
        "Designed deterministic client failover protocol with instant leader re-discovery."
      ],
      challenges: [
        "Eliminating memory copies between network socket buffers and OS disk page cache.",
        "Safely handling disk full panics and partition split-brain scenarios during network partitions."
      ],
      results: [
        { metric: "450k/s", label: "Messages ingested per node on modest commodity hardware" },
        { metric: "1.2ms", label: "P99 commit latency under heavy write saturation" },
        { metric: "24MB", label: "Base process RAM footprint at idle" }
      ]
    }
  },
  {
    slug: "chronos-timeseries-analytics",
    title: "Chronos Realtime Analytics Workspace",
    tagline: "Full-stack observability workspace with sub-second queries over billions of metric data points.",
    description: "Modern data exploration platform featuring interactive query builder, live websocket anomaly alerts, and declarative dashboard composition.",
    category: "full-stack",
    categoryLabel: "Full-Stack",
    year: "2024",
    featured: true,
    githubUrl: "https://github.com/phallymakara/chronos-analytics",
    liveUrl: "https://chronos.demo.phallymakara.dev",
    tags: ["React", "TypeScript", "ClickHouse", "Node.js", "Tailwind CSS", "WebSockets"],
    details: {
      problem: "Engineering teams lacked an intuitive, lightweight interface to query billions of distributed trace records and system metrics without writing complex SQL fragments or waiting minutes for UI updates.",
      solution: "Created an end-to-end telemetry exploration platform featuring a Canvas-based visualization layer, AST-backed query builder, and ClickHouse columnar storage engine backend.",
      architecture: {
        overview: "Clean full-stack tiered architecture: React frontend with virtualized grid -> Node.js query planner -> ClickHouse analytical cluster.",
        components: [
          "Frontend UI: High-density data grid rendering 100k points at 60fps using Canvas2D.",
          "Query Compiler: Compiles visual drag-and-drop metrics into vectorized ClickHouse queries.",
          "Alerting Daemon: Evaluates sliding statistical thresholds every 10 seconds."
        ]
      },
      technologies: [
        "React 18 & TypeScript",
        "ClickHouse Columnar Database",
        "Node.js & Express REST/WS API",
        "Tailwind CSS for editorial data layout",
        "Docker Compose orchestration"
      ],
      implementation: [
        "Built virtualized timeline chart renderer preventing DOM node bloat during zoom and pan operations.",
        "Optimized query cache using Redis with intelligent cache invalidation on new partition commits.",
        "Implemented real-time live tailing via multiplexed WebSockets."
      ],
      challenges: [
        "Rendering massive data series without triggering React re-render thrashing.",
        "Preventing query thundering herds on analytical warehouse during incident spikes."
      ],
      results: [
        { metric: "< 120ms", label: "Average query response over 1.4 billion aggregated rows" },
        { metric: "60 FPS", label: "Smooth timeline interactions and live chart panning" },
        { metric: "85%", label: "Reduction in mean-time-to-detection for critical regressions" }
      ]
    }
  },
  {
    slug: "sentinel-api-gateway",
    title: "Sentinel Edge Security Proxy",
    tagline: "High-performance reverse proxy with dynamic rate limiting, token bucket algorithms, and WAF rules.",
    description: "An edge API proxy with distributed Redis rate limiting, JWT verification at wire speed, and anomaly detection.",
    category: "backend",
    categoryLabel: "Backend",
    year: "2024",
    featured: false,
    githubUrl: "https://github.com/phallymakara/sentinel-gateway",
    liveUrl: "https://sentinel.phallymakara.dev",
    tags: ["Go", "Redis", "eBPF", "gRPC", "Docker"],
    details: {
      problem: "Protecting legacy internal microservices from DDoS attacks and credential stuffing without adding significant latency overhead.",
      solution: "Engineered a lightweight Go reverse proxy featuring leaky bucket rate-limiting algorithms, Lua Redis scripts, and distributed circuit breakers.",
      architecture: {
        overview: "Stateless edge proxy nodes coordinated through distributed Redis instances.",
        components: [
          "Proxy Core: High-throughput HTTP/2 and gRPC router.",
          "Rate Limiter: Atomic Redis Lua scripts enforcing per-IP and per-token quotas.",
          "Telemetry Collector: Emits structured JSON access logs to Kafka."
        ]
      },
      technologies: ["Go", "Redis Cluster", "Prometheus", "OpenTelemetry", "Docker"],
      implementation: [
        "Implemented zero-allocation byte buffers for HTTP header inspection.",
        "Created hot-reloadable configuration engine polling Git repos for route rule updates."
      ],
      challenges: [
        "Managing distributed clock skew across edge nodes when calculating token burst intervals."
      ],
      results: [
        { metric: "< 0.8ms", label: "Proxy forwarding overhead added per request" },
        { metric: "12k req/s", label: "Single-core sustained throughput" }
      ]
    }
  },
  {
    slug: "cortex-autonomous-coding-agent",
    title: "Cortex Code Generation Assistant",
    tagline: "Local-first coding companion featuring semantic AST indexation and automated test-driven refinement.",
    description: "Developer tool that parses local codebases into structural dependency graphs, generates code modifications, and self-validates via automated test suites.",
    category: "ai-ml",
    categoryLabel: "AI / ML",
    year: "2026",
    featured: false,
    githubUrl: "https://github.com/phallymakara/cortex-agent",
    liveUrl: "https://cortex.demo.phallymakara.dev",
    tags: ["TypeScript", "Tree-sitter", "Ollama", "Claude API", "Node.js"],
    details: {
      problem: "Standard copilot completions lack whole-repository structural awareness and regularly introduce subtle type errors.",
      solution: "Developed an agentic workflow that builds Tree-sitter AST symbol graphs, performs targeted file diffing, and runs test suites to self-correct generated patches.",
      architecture: {
        overview: "Local daemon orchestrating Tree-sitter parser, LLM client, and isolated test runner.",
        components: [
          "AST Graph Indexer: Parses TypeScript, Python, and Go files into symbol nodes.",
          "Diff Engine: Generates atomic git-compatible patches.",
          "Test Harness: Executes test runners and extracts stack traces for agent feedback."
        ]
      },
      technologies: ["TypeScript", "Tree-sitter", "Anthropic Claude SDK", "Vitest", "Jest"],
      implementation: [
        "Built recursive AST query extraction for call graphs and type definitions.",
        "Integrated iterative feedback loop feeding compiler error messages back into the agent context."
      ],
      challenges: [
        "Fitting large codebase symbol contexts within strict token windows without losing references."
      ],
      results: [
        { metric: "88%", label: "First-pass patch compilation success rate" },
        { metric: "15s", label: "Average turnaround time for multi-file refactoring tasks" }
      ]
    }
  },
  {
    slug: "bank-loan-analysis-report",
    title: "Bank Loan Analysis & Financial Risk Report",
    tagline: "Comprehensive financial analytics dashboard tracking $435.8M in loan applications, funding volumes, good vs. bad loan distributions, and borrower debt ratios.",
    description: "Interactive Power BI financial reporting platform monitoring 38.6K loan applications, repayment statuses, interest rate yields, and DTI metrics across credit grades.",
    category: "bi-solution",
    categoryLabel: "BI Solution",
    year: "2025",
    featured: true,
    imageUrl: "/project/loan_analyst.png",
    liveUrl: "https://app.powerbi.com/groups/me/reports/f426e78c-bdc2-4a93-9808-9277143a088a/f4b852345109fe12944c?experience=power-bi",
    tags: ["Power BI", "Financial Analytics", "DAX", "Risk Modeling", "Banking KPI", "ETL"],
    details: {
      problem: "Financial institutions need clear visibility into credit risk, default probability, and capital distribution across states, credit grades, and loan purposes without manual ledger consolidation.",
      solution: "Designed and deployed an executive Power BI risk and portfolio dashboard segmenting 38,576 loans into actionable Good vs. Bad loan KPIs, MTD/MOM growth metrics, and debt-to-income distributions.",
      architecture: {
        overview: "Banking data ingestion pipeline: Transactional Loan DB -> Automated Data Cleansing -> Credit Risk Classification Model -> Dynamic Power BI Dashboard.",
        components: [
          "Credit Ingestion Pipeline: Ingests 38.6K application records with automated schema validation.",
          "Good vs. Bad Loan Segregation Engine: Classifies loans by performance (Fully Paid / Current vs. Charged Off).",
          "DAX Financial Metrics: Calculates MTD and MOM totals for funded amounts, interest rate averages, and DTI ratios.",
          "Risk Scorecard Visuals: Interactive donut charts, status breakdown matrices, and multi-parameter filters (State, Grade, Purpose)."
        ],
        diagramNote: "Loan Records -> Data Modeling & ETL -> Good/Bad Loan Classifier -> DAX Measures -> Executive Dashboard"
      },
      technologies: [
        "Microsoft Power BI Desktop & Service",
        "DAX (Financial & Time-Intelligence Measures)",
        "Power Query ETL",
        "Credit Risk Data Modeling",
        "SQL Database Connectivity"
      ],
      implementation: [
        "Calculated vital credit health indicators including 86.2% Good Loan issuance ($370.2M funded) vs. 13.8% Bad Loans ($65.53M).",
        "Implemented interactive dimensional slicers by State Address, Credit Grade (A through G), and Loan Purpose.",
        "Engineered summary, overview, and granular account-level drill-through pages for audit review."
      ],
      challenges: [
        "Reconciling charged-off loan recovery streams with historical write-down ledger entries.",
        "Formulating efficient DAX measures for dynamic debt-to-income (DTI) and interest rate aggregations."
      ],
      results: [
        { metric: "$473.1M", label: "Total loan repayment amount received tracked in real-time" },
        { metric: "86.2%", label: "Good loan portfolio ratio accurately classified" },
        { metric: "38.6K", label: "Total loan applications visualized with sub-second cross-filtering" }
      ]
    }
  },
  {
    slug: "pizza-sales-performance-analytics",
    title: "Pizza Sales & Revenue Intelligence Dashboard",
    tagline: "Operational sales performance and customer ordering intelligence dashboard analyzing $681.31K in revenue across 41,282 pizzas sold.",
    description: "End-to-end retail business intelligence report built in Power BI, analyzing hourly/daily order trends, product category contributions, pizza size preferences, and best/worst seller rankings.",
    category: "bi-solution",
    categoryLabel: "BI Solution",
    year: "2025",
    featured: true,
    imageUrl: "/project/pizza_analyst.png",
    liveUrl: "https://app.powerbi.com/groups/me/reports/69480826-d706-4e8f-a69b-28c437a9d7ea/83583d849c8f4e072f0c?experience=power-bi",
    tags: ["Power BI", "Sales Intelligence", "DAX", "Trend Analysis", "Retail Analytics", "Power Query"],
    details: {
      problem: "Restaurant management lacked centralized operational insights into peak ordering hours, high-margin category contributions, and stock requirements, resulting in staffing bottlenecks on weekends.",
      solution: "Engineered an interactive sales intelligence dashboard identifying Friday/Saturday evening volume surges (peak 2,927 orders), category breakdowns (Classic leading at 26.96%), and size preference distribution.",
      architecture: {
        overview: "Retail POS ingestion architecture: Point-of-Sale Transaction Log -> Order Item Normalization -> Sales Fact & Dimension Model -> Interactive Power BI Visuals.",
        components: [
          "POS Ingestion Layer: Cleanses and transforms 17,771 order line items spanning 15/Jan to 15/Dec.",
          "Temporal Trend Analyzer: Aggregates daily orders and monthly seasonality curves (peak in July: 1,935 orders).",
          "Product Mix Engine: Analyzes category percentage shares (Classic, Supreme, Chicken, Veggie) and size distribution.",
          "Executive Dashboard: Clean high-contrast UI with dynamic category slicers, date range sliders, and navigation panels."
        ],
        diagramNote: "POS Database -> Power Query Transformation -> Star Schema Sales Model -> DAX Metrics -> Executive Sales Dashboard"
      },
      technologies: [
        "Microsoft Power BI Service & Desktop",
        "DAX (Average Order Value, Slicing Percentages, Time Trends)",
        "Power Query ETL",
        "Data Modeling & Normalization",
        "Interactive UI/UX Design"
      ],
      implementation: [
        "Formulated key performance metrics: $681.31K Total Revenue, $38.34 Average Order Value, 41,282 Total Pizzas Sold.",
        "Constructed hourly and weekly surge models proving orders peak on Friday/Saturday evenings.",
        "Integrated best-seller and underperformer ranking sections to guide menu optimization and inventory purchase."
      ],
      challenges: [
        "Calculating accurate percentage share of sales across dynamic date and category filter selections in DAX.",
        "Designing an accessible, high-contrast operational layout that provides quick glanceability during kitchen rush hours."
      ],
      results: [
        { metric: "$681.3K", label: "Total revenue analyzed with full transaction auditability" },
        { metric: "45.8%", label: "Large size pizza share pinpointed as primary revenue driver" },
        { metric: "17.7K+", label: "Individual orders mapped across daily and monthly trend lines" }
      ]
    }
  }
];
