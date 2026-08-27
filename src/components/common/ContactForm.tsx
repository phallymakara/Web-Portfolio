import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateField = (field: keyof FormState, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Please enter your name';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Please enter your email address';
        // Simple, non-cryptic email check
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        return undefined;
      case 'message':
        if (!value.trim()) return 'Please write your message';
        if (value.trim().length < 15) return 'Please write at least 15 characters';
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateField(name as keyof FormState, value);
      setErrors(prev => ({
        ...prev,
        [name]: fieldError,
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const fieldError = validateField(name as keyof FormState, value);
    setErrors(prev => ({
      ...prev,
      [name]: fieldError,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all as touched
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);

    // Validate all fields
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some(err => err !== undefined);

    if (hasError) {
      return;
    }

    setIsSubmitting(true);

    // Simulate clean dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTouched({});
      setErrors({});
    }, 800);
  };

  return (
    <div>
      {isSubmitted ? (
        <div className="p-8 border border-zinc-200 dark:border-zinc-800 text-center space-y-4">
          <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500" />
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">{t.sections.formSuccessTitle}</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            {t.sections.formSuccessMsg}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-4 px-4 py-2 text-xs font-mono border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors focus:outline-none"
          >
            {t.sections.formSendAnother}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                {t.sections.formName} <span className="text-zinc-600 dark:text-zinc-300">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Alex Morgan"
                className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border transition-colors focus:outline-none ${
                  errors.name
                    ? 'border-rose-500 focus:border-rose-600'
                    : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-100'
                }`}
              />
              {errors.name && (
                <p className="text-xs font-mono text-rose-500 mt-1.5">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
                {t.sections.formEmail} <span className="text-zinc-600 dark:text-zinc-300">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="alex@example.com"
                className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border transition-colors focus:outline-none ${
                  errors.email
                    ? 'border-rose-500 focus:border-rose-600'
                    : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-100'
                }`}
              />
              {errors.email && (
                <p className="text-xs font-mono text-rose-500 mt-1.5">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono text-zinc-700 dark:text-zinc-300 uppercase tracking-wider mb-2">
              {t.sections.formMessage} <span className="text-zinc-600 dark:text-zinc-300">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="..."
              className={`w-full px-3.5 py-2.5 text-sm bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 border transition-colors focus:outline-none resize-y ${
                errors.message
                  ? 'border-rose-500 focus:border-rose-600'
                  : 'border-zinc-200 dark:border-zinc-800 focus:border-zinc-900 dark:focus:border-zinc-100'
              }`}
            />
            {errors.message && (
              <p className="text-xs font-mono text-rose-500 mt-1.5">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
            <span className="text-xs font-mono text-zinc-600 dark:text-zinc-400">
              {t.sections.formRequiredNotice}
            </span>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white disabled:opacity-50 transition-colors focus:outline-none"
            >
              {isSubmitting ? (
                <span>{t.sections.formSending}</span>
              ) : (
                <span>{t.sections.formSend}</span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
