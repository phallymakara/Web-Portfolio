import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Menu, X, Globe, Check } from 'lucide-react';
import { profile } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export type NavItem = 'home' | 'about' | 'projects' | 'stack' | 'work' | 'now' | 'blog' | 'contact';

interface HeaderProps {
  activeTab: string;
  onNavigate: (tab: NavItem, param?: string) => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onNavigate,
  theme,
  onToggleTheme,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setShowLangMenu(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowLangMenu(false);
      }
    };

    if (showLangMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showLangMenu]);

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['education', 'skills', 'experience', 'projects', 'contact'];
      const scrollPos = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'education', label: t.nav.education },
    { id: 'skills', label: t.nav.skills },
    { id: 'experience', label: t.nav.experience },
    { id: 'projects', label: t.nav.projects },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (activeTab !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    setMobileMenuOpen(false);
    if (activeTab !== 'home') {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLanguage = (selectedLang: 'en' | 'km') => {
    setLang(selectedLang);
    setShowLangMenu(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md hairline-b">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={handleLogoClick}
          aria-label={profile.name}
          className="group flex items-center focus:outline-none"
        >
          <div className="w-8 h-8 flex items-center justify-center font-mono font-bold text-sm bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 transition-transform group-hover:scale-95">
            MP
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-mono transition-all relative ${
                  isActive
                    ? 'text-zinc-950 dark:text-white font-medium bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right actions: Language Switcher Popup + Theme Toggle + Mobile Toggle */}
        <div className="flex items-center gap-2">
          {/* Language Switch Icon & Popup */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              aria-label="Select language"
              aria-expanded={showLangMenu}
              title="Select language / ជ្រើសរើសភាសា"
              className="p-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
            >
              <Globe className="w-4 h-4" />
            </button>

            {/* Language Selection Popup */}
            {showLangMenu && (
              <div className="absolute right-0 top-full mt-2 w-48 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-1.5 shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 space-y-1">
                {/* English Option */}
                <button
                  onClick={() => handleSelectLanguage('en')}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-mono text-left transition-colors ${
                    lang === 'en'
                      ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>English</span>
                    <span className="text-[10px] text-zinc-400 font-normal">(EN)</span>
                  </div>
                  {lang === 'en' && <Check className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />}
                </button>

                {/* Khmer Option */}
                <button
                  onClick={() => handleSelectLanguage('km')}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-mono text-left transition-colors ${
                    lang === 'km'
                      ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">ភាសាខ្មែរ</span>
                    <span className="text-[10px] text-zinc-400 font-normal">(KH)</span>
                  </div>
                  {lang === 'km' && <Check className="w-3.5 h-3.5 text-zinc-900 dark:text-zinc-100" />}
                </button>
              </div>
            )}
          </div>

          {/* Color Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="p-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 border border-zinc-200 dark:border-zinc-800 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden hairline-b bg-white dark:bg-zinc-950 px-4 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2 text-sm font-mono transition-colors flex items-center justify-between ${
                  isActive
                    ? 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 font-medium'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-zinc-400 text-xs">→</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
