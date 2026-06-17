import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// TODO: Mirror signups to Airtable or CRM when ready

export async function POST(req: NextRequest) {
  const { email, company, useCase } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("[waitlist] RESEND_API_KEY not set — logging signup:", {
      email,
      company,
      useCase,
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    // Notify Lakhan
    await resend.emails.send({
      from: "lakhan.samani@authorizer.dev",
      to: "lakhan.samani@authorizer.dev",
      subject: "New RAGAuth waitlist signup",
      text: [
        "New waitlist signup for RAGAuth",
        "",
        `Email: ${email}`,
        `Company: ${company || "(not provided)"}`,
        `Use case: ${useCase || "(not provided)"}`,
        `Timestamp: ${new Date().toISOString()}`,
      ].join("\n"),
    });

    // Confirm to user
    await resend.emails.send({
      from: "lakhan.samani@authorizer.dev",
      to: email,
      subject: "You're on the RAGAuth waitlist",
      text: [
        `Hi${company ? ` from ${company}` : ""},`,
        "",
        "Thanks for joining — Lakhan will be in touch within 48 hours.",
        "",
        "In the meantime, check out the demo:",
        "https://blog.authorizer.dev/permission-aware-rag-authorizer-openfga-qdrant",
        "",
        "— Lakhan",
        "lakhan@praalaktech.com",
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Resend error:", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
