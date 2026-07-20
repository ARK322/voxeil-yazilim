import {
  FaBullseye,
  FaCheckCircle,
  FaComments,
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaLayerGroup,
} from "react-icons/fa";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import {
  CompanyBlock,
  CompanyCta,
  CompanyHero,
  CompanyIcon,
} from "@/components/company/CompanyShell";
import { getCompanyPage } from "@/components/company/content";
import AnimatedCounter from "@/components/company/why-us/AnimatedCounter";
import "@/components/company/company.css";
import "@/components/company/company-sections.css";

const page = getCompanyPage("neden-biz")!;

const features = [
  {
    index: "01",
    title: "Hızlı Teslimat",
    description:
      "Önceliklendirilmiş backlog ve kısa sprint döngüleriyle değer üreten işlevleri erken hayata geçiririz.",
    Icon: FaRocket,
  },
  {
    index: "02",
    title: "Yenilikçi Çözümler",
    description:
      "Güncel stack ve kanıtlanmış mimari kalıplarla size özel çözümler tasarlarız.",
    Icon: FaLightbulb,
  },
  {
    index: "03",
    title: "Odaklanmış Yaklaşım",
    description:
      "Her iş ortağına özel keşif, risk analizi ve yol haritası çıkarırız. Ölçülebilir hedeflere kilitleniriz.",
    Icon: FaBullseye,
  },
  {
    index: "04",
    title: "Güvenilir Ortaklık",
    description:
      "Teslimattan sonra da yanınızdayız: bakım, izleme, iyileştirme ve danışmanlık.",
    Icon: FaHandshake,
  },
];

const commitments = [
  {
    title: "Şeffaf sprint yönetimi",
    body: "Düzenli demo, açık backlog ve net öncelikler. Ne üzerinde çalışıldığını her zaman bilirsiniz.",
    Icon: FaCheckCircle,
  },
  {
    title: "Ölçülebilir kalite",
    body: "Performans, güvenlik ve kullanılabilirlik kriterlerini baştan tanımlar; teslimattan önce test ederiz.",
    Icon: FaCheckCircle,
  },
  {
    title: "Sahiplenilen mimari",
    body: "Geçici yamalar yerine bakımı kolay, ölçeklenebilir ve belgelenmiş bir temel bırakırız.",
    Icon: FaLayerGroup,
  },
  {
    title: "Doğrudan iletişim",
    body: "Aracı katman olmadan geliştirici ve mimarla konuşursunuz. Kararlar hızlı alınır.",
    Icon: FaComments,
  },
];

const stats = [
  {
    value: 7,
    suffix: "+",
    label: "Yıl Deneyim",
    description: "Sektör deneyimi ve modern mühendislik pratikleriyle değer katıyoruz.",
  },
  {
    value: 50,
    suffix: "+",
    label: "Mutlu Müşteri",
    description: "Farklı sektörlerden firmalarla uzun vadeli iş birlikleri.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Memnuniyet",
    description: "Tekrar eden iş birliği başarı ölçütümüzün merkezinde.",
  },
  {
    value: 15,
    suffix: "+",
    label: "Teknik Uzmanlık",
    description: "Modern stack ve kanıtlanmış yöntemlerle güvenilir çözümler.",
  },
];

export default function WhyUsPage() {
  return (
    <SitePageLayout>
      <article className="company-page">
        <div className="company-shell">
          <CompanyHero
            title={page.title}
            lead={page.hero}
            meta={[
              { label: "Sprint bazlı teslimat", Icon: FaRocket },
              { label: "Ölçülebilir kalite", Icon: FaCheckCircle },
              { label: "Uzun vadeli destek", Icon: FaHandshake },
            ]}
          />

          <CompanyBlock title="Rakamlarla Voxeil" titleId="why-stats">
            <div className="company-grid-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="company-item company-item--rule">
                  <AnimatedCounter
                    id={`why-us-counter-${stat.value}`}
                    target={stat.value}
                    suffix={stat.suffix}
                    delay={index * 0.12}
                    className="why-stat__value site-glow-text text-orange font-bold"
                  />
                  <p className="why-stat__label">{stat.label}</p>
                  <p className="why-stat__desc">{stat.description}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyBlock
            title="Neden bizimle çalışırsınız?"
            intro="Dört temel vaat: erken değer, doğru teknoloji, net odak ve teslim sonrası ortaklık."
            titleId="why-features"
          >
            <div className="company-grid-2">
              {features.map((feature) => (
                <div key={feature.title} className="company-item company-item--rule">
                  <span className="company-item__index">{feature.index}</span>
                  <div className="company-item__head">
                    <CompanyIcon Icon={feature.Icon} />
                    <h3>{feature.title}</h3>
                  </div>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyBlock title="Taahhütlerimiz" titleId="why-commit">
            <div>
              {commitments.map((item) => (
                <div key={item.title} className="commit-row">
                  <div className="commit-row__title">
                    <CompanyIcon Icon={item.Icon} />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyCta
            text="Projeniz için ücretsiz keşif görüşmesi planlayın. Yol haritasını birlikte çıkaralım."
            secondaryHref="/surec/"
            secondary
          />
        </div>
      </article>
    </SitePageLayout>
  );
}
