import { NowData } from '../types/now';

export const nowData: NowData = {
  lastUpdated: "August 2026",
  location: "Phnom Penh, Cambodia",
  currentFocus: "Architecting deterministic multi-agent state machines and sub-10ms neural retrieval pipelines.",
  building: [
    {
      title: "Nexus Orchestrator V2",
      subtitle: "Autonomous agent execution engine",
      description: "Refactoring the graph compilation step in Rust to achieve sub-millisecond state transitions and zero-copy context caching.",
      link: {
        label: "View Repository",
        url: "https://github.com/phallymakara/nexus-agent-engine"
      },
      tags: ["Rust", "AI Agents", "State Machine"]
    },
    {
      title: "Open Semantic Indexer",
      subtitle: "Local-first hybrid vector & BM25 CLI",
      description: "Building an open-source command line tool to index personal markdown notes with instant local embedding search via ONNX runtime.",
      tags: ["Go", "CLI", "Search"]
    }
  ],
  learning: [
    {
      title: "Formal Verification for Agentic Workflows",
      subtitle: "TLA+ & Alloy Model Checking",
      description: "Studying how formal specification can prevent infinite state loops and deadlock states in multi-agent asynchronous debate patterns.",
      tags: ["Formal Methods", "TLA+", "Distributed Systems"]
    },
    {
      title: "eBPF Kernel Probing",
      subtitle: "Linux Network Trace Optimization",
      description: "Deep diving into eBPF filters for zero-overhead HTTP header inspection and network socket packet filtering.",
      tags: ["eBPF", "Linux", "C"]
    }
  ],
  exploring: [
    {
      title: "Mechanical Watchmaking & Horology",
      subtitle: "Analog precision engineering",
      description: "Appreciating the craft of escapement mechanisms, gear trains, and micro-mechanical precision as an analog antidote to software complexity.",
      tags: ["Horology", "Design", "Mechanics"]
    },
    {
      title: "Specialty Coffee Brewing Ratios",
      subtitle: "Extraction chemistry & TDS measurements",
      description: "Calibrating grind particle distributions and thermal extraction curves for washed Ethiopian and Kenyan single-origin beans.",
      tags: ["Coffee", "Chemistry", "Ritual"]
    }
  ]
};
