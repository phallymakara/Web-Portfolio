import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from '../components/ui/SectionHeading';
import { NavItem } from '../components/layout/Header';

interface AboutPageProps {
  onNavigate: (tab: NavItem) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-6">
      
      {/* Page Header */}
      <div className="space-y-4 pb-6 hairline-b">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          About & Philosophy
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Systems thinker, AI systems engineer, and advocate for deterministic code with zero hidden magic.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. INTRODUCTION
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="01 // INTRODUCTION"
          title="Overview & Focus"
        />

        <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-base max-w-3xl">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            {profile.about.introduction.headline}
          </h3>
          {profile.about.introduction.body.map((para, idx) => (
            <p key={idx} className="text-sm sm:text-base leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. BACKGROUND
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="02 // BACKGROUND"
          title="Career Journey & Evolution"
        />

        <div className="space-y-6 max-w-3xl">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
            {profile.about.background.headline}
          </h3>

          <div className="space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
            {profile.about.background.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            <div className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <span className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 uppercase">Primary Focus</span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-1 block">AI Agents & Backends</span>
            </div>
            <div className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <span className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 uppercase">Architecture</span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-1 block">Event-Driven & RAG</span>
            </div>
            <div className="p-4 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30">
              <span className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 uppercase">Location & Zone</span>
              <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mt-1 block">Phnom Penh (UTC+7)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. ENGINEERING PHILOSOPHY
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="03 // ENGINEERING PHILOSOPHY"
          title="Core Design Principles"
          subtitle="Non-negotiable heuristics that guide every technical decision."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profile.about.philosophy.map((item) => (
            <div
              key={item.number}
              className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 tracking-wider">
                  PRINCIPLE // {item.number}
                </span>
                <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-1 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Actions */}
      <div className="pt-8 hairline-t flex flex-wrap items-center gap-4">
        <button
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors focus:outline-none"
        >
          <Mail className="w-3.5 h-3.5" />
          <span>Work With Me</span>
        </button>

        <button
          onClick={() => onNavigate('projects')}
          className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
        >
          <span>View Engineering Projects</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
