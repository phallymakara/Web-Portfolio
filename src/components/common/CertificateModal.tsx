import React, { useEffect } from 'react';
import { X, Download, ArrowUpRight, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { CertificateItem } from '../../types/experience';

interface CertificateModalProps {
  cert: CertificateItem | null;
  theme: 'dark' | 'light';
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ cert, theme, onClose }) => {
  useEffect(() => {
    if (!cert) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    // Lock background scroll while modal is active
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  const activeThumbnail =
    theme === 'dark' && cert.imageUrlDark ? cert.imageUrlDark : (cert.imageUrl || cert.imageUrlDark);
  const activeFileUrl =
    theme === 'dark' && cert.fileUrlDark ? cert.fileUrlDark : (cert.fileUrl || cert.fileUrlDark || cert.credentialUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-zinc-200 dark:border-zinc-800 sticky top-0 bg-white/95 dark:bg-zinc-900/95 backdrop-blur z-10">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-zinc-100">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                {cert.issuer}
              </span>
              <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
                {cert.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Certificate Preview Frame */}
          <div className="relative aspect-[16/10] w-full rounded-lg bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-center justify-center shadow-inner">
            {activeThumbnail ? (
              <img
                src={activeThumbnail}
                alt={cert.title}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-6 text-center">
                <Award className="w-12 h-12 text-zinc-400 mb-2" />
                <p className="text-sm font-mono text-zinc-500">{cert.title}</p>
              </div>
            )}
          </div>

          {/* Details & Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-lg bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200 dark:border-zinc-800 font-mono text-xs">
            <div>
              <span className="text-zinc-400 block mb-1">ISSUER</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">{cert.issuer}</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">DATE / PERIOD</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">{cert.issueDate || 'Verified'}</span>
            </div>
            <div>
              <span className="text-zinc-400 block mb-1">TYPE</span>
              <span className="text-zinc-900 dark:text-zinc-100 font-medium">{cert.type || 'Certification'}</span>
            </div>
          </div>

          {/* Description */}
          {cert.description && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Course Curriculum & Competency
              </h4>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {cert.description}
              </p>
            </div>
          )}

          {/* Skills Covered */}
          {cert.skills && cert.skills.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Verified Technical Skills
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/70 sticky bottom-0">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            Close
          </button>

          <div className="flex items-center gap-2">
            {activeFileUrl && (
              <>
                <a
                  href={activeFileUrl}
                  download
                  className="px-3.5 py-2 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-mono font-medium transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>

                <a
                  href={activeFileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 text-xs font-mono font-medium transition-colors flex items-center gap-1.5 shadow"
                >
                  <span>Open Full PDF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
