import React, { useState } from 'react';
import { StackCategory } from '../types/stack';
import { stackGroups } from '../data/stack';
import { SectionHeading } from '../components/ui/SectionHeading';

export const StackPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | StackCategory>('all');

  const filteredGroups = activeCategory === 'all'
    ? stackGroups
    : stackGroups.filter(g => g.id === activeCategory);

  const categories: { id: 'all' | StackCategory; label: string }[] = [
    { id: 'all', label: 'All Technologies' },
    { id: 'ai-ml', label: 'AI / ML' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'infrastructure', label: 'Infrastructure' },
  ];

  return (
    <div className="space-y-12 py-6">
      
      {/* Page Header */}
      <div className="space-y-4 pb-6 hairline-b">
        <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider block">
          ENGINEERING TOOLCHAIN & RUNTIMES
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Technology Stack
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Runtimes, frameworks, and storage engines battle-tested across distributed production backends and neural reasoning graphs.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {categories.map(cat => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-mono transition-colors ${
                isActive
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium'
                  : 'border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Stack Categories & Grid */}
      <div className="space-y-12">
        {filteredGroups.map((group, groupIdx) => (
          <section key={group.id} className="space-y-6">
            <SectionHeading
              number={`0${groupIdx + 1} // ${group.title.toUpperCase()}`}
              title={group.title}
              subtitle={group.tagline}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {group.items.map((tech) => (
                <div
                  key={tech.name}
                  className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 flex flex-col justify-between space-y-4 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-semibold text-base text-zinc-900 dark:text-zinc-100">
                        {tech.name}
                      </h3>
                      <span className="font-mono text-xs px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
                        {tech.experienceYears}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300">
                        {tech.role}
                      </span>
                      <span className="text-zinc-300 dark:text-zinc-700">•</span>
                      <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                        {tech.proficiency}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>

                  {tech.librariesOrTools && tech.librariesOrTools.length > 0 && (
                    <div className="pt-3 hairline-t flex flex-wrap gap-1.5">
                      {tech.librariesOrTools.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-mono bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 px-2 py-0.5"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

    </div>
  );
};
