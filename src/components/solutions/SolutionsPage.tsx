import Link from "next/link";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaDollarSign,
  FaGraduationCap,
  FaHospital,
  FaHotel,
  FaIndustry,
  FaPuzzlePiece,
  FaSearch,
  FaSitemap,
  FaTruck,
} from "react-icons/fa";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import {
  CompanyBlock,
  CompanyCta,
  CompanyHero,
  CompanyIcon,
} from "@/components/company/CompanyShell";
import { solutionsHub } from "@/components/solutions/content";
import "@/components/company/company.css";
import "@/components/company/company-sections.css";
import "./solutions-page.css";

const industries: Array<{
  slug: string;
  icon: IconType;
  title: string;
  description: string;
}> = [
  {
    slug: "uretim",
    icon: FaIndustry,
    title: "Üretim",
    description: "Endüstri 4.0 çözümleri ile üretim süreçlerinizi dijitalleştirin.",
  },
  {
    slug: "saglik",
    icon: FaHospital,
    title: "Sağlık",
    description: "Hasta yönetim sistemleri ve dijital sağlık çözümleri.",
  },
  {
    slug: "finans",
    icon: FaDollarSign,
    title: "Finans",
    description: "Güvenli finansal yazılımlar ve ödeme sistemleri.",
  },
  {
    slug: "egitim",
    icon: FaGraduationCap,
    title: "Eğitim",
    description: "E-öğrenme platformları ve okul yönetim sistemleri.",
  },
  {
    slug: "lojistik",
    icon: FaTruck,
    title: "Lojistik",
    description: "Tedarik zinciri yönetimi ve lojistik takip sistemleri.",
  },
  {
    slug: "turizm",
    icon: FaHotel,
    title: "Turizm",
    description: "Rezervasyon sistemleri ve müşteri yönetim platformları.",
  },
];

const approach = [
  {
    title: "Sektör analizi",
    body: "Operasyonel akışları, regülasyonları ve mevcut sistemleri birlikte haritalarız.",
    Icon: FaSearch,
  },
  {
    title: "Özelleştirilmiş mimari",
    body: "Hazır paket yerine iş süreçlerinize uygun modüler yazılım tasarlarız.",
    Icon: FaPuzzlePiece,
  },
  {
    title: "Entegrasyon odaklı",
    body: "ERP, ödeme, lojistik ve üçüncü taraf sistemlerle güvenli entegrasyon kurarız.",
    Icon: FaSitemap,
  },
];

export default function SolutionsPage() {
  return (
    <SitePageLayout>
      <article className="company-page">
        <div className="company-shell">
          <CompanyHero
            title={solutionsHub.title}
            lead={solutionsHub.intro}
            meta={[
              { label: "6 sektör odağı", Icon: FaIndustry },
              { label: "Özelleştirilmiş mimari", Icon: FaPuzzlePiece },
              { label: "Entegrasyon öncelikli", Icon: FaSitemap },
            ]}
          />

          <CompanyBlock
            title="Sektörel çözümler"
            intro="Sektörünüze özel ihtiyaçları anlayarak dijital dönüşüm yolunu birlikte çizeriz."
            titleId="solutions-industries"
          >
            <div className="solutions-layout">
              <div className="solutions-visual">
                <div className="solutions-visual__frame">
                  <Image
                    src="/shape.webp"
                    alt="Endüstriyel dijital dönüşüm illüstrasyonu"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    className="object-contain shape-image-transform"
                    unoptimized
                  />
                </div>
              </div>

              <div className="company-grid-2">
                {industries.map((industry) => {
                  const Icon = industry.icon;
                  return (
                    <Link
                      key={industry.slug}
                      href={`${solutionsHub.basePath}${industry.slug}/`}
                      className="company-item company-item--rule solutions-link"
                    >
                      <div className="company-item__head">
                        <CompanyIcon Icon={Icon} />
                        <h3>{industry.title}</h3>
                      </div>
                      <p>{industry.description}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          </CompanyBlock>

          <CompanyBlock
            title="Sektörel projelerde yaklaşımımız"
            titleId="solutions-approach"
          >
            <div className="company-grid-3">
              {approach.map((item) => (
                <div key={item.title} className="company-item company-item--rule">
                  <div className="company-item__head">
                    <CompanyIcon Icon={item.Icon} />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyCta
            text="Sektörünüze uygun yol haritası için ücretsiz keşif görüşmesi planlayın."
            secondaryHref="/hizmetler/"
            secondaryLabel="Hizmetler"
          />
        </div>
      </article>
    </SitePageLayout>
  );
}
