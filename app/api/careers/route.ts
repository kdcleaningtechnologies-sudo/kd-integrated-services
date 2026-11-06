import { NextRequest, NextResponse } from "next/server";
import { sendBrevoEmail } from "@/lib/brevo";
import { insertCandidate, Candidate } from "@/lib/adminStorage";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.name || !body.phone || !body.email || !body.role) {
      return NextResponse.json(
        { error: "Please fill in Name, Phone, Email, and Preferred Role." },
        { status: 400 }
      );
    }

    const applicationRecord: Candidate = {
      id: `career_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      ...body,
    };

    // Store in Supabase / Local JSON fallback
    await insertCandidate(applicationRecord);

    // Email dispatch via Brevo
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0066FF; margin-bottom: 16px; border-bottom: 2px solid #00D2B4; padding-bottom: 8px;">
          New Career Application Received
        </h2>
        <p style="font-size: 14px; color: #475569;">A candidate submitted their application for an operations role:</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px;">
          <tr><td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Candidate Name:</strong></td><td style="color: #0f172a; font-weight: bold;">${body.name}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Preferred Role:</strong></td><td style="color: #0f172a; font-weight: bold;">${body.role}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${body.phone}" style="color: #0066FF; font-weight: bold;">${body.phone}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${body.email}" style="color: #0066FF;">${body.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Experience:</strong></td><td style="color: #0f172a;">${body.experience || "Not specified"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Current Location:</strong></td><td style="color: #0f172a;">${body.currentLocation || "Not specified"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Notes / CV summary:</strong></td><td style="color: #0f172a;">${body.notes || "None"}</td></tr>
        </table>
        <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          Received at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST • KD Integrated Services
        </div>
      </div>
    `;

    await sendBrevoEmail({
      subject: `New Job Application: ${body.name} - ${body.role}`,
      htmlContent: emailHtml,
      replyTo: {
        email: body.email,
        name: body.name,
      },
    });

    return NextResponse.json({
      success: true,
      applicationId: applicationRecord.id,
      message: "Application submitted successfully",
    });
  } catch {
    return NextResponse.json({ error: "Failed to process application" }, { status: 500 });
  }
}
