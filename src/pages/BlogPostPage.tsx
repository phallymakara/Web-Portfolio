import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { Badge } from '../components/ui/Badge';

interface BlogPostPageProps {
  slug: string;
  onBack: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug, onBack }) => {
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];

  return (
    <div className="space-y-12 py-6">
      
      {/* Back Button */}
      <div>
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus:outline-none"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to all articles</span>
        </button>
      </div>

      {/* Article Header */}
      <div className="space-y-4 pb-8 hairline-b">
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

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
          {post.title}
        </h1>

        <p className="text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed italic border-l-2 border-zinc-900 dark:border-zinc-100 pl-4 py-1">
          {post.excerpt}
        </p>
      </div>

      {/* Article Content */}
      <article className="prose dark:prose-invert max-w-none space-y-6 text-zinc-800 dark:text-zinc-200 text-base sm:text-lg leading-relaxed">
        {post.content.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </article>

      {/* Tags */}
      <div className="pt-8 hairline-t flex flex-wrap gap-2 items-center">
        <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 mr-2">Tags:</span>
        {post.tags.map(t => (
          <span key={t} className="text-xs font-mono px-2 py-1 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300">
            #{t}
          </span>
        ))}
      </div>

      {/* Bottom Back Button */}
      <div className="pt-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Articles</span>
        </button>
      </div>

    </div>
  );
};
