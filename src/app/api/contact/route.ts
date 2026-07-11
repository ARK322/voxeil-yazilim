import { NextResponse } from "next/server";
import {
  GOOGLE_FORM_ACTION,
  sanitizeContactPayload,
  type ContactFormPayload,
} from "@/lib/contact-form";

async function forwardToGoogleForms(data: ContactFormPayload) {
  const body = new URLSearchParams({
    "entry.2035581240": data.name,
    "entry.9241696": data.emailOrPhone,
    "entry.1907766424": data.message,
  });

  const response = await fetch(GOOGLE_FORM_ACTION, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    redirect: "manual",
  });

  return response.status === 200 || response.status === 302;
}

export async function POST(request: Request) {
  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const parsed = sanitizeContactPayload(json);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const ok = await forwardToGoogleForms(parsed.data);
    if (!ok) {
      return NextResponse.json(
        { error: "Form gönderilemedi. Lütfen tekrar deneyin." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Form gönderilemedi. Lütfen tekrar deneyin." },
      { status: 502 },
    );
  }
}
