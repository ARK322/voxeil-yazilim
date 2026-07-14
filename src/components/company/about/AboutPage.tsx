import {
  FaBullseye,
  FaCode,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { getCompanyPage } from "@/components/company/content";
import "./about.css";

const page = getCompanyPage("hakkimizda")!;

const missionVision = [
  {
    icon: FaBullseye,
    heading: "Misyonumuz",
    body: "İşletmelerin dijital dönüşüm yolculuğunda güvenilir teknoloji ortağı olmak. Modern yazılım mühendisliği pratikleri, şeffaf iletişim ve müşteri odaklı yaklaşımla kalıcı değer üretmek.",
  },
  {
    icon: FaEye,
    heading: "Vizyonumuz",
    body: "Türkiye’den global ölçeğe uzanan, sürdürülebilir ve ölçülebilir dijital ürünler üreten bir mühendislik stüdyosu olmak. Her projede teknik kaliteyi iş sonuçlarıyla buluşturmak.",
  },
];

const values = [
  {
    icon: FaLightbulb,
    title: "Netlik",
    description:
      "Kapsamı, öncelikleri ve riskleri baştan konuşuruz. Sürpriz kapsama değil, birlikte karar verilen yol haritasına inanırız.",
  },
  {
    icon: FaUsers,
    title: "Ortaklık",
    description:
      "Sadece kod teslim etmeyiz; ürün, süreç ve operasyon tarafında uzun vadeli bir iş ortağı gibi davranırız.",
  },
  {
    icon: FaShieldAlt,
    title: "Sorumluluk",
    description:
      "Güvenlik, performans ve sürdürülebilirlik teslimattan sonra da bizim sorumluluğumuzdadır.",
  },
  {
    icon: FaHandshake,
    title: "Şeffaflık",
    description:
      "Sprint demo’ları, açık backlog ve düzenli durum güncellemeleri ile her adımı görünür kılarız.",
  },
];

const whatWeDo = {
  paragraphs: [
    "Kurumsal web siteleri ve web uygulamalarından mobil uygulamalara, e-ticaret platformlarından süreç otomasyonuna kadar geniş bir yelpazede yazılım geliştiriyoruz.",
    "AWS, Azure, Next.js, React, TypeScript ve modern DevOps araçlarıyla ölçeklenebilir, güvenli ve bakımı kolay dijital ürünler inşa ediyoruz.",
  ],
  list: [
    "Web ve mobil uygulama geliştirme",
    "E-ticaret ve ödeme entegrasyonları",
    "Dijital dönüşüm ve süreç otomasyonu",
    "Bulut altyapısı ve DevOps danışmanlığı",
    "API, mikroservis ve entegrasyon mimarisi",
    "Bakım, izleme ve teknik destek",
  ],
};

const storyPoints = [
  {
    title: "Ankara merkezli, Türkiye geneli hizmet",
    body: "Çekirdek ekibimiz Ankara’da konumlanır; Türkiye genelinde ve yurt dışında uzaktan proje yönetimi ile çalışırız.",
  },
  {
    title: "Küçük ekip, yüksek sahiplenme",
    body: "Projelerinize aracı katman olmadan doğrudan geliştirici ve mimar ekibi katılır. Kararlar hızlı, iletişim kısa tutulur.",
  },
  {
    title: "Ürün gibi düşünen mühendislik",
    body: "Sadece isteneni kodlamak yerine kullanım senaryolarını, operasyonel yükü ve uzun vadeli maliyeti birlikte planlarız.",
  },
];

export default function AboutPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero title={page.title} description={page.hero} />

          <div className="space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
              {missionVision.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.heading}
                    className="site-card site-card--hover relative overflow-hidden p-5 sm:p-6 h-full"
                  >
                    <div
                      className="absolute -bottom-4 -right-4 opacity-10 pointer-events-none"
                      aria-hidden="true"
                    >
                      <Icon className="text-orange text-[5rem] sm:text-[6rem]" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange/30 bg-black/60">
                          <Icon className="text-orange text-sm" aria-hidden="true" />
                        </span>
                        <h2 className="site-heading">{item.heading}</h2>
                      </div>
                      <p className="text-muted text-sm sm:text-base leading-relaxed">{item.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">Değerlerimiz</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <article key={value.title} className="site-card p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange/30 bg-black/60">
                          <Icon className="text-orange text-sm" aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                      </div>
                      <p className="text-muted text-sm sm:text-base leading-relaxed">
                        {value.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <article className="site-card site-card--hover relative overflow-hidden p-5 sm:p-6">
              <div
                className="absolute top-4 right-4 opacity-10 pointer-events-none"
                aria-hidden="true"
              >
                <FaCode className="text-orange text-[5rem] sm:text-[6rem]" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-orange/30 bg-black/60">
                    <FaCode className="text-orange text-sm" aria-hidden="true" />
                  </span>
                  <h2 className="site-heading">Ne Yapıyoruz?</h2>
                </div>
                {whatWeDo.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="text-muted text-sm sm:text-base leading-relaxed mb-3 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mt-4">
                  {whatWeDo.list.map((item) => (
                    <li
                      key={item}
                      className="about-highlight-item flex items-start gap-2 rounded-lg border border-orange/20 bg-black/40 px-3 py-2.5 text-sm text-muted-secondary"
                    >
                      <span className="text-orange mt-0.5 shrink-0" aria-hidden="true">
                        •
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">
                Nasıl konumlanıyoruz?
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:gap-5">
                {storyPoints.map((point) => (
                  <article
                    key={point.title}
                    className="site-card p-5 sm:p-6 border-l-2 border-l-orange/50"
                  >
                    <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
                    <p className="text-muted text-sm sm:text-base leading-relaxed">{point.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <PageCta />
        </div>
      </section>
    </SitePageLayout>
  );
}
