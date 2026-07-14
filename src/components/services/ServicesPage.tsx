import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import ServicesTabs from "@/components/services/ServicesTabs";
import { servicesHub } from "@/components/services/content";
import { serviceHighlights } from "@/components/services/services-data";

export default function ServicesPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero title={servicesHub.title} description={servicesHub.intro} />

          <ServicesTabs />

          <div className="mt-8 sm:mt-10 space-y-4 text-muted leading-relaxed">
            <p className="text-sm sm:text-base max-w-3xl mx-auto text-center">
              E-ticaret platformlarından kurumsal otomasyon sistemlerine, API entegrasyonlarından
              veri odaklı raporlama panellerine kadar geniş bir yelpazede çözümler geliştiriyoruz.
              AWS, Azure ve modern DevOps araçlarıyla yazılımınızı güvenli ve sürdürülebilir
              şekilde hayata geçiriyoruz.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm sm:text-base max-w-4xl mx-auto">
              {serviceHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-orange mt-0.5 shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
