import React from 'react';

interface SectionHeadingProps {
  number?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  action,
  className = '',
  hasBorder = true,
}) => {
  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between pb-4 mb-6 ${hasBorder ? 'hairline-b' : ''} ${className}`}>
      <div>
        {number && (
          <span className="block font-mono text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-300 uppercase tracking-wider mb-1 font-medium">
            {number}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1.5 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className="mt-3 sm:mt-0 font-mono text-xs sm:text-sm">
          {action}
        </div>
      )}
    </div>
  );
};
