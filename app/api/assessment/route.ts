import { NextRequest, NextResponse } from "next/server";
import { sendBrevoEmail } from "@/lib/brevo";
import { insertLead, Lead } from "@/lib/adminStorage";

export interface LeadPayload {
  name: string;
  company?: string;
  phone: string;
  email: string;
  propertyType: string;
  city: string;
  approxArea?: string;
  requiredServices: string[];
  staffRequired?: string;
  message?: string;
  sourceUrl?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: LeadPayload = await req.json();

    // Basic Validation
    if (!body.name || !body.phone || !body.email || !body.city || !body.propertyType) {
      return NextResponse.json(
        { error: "Please provide Name, Phone, Email, City, and Property Type." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const phoneDigits = body.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    const newLead: Lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      status: "NEW",
      ...body,
      userAgent: req.headers.get("user-agent") || undefined,
      ip: req.headers.get("x-forwarded-for") || undefined,
    };

    // Store in Supabase / Local JSON fallback
    await insertLead(newLead);

    // Email dispatch via Brevo (Sendinblue)
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0066FF; margin-bottom: 16px; border-bottom: 2px solid #00D2B4; padding-bottom: 8px;">
          New Facility Assessment Request
        </h2>
        <p style="font-size: 14px; color: #475569;">A new corporate facility audit request was submitted via the website:</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px;">
          <tr><td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Name:</strong></td><td style="color: #0f172a; font-weight: bold;">${body.name}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Company:</strong></td><td style="color: #0f172a;">${body.company || "N/A"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${body.phone}" style="color: #0066FF; font-weight: bold;">${body.phone}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${body.email}" style="color: #0066FF;">${body.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Property Type:</strong></td><td style="color: #0f172a;">${body.propertyType}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>City:</strong></td><td style="color: #0f172a; font-weight: bold;">${body.city}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Approx Area:</strong></td><td style="color: #0f172a;">${body.approxArea || "Not specified"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Staff Required:</strong></td><td style="color: #0f172a;">${body.staffRequired || "Not specified"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Services Needed:</strong></td><td style="color: #0f172a;">${(body.requiredServices || []).join(", ") || "General Assessment"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Message:</strong></td><td style="color: #0f172a;">${body.message || "None"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Source Page:</strong></td><td style="color: #64748b;">${body.sourceUrl || "Direct"}</td></tr>
        </table>
        <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          Received at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST • KD Integrated Services
        </div>
      </div>
    `;

    // 1. Send via Brevo API
    await sendBrevoEmail({
      subject: `New Lead: ${body.name} (${body.company || body.city}) - Facility Assessment`,
      htmlContent: emailHtml,
      replyTo: {
        email: body.email,
        name: body.name,
      },
    });

    // 2. Optional Resend fallback
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const notificationEmail =
          process.env.NOTIFICATION_EMAIL ||
          process.env.BREVO_NOTIFICATION_EMAIL ||
          "info@kdintegratedservices.com";

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "KD Integrated Services Leads <info@kdintegratedservices.com>",
            to: [notificationEmail],
            subject: `New Lead: ${body.name} (${body.company || body.city}) - Facility Assessment`,
            html: emailHtml,
          }),
        });
      } catch (emailErr) {
        console.error("Failed to send Resend email:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      leadId: newLead.id,
      message: "Thank you! Your facility assessment request has been received. Our senior operations team will contact you within 2 business hours.",
    });
  } catch (error: unknown) {
    console.error("Assessment API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please call or WhatsApp us directly." },
      { status: 500 }
    );
  }
}
