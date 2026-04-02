import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? "");
  try {
    const { name, email, phone, linkedin, role, notes } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL ?? "michael@10pillarssolutions.com";
    const from = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[10 Pillars] Resume Submission — ${name}${role ? ` (${role})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #38A169;">New Resume Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Name</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Phone</td><td style="padding: 8px;">${phone || "—"}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #555;">LinkedIn</td><td style="padding: 8px;">${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : "—"}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #555;">Desired Role</td><td style="padding: 8px;">${role || "—"}</td></tr>
          </table>
          ${notes ? `
          <h3 style="color: #555; margin-top: 24px;">Additional Notes</h3>
          <div style="background: #f5f5f5; padding: 16px; border-radius: 8px; white-space: pre-wrap;">${notes}</div>
          ` : ""}
          <hr style="margin-top: 32px; border: none; border-top: 1px solid #eee;" />
          <p style="color: #999; font-size: 12px;">Submitted via 10pillarssolutions.com resume form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resume submission error:", error);
    return NextResponse.json({ error: "Failed to submit resume" }, { status: 500 });
  }
}
