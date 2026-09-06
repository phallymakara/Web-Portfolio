/**
 * Secure Serverless Contact Handler (Vercel / Netlify Functions)
 * Protects secrets (TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID) by executing server-side.
 * Never exposes bot tokens to the client browser.
 */

export default async function handler(req: any, res: any) {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN || process.env.VITE_TELEGRAM_BOT_TOKEN;
  const telegramChatId = process.env.TELEGRAM_CHAT_ID || process.env.VITE_TELEGRAM_CHAT_ID;
  const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY || process.env.VITE_WEB3FORMS_ACCESS_KEY;

  let emailSent = false;
  let telegramSent = false;
  const errors: string[] = [];

  // 1. Dispatch Web3Forms Email
  if (web3FormsKey) {
    try {
      const emailRes = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: web3FormsKey,
          name,
          email,
          message,
          from_name: `${name} (Portfolio)`,
          subject: `📬 Portfolio Contact from ${name}`,
        }),
      });
      const data: any = await emailRes.json();
      if (emailRes.ok && data.success) {
        emailSent = true;
      } else {
        errors.push(data.message || 'Web3Forms dispatch error');
      }
    } catch (err: any) {
      errors.push(`Email error: ${err.message}`);
    }
  }

  // 2. Dispatch Telegram Notification (Server-side execution - Token is safe & hidden)
  if (telegramBotToken && telegramChatId) {
    try {
      const sanitizedName = String(name).replace(/([_*[\]()~`>#+=|{}.!-])/g, '\\$1');
      const sanitizedEmail = String(email).replace(/([_*[\]()~`>#+=|{}.!-])/g, '\\$1');
      const sanitizedMessage = String(message).replace(/([_*[\]()~`>#+=|{}.!-])/g, '\\$1');

      const text =
        `📬 *New Portfolio Message*\n\n` +
        `👤 *Name:* ${sanitizedName}\n` +
        `✉️ *Email:* ${sanitizedEmail}\n` +
        `💬 *Message:*\n${sanitizedMessage}\n\n` +
        `🌐 *Source:* Serverless Contact API`;

      const tgRes = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text,
          parse_mode: 'MarkdownV2',
        }),
      });
      const tgData: any = await tgRes.json();
      if (tgRes.ok && tgData.ok) {
        telegramSent = true;
      } else {
        errors.push(tgData.description || 'Telegram dispatch error');
      }
    } catch (err: any) {
      errors.push(`Telegram error: ${err.message}`);
    }
  }

  const success = emailSent || telegramSent || (!web3FormsKey && !telegramBotToken);

  return res.status(success ? 200 : 500).json({
    success,
    emailSent,
    telegramSent,
    error: errors.length > 0 ? errors.join(', ') : undefined,
  });
}
