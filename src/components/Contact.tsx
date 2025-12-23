"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scroll animasyonları
  const contentY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Form state
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // E-posta veya telefon validasyonu
  const validateEmailOrPhone = (value: string): boolean => {
    if (!value.trim()) {
      setEmailOrPhoneError("Bu alan zorunludur");
      return false;
    }

    // E-posta formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Telefon formatı kontrolü (Türkiye: +90 veya 0 ile başlayan, 10-11 haneli)
    // Boşlukları ve özel karakterleri temizle
    const cleanedValue = value.replace(/\s/g, "").replace(/[()-]/g, "");
    // Türkiye telefon formatları: +905551234567, 05551234567, 5551234567
    const phoneRegex = /^(\+90)?[5][0-9]{9}$|^0[5][0-9]{9}$|^[5][0-9]{9}$/;

    if (emailRegex.test(value)) {
      setEmailOrPhoneError("");
      return true;
    } else if (phoneRegex.test(cleanedValue)) {
      setEmailOrPhoneError("");
      return true;
    } else {
      setEmailOrPhoneError("Geçerli bir e-posta adresi veya telefon numarası giriniz");
      return false;
    }
  };

  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Honeypot kontrolü (spam önleme)
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      // Bot tespit edildi, formu gönderme
      console.warn("Spam tespit edildi");
      return;
    }

    // E-posta/telefon validasyonu
    const emailOrPhoneValue = formData.get("entry.9241696") as string;
    if (!validateEmailOrPhone(emailOrPhoneValue)) {
      return;
    }

    setIsSubmitting(true);
    
    // Google Forms'a form göndermek için hidden iframe kullan
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.name = "hidden_iframe_" + Date.now();
    document.body.appendChild(iframe);
    
    form.target = iframe.name;
    
    // Form gönderildikten sonra
    const checkIframe = setInterval(() => {
      try {
        // Iframe yüklendiğinde (form gönderildi)
        if (iframe.contentWindow?.location.href.includes('formResponse') || 
            iframe.contentWindow?.location.href.includes('viewform')) {
          clearInterval(checkIframe);
          setTimeout(() => {
            setSubmitSuccess(true);
            form.reset();
            setEmailOrPhone("");
            setIsSubmitting(false);
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
            // 5 saniye sonra başarı mesajını gizle
            setTimeout(() => {
              setSubmitSuccess(false);
            }, 5000);
          }, 500);
        }
      } catch (e) {
        // Cross-origin hatası beklenen, form gönderilmiş olabilir
      }
    }, 100);
    
    // 5 saniye sonra timeout
    setTimeout(() => {
      clearInterval(checkIframe);
      setSubmitSuccess(true);
      form.reset();
      setEmailOrPhone("");
      setIsSubmitting(false);
      if (document.body.contains(iframe)) {
        document.body.removeChild(iframe);
      }
      // 5 saniye sonra başarı mesajını gizle
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 5000);
    
    // Formu gönder
    form.submit();
  };

  return (
    <section
      ref={containerRef}
      id="iletisim"
      className="relative px-6 lg:px-8 min-h-screen flex flex-col justify-center"
      style={{ paddingTop: '2.55rem', paddingBottom: '2.55rem' }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: 'calc(1280px * 0.94)' }}>
        {/* Başlık */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-6xl font-bold text-white text-center mb-6"
        >
          İletişim
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-400 text-lg text-center mb-16 max-w-3xl mx-auto"
        >
          Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
        </motion.p>

        {/* İki Bölümlü İletişim Alanı */}
        <motion.div
          style={{ y: contentY }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Sol Bölüm - İletişim Bilgileri */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
              Bize Ulaşın
            </h3>

            {/* İletişim Bilgileri */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">E-posta</h4>
                  <a href="mailto:info@voxeil.com" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
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
                <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefon</h4>
                  <a href="tel:+905551234567" className="text-gray-400 hover:text-[#FF6B35] transition-colors">
                    +90 (555) 123 45 67
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
                <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Adres</h4>
                  <p className="text-gray-400">
                    İstanbul, Türkiye
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Çalışma Saatleri</h4>
                  <p className="text-gray-400">
                    Pazartesi - Cuma: 09:00 - 18:00
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Sosyal Medya */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <h4 className="text-white font-semibold mb-4">Sosyal Medya</h4>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/company/voxeil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://github.com/voxeil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://instagram.com/voxeil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#FF6B35] flex items-center justify-center text-white hover:bg-[#FF7B45] transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Sağ Bölüm - Ayırıcı Şerit ve İçerik */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Dikey Ayırıcı Şerit */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF6B35] via-[#FF6B35]/50 to-transparent lg:block hidden"></div>
            
            <div className="lg:pl-12 space-y-8">
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                Hızlı İletişim Formu
              </h3>

              {/* İletişim Formu */}
              <form 
                action="https://docs.google.com/forms/d/e/1FAIpQLSfw7FKLn0yfDuwG44SzeC19RoAZng52t4CPyuk56nkM0DTl8g/formResponse" 
                method="POST" 
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Honeypot Field - Spam önleme (gizli) */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px" }}
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="entry.2035581240" className="block text-gray-300 mb-2">
                    Ad Soyad <span className="text-[#FF6B35]" title="Zorunlu alan">*</span>
                  </label>
                  <input
                    type="text"
                    id="entry.2035581240"
                    name="entry.2035581240"
                    required
                    className="w-full px-4 py-3 bg-black/70 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="Adınız ve Soyadınız *"
                    aria-label="Ad-Soyad"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label htmlFor="entry.9241696" className="block text-gray-300 mb-2">
                    E-posta veya Telefon <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="text"
                    id="entry.9241696"
                    name="entry.9241696"
                    value={emailOrPhone}
                    onChange={(e) => {
                      setEmailOrPhone(e.target.value);
                      if (emailOrPhoneError) {
                        validateEmailOrPhone(e.target.value);
                      }
                    }}
                    onBlur={(e) => validateEmailOrPhone(e.target.value)}
                    required
                    className={`w-full px-4 py-3 bg-black/70 border rounded-lg text-white placeholder-gray-500 focus:outline-none transition-colors ${
                      emailOrPhoneError 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-gray-800 focus:border-[#FF6B35]"
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
                  <label htmlFor="entry.1907766424" className="block text-gray-300 mb-2">
                    Açıklama <span className="text-[#FF6B35]" title="Zorunlu alan">*</span>
                  </label>
                  <textarea
                    id="entry.1907766424"
                    name="entry.1907766424"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/70 border border-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6B35] transition-colors resize-none"
                    placeholder="Mesajınızı buraya yazın... *"
                    aria-label="Açıklama"
                    aria-required="true"
                  ></textarea>
                </div>

                <div className="flex items-center gap-4">
                  {submitSuccess && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-green-400 text-sm font-medium flex items-center gap-2 whitespace-nowrap"
                    >
                      <span className="text-green-500 text-lg">✓</span>
                      <span>Formunuz başarıyla gönderildi!</span>
                    </motion.div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-8 py-4 bg-[#FF6B35] text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#FF7B45] hover:shadow-lg hover:shadow-[#FF6B35]/50 hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${
                      submitSuccess ? 'flex-shrink-0' : 'w-full'
                    }`}
                  >
                    {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

