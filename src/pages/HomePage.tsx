import React, { useState, useRef, useEffect } from 'react';
import { Download, Mail, ArrowRight, ArrowUpRight, MapPin, GraduationCap, Briefcase, Award, Copy, Check, X } from 'lucide-react';
import { profile } from '../data/profile';
import { experience, education, certificates } from '../data/experience';
import { projects } from '../data/projects';
import { skillStackItems } from '../data/stack';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ProjectCard } from '../components/common/ProjectCard';
import { ContactForm } from '../components/common/ContactForm';
import { NavItem } from '../components/layout/Header';
import { useLanguage } from '../context/LanguageContext';

interface HomePageProps {
  onNavigate: (tab: NavItem, slug?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeCertCategory, setActiveCertCategory] = useState<'all' | 'ai-ml' | 'web' | 'data' | 'design'>('all');
  const [activeStackCategory, setActiveStackCategory] = useState<'all' | 'ai-ml' | 'languages' | 'databases' | 'tools'>('all');
  const [activeProjectCategory, setActiveProjectCategory] = useState<'all' | 'ai-agents' | 'ai-ml' | 'backend' | 'full-stack'>('all');
  const popupRef = useRef<HTMLDivElement>(null);

  const certCategories = [
    { id: 'all', label: t.sections.certFilterAll },
    { id: 'ai-ml', label: t.sections.certFilterAiMl },
    { id: 'web', label: t.sections.certFilterWeb },
    { id: 'data', label: t.sections.certFilterData },
    { id: 'design', label: t.sections.certFilterDesign },
  ];

  const filteredCertificates = activeCertCategory === 'all'
    ? certificates
    : certificates.filter(c => c.category === activeCertCategory);

  const stackCategories = [
    { id: 'all', label: t.sections.filterAll },
    { id: 'ai-ml', label: t.sections.filterAiMl },
    { id: 'languages', label: t.sections.filterLanguages },
    { id: 'databases', label: t.sections.filterDatabases },
    { id: 'tools', label: t.sections.filterTools },
  ];

  const filteredSkills = activeStackCategory === 'all'
    ? skillStackItems
    : skillStackItems.filter(s => s.category === activeStackCategory);

  const projectCategories = [
    { id: 'all', label: t.sections.projectFilterAll },
    { id: 'ai-ml', label: t.sections.projectFilterAiMl },
    { id: 'backend', label: t.sections.projectFilterBackend },
    { id: 'full-stack', label: t.sections.projectFilterFullStack },
  ];

