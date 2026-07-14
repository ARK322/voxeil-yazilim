import Link from "next/link";
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FaDollarSign,
  FaGraduationCap,
  FaHospital,
  FaHotel,
  FaIndustry,
  FaTruck,
} from "react-icons/fa";
import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { solutionsHub } from "@/components/solutions/content";
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
  },
  {
    title: "Özelleştirilmiş mimari",
    body: "Hazır paket yerine iş süreçlerinize uygun modüler yazılım tasarlarız.",
  },
  {
    title: "Entegrasyon odaklı",
    body: "ERP, ödeme, lojistik ve üçüncü taraf sistemlerle güvenli entegrasyon kurarız.",
  },
];

export default function SolutionsPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero title={solutionsHub.title} description={solutionsHub.intro} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center mb-10 sm:mb-12">
            <div className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none lg:min-h-[420px]">
              <div className="relative aspect-[4/3] w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-none lg:h-[420px] lg:aspect-auto">
                <Image
                  src="/shape.webp"
                  alt="Endüstriyel dijital dönüşüm illüstrasyonu"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain shape-image-transform"
                  unoptimized
                />
              </div>
            </div>

            <div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-4 sm:gap-6">
              {industries.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <Link
                    key={industry.slug}
                    href={`${solutionsHub.basePath}${industry.slug}/`}
                    className="site-card site-card--hover p-3.5 sm:p-5 relative overflow-hidden group block"
                  >
                    <div className="absolute top-2 right-2 text-5xl sm:text-7xl opacity-10 group-hover:opacity-15 transition-opacity duration-300">
                      <IconComponent className="text-orange" />
                    </div>
                    <p className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 relative z-10">
                      {industry.title}
                    </p>
                    <p className="text-muted text-sm relative z-10">{industry.description}</p>
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">
              Sektörel projelerde yaklaşımımız
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              {approach.map((item) => (
                <article key={item.title} className="site-card p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </div>

          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
