/**
 * Contact Dispatch Service
 * Implements resilient multi-layer architecture:
 * 1. Primary: Secure Serverless API (/api/contact) - Protects secrets server-side.
 * 2. Secondary Fallback: Direct Client-Side Dispatch (Web3Forms & Telegram) for static hosting.
 */

import { env } from '../config/env';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface ContactDispatchResult {
  success: boolean;
  emailSent: boolean;
  telegramSent: boolean;
  error?: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<ContactDispatchResult> {
  // Layer 1: Attempt Serverless Proxy (/api/contact)
  try {
    const serverlessRes = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // If serverless endpoint is deployed and active
    if (serverlessRes.status !== 404) {
      const data = await serverlessRes.json();
      if (serverlessRes.ok && data.success) {
        return {
          success: true,
          emailSent: Boolean(data.emailSent),
          telegramSent: Boolean(data.telegramSent),
        };
      }
      if (!serverlessRes.ok && data.error) {
        // Continue to fallback if serverless failed
        console.warn('[Contact Service] Serverless endpoint error, trying direct fallback:', data.error);
      }
    }
  } catch {
    // Serverless endpoint not present (static host like GitHub Pages) - proceed to client fallback
  }

  // Layer 2: Client-side Direct Dispatch
  const errors: string[] = [];
  let emailSent = false;
  let telegramSent = false;

  // 2A. Web3Forms Dispatch
  const emailPromise = (async () => {
    if (!env.web3FormsAccessKey) {
      return false;
    }

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: env.web3FormsAccessKey,
          name: payload.name,
          email: payload.email,
          message: payload.message,
          from_name: `${payload.name} (Portfolio)`,
          subject: `📬 Portfolio Contact from ${payload.name}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        return true;
      } else {
        errors.push(data.message || 'Web3Forms error');
        return false;
      }
    } catch (err: any) {
      errors.push(`Email error: ${err.message || err}`);
      return false;
    }
  })();

  // 2B. Direct Telegram Dispatch
  const telegramPromise = (async () => {
    if (!env.telegramBotToken || !env.telegramChatId) {
      return false;
    }

    try {
      const sanitizedName = payload.name.replace(/([_*[\]()~`>#+=|{}.!-])/g, '\\$1');
      const sanitizedEmail = payload.email.replace(/([_*[\]()~`>#+=|{}.!-])/g, '\\$1');
      const sanitizedMessage = payload.message.replace(/([_*[\]()~`>#+=|{}.!-])/g, '\\$1');

      const telegramText =
        `📬 *New Portfolio Message*\n\n` +
        `👤 *Name:* ${sanitizedName}\n` +
        `✉️ *Email:* ${sanitizedEmail}\n` +
        `💬 *Message:*\n${sanitizedMessage}\n\n` +
        `🌐 *Source:* Web Portfolio`;

      const res = await fetch(`https://api.telegram.org/bot${env.telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.telegramChatId,
          text: telegramText,
          parse_mode: 'MarkdownV2',
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        return true;
      } else {
        errors.push(data.description || 'Telegram error');
        return false;
      }
    } catch (err: any) {
      errors.push(`Telegram error: ${err.message || err}`);
      return false;
    }
  })();

  const [emailResult, telegramResult] = await Promise.allSettled([emailPromise, telegramPromise]);

  if (emailResult.status === 'fulfilled' && emailResult.value) {
    emailSent = true;
  }
  if (telegramResult.status === 'fulfilled' && telegramResult.value) {
    telegramSent = true;
  }

  const hasConfiguredKeys = Boolean(env.web3FormsAccessKey || (env.telegramBotToken && env.telegramChatId));
  // In development without keys, simulate successful submission
  const success = hasConfiguredKeys ? emailSent || telegramSent : true;

  return {
    success,
    emailSent,
    telegramSent,
    error: errors.length > 0 ? errors.join(', ') : undefined,
  };
}
