import React from 'react';

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  action,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-6 hairline-b ${className}`}>
      <div>
        {number && (
          <span className="block font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider mb-1">
            {number}
          </span>
        )}
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className="mt-3 sm:mt-0 font-mono text-xs">
          {action}
        </div>
      )}
    </div>
  );
};
