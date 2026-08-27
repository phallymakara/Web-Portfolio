import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { nowData } from '../data/now';
import { SectionHeading } from '../components/ui/SectionHeading';

export const NowPage: React.FC = () => {
  return (
    <div className="space-y-16 py-6">
      
      {/* Page Header */}
      <div className="space-y-4 pb-6 hairline-b">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-300">
          <Clock className="w-3.5 h-3.5" />
          <span>Last Updated: {nowData.lastUpdated}</span>
          <span>•</span>
          <span>{nowData.location}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          What I'm Doing Now
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          This is a <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" className="underline hover:text-zinc-900 dark:hover:text-zinc-100">/now page</a> inspired by Derek Sivers. It details my current active priorities, codebases, and intellectual rabbit holes.
        </p>
      </div>

      {/* Focus banner */}
      <div className="p-5 border-l-2 border-zinc-900 dark:border-zinc-100 border-r border-t border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
        <span className="block font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase mb-1">
          Current Primary Focus
        </span>
        <p className="text-base text-zinc-900 dark:text-zinc-100 font-medium">
          {nowData.currentFocus}
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. BUILDING
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="01 // BUILDING"
          title="Active Projects & Codebases"
          subtitle="Software being architected, prototyped, or maintained right now."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nowData.building.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between space-y-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 hairline-t flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1">
                  {item.tags.map((t) => (
                    <span key={t} className="text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-2 py-0.5">
                      {t}
                    </span>
                  ))}
                </div>
                {item.link && (
                  <a
                    href={item.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono text-zinc-900 dark:text-zinc-100 hover:underline"
                  >
                    <span>{item.link.label}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. LEARNING
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="02 // LEARNING"
          title="Theoretical Studies & Deep Dives"
          subtitle="Concepts, specifications, and whitepapers currently on my reading list."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nowData.learning.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between space-y-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 hairline-t flex flex-wrap gap-1">
                {item.tags.map((t) => (
                  <span key={t} className="text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. EXPLORING
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="03 // EXPLORING"
          title="Analog Hobbies & Curiosities"
          subtitle="Non-software disciplines that sharpen systemic thinking and focus."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nowData.exploring.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 flex flex-col justify-between space-y-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 block mb-1">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 hairline-t flex flex-wrap gap-1">
                {item.tags.map((t) => (
                  <span key={t} className="text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
