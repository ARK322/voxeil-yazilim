import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <SitePageLayout>
      <section className="site-section">
        <div className="site-container max-w-4xl mx-auto">
          <PageHero
            title="İletişim"
            description="Projeniz için ücretsiz keşif görüşmesi planlayın. Placeholder iletişim sayfası — form ve içerik düzenlenecek."
          />

          <div className="site-card p-6 sm:p-8 space-y-6">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-foreground font-medium text-sm mb-1">Adres</p>
                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted text-sm hover:text-orange transition-colors"
                  >
                    {siteConfig.address.full}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-orange mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-foreground font-medium text-sm mb-1">E-posta</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-muted text-sm hover:text-orange transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-orange mt-1 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-foreground font-medium text-sm mb-1">Telefon</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-muted text-sm hover:text-orange transition-colors"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </li>
            </ul>

            <p className="text-muted text-sm leading-relaxed border-t border-border-divider pt-6">
              İletişim formu ve detaylı içerik bu sayfaya eklenecek. Şimdilik ana sayfadaki iletişim
              bölümünden de bize ulaşabilirsiniz.
            </p>

            <Link href="/#iletisim" className="site-btn-primary inline-flex">
              Ana Sayfa İletişim Bölümü
            </Link>
          </div>
        </div>
      </section>
    </SitePageLayout>
  );
}
