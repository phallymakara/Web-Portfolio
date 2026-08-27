import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { Badge } from '../components/ui/Badge';

interface BlogPageProps {
  onSelectPost: (slug: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onSelectPost }) => {
  return (
    <div className="space-y-12 py-6">
      
      {/* Page Header */}
      <div className="space-y-4 pb-6 hairline-b">
        <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider block">
          ENGINEERING ESSAYS & TECHNICAL WRITINGS
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Articles & Notes
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Deep dives on distributed consensus, deterministic AI agent guardrails, neural retrieval architectures, and systems performance.
        </p>
      </div>

      {/* Articles List */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="mono">{post.category}</Badge>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                  {post.date}
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300">
                  {post.readTime}
                </span>
              </div>
            </div>

            <button
              onClick={() => onSelectPost(post.slug)}
              className="text-left group block mb-3 focus:outline-none"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors flex items-center gap-2">
                <span>{post.title}</span>
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-500" />
              </h2>
            </button>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <div className="pt-4 hairline-t flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectPost(post.slug)}
                className="text-xs font-mono text-zinc-900 dark:text-zinc-100 hover:underline inline-flex items-center gap-1 focus:outline-none"
              >
                <span>Read Article</span>
                <span>→</span>
              </button>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
