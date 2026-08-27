import React from 'react';
import { ArrowUpRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <footer className="w-full hairline-t mt-20 bg-white dark:bg-zinc-950 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-12">
          
          {/* Col 1: Bio */}
          <div className="space-y-3 max-w-sm">
            <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 block">
              {profile.name}
            </span>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {lang === 'km' ? t.hero.bioLine1 : profile.tagline}
            </p>
            <p className="text-xs font-mono text-zinc-600 dark:text-zinc-300">
              {lang === 'km' ? t.hero.location : profile.location}
            </p>
          </div>

          {/* Col 2: Network (Two columns) */}
          <div className="space-y-3">
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300 uppercase tracking-wider block">
              {t.footer.network}
            </span>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5 text-sm font-mono">
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={profile.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Twitter / X</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 hairline-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600 dark:text-zinc-300">
          <div>
            © {new Date().getFullYear()} {profile.name}. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};
