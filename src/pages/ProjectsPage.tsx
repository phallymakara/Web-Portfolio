import React, { useState } from 'react';
import { ProjectCategory } from '../types/project';
import { projects } from '../data/projects';
import { ProjectCard } from '../components/common/ProjectCard';

interface ProjectsPageProps {
  onSelectProject: (slug: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | ProjectCategory>('all');

  const categories: { id: 'all' | ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'ai-ml', label: 'AI / ML', count: projects.filter(p => p.category === 'ai-ml').length },
    { id: 'backend', label: 'Backend', count: projects.filter(p => p.category === 'backend').length },
    { id: 'full-stack', label: 'Full-Stack', count: projects.filter(p => p.category === 'full-stack').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="space-y-10 py-6">
      
      {/* Page Header */}
      <div className="space-y-4 pb-6 hairline-b">
        <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider block">
          CASE STUDIES & CODEBASES
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Projects & Architecture
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Detailed case studies across autonomous multi-agent pipelines, neural retrieval graphs, low-latency streaming backends, and full-stack systems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {categories.map(cat => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-mono transition-colors flex items-center gap-2 ${
                isActive
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium'
                  : 'border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] ${isActive ? 'text-zinc-300 dark:text-zinc-700' : 'text-zinc-600 dark:text-zinc-300'}`}>
                ({cat.count})
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.slug}
            project={project}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>

      {/* Bottom info banner */}
      <div className="p-5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 text-xs font-mono text-zinc-600 dark:text-zinc-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <span>Click on any project to view the complete architectural case study.</span>
        <span className="text-zinc-900 dark:text-zinc-100 font-semibold">
          Showing {filteredProjects.length} of {projects.length}
        </span>
      </div>

    </div>
  );
};
