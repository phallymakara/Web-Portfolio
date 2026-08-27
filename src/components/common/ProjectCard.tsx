import React from 'react';
import { Github, ExternalLink, Layers } from 'lucide-react';
import { Project } from '../../types/project';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
  onSelectProject?: (slug: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
}) => {
  const { t } = useLanguage();

  return (
    <div
      className="group relative border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex flex-col overflow-hidden"
    >
      {/* 1. Project Image Preview with Hover Reveal Controls */}
      <div className="relative aspect-[16/9] sm:aspect-[16/8.5] w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden">
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Editorial Architecture Graphic Mockup */
          <div className="w-full h-full p-6 flex flex-col justify-between bg-gradient-to-br from-zinc-50 via-zinc-100/70 to-zinc-200/50 dark:from-zinc-950 dark:via-zinc-900/80 dark:to-zinc-900/40 relative">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>

            {/* Architecture Node Visual Graphic */}
            <div className="my-auto flex items-center justify-center gap-3">
              <div className="p-3 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm flex items-center gap-2 group-hover:scale-105 transition-transform">
                <Layers className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 truncate max-w-[140px] sm:max-w-[200px]">
                  {project.title}
                </span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500 text-center">
              <span>Preview</span>
            </div>
          </div>
        )}

        {/* Hover Action Overlay with "View Source Code" Button */}
        <div className="absolute inset-0 bg-zinc-950/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center justify-center p-3 gap-2 flex-wrap z-20">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono font-medium bg-white text-zinc-900 hover:bg-zinc-100 shadow-md transition-transform hover:scale-105 focus:outline-none"
            >
              <Github className="w-3 h-3" />
              <span>{t.sections.viewSourceCode}</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] font-mono font-medium border border-zinc-500 bg-zinc-900/90 text-white hover:bg-zinc-900 shadow-md transition-transform hover:scale-105 focus:outline-none"
            >
              <ExternalLink className="w-3 h-3" />
              <span>{t.sections.liveDemo}</span>
            </a>
          )}
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow space-y-2">
        {/* Title */}
        <h3 className="text-sm sm:text-[15px] font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2">
          {project.description || project.tagline}
        </p>
      </div>
    </div>
  );
};
