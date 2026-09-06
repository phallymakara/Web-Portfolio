import React, { useState, useRef, useEffect } from 'react';
import { Award, ArrowUpRight, FileText } from 'lucide-react';
import { CertificateItem } from '../../types/experience';

interface LazyCertificateCardProps {
  cert: CertificateItem;
  theme: 'dark' | 'light';
  onSelect: (cert: CertificateItem) => void;
  previewLabel?: string;
}

export const LazyCertificateCard: React.FC<LazyCertificateCardProps> = ({
  cert,
  theme,
  onSelect,
  previewLabel = 'Certificate Preview',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Dynamic theme-based asset selection
  const activeThumbnail =
    theme === 'dark' && cert.imageUrlDark ? cert.imageUrlDark : (cert.imageUrl || cert.imageUrlDark);
  const activeFileUrl =
    theme === 'dark' && cert.fileUrlDark ? cert.fileUrlDark : (cert.fileUrl || cert.fileUrlDark || cert.credentialUrl);

  // High-performance IntersectionObserver for lazy asset loading
  useEffect(() => {
    if (!cardRef.current) return;

    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '250px 0px', // Preload slightly before scrolling into view
        threshold: 0.01,
      }
    );

    observer.observe(cardRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="group border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-600 hover:-translate-y-1 hover:scale-[1.012] hover:shadow-lg transition-all duration-300 ease-out flex flex-col overflow-hidden text-left"
    >
      {/* Thumbnail Frame */}
      <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-center justify-center">
        {/* Placeholder / Loading Skeleton */}
        {(!isInView || (!isLoaded && !hasError)) && (
          <div className="absolute inset-0 bg-zinc-200/60 dark:bg-zinc-800/60 animate-pulse flex items-center justify-center">
            <Award className="w-6 h-6 text-zinc-400 dark:text-zinc-600 animate-pulse" />
          </div>
        )}

        {/* Lazy-loaded optimized thumbnail */}
        {isInView && activeThumbnail && !hasError ? (
          <img
            src={activeThumbnail}
            alt={cert.title}
            loading="lazy"
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ) : null}

        {/* Fallback frame if no thumbnail or on load error */}
        {(!activeThumbnail || hasError) && (
          <div className="w-full h-full border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-950/60 flex flex-col items-center justify-center p-3 text-center transition-colors group-hover:border-zinc-400 dark:group-hover:border-zinc-500">
            <div className="w-8 h-8 rounded-full bg-zinc-200/80 dark:bg-zinc-800 flex items-center justify-center mb-1.5 text-zinc-600 dark:text-zinc-300 group-hover:scale-110 transition-transform">
              <Award className="w-4 h-4" />
            </div>
            <span className="text-xs font-mono font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider block line-clamp-1">
              {cert.title}
            </span>
            <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
              {previewLabel}
            </span>
          </div>
        )}

        {/* Hover Action Overlay */}
        <div className="absolute inset-0 bg-zinc-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-2 backdrop-blur-[2px]">
          <button
            type="button"
            onClick={() => onSelect(cert)}
            className="px-3 py-1.5 rounded-md bg-white text-zinc-900 text-xs font-mono font-medium shadow hover:bg-zinc-100 transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Inspect</span>
          </button>

          {activeFileUrl && (
            <a
              href={activeFileUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-2.5 py-1.5 rounded-md bg-zinc-900/90 text-white text-xs font-mono font-medium shadow hover:bg-zinc-800 transition-colors flex items-center gap-1 border border-zinc-700"
              title="Open direct PDF"
            >
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>

      {/* Content Details */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {cert.issuer}
            </span>
            {cert.issueDate && (
              <span className="text-[11px] font-mono text-zinc-400 dark:text-zinc-500">
                {cert.issueDate}
              </span>
            )}
          </div>

          <h4
            onClick={() => onSelect(cert)}
            className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors leading-snug cursor-pointer line-clamp-2"
          >
            {cert.title}
          </h4>
        </div>

        {/* Skills preview tags */}
        {cert.skills && cert.skills.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-900">
            {cert.skills.slice(0, 3).map((skill, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-300"
              >
                {skill}
              </span>
            ))}
            {cert.skills.length > 3 && (
              <span className="text-[10px] font-mono px-1 py-0.5 text-zinc-400 dark:text-zinc-500">
                +{cert.skills.length - 3}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
