import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: "deterministic-guardrails-for-ai-agents",
    title: "Building Deterministic Guardrails for Probabilistic AI Agents",
    excerpt: "Why LLMs in production need rigid state machines, schema validation gates, and transactional rollback mechanisms to avoid infinite tool loops.",
    date: "Aug 14, 2026",
    readTime: "7 min read",
    category: "AI Engineering",
    tags: ["AI Agents", "LangGraph", "Python", "Reliability"],
    content: [
      "Large Language Models (LLMs) are stochastic pattern engines. When tasked with autonomous multi-step reasoning, relying purely on conversational prompting invariably leads to failure states: subtle hallucinated parameters, recursive tool calls, and silent data corruption.",
      "In this post, we explore the architectural pattern of 'Deterministic Fencing'—wrapping agentic reasoning cycles inside strict state machines with Pydantic V2 validation gates and transactional rollback checkpoints.",
      "The key insight is separating the reasoning planner from the execution sandbox. The planner proposes a payload, but the execution gate inspects AST constraints, verifies balance sheets, and signs off on state mutations before committing changes to the primary database.",
      "By treating the LLM as an untrusted advisory layer rather than an authoritative executor, we can achieve 99.9% operational reliability in production enterprise automation."
    ]
  },
  {
    slug: "hybrid-rag-dense-sparse-fusion",
    title: "Why Pure Vector Search Fails in Enterprise and How Hybrid RAG Fixes It",
    excerpt: "Combining Qdrant dense embeddings with Go BM25 sparse inverted indices and ONNX cross-encoders for sub-80ms semantic retrieval.",
    date: "Jun 28, 2026",
    readTime: "9 min read",
    category: "Search & Systems",
    tags: ["RAG", "Go", "Vector Search", "Qdrant"],
    content: [
      "In early RAG demos, semantic cosine similarity over dense vector embeddings feels like magic. But in production enterprise systems, pure dense search frequently stumbles over SKU numbers, exact technical identifiers, and legal clause references.",
      "The solution is not larger embedding models—it is hybrid retrieval combining dense vector similarity with sparse BM25 token frequencies via Reciprocal Rank Fusion (RRF).",
      "We benchmarked a dual-stage retrieval engine written in Go with Qdrant vector backend, followed by an in-process ONNX cross-encoder re-ranking pass. The result: a 34% boost in context precision and P95 retrieval latency under 70ms."
    ]
  },
  {
    slug: "zero-copy-append-logs-in-rust",
    title: "Zero-Copy Commit Logs: Lessons from Building a Message Broker in Rust",
    excerpt: "An engineering post-mortem on memory-mapped files, page cache mechanics, and async I/O with Tokio for high-throughput streaming.",
    date: "Apr 02, 2026",
    readTime: "11 min read",
    category: "Systems",
    tags: ["Rust", "Distributed Systems", "Performance", "Tokio"],
    content: [
      "When building event-streaming infrastructure, CPU time is rarely spent on compute—it is consumed copying bytes across memory boundaries between kernel sockets, user buffers, and disk caches.",
      "By combining memory-mapped file segments with Rust's ownership model and FlatBuffers zero-allocation deserialization, we eliminated all intermediate buffer allocations.",
      "This article breaks down the segment rolling mechanics, Raft log compaction strategies, and OS page cache tuning required to sustain 450,000 messages per second on standard cloud VMs."
    ]
  }
];
