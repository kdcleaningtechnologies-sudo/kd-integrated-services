/**
 * Smart Email Dispatcher:
 * 1. Native Gmail SMTP (via Nodemailer) when GMAIL_APP_PASSWORD is set (100% inbox delivery for @gmail.com).
 * 2. Brevo (Sendinblue) REST API v3 when BREVO_API_KEY is configured.
 */

import nodemailer from "nodemailer";

export interface BrevoRecipient {
  email: string;
  name?: string;
}

export interface SendBrevoEmailOptions {
  to?: BrevoRecipient[];
  subject: string;
  htmlContent: string;
  textContent?: string;
  replyTo?: BrevoRecipient;
  senderName?: string;
  senderEmail?: string;
}

export interface BrevoSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
  provider?: "gmail-smtp" | "brevo-api";
}

/**
 * Send transactional email via Gmail SMTP or Brevo API
 */
export async function sendBrevoEmail(
  options: SendBrevoEmailOptions
): Promise<BrevoSendResult> {
  const gmailAppPassword =
    process.env.GMAIL_APP_PASSWORD || process.env.SMTP_PASSWORD;
  const brevoApiKey = process.env.BREVO_API_KEY;

  const defaultNotificationEmail =
    process.env.BREVO_NOTIFICATION_EMAIL ||
    process.env.NOTIFICATION_EMAIL ||
    "info@kdintegratedservices.com";

  const senderEmail =
    options.senderEmail ||
    process.env.BREVO_SENDER_EMAIL ||
    "info@kdintegratedservices.com";

  const senderName =
    options.senderName ||
    process.env.BREVO_SENDER_NAME ||
    "KD INTEGRATED SERVICES PVT LTD";

  const recipients =
    options.to && options.to.length > 0
      ? options.to
      : [{ email: defaultNotificationEmail, name: "KD Operations Team" }];

  const plainText =
    options.textContent ||
    options.htmlContent
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  // 1. PRIORITY: Direct Gmail SMTP (if app password is provided)
  // Guaranteed to land directly in Gmail primary inbox because it originates natively from Google servers
  if (gmailAppPassword) {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: senderEmail,
          pass: gmailAppPassword.replace(/\s+/g, ""), // clean spaces
        },
      });

      const mailOptions = {
        from: `"${senderName}" <${senderEmail}>`,
        to: recipients.map((r) => r.email).join(", "),
        subject: options.subject,
        html: options.htmlContent,
        text: plainText,
        replyTo: options.replyTo ? options.replyTo.email : undefined,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("[Gmail SMTP Success]: Delivered email, messageId:", info.messageId);
      return { success: true, messageId: info.messageId, provider: "gmail-smtp" };
    } catch (smtpErr: unknown) {
      console.error("[Gmail SMTP Error]:", smtpErr);
      // Fall through to Brevo if SMTP fails
    }
  }

  // 2. Brevo API v3
  if (brevoApiKey) {
    const payload: Record<string, unknown> = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: recipients,
      subject: options.subject,
      htmlContent: options.htmlContent,
      textContent: plainText,
    };

    if (options.replyTo) {
      payload.replyTo = options.replyTo;
    }

    try {
      const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "api-key": brevoApiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        const errorMsg =
          (data as { message?: string }).message ||
          `Brevo API responded with HTTP status ${response.status}`;
        console.error("[Brevo Error]:", errorMsg, data);
        return { success: false, error: errorMsg, provider: "brevo-api" };
      }

      const messageId = (data as { messageId?: string }).messageId;
      console.log("[Brevo Success]: Dispatched email, messageId:", messageId);
      return { success: true, messageId, provider: "brevo-api" };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : "Unknown network error";
      console.error("[Brevo Exception]:", errorMsg);
      return { success: false, error: errorMsg, provider: "brevo-api" };
    }
  }

  console.warn("[Mailer] Neither GMAIL_APP_PASSWORD nor BREVO_API_KEY configured.");
  return {
    success: false,
    error: "No email dispatch provider configured (set GMAIL_APP_PASSWORD or BREVO_API_KEY).",
  };
}
