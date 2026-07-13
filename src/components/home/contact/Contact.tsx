"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import SocialLinks from "@/components/layout/footer/SocialLinks";
import {
  GOOGLE_FORM_ACTION,
  GOOGLE_FORM_FIELDS,
  GOOGLE_FORM_TARGET,
  validateContactFields,
  validateEmailOrPhone,
} from "@/lib/contact-form";
import { siteConfig } from "@/lib/site";

export default function Contact() {
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
    <section id="iletisim" className="site-section relative overflow-x-clip">
      <div className="site-container">
        <header className="site-section__header">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="site-section__title"
          >
            İletişim
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="site-section__desc"
          >
            Ücretsiz keşif görüşmesi için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
          </motion.p>
        </header>

        <div className="site-section__grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="site-heading text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5">
              İletişim Bilgileri
            </h3>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full site-icon-btn flex-shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">E-posta</p>
                  <a href="mailto:info@voxeil.com" className="site-link">
                    info@voxeil.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full site-icon-btn flex-shrink-0">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Telefon</p>
                  <a href={`tel:${siteConfig.phone}`} className="site-link">
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full site-icon-btn flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Adres</p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-orange transition-colors"
                  >
                    {siteConfig.address.full}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full site-icon-btn flex-shrink-0">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Çalışma Saatleri</p>
                  <p className="text-muted">Pazartesi - Cuma: 09:00 - 18:00</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <p className="text-white font-semibold mb-4">Sosyal Medya</p>
              <SocialLinks />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange via-orange/50 to-transparent lg:block hidden"></div>

            <div className="pt-0 lg:pl-12 space-y-6 sm:space-y-8">
              <h3 className="site-heading text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-5">
                Hızlı İletişim Formu
              </h3>

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
                    Ad Soyad <span className="text-orange" title="Zorunlu alan">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name={GOOGLE_FORM_FIELDS.name}
                    required
                    maxLength={120}
                    className="site-input"
                    placeholder="Adınız ve Soyadınız *"
                    aria-label="Ad-Soyad"
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
                    placeholder="E-posta adresiniz veya telefon numaranız (örn: info@example.com veya 05551234567)"
                    aria-label="Mail veya Numara"
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
                    Açıklama <span className="text-orange" title="Zorunlu alan">*</span>
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
                    aria-label="Açıklama"
                    aria-required="true"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
