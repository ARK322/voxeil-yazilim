export const GOOGLE_FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSfw7FKLn0yfDuwG44SzeC19RoAZng52t4CPyuk56nkM0DTl8g/formResponse";

export const GOOGLE_FORM_FIELDS = {
  name: "entry.2035581240",
  emailOrPhone: "entry.9241696",
  message: "entry.1907766424",
} as const;

export const GOOGLE_FORM_TARGET = "voxeil-google-form";

export function validateEmailOrPhone(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const cleanedValue = trimmed.replace(/\s/g, "").replace(/[()-]/g, "");
  const phoneRegex = /^(\+90)?[5][0-9]{9}$|^0[5][0-9]{9}$|^[5][0-9]{9}$/;

  return emailRegex.test(trimmed) || phoneRegex.test(cleanedValue);
}

export function validateContactFields(input: {
  name: string;
  emailOrPhone: string;
  message: string;
  website?: string;
}): string | null {
  const name = input.name.trim();
  const emailOrPhone = input.emailOrPhone.trim();
  const message = input.message.trim();
  const website = input.website?.trim() ?? "";

  if (website) {
    return "Spam tespit edildi.";
  }

  if (!name || name.length > 120) {
    return "Geçerli bir ad soyad giriniz.";
  }

  if (!validateEmailOrPhone(emailOrPhone)) {
    return "Geçerli bir e-posta adresi veya telefon numarası giriniz.";
  }

  if (!message || message.length < 10 || message.length > 4000) {
    return "Mesaj en az 10, en fazla 4000 karakter olmalıdır.";
  }

  return null;
}
