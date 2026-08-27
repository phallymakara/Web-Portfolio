import React from 'react';
import { Award } from 'lucide-react';
import { experience, education, achievements } from '../data/experience';
import { SectionHeading } from '../components/ui/SectionHeading';

export const WorkPage: React.FC = () => {
  return (
    <div className="space-y-16 py-6">

      {/* Page Header */}
      <div className="space-y-4 pb-6 hairline-b">
        <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider block">
          CAREER TRAJECTORY & CREDENTIALS
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Work, Education & Honors
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Track record in technical leadership, platform scaling, and engineering contributions across startups and enterprise teams.
        </p>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          1. EXPERIENCE
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="01 // EXPERIENCE"
          title="Professional Roles"
          subtitle="Chronological track record of engineering leadership and system building."
        />

        <div className="space-y-8">
          {experience.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-mono text-zinc-600 dark:text-zinc-300 mt-0.5">
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">{item.company}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <span className="font-mono text-xs px-2.5 py-1 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 self-start">
                  {item.period}
                </span>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              <div className="space-y-2 pt-2 text-left">
                <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase block font-semibold">
                  Key Accomplishments:
                </span>
                <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 text-left">
                  {item.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 justify-start text-left">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. EDUCATION
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="02 // EDUCATION"
          title="Academic Background"
        />

        <div className="grid grid-cols-1 gap-6">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-6 sm:p-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  {item.type && (
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 inline-block mb-1.5">
                      {item.type}
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.institution}
                  </h3>
                  <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mt-1">
                    {item.degree}
                  </p>
                  <p className="text-xs font-mono text-zinc-600 dark:text-zinc-300 mt-0.5">
                    {item.location}
                  </p>
                </div>

                <span className="font-mono text-xs px-2.5 py-1 border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 self-start">
                  {item.period}
                </span>
              </div>

              {item.honors && (
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 border-l-2 border-zinc-900 dark:border-zinc-100 text-xs font-mono text-zinc-800 dark:text-zinc-200">
                  {item.honors}
                </div>
              )}

              {item.keyAreas && (
                <div className="space-y-2 pt-2 text-left">
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase block font-semibold">
                    {item.keyAreasTitle || 'Key Areas of Study'}:
                  </span>
                  <ul className="space-y-1.5 text-left">
                    {item.keyAreas.map((area, aIdx) => (
                      <li
                        key={aIdx}
                        className="text-xs font-mono text-zinc-700 dark:text-zinc-300 flex items-start gap-2 justify-start"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500 mt-1 shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.relevantCoursework && (
                <div className="space-y-2 pt-2">
                  <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase block">
                    Core Coursework:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {item.relevantCoursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-mono border border-zinc-200 dark:border-zinc-800 px-2 py-1 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. ACHIEVEMENTS & AWARDS
      ────────────────────────────────────────────────────────────── */}
      <section className="space-y-6">
        <SectionHeading
          number="03 // ACHIEVEMENTS"
          title="Honors & Recognition"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-5 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-zinc-600 dark:text-zinc-300">
                    {item.year}
                  </span>
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
                <h4 className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-zinc-600 dark:text-zinc-300 mt-1 mb-2">
                  {item.issuer}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
