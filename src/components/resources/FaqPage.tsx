import { faqItems } from "@/lib/faq";
import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { faqPageContent } from "@/components/resources/content";

export default function FaqPage() {
  return (
    <SitePageLayout>
      <section className="site-section">
        <div className="site-container max-w-4xl mx-auto">
          <PageHero title={faqPageContent.title} description={faqPageContent.hero} />

          <div className="space-y-3">
            {faqItems.map((item) => (
              <details key={item.question} className="site-card group">
                <summary className="cursor-pointer list-none p-5 sm:p-6 text-foreground font-medium text-sm sm:text-base flex items-center justify-between gap-4">
                  {item.question}
                  <span className="text-orange text-lg leading-none group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-2">
                  <p className="text-muted text-sm leading-relaxed">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
