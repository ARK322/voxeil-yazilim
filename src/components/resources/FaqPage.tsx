import { FaCircleQuestion, FaComments } from "react-icons/fa6";
import FaqAccordion from "@/components/resources/FaqAccordion";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import {
  CompanyBlock,
  CompanyCta,
  CompanyHero,
} from "@/components/company/CompanyShell";
import { faqPageContent } from "@/components/resources/content";
import "@/components/company/company.css";

export default function FaqPage() {
  return (
    <SitePageLayout>
      <article className="company-page">
        <div className="company-shell">
          <CompanyHero
            title={faqPageContent.title}
            lead={faqPageContent.hero}
            meta={[
              { label: "Süreç & kapsam", Icon: FaCircleQuestion },
              { label: "Destek modeli", Icon: FaComments },
            ]}
          />

          <CompanyBlock
            title="Merak edilenler"
            intro="Cevabını bulamadığınız bir soru varsa iletişime geçin — kısa sürede dönüş yaparız."
            titleId="faq-list"
          >
            <FaqAccordion />
          </CompanyBlock>

          <CompanyCta
            text="Projeniz için ücretsiz keşif görüşmesi planlayın. Sorularınızı birlikte netleştirelim."
            secondaryHref="/iletisim/"
            secondaryLabel="İletişim"
          />
        </div>
      </article>
    </SitePageLayout>
  );
}
