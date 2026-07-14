"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  GOOGLE_FORM_ACTION,
  GOOGLE_FORM_FIELDS,
  GOOGLE_FORM_TARGET,
  validateContactFields,
  validateEmailOrPhone,
} from "@/lib/contact-form";

export default function ContactForm() {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmailOrPhoneField = (value: string): boolean => {
    if (!value.trim()) {
      setEmailOrPhoneError("Bu alan zorunludur");
      return false;
    }

    if (validateEmailOrPhone(value)) {
      setEmailOrPhoneError("");
      return true;
    }

    setEmailOrPhoneError("Geçerli bir e-posta adresi veya telefon numarası giriniz");
    return false;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get("website") as string;
    const name = (formData.get(GOOGLE_FORM_FIELDS.name) as string)?.trim();
    const emailOrPhoneValue = (formData.get(GOOGLE_FORM_FIELDS.emailOrPhone) as string)?.trim();
    const message = (formData.get(GOOGLE_FORM_FIELDS.message) as string)?.trim();

    const validationError = validateContactFields({
      name,
      emailOrPhone: emailOrPhoneValue,
      message,
      website: honeypot,
    });

    if (validationError) {
      if (validationError.includes("e-posta") || validationError.includes("telefon")) {
        setEmailOrPhoneError(validationError);
      } else {
        setSubmitError(validationError);
      }
      return;
    }

    setIsSubmitting(true);
    form.submit();

    setSubmitSuccess(true);
    form.reset();
    setEmailOrPhone("");
    setIsSubmitting(false);

    window.setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <>
      <iframe
        name={GOOGLE_FORM_TARGET}
        title="Form gönderim hedefi"
        className="hidden"
        tabIndex={-1}
      />

      <form
        action={GOOGLE_FORM_ACTION}
        method="POST"
        target={GOOGLE_FORM_TARGET}
        onSubmit={handleSubmit}
        className="space-y-6"
        noValidate
      >
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="honeypot-field"
          aria-hidden="true"
        />

        <div>
          <label htmlFor="contact-name" className="block text-muted-secondary mb-2">
            Ad Soyad <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name={GOOGLE_FORM_FIELDS.name}
            required
            maxLength={120}
            className="site-input"
            placeholder="Adınız ve Soyadınız *"
            aria-required="true"
          />
        </div>

        <div>
          <label htmlFor="contact-email-phone" className="block text-muted-secondary mb-2">
            E-posta veya Telefon <span className="text-orange">*</span>
          </label>
          <input
            type="text"
            id="contact-email-phone"
            name={GOOGLE_FORM_FIELDS.emailOrPhone}
            value={emailOrPhone}
            onChange={(e) => {
              setEmailOrPhone(e.target.value);
              if (emailOrPhoneError) {
                validateEmailOrPhoneField(e.target.value);
              }
            }}
            onBlur={(e) => validateEmailOrPhoneField(e.target.value)}
            required
            className={`site-input ${
              emailOrPhoneError ? "border-red-500 focus:border-red-500" : ""
            }`}
            placeholder="E-posta adresiniz veya telefon numaranız"
            aria-invalid={!!emailOrPhoneError}
            aria-describedby={emailOrPhoneError ? "email-phone-error" : undefined}
          />
          {emailOrPhoneError && (
            <p id="email-phone-error" className="mt-2 text-sm text-red-500 flex items-center gap-2">
              <span>⚠</span>
              {emailOrPhoneError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-muted-secondary mb-2">
            Açıklama <span className="text-orange">*</span>
          </label>
          <textarea
            id="contact-message"
            name={GOOGLE_FORM_FIELDS.message}
            required
            minLength={10}
            maxLength={4000}
            rows={5}
            className="site-input resize-none"
            placeholder="Mesajınızı buraya yazın... *"
            aria-required="true"
          />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-green-400 text-sm font-medium flex items-center gap-2"
            >
              <span className="text-green-500 text-lg">✓</span>
              <span>Formunuz başarıyla gönderildi!</span>
            </motion.div>
          )}
          {submitError && (
            <p className="text-red-400 text-sm" role="alert">
              {submitError}
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="site-btn-primary w-full sm:w-auto text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Gönderiliyor..." : "Gönder"}
          </button>
        </div>
      </form>
    </>
  );
}
