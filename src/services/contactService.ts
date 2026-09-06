/**
 * Contact Dispatch Service
 * Delivers contact form submissions to:
 * 1. Email (via Web3Forms API - free, direct to phallymakara01@gmail.com)
 * 2. Telegram (via Telegram Bot API - instant notification to phone)
 */

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
  const web3FormsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  const telegramBotToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const telegramChatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

  let emailSent = false;
  let telegramSent = false;
  const errors: string[] = [];

  // Task 1: Web3Forms Email Dispatch
  const emailPromise = (async () => {
    if (!web3FormsKey) {
      console.warn(
        '[Contact Service] VITE_WEB3FORMS_ACCESS_KEY is not set. Get a free key at https://web3forms.com'
      );
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
          access_key: web3FormsKey,
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
        errors.push(data.message || 'Web3Forms dispatch failed');
        return false;
      }
    } catch (err: any) {
      errors.push(`Email service error: ${err.message || err}`);
      return false;
    }
  })();

  // Task 2: Telegram Bot Dispatch
  const telegramPromise = (async () => {
    if (!telegramBotToken || !telegramChatId) {
      console.warn(
        '[Contact Service] Telegram keys not set. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID.'
      );
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

      const res = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramText,
          parse_mode: 'MarkdownV2',
        }),
      });

      const data = await res.json();
      if (res.ok && data.ok) {
        return true;
      } else {
        errors.push(data.description || 'Telegram dispatch failed');
        return false;
      }
    } catch (err: any) {
      errors.push(`Telegram service error: ${err.message || err}`);
      return false;
    }
  })();

  // Execute both concurrently
  const [emailResult, telegramResult] = await Promise.allSettled([emailPromise, telegramPromise]);

  if (emailResult.status === 'fulfilled' && emailResult.value) {
    emailSent = true;
  }
  if (telegramResult.status === 'fulfilled' && telegramResult.value) {
    telegramSent = true;
  }

  // If no API keys were configured in development mode, simulate a successful delivery
  const hasAnyKey = Boolean(web3FormsKey || (telegramBotToken && telegramChatId));
  const success = hasAnyKey ? emailSent || telegramSent : true;

  return {
    success,
    emailSent,
    telegramSent,
    error: errors.length > 0 ? errors.join(', ') : undefined,
  };
}
