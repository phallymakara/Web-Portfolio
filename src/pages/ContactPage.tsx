import React from 'react';
import { Github, Linkedin, Twitter, MapPin, Clock, Calendar } from 'lucide-react';
import { profile } from '../data/profile';
import { ContactForm } from '../components/common/ContactForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="space-y-12 py-6">
      
      {/* Page Header */}
      <div className="space-y-4 pb-6 hairline-b">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Get in Touch
        </h1>
        <p className="text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Interested in architecting a high-throughput backend, deploying autonomous AI agent pipelines, or advisory consulting? Send me a message below.
        </p>
      </div>

      {/* Main Grid: Form + Info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left 2 Cols: The Contact Form */}
        <div className="lg:col-span-2">
          <ContactForm />
        </div>

        {/* Right 1 Col: Quick Info & Network */}
        <div className="space-y-8">
          
          {/* Availability Details */}
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-4">
            <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider block">
              ENGAGEMENT METRICS
            </span>
            
            <div className="space-y-3 text-xs font-mono">
              <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                <Clock className="w-4 h-4 text-zinc-600 dark:text-zinc-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-zinc-900 dark:text-zinc-100">Response Time</span>
                  <span>Within 24 business hours</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                <MapPin className="w-4 h-4 text-zinc-600 dark:text-zinc-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-zinc-900 dark:text-zinc-100">Location</span>
                  <span>Phnom Penh, Cambodia (UTC+7)</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300">
                <Calendar className="w-4 h-4 text-zinc-600 dark:text-zinc-300 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold block text-zinc-900 dark:text-zinc-100">Available From</span>
                  <span>Immediate / Q3 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Network Links */}
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 space-y-3">
            <span className="font-mono text-xs text-zinc-600 dark:text-zinc-300 uppercase tracking-wider block">
              DIRECT CHANNELS
            </span>

            <div className="space-y-2 text-sm font-mono">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
                <span className="text-xs text-zinc-600 dark:text-zinc-300">@phallymakara</span>
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </div>
                <span className="text-xs text-zinc-600 dark:text-zinc-300">/in/phallymakara</span>
              </a>

              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Twitter className="w-4 h-4" />
                  <span>Twitter / X</span>
                </div>
                <span className="text-xs text-zinc-600 dark:text-zinc-300">@phallymakara</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
