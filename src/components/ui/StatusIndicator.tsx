import React from 'react';

interface StatusIndicatorProps {
  label?: string;
  pulse?: boolean;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  label = "Available for projects",
  pulse = true,
}) => {
  return (
    <div className="inline-flex items-center gap-2 px-2.5 py-1 text-xs font-mono tracking-tight text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span>{label}</span>
    </div>
  );
};
