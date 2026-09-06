/**
 * Application Configuration & Environment Loader
 * Centralizes all environment variables and secrets management following 12-Factor App methodology.
 */

import { profile } from '../data/profile';

interface AppConfig {
  /** Web3Forms Public Access Key for form-to-email forwarding */
  web3FormsAccessKey: string;
  /** Optional client-side Telegram Bot Token (used only if no /api/contact proxy exists) */
  telegramBotToken: string;
  /** Optional client-side Telegram Chat ID */
  telegramChatId: string;
  /** Primary contact email address */
  contactEmail: string;
  /** Current execution environment */
  isDev: boolean;
  isProd: boolean;
}

export const env: AppConfig = {
  web3FormsAccessKey: (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '').trim(),
  telegramBotToken: (import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '').trim(),
  telegramChatId: (import.meta.env.VITE_TELEGRAM_CHAT_ID || '').trim(),
  contactEmail: (import.meta.env.VITE_CONTACT_EMAIL || profile.email).trim(),
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
};

/**
 * Validates configuration and logs non-blocking security & configuration diagnostics in development.
 */
export function validateConfig(): void {
  if (!env.isDev) return;

  const warnings: string[] = [];

  if (!env.web3FormsAccessKey) {
    warnings.push(
      'VITE_WEB3FORMS_ACCESS_KEY is empty. Email forwarding is inactive. Get your free key at https://web3forms.com'
    );
  }

  if (env.telegramBotToken && !env.telegramChatId) {
    warnings.push(
      'VITE_TELEGRAM_BOT_TOKEN is set but VITE_TELEGRAM_CHAT_ID is missing.'
    );
  }

  if (warnings.length > 0) {
    console.groupCollapsed('⚙️ [Config Notice] Environment Keys Check');
    warnings.forEach((w) => console.warn(w));
    console.groupEnd();
  }
}
