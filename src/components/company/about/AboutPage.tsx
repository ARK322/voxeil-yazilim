import {
  FaBullseye,
  FaCode,
  FaEye,
  FaHandshake,
  FaLightbulb,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import SitePageLayout from "@/components/shared/templates/SitePageLayout";
import {
  CompanyBlock,
  CompanyCta,
  CompanyHero,
  CompanyIcon,
} from "@/components/company/CompanyShell";
import { getCompanyPage } from "@/components/company/content";
import { siteConfig } from "@/lib/site";
import "@/components/company/company.css";
import "@/components/company/company-sections.css";

const page = getCompanyPage("hakkimizda")!;

const missionVision = [
  {
    heading: "Misyonumuz",
    body: "İşletmelerin dijital dönüşüm yolculuğunda güvenilir teknoloji ortağı olmak. Modern yazılım mühendisliği pratikleri, şeffaf iletişim ve müşteri odaklı yaklaşımla ölçülebilir, kalıcı değer üretmek.",
    Icon: FaBullseye,
  },
  {
    heading: "Vizyonumuz",
    body: "Türkiye’den global ölçeğe uzanan, sürdürülebilir dijital ürünler üreten bir mühendislik stüdyosu olmak. Her projede teknik kaliteyi iş sonuçlarıyla aynı masada buluşturmak.",
    Icon: FaEye,
  },
];

const values = [
  {
    title: "Netlik",
    description:
      "Kapsamı, öncelikleri ve riskleri baştan konuşuruz. Sürpriz kapsama değil; birlikte karar verilen yol haritasına inanırız.",
    Icon: FaLightbulb,
  },
  {
    title: "Ortaklık",
    description:
      "Sadece kod teslim etmeyiz. Ürün, süreç ve operasyon tarafında uzun vadeli bir iş ortağı gibi davranırız.",
    Icon: FaUsers,
  },
  {
    title: "Sorumluluk",
    description:
      "Güvenlik, performans ve sürdürülebilirlik teslimattan sonra da bizim sorumluluğumuzdadır.",
    Icon: FaShieldAlt,
  },
  {
    title: "Şeffaflık",
    description:
      "Sprint demo’ları, açık backlog ve düzenli durum güncellemeleri ile her adımı görünür kılarız.",
    Icon: FaHandshake,
  },
];

const whatWeDoParagraphs = [
  "Kurumsal web siteleri ve web uygulamalarından mobil uygulamalara, e-ticaret platformlarından süreç otomasyonuna kadar uçtan uca yazılım geliştiriyoruz.",
  "AWS, Azure, Next.js, React, TypeScript ve modern DevOps pratikleriyle ölçeklenebilir, güvenli ve bakımı kolay sistemler inşa ediyoruz.",
  "Küçük çekirdek ekibimiz Ankara’da konumlanır; Türkiye genelinde ve yurt dışında uzaktan proje yönetimiyle çalışırız.",
];

const whatWeDoList = [
  "Web ve mobil uygulama geliştirme",
  "E-ticaret ve ödeme entegrasyonları",
  "Dijital dönüşüm ve süreç otomasyonu",
  "Bulut altyapısı ve DevOps danışmanlığı",
  "API, mikroservis ve entegrasyon mimarisi",
  "Performans, güvenlik ve gözlemlenebilirlik",
  "Bakım, izleme ve teknik destek",
  "Ürün keşfi, UI/UX ve deneyim iyileştirme",
];

const storyPoints = [
  {
    index: "01",
    title: "Ankara merkezli, Türkiye geneli hizmet",
    body: "Çekirdek ekibimiz Çankaya, Ankara’da konumlanır. Proje yönetimi ve geliştirmeyi Türkiye genelinde uzaktan yürütürüz.",
    Icon: FaMapMarkerAlt,
  },
  {
    index: "02",
    title: "Küçük ekip, yüksek sahiplenme",
    body: "Aracı katman olmadan doğrudan geliştirici ve mimar ekibi katılır. Kararlar hızlı, iletişim kısa tutulur.",
    Icon: FaUsers,
  },
  {
    index: "03",
    title: "Ürün gibi düşünen mühendislik",
    body: "Kullanım senaryolarını, operasyonel yükü ve uzun vadeli maliyeti birlikte planlarız.",
    Icon: FaCode,
  },
];

export default function AboutPage() {
  return (
    <SitePageLayout>
      <article className="company-page">
        <div className="company-shell">
          <CompanyHero
            title={page.title}
            lead={page.hero}
            meta={[
              { label: siteConfig.address.full, Icon: FaMapMarkerAlt },
              { label: "Web · Mobil · Bulut · DevOps", Icon: FaCode },
              { label: "Doğrudan çekirdek ekip", Icon: FaUsers },
            ]}
          />

          <CompanyBlock
            title="Misyon ve vizyon"
            intro="Nereye gittiğimizi her sprint kararında da aynı netlikle tutarız."
            titleId="about-mv"
          >
            <div className="company-grid-2">
              {missionVision.map((item) => (
                <div key={item.heading} className="company-item company-item--rule">
                  <div className="company-item__head">
                    <CompanyIcon Icon={item.Icon} />
                    <h3>{item.heading}</h3>
                  </div>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyBlock
            title="Değerlerimiz"
            intro="Bu dört ilke sözleşme maddesi değil; günlük çalışma biçimimiz."
            titleId="about-values"
          >
            <div className="company-grid-2">
              {values.map((value) => (
                <div key={value.title} className="company-item company-item--rule">
                  <div className="company-item__head">
                    <CompanyIcon Icon={value.Icon} />
                    <h3>{value.title}</h3>
                  </div>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyBlock
            title="Ne yapıyoruz?"
            intro="Keşiften canlıya almaya kadar yazılım yaşam döngüsünün tamamında yer alırız."
            titleId="about-work"
          >
            <div className="company-prose">
              <div>
                {whatWeDoParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
              <ul className="company-list">
                {whatWeDoList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </CompanyBlock>

          <CompanyBlock title="Nasıl konumlanıyoruz?" titleId="about-story">
            <div>
              {storyPoints.map((point) => (
                <div key={point.title} className="story-row">
                  <span className="story-row__index">{point.index}</span>
                  <div>
                    <div className="company-item__head">
                      <CompanyIcon Icon={point.Icon} />
                      <h3>{point.title}</h3>
                    </div>
                    <p>{point.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </CompanyBlock>

          <CompanyCta
            text="Projeniz için ücretsiz keşif görüşmesi planlayın. Kapsam, risk ve ilk sprint netleşsin."
            secondaryHref="/neden-biz/"
            secondaryLabel="Neden Voxeil?"
          />
        </div>
      </article>
    </SitePageLayout>
  );
}
