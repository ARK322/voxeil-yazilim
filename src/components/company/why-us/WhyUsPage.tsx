import {
  FaBullseye,
  FaCheckCircle,
  FaHandshake,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import PageCta from "@/components/shared/templates/PageCta";
import PageHero from "@/components/shared/templates/PageHero";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import { getCompanyPage } from "@/components/company/content";
import AnimatedCounter from "@/components/company/why-us/AnimatedCounter";

const page = getCompanyPage("neden-biz")!;

const features = [
  {
    icon: FaRocket,
    title: "Hızlı Teslimat",
    description:
      "Önceliklendirilmiş backlog ve kısa sprint döngüleriyle değer üreten işlevleri erken hayata geçiririz. Kritik iş hedefleri için zamanında, kaliteli çıktı.",
  },
  {
    icon: FaLightbulb,
    title: "Yenilikçi Çözümler",
    description:
      "Güncel stack ve kanıtlanmış mimari kalıplarla size özel çözümler tasarlarız. Teknolojiyi gösteriş için değil, sürdürülebilir sonuç için seçeriz.",
  },
  {
    icon: FaBullseye,
    title: "Odaklanmış Yaklaşım",
    description:
      "Her iş ortağına özel keşif, risk analizi ve yol haritası çıkarırız. Dağınık kapsam yerine ölçülebilir hedeflere kilitleniriz.",
  },
  {
    icon: FaHandshake,
    title: "Güvenilir Ortaklık",
    description:
      "Teslimattan sonra da yanınızdayız: bakım, izleme, iyileştirme ve danışmanlık ile uzun vadeli iş birliği kurarız.",
  },
];

const commitments = [
  {
    title: "Şeffaf sprint yönetimi",
    body: "Düzenli demo, açık backlog ve net öncelikler. Ne üzerinde çalışıldığını ve sıradaki adımı her zaman bilirsiniz.",
  },
  {
    title: "Ölçülebilir kalite",
    body: "Performans, güvenlik ve kullanılabilirlik kriterlerini baştan tanımlar; teslimattan önce test ederiz.",
  },
  {
    title: "Sahiplenilen mimari",
    body: "Geçici yamalar yerine bakımı kolay, ölçeklenebilir ve belgelenmiş bir temel bırakırız.",
  },
  {
    title: "Doğrudan iletişim",
    body: "Aracı katman olmadan geliştirici ve mimarla konuşursunuz. Kararlar hızlı, geri bildirim döngüsü kısadır.",
  },
];

const stats = [
  {
    value: 7,
    suffix: "+",
    label: "Yıl Deneyim",
    description: "Sektör deneyimi ve modern mühendislik pratikleriyle iş ortaklarımıza değer katıyoruz.",
  },
  {
    value: 50,
    suffix: "+",
    label: "Mutlu Müşteri",
    description: "Farklı sektörlerden firmalarla uzun vadeli yazılım iş birlikleri yürütüyoruz.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Müşteri Memnuniyeti",
    description: "Memnuniyet ve tekrar eden iş birliği, başarı ölçütümüzün merkezinde yer alır.",
  },
  {
    value: 15,
    suffix: "+",
    label: "Teknik Uzmanlık",
    description: "Modern stack ve kanıtlanmış yöntemlerle güvenilir çözümler üretiyoruz.",
  },
];

export default function WhyUsPage() {
  return (
    <SitePageLayout>
      <section className="site-section relative overflow-x-clip">
        <div className="site-container max-w-5xl mx-auto">
          <PageHero title={page.title} description={page.hero} />

          <div className="space-y-8 sm:space-y-10">
            <div className="space-y-6">
              {[0, 2].map((groupStart) => {
                const isFirstRow = groupStart === 0;
                return (
                  <div
                    key={groupStart}
                    className="w-full flex flex-col lg:flex-row gap-6 items-stretch"
                  >
                    {[groupStart, groupStart + 1].map((featureIndex, slot) => {
                      const feature = features[featureIndex];
                      const IconComponent = feature.icon;
                      const widthClass =
                        slot === 0
                          ? isFirstRow
                            ? "lg:w-[60%]"
                            : "lg:w-[40%]"
                          : isFirstRow
                            ? "lg:w-[40%]"
                            : "lg:w-[60%]";

                      return (
                        <div key={feature.title} className={`w-full ${widthClass} flex`}>
                          <div className="site-card site-card--hover p-5 lg:p-6 relative overflow-hidden min-h-[170px] flex flex-col items-center justify-center text-center w-full">
                            <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:right-4 opacity-10 pointer-events-none overflow-hidden">
                              <IconComponent className="text-orange text-[5rem] sm:text-[8rem] lg:text-[12rem]" />
                            </div>
                            <p className="text-xl sm:text-2xl font-bold text-white mb-3 relative z-10">
                              {feature.title}
                            </p>
                            <p className="text-muted text-base sm:text-lg leading-relaxed relative z-10">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5 text-center sm:text-left">
                Rakamlarla Voxeil
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={stat.label} className="site-card p-4 lg:p-5 flex flex-col">
                    <AnimatedCounter
                      id={`why-us-counter-${stat.value}`}
                      target={stat.value}
                      suffix={stat.suffix}
                      delay={index * 0.2}
                    />
                    <div className="text-muted text-base lg:text-lg font-medium mb-2 text-center">
                      {stat.label}
                    </div>
                    <p className="text-muted-secondary text-sm lg:text-base leading-relaxed flex-grow">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-5">
                Taahhütlerimiz
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {commitments.map((item) => (
                  <article key={item.title} className="site-card p-5 sm:p-6">
                    <div className="flex items-start gap-3 mb-2">
                      <FaCheckCircle className="text-orange mt-1 shrink-0" aria-hidden="true" />
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-muted text-sm sm:text-base leading-relaxed pl-7">
                      {item.body}
                    </p>
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
