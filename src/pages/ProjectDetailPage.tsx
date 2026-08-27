import React from 'react';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, CheckCircle2, AlertTriangle, Terminal } from 'lucide-react';
import { projects } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { SectionHeading } from '../components/ui/SectionHeading';

interface ProjectDetailPageProps {
  slug: string;
  onBack: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug, onBack }) => {
  const project = projects.find(p => p.slug === slug) || projects[0];

  return (
    <div className="space-y-12 py-6">
      
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all projects</span>
        </button>
      </div>

      {/* Hero / Meta Header */}
      <div className="space-y-4 pb-8 hairline-b">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge variant="mono">{project.categoryLabel}</Badge>
          <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
            Year: {project.year}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
            Production Case Study
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-3xl">
          {project.tagline}
        </p>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demonstration</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. RESULTS SUMMARY CALLOUT
      ────────────────────────────────────────────────────────────── */}
      <section className="border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 p-6 sm:p-8">
        <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider block mb-4">
          ENGINEERING IMPACT & BENCHMARKS
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.details.results.map((res, idx) => (
            <div key={idx} className="space-y-1">
              <span className="font-mono text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-zinc-100 block">
                {res.metric}
              </span>
              <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400 block">
                {res.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. PROBLEM & SOLUTION
      ────────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Problem */}
        <div className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950 space-y-3">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
            <AlertTriangle className="w-4 h-4 text-amber-500" />
            <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">
              01 // The Problem
            </h3>
          </div>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.details.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950 space-y-3">
          <div className="flex items-center gap-2 text-zinc-900 dark:text-zinc-100">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <h3 className="font-mono text-xs uppercase tracking-wider font-semibold">
              02 // The Architectural Solution
            </h3>
          </div>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.details.solution}
          </p>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          3. ARCHITECTURE OVERVIEW
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="03 // ARCHITECTURE"
          title="System Topology & Components"
        />

        <div className="space-y-4">
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
            {project.details.architecture.overview}
          </p>

          {project.details.architecture.diagramNote && (
            <div className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-900 text-zinc-100 dark:bg-zinc-900 dark:text-zinc-100 font-mono text-xs overflow-x-auto">
              <div className="flex items-center gap-2 text-zinc-400 mb-1">
                <Terminal className="w-3.5 h-3.5" />
                <span>DATA FLOW PIPELINE</span>
              </div>
              <code>{project.details.architecture.diagramNote}</code>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {project.details.architecture.components.map((comp, idx) => (
              <div key={idx} className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/40 dark:bg-zinc-900/20 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-mono">
                <span className="text-zinc-600 dark:text-zinc-300 font-semibold block mb-1">
                  MODULE {idx + 1}
                </span>
                {comp}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. TECHNOLOGIES
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="04 // TECHNOLOGIES"
          title="Technology Stack & Tooling"
        />

        <div className="flex flex-wrap gap-2">
          {project.details.technologies.map((tech, idx) => (
            <div
              key={idx}
              className="px-3 py-2 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 font-mono text-xs text-zinc-800 dark:text-zinc-200"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. IMPLEMENTATION HIGHLIGHTS
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="05 // IMPLEMENTATION"
          title="Key Engineering Decisions"
        />

        <div className="space-y-3">
          {project.details.implementation.map((item, idx) => (
            <div
              key={idx}
              className="p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
            >
              <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 pt-0.5">
                0{idx + 1}.
              </span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. CHALLENGES & OVERCOMING THEM
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="06 // CHALLENGES"
          title="Technical Roadblocks & Mitigations"
        />

        <div className="space-y-3">
          {project.details.challenges.map((challenge, idx) => (
            <div
              key={idx}
              className="p-4 border-l-2 border-zinc-900 dark:border-zinc-100 border-r border-t border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
            >
              <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 block mb-1">
                CHALLENGE // 0{idx + 1}
              </span>
              {challenge}
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Back Button */}
      <div className="pt-8 hairline-t flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Projects</span>
        </button>

        <a
          href={project.githubUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 inline-flex items-center gap-1"
        >
          <span>Inspect on GitHub</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

    </div>
  );
};