  const filteredProjects = activeProjectCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeProjectCategory);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowContactPopup(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setShowContactPopup(false);
      }
    };

    if (showContactPopup) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showContactPopup]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-20">

      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION
      ────────────────────────────────────────────────────────────── */}
      <section id="hero" className="pt-6 pb-4 scroll-mt-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

          {/* Left Column: Bio and CTA (7 cols on desktop, 2nd on mobile) */}
          <div className="order-2 md:order-1 md:col-span-7 lg:col-span-8 space-y-6">

            {/* Title & Introduction */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-[1.15]">
                {profile.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                {t.hero.role} — {t.hero.location}
              </p>
              <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {lang === 'km' ? t.hero.bioLine1 : profile.shortBio}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="relative" ref={popupRef}>
                <button
                  onClick={() => setShowContactPopup(!showContactPopup)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white transition-colors focus:outline-none"
                  aria-expanded={showContactPopup}
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{t.hero.getInTouch}</span>
                </button>

                {/* Direct Channels Popup Container */}
                {showContactPopup && (
                  <div className="absolute left-0 top-full mt-2 w-72 sm:w-80 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-4 shadow-2xl z-50 space-y-3.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="flex items-center justify-between pb-2 hairline-b">
                      <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
                        {t.hero.directChannels}
                      </span>
                      <button
                        onClick={() => setShowContactPopup(false)}
                        className="text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 p-0.5 focus:outline-none"
                        aria-label="Close popup"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="space-y-2">
                      {/* Telegram Button */}
                      <a
                        href={profile.telegram || 'https://t.me/phallymakara'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-50/70 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all group"
                      >
                        <div>
                          <span className="text-xs font-semibold block font-mono">{t.hero.telegram}</span>
                          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                            {profile.telegramHandle || '@phallymakara'}
                          </span>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                      </a>

                      {/* Mail Button */}
                      <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center justify-between p-2.5 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 bg-zinc-50/70 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-all group"
                      >
                        <div>
                          <span className="text-xs font-semibold block font-mono">{t.hero.email}</span>
                          <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400">
                            {profile.email}
                          </span>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-100 transition-colors" />
                      </a>
                    </div>

                    <div className="pt-2 hairline-t flex items-center justify-between text-[11px] font-mono">
                      <button
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors focus:outline-none"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? t.hero.copied : t.hero.copyEmail}</span>
                      </button>

                      <button
                        onClick={() => {
                          setShowContactPopup(false);
                          onNavigate('contact');
                        }}
                        className="text-zinc-900 dark:text-zinc-100 hover:underline"
                      >
                        {t.nav.contact} →
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="#download-cv"
                onClick={(e) => {
                  e.preventDefault();
                  alert(lang === 'km' ? 'ប្រវត្តិរូបសង្ខេប (PDF) នឹងទាញយកនៅពេលដាក់ដំណើរការជាផ្លូវការ។' : 'Curriculum Vitae (PDF) would download in a production deployment.');
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-medium border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.hero.downloadCv}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Profile Photo (5 cols on desktop, 1st on mobile) */}
          <div className="order-1 md:order-2 md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end">
            <div className="w-full max-w-[280px] border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 p-2">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-center">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  onError={(e) => {
                    // Fallback to minimal editorial placeholder if image file not yet present
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent && !parent.querySelector('.placeholder-fallback')) {
                      const placeholder = document.createElement('div');
                      placeholder.className = 'placeholder-fallback text-center p-6 space-y-2';
                      placeholder.innerHTML = `
                        <div class="w-16 h-16 mx-auto bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-mono font-bold text-xl">
                          MP
                        </div>
                        <div class="font-mono text-[11px] text-zinc-500 dark:text-zinc-400">
                          public/images/profile.jpg
                        </div>
                      `;
                      parent.appendChild(placeholder);
                    }
                  }}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. ACADEMIC FOUNDATION
      ────────────────────────────────────────────────────────────── */}
      <section id="education" className="space-y-8 scroll-mt-24">
        <SectionHeading
          number={t.sections.educationNumber}
          title={t.sections.educationTitle}
          subtitle={t.sections.educationSubtitle}
          hasBorder={false}
          action={
            <button
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 hover:underline text-xs font-mono"
            >
              <span>{t.nav.work}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          }
        />

        {/* Vertical Timeline without boxes: 2 items on the left, 2 items on the right */}
        <div className="relative py-4">
          {/* Vertical Spine Line */}
          <div className="absolute top-2 bottom-2 left-3 md:left-1/2 -translate-x-1/2 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-10 md:space-y-12">
            {(t.educationItems || education).map((item, idx) => {
              const isEven = idx % 2 === 0;
              const originalItem = education[idx];
              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline Node Dot on the central vertical line */}
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-900 dark:border-zinc-100 group-hover:scale-125 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-all duration-200 z-10" />

                  {/* Content Container */}
                  <div
                    className={`pl-8 md:pl-0 w-full md:w-1/2 ${isEven
                        ? 'md:pr-10 md:text-right md:mr-auto'
                        : 'md:pl-10 md:text-left md:ml-auto'
                      }`}
                  >
                    <div className="space-y-2">
                      {/* Meta header: Type & Period */}
                      <div
                        className={`flex items-center gap-2 flex-wrap text-xs font-mono ${isEven ? 'md:justify-end' : 'md:justify-start'
                          }`}
                      >
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 inline-flex items-center gap-1">
                          <GraduationCap className="w-3 h-3" />
                          <span>{originalItem?.type || 'Academic Track'}</span>
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">
                          {item.period}
                        </span>
                      </div>

                      {/* Institution Title */}
                      <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                        {item.institution}
                      </h3>

                      {/* Degree / Program */}
                      <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        {item.degree}
                      </p>

                      {/* Location */}
                      <p
                        className={`text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                        <span>{item.location}</span>
                      </p>

                      {/* Description / Highlights Box Container */}
                      {item.description && (
                        <div
                          className={`mt-2.5 p-3 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-2 ${
                            isEven ? 'md:text-right' : 'md:text-left'
                          }`}
                        >
                          <p className="text-sm sm:text-[14.5px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. 02 — CONTINUOUS LEARNING
      ────────────────────────────────────────────────────────────── */}
      <section id="skills" className="space-y-10 scroll-mt-24">
        <SectionHeading
          number={t.sections.certNumber}
          title={t.sections.certTitle}
          subtitle={t.sections.certSubtitle}
          hasBorder={false}
          action={
            <button
              onClick={() => onNavigate('stack')}
              className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 hover:underline text-xs font-mono"
            >
              <span>{t.sections.exploreStack}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          }
        />

        {/* 1. Verified Certifications with Image Placeholders (First) */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
            <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-2">
              <span>{t.sections.certificationsHeading}</span>
            </span>

            {/* Cert Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {certCategories.map((cat) => {
                const isActive = activeCertCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCertCategory(cat.id as any)}
                    className={`px-3 py-1 text-xs font-mono transition-all border ${
                      isActive
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-medium'
                        : 'bg-zinc-50/80 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="group border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-400 dark:hover:border-zinc-600 transition-all flex flex-col overflow-hidden"
              >
                {/* Certificate Image or Styled Placeholder Frame */}
                <div className="relative aspect-[16/10] w-full bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden flex items-center justify-center p-3">
                  {cert.imageUrl ? (
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    /* Editorial Certificate Placeholder Frame */
                    <div className="w-full h-full border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-50/80 dark:bg-zinc-950/60 flex flex-col items-center justify-center p-2.5 text-center transition-colors group-hover:border-zinc-400 dark:group-hover:border-zinc-500">
                      <div className="w-7 h-7 rounded-full bg-zinc-200/80 dark:bg-zinc-800 flex items-center justify-center mb-1.5 text-zinc-600 dark:text-zinc-300 group-hover:scale-110 transition-transform">
                        <Award className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-[10px] font-mono font-medium text-zinc-700 dark:text-zinc-300 uppercase tracking-wider block line-clamp-1">
                        {cert.title}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-400 dark:text-zinc-500 mt-0.5">
                        {t.sections.certificatePreview}
                      </span>
                    </div>
                  )}
                </div>

                {/* Certificate Title */}
                <div className="p-3.5">
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors leading-snug">
                    {cert.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Technical Skill Stack Grid with Interactive Category Tabs */}
        <div className="space-y-6 pt-2">
          {/* Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3">
            <span className="font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider flex items-center gap-2">
              <span>{t.sections.skillStackHeading}</span>
            </span>

            {/* Filter Pills */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {stackCategories.map((cat) => {
                const isActive = activeStackCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveStackCategory(cat.id as any)}
                    className={`px-3 py-1 text-xs font-mono transition-all border ${
                      isActive
                        ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-medium'
                        : 'bg-zinc-50/80 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100'
                    }`}
                  >
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Technology Tiles Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="group relative p-3.5 sm:p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all duration-200 flex flex-col justify-between overflow-hidden hover:-translate-y-0.5 hover:shadow-sm"
              >
                {/* Top: Category Tag */}
                <div className="flex items-center justify-between gap-1 mb-3">
                  <span className="text-[9px] font-mono uppercase tracking-wider px-1.5 py-0.5 border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/80 text-zinc-500 dark:text-zinc-400 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors">
                    {skill.categoryLabel}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-colors shrink-0" />
                </div>

                {/* Center / Body: Brand Icon in Container */}
                <div className="my-1.5 flex items-center justify-center">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center p-2 rounded-none bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/60 group-hover:border-zinc-400 dark:group-hover:border-zinc-600 transition-all group-hover:scale-110">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:brightness-110 transition-all"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent && !parent.querySelector('.fallback-badge')) {
                          const span = document.createElement('span');
                          span.className = 'fallback-badge text-xs font-mono font-bold text-zinc-700 dark:text-zinc-300';
                          span.innerText = skill.name.slice(0, 2).toUpperCase();
                          parent.appendChild(span);
                        }
                      }}
                    />
                  </div>
                </div>

                {/* Bottom: Skill Name */}
                <div className="mt-3 pt-2 hairline-t text-center">
                  <span className="text-xs sm:text-sm font-semibold font-mono text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors block truncate">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. 03 — WORK EXPERIENCE
      ────────────────────────────────────────────────────────────── */}
      <section id="experience" className="space-y-8 scroll-mt-24">
        <SectionHeading
          number={t.sections.experienceNumber}
          title={t.sections.experienceTitle}
          subtitle={t.sections.experienceSubtitle}
          hasBorder={false}
          action={
            <button
              onClick={() => onNavigate('work')}
              className="inline-flex items-center gap-1 text-zinc-900 dark:text-zinc-100 hover:underline text-xs font-mono"
            >
              <span>{t.sections.viewFullCareer}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          }
        />

        {/* Vertical Timeline: Alternating items on left and right */}
        <div className="relative py-4">
          {/* Vertical Spine Line */}
          <div className="absolute top-2 bottom-2 left-3 md:left-1/2 -translate-x-1/2 w-px bg-zinc-200 dark:bg-zinc-800" />

          <div className="space-y-10 md:space-y-12">
            {(t.experienceItems || experience).map((item, idx) => {
              const isEven = idx % 2 === 0;
              const originalExp = experience[idx];
              return (
                <div
                  key={idx}
                  className="relative flex flex-col md:flex-row items-start group"
                >
                  {/* Timeline Node Dot on the central vertical line */}
                  <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-1.5 w-3 h-3 rounded-full bg-white dark:bg-zinc-950 border-2 border-zinc-900 dark:border-zinc-100 group-hover:scale-125 group-hover:bg-zinc-900 dark:group-hover:bg-zinc-100 transition-all duration-200 z-10" />

                  {/* Content Container */}
                  <div
                    className={`pl-8 md:pl-0 w-full md:w-1/2 ${
                      isEven
                        ? 'md:pr-10 md:text-right md:mr-auto'
                        : 'md:pl-10 md:text-left md:ml-auto'
                    }`}
                  >
                    <div className="space-y-2">
                      {/* Meta header: Company & Period */}
                      <div
                        className={`flex items-center gap-2 flex-wrap text-xs font-mono ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 inline-flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          <span>{item.company}</span>
                        </span>
                        <span className="text-zinc-500 dark:text-zinc-400">
                          {item.period}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-base sm:text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                        {item.role}
                      </h3>

                      {/* Location */}
                      <p
                        className={`text-xs font-mono text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 ${
                          isEven ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <MapPin className="w-3 h-3 text-zinc-400 shrink-0" />
                        <span>{item.location}</span>
                      </p>

                      {/* Description Container */}
                      {item.description && (
                        <div
                          className={`mt-2.5 p-3.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-2.5 ${
                            isEven ? 'md:text-right' : 'md:text-left'
                          }`}
                        >
                          <p className="text-sm sm:text-[14.5px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                            {item.description}
                          </p>

                          {item.highlights && item.highlights.length > 0 && (
                            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 pt-1">
                              {item.highlights.slice(0, 2).map((highlight, hIdx) => (
                                <li
                                  key={hIdx}
                                  className={`flex items-start gap-2 ${
                                    isEven ? 'md:flex-row-reverse md:text-right' : 'md:text-left'
                                  }`}
                                >
                                  <span className="text-zinc-500 font-mono text-xs pt-0.5 shrink-0">
                                    0{hIdx + 1}.
                                  </span>
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          {originalExp?.tech && originalExp.tech.length > 0 && (
                            <div
                              className={`pt-2 hairline-t flex flex-wrap gap-1.5 ${
                                isEven ? 'md:justify-end' : 'md:justify-start'
                              }`}
                            >
                              {originalExp.tech.map((tTag) => (
                                <span
                                  key={tTag}
                                  className="text-[11px] font-mono bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 border border-zinc-200 dark:border-zinc-800"
                                >
                                  {tTag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. 04 — SELECTED PROJECTS
      ────────────────────────────────────────────────────────────── */}
      <section id="projects" className="space-y-6 scroll-mt-24">
        <SectionHeading
          number={t.sections.projectsNumber}
          title={t.sections.projectsTitle}
          subtitle={t.sections.projectsSubtitle}
          hasBorder={false}
        />

        {/* Project Category Filter Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap pb-2">
          {projectCategories.map((cat) => {
            const isActive = activeProjectCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveProjectCategory(cat.id as any)}
                className={`px-3 py-1 text-xs font-mono transition-all border ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-medium'
                    : 'bg-zinc-50/80 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-100'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              onSelectProject={(slug) => onNavigate('projects', slug)}
            />
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. 05 — CONTACT & SUBMIT INFO
      ────────────────────────────────────────────────────────────── */}
      <section id="contact" className="space-y-6 scroll-mt-24">
        <SectionHeading
          number={t.sections.contactNumber}
          title={t.sections.contactTitle}
          subtitle={t.sections.contactSubtitle}
          hasBorder={false}
        />

        <div className="border border-zinc-200 dark:border-zinc-800 p-6 sm:p-8 bg-white dark:bg-zinc-950">
          <ContactForm />
        </div>
      </section>

    </div>
  );
};
