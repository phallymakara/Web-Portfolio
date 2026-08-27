import React from 'react';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { Project } from '../../types/project';
import { Badge } from '../ui/Badge';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
}) => {
  return (
    <div className="group border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-600 hover:bg-zinc-50/40 dark:hover:bg-zinc-900/30 transition-all p-5 sm:p-6 flex flex-col justify-between">
      
      {/* Card Header: Metadata */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge variant="mono">{project.categoryLabel}</Badge>
            <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
              {project.year}
            </span>
          </div>

          {/* External links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View source on GitHub"
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live deployment"
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors p-1"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {/* Title */}
        <button
          onClick={() => onSelectProject(project.slug)}
          className="text-left group/title block mb-2 focus:outline-none"
        >
          <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover/title:text-zinc-700 dark:group-hover/title:text-zinc-300 transition-colors flex items-center gap-1.5">
            <span>{project.title}</span>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/title:opacity-100 transition-opacity text-zinc-500" />
          </h3>
        </button>

        {/* Tagline / summary */}
        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
          {project.tagline}
        </p>

        {/* Key result metric snippet if present */}
        {project.details.results && project.details.results.length > 0 && (
          <div className="my-3 py-2 px-3 bg-zinc-50 dark:bg-zinc-900/60 border-l-2 border-zinc-900 dark:border-zinc-100 text-xs font-mono">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">
              {project.details.results[0].metric}
            </span>
            <span className="text-zinc-600 dark:text-zinc-400 ml-1.5">
              — {project.details.results[0].label}
            </span>
          </div>
        )}
      </div>

      {/* Card Footer: Tags & Action */}
      <div className="pt-4 mt-2 hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-1.5 py-0.5"
            >
              #{tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] font-mono text-zinc-600 dark:text-zinc-300 px-1">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        <button
          onClick={() => onSelectProject(project.slug)}
          className="text-xs font-mono font-medium text-zinc-900 dark:text-zinc-100 hover:underline inline-flex items-center gap-1 self-start sm:self-auto focus:outline-none"
        >
          <span>Deep Dive</span>
          <span>→</span>
        </button>
      </div>
    </div>
  );
};
