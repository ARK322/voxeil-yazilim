import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import SocialLinks from "@/components/layout/footer/SocialLinks";
import ContactForm from "@/components/resources/ContactForm";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero
            title="İletişim"
            description="Ücretsiz keşif görüşmesi için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div className="space-y-6">
              <h2 className="site-heading text-xl sm:text-2xl">İletişim Bilgileri</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full site-icon-btn flex-shrink-0">
                    <FaEnvelope className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">E-posta</p>
                    <a href={`mailto:${siteConfig.email}`} className="site-link">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full site-icon-btn flex-shrink-0">
                    <FaPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Telefon</p>
                    <a href={`tel:${siteConfig.phone}`} className="site-link">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
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
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full site-icon-btn flex-shrink-0">
                    <FaClock className="text-white text-xl" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Çalışma Saatleri</p>
                    <p className="text-muted">Pazartesi - Cuma: 09:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-white font-semibold mb-4">Sosyal Medya</p>
                <SocialLinks />
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange via-orange/50 to-transparent lg:block hidden" />
              <div className="pt-0 lg:pl-12 space-y-6">
                <h2 className="site-heading text-xl sm:text-2xl">Hızlı İletişim Formu</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </SitePageLayout>
  );
}
