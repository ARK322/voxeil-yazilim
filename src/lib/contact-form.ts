export const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfw7FKLn0yfDuwG44SzeC19RoAZng52t4CPyuk56nkM0DTl8g/formResponse";

export type ContactFormPayload = {
  name: string;
  emailOrPhone: string;
  message: string;
  website?: string;
};

export function validateEmailOrPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cleanedValue = trimmed.replace(/\s/g, "").replace(/[()-]/g, "");
  const phoneRegex = /^(\+90)?[5][0-9]{9}$|^0[5][0-9]{9}$|^[5][0-9]{9}$/;

  return emailRegex.test(trimmed) || phoneRegex.test(cleanedValue);
}

export function sanitizeContactPayload(body: unknown):
  | { ok: true; data: ContactFormPayload }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Geçersiz istek." };
  }

  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const emailOrPhone = typeof raw.emailOrPhone === "string" ? raw.emailOrPhone.trim() : "";
  const message = typeof raw.message === "string" ? raw.message.trim() : "";
  const website = typeof raw.website === "string" ? raw.website.trim() : "";

  if (website) {
    return { ok: false, error: "Spam tespit edildi." };
  }

  if (!name || name.length > 120) {
    return { ok: false, error: "Geçerli bir ad soyad giriniz." };
  }

  if (!validateEmailOrPhone(emailOrPhone)) {
    return { ok: false, error: "Geçerli bir e-posta adresi veya telefon numarası giriniz." };
  }

  if (!message || message.length < 10 || message.length > 4000) {
    return { ok: false, error: "Mesaj en az 10, en fazla 4000 karakter olmalıdır." };
  }

  return {
    ok: true,
    data: { name, emailOrPhone, message },
  };
}
