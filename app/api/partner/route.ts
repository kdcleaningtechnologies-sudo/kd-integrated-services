import { NextRequest, NextResponse } from "next/server";
import { sendBrevoEmail } from "@/lib/brevo";
import { insertPartner, Partner } from "@/lib/adminStorage";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.partnerName || !body.phone || !body.email || !body.profileType) {
      return NextResponse.json(
        { error: "Please fill in your Name, Phone, Email, and Profession / Profile." },
        { status: 400 }
      );
    }

    const partnerRecord: Partner = {
      id: `partner_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      createdAt: new Date().toISOString(),
      type: "CHANNEL_PARTNER",
      ...body,
    };

    // Store in Supabase / Local JSON fallback
    await insertPartner(partnerRecord);

    // Email dispatch via Brevo (Sendinblue)
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0066FF; margin-bottom: 16px; border-bottom: 2px solid #00D2B4; padding-bottom: 8px;">
          New Channel Partner Registration
        </h2>
        <p style="font-size: 14px; color: #475569;">A new commercial channel partner has applied to register with KD Integrated Services:</p>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-top: 12px;">
          <tr><td style="padding: 6px 0; color: #64748b; width: 140px;"><strong>Partner Name:</strong></td><td style="color: #0f172a; font-weight: bold;">${body.partnerName}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Company / Agency:</strong></td><td style="color: #0f172a;">${body.companyName || "Independent"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Phone:</strong></td><td><a href="tel:${body.phone}" style="color: #0066FF; font-weight: bold;">${body.phone}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Email:</strong></td><td><a href="mailto:${body.email}" style="color: #0066FF;">${body.email}</a></td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Profile / Type:</strong></td><td style="color: #0f172a;">${body.profileType}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>City / Region:</strong></td><td style="color: #0f172a;">${body.city || "NCR"}</td></tr>
          <tr><td style="padding: 6px 0; color: #64748b;"><strong>Expected Deals / Notes:</strong></td><td style="color: #0f172a;">${body.notes || "None"}</td></tr>
        </table>
        <div style="margin-top: 20px; padding-top: 12px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          Received at ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST • KD Integrated Services
        </div>
      </div>
    `;

    await sendBrevoEmail({
      subject: `New Partner Application: ${body.partnerName} (${body.profileType})`,
      htmlContent: emailHtml,
      replyTo: {
        email: body.email,
        name: body.partnerName,
      },
    });

    return NextResponse.json({
      success: true,
      partnerId: partnerRecord.id,
      message: "Thank you for registering as a KD Channel Partner. Our partnerships head will reach out with the partner MoU and commission schedule.",
    });
  } catch {
    return NextResponse.json({ error: "Failed to process partner submission" }, { status: 500 });
  }
}
