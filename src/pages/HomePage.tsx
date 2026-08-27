import React from 'react';
import { Download, Mail, ArrowRight, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import { stackGroups } from '../data/stack';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/common/ProjectCard';
import { NavItem } from '../components/layout/Header';

interface HomePageProps {
  onNavigate: (tab: NavItem, slug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const featuredProjects = projects.filter(p => p.featured).slice(0, 3);
  const coreStack = stackGroups.flatMap(g => g.items.slice(0, 2));

  return (
    <div className="space-y-20">
      
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
      ────────────────────────────────────────────────────────────── */}
      <section className="pt-6 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Bio and CTA (7 cols on desktop) */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6">
            
            {/* Title & Introduction */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
                {profile.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                {profile.role} — {profile.location}
              </p>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {profile.shortBio}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors focus:outline-none"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </button>

              <a
                href="#download-cv"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Curriculum Vitae (PDF) would download in a production deployment.');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Profile Photo (5 cols on desktop) */}
          <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end">
            <div className="w-full max-w-[280px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-center">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  onError={(e) => {
                    // Fallback to minimal editorial placeholder if image file not yet present
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.placeholder-fallback')) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'placeholder-fallback text-center p-6 space-y-2';
                      placeholder.innerHTML = `
                        <div class="w-16 h-16 mx-auto bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-mono font-bold text-xl">
                          MP
                        </div>
                        <div class="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                          public/images/profile.jpg
                        </div>
                      `;
                      parent.appendChild(placeholder);
                    }
                  }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Quick Metrics / Philosophy Snippet */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 hairline-t">
          <div className="p-3 bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
            <span className="block font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase">Experience</span>
            <span className="font-mono font-bold text-lg text-zinc-900 dark:text-zinc-100">6+ Years</span>
          </div>
          <div className="p-3 bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
            <span className="block font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase">Focus</span>
            <span className="font-mono font-bold text-lg text-zinc-900 dark:text-zinc-100">AI & Web</span>
          </div>
          <div className="p-3 bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
            <span className="block font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase">Approach</span>
            <span className="font-mono font-bold text-lg text-zinc-900 dark:text-zinc-100">End-to-End</span>
          </div>
          <div className="p-3 bg-zinc-50/60 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800">
            <span className="block font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase">Location</span>
            <span className="font-mono font-bold text-lg text-zinc-900 dark:text-zinc-100">UTC+7</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. SELECTED PROJECTS
      ────────────────────────────────────────────────────────────── */}
      <section>
        <SectionHeading
          number="01 // SELECTED PROJECTS"
          title="Featured Architecture & Engineering"
          subtitle="A curated selection of multi-agent systems, semantic retrieval engines, and distributed commit logs."
          action={
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              <span>View All ({projects.length})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          }
        />

        <div className="grid grid-cols-1 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onSelectProject={(slug) => onNavigate('projects', slug)}
            />
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. SHORT ABOUT
      ────────────────────────────────────────────────────────────── */}
      <section>
        <SectionHeading
          number="02 // SHORT ABOUT"
          title="Engineering Philosophy & Trajectory"
          subtitle="Simplicity, explicit state machines, and high operational reliability."
          action={
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              <span>Read Full Background</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
            <p>
              {profile.about.introduction.body[0]}
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              {profile.about.introduction.body[1]}
            </p>
          </div>

          <div className="border border-zinc-200 dark:border-zinc-800 p-5 bg-zinc-50/50 dark:bg-zinc-900/30 space-y-3">
            <span className="block text-xs font-mono text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
              Core Principles
            </span>
            <ul className="space-y-2 text-xs font-mono text-zinc-700 dark:text-zinc-300">
              <li className="flex items-start gap-2">
                <span className="text-zinc-600 dark:text-zinc-300">•</span>
                <span>Deterministic agent guardrails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-600 dark:text-zinc-300">•</span>
                <span>Sub-millisecond latency focus</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-600 dark:text-zinc-300">•</span>
                <span>Zero bloated container hierarchy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-zinc-600 dark:text-zinc-300">•</span>
                <span>Type-safe end-to-end guarantees</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. STACK PREVIEW
      ────────────────────────────────────────────────────────────── */}
      <section>
        <SectionHeading
          number="03 // STACK PREVIEW"
          title="Core Technologies & Frameworks"
          subtitle="Tools and runtimes used in daily production systems."
          action={
            <button
              onClick={() => onNavigate('stack')}
              className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 hover:underline"
            >
              <span>Explore Full Stack</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {coreStack.map((tech) => (
            <div
              key={tech.name}
              className="p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 uppercase">
                  {tech.category}
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                  {tech.experienceYears}
                </span>
              </div>
              <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                {tech.name}
              </h4>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 line-clamp-2">
                {tech.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. CONTACT CTA
      ────────────────────────────────────────────────────────────── */}
      <section className="border border-zinc-200 dark:border-zinc-800 p-8 sm:p-10 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider">
              04 // CONTACT CTA
            </span>
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Have a project or architectural challenge?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-xl">
              I am open to consulting engagements, distributed backend design, and high-reliability AI agent pipelines.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-mono font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors focus:outline-none"
            >
              <span>Initiate Discussion</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
