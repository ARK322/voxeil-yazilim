import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export type ContentSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type ServicePageContent = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ContentSection[];
};

export const servicePages: ServicePageContent[] = [
  {
    slug: "web-gelistirme",
    title: "Web Geliştirme",
    metaTitle: "Ankara Web Geliştirme | Voxeil Yazılım",
    metaDescription:
      "Ankara merkezli Voxeil ile kurumsal web sitesi, landing page ve web uygulaması geliştirme. Next.js, React ve modern stack ile SEO uyumlu, hızlı web çözümleri.",
    h1: "Ankara Web Geliştirme Hizmetleri",
    intro:
      "Voxeil olarak Ankara ve Türkiye genelindeki işletmelere modern, hızlı ve SEO uyumlu web geliştirme hizmetleri sunuyoruz. Kurumsal web sitelerinden karmaşık web uygulamalarına kadar uçtan uca yazılım çözümleri üretiyoruz.",
    sections: [
      {
        heading: "Kurumsal Web Sitesi ve Landing Page",
        paragraphs: [
          "Dijital vitrininiz olan web siteniz, potansiel müşterilerinizin sizi tanıdığı ilk noktadır. Responsive tasarım, hızlı yükleme süreleri ve arama motoru optimizasyonu ile markanızı güçlendiren web siteleri geliştiriyoruz.",
          "Landing page projelerinde dönüşüm odaklı yapı, A/B test altyapısı ve analitik entegrasyonları ile kampanyalarınızın performansını ölçülebilir kılıyoruz.",
        ],
        list: [
          "Kurumsal web sitesi tasarımı ve geliştirme",
          "Landing page ve kampanya sayfaları",
          "Headless CMS entegrasyonları",
          "Çok dilli web sitesi altyapısı",
        ],
      },
      {
        heading: "Modern Web Uygulamaları",
        paragraphs: [
          "Next.js, React ve TypeScript tabanlı web uygulamaları ile ölçeklenebilir dijital ürünler inşa ediyoruz. Admin panelleri, müşteri portalları, SaaS platformları ve dahili iş araçları geliştirme deneyimimiz bulunmaktadır.",
          "API entegrasyonları, gerçek zamanlı veri akışları ve rol tabanlı erişim kontrolü gibi kurumsal gereksinimleri güvenli mimari prensiplerle hayata geçiriyoruz.",
        ],
      },
      {
        heading: "SEO ve Performans Odaklı Geliştirme",
        paragraphs: [
          "Her web projesinde Core Web Vitals metriklerini gözetiyoruz. Sunucu tarafı render (SSR), statik site üretimi (SSG) ve edge caching stratejileri ile hem kullanıcı deneyimini hem arama motoru görünürlüğünü optimize ediyoruz.",
          "Ankara yazılım şirketi olarak yerel SEO ihtiyaçlarını da göz önünde bulundurarak schema markup, site haritası ve teknik SEO altyapısını proje tesliminde hazır sunuyoruz.",
        ],
        list: [
          "Teknik SEO altyapısı",
          "Core Web Vitals optimizasyonu",
          "Erişilebilirlik (WCAG) standartları",
          "Güvenlik ve SSL yapılandırması",
        ],
      },
      {
        heading: "Neden Voxeil ile Web Geliştirme?",
        paragraphs: [
          "Keşif görüşmesinden canlıya almaya kadar şeffaf bir süreç yönetiyoruz. Sprint bazlı geliştirme, düzenli demo sunumları ve teslim sonrası bakım desteği ile uzun vadeli iş ortaklıkları kuruyoruz.",
          "Ücretsiz keşif görüşmesi için bizimle iletişime geçin; projenize özel yol haritası ve teklif hazırlayalım.",
        ],
      },
    ],
  },
  {
    slug: "mobil-uygulama",
    title: "Mobil Uygulama",
    metaTitle: "Mobil Uygulama Geliştirme Ankara | Voxeil Yazılım",
    metaDescription:
      "iOS ve Android mobil uygulama geliştirme. Ankara merkezli Voxeil ile React Native, native performans ve App Store optimizasyonu.",
    h1: "Mobil Uygulama Geliştirme",
    intro:
      "Mobil uygulamalar, müşterilerinize her an ulaşmanızı sağlayan güçlü dijital kanallardır. Voxeil, iOS ve Android platformları için kullanıcı odaklı, performanslı mobil uygulama geliştirme hizmetleri sunar.",
    sections: [
      {
        heading: "iOS ve Android Uygulama Geliştirme",
        paragraphs: [
          "Cross-platform ve native yaklaşımları projenizin gereksinimlerine göre değerlendiriyoruz. React Native ile hızlı geliştirme ve kod paylaşımı; native modüller ile platforma özel deneyim sunuyoruz.",
          "Push bildirim, konum servisleri, kamera entegrasyonu ve offline çalışma gibi mobil özellikleri güvenli ve test edilmiş şekilde uygulamalarınıza entegre ediyoruz.",
        ],
        list: [
          "iOS uygulama geliştirme",
          "Android uygulama geliştirme",
          "Cross-platform (React Native) çözümler",
          "Mevcut web API'lerinize mobil istemci",
        ],
      },
      {
        heading: "UX/UI Tasarım ve Prototipleme",
        paragraphs: [
          "Mobil uygulama başarısının temelinde sezgisel kullanıcı deneyimi yatar. Wireframe, prototip ve kullanılabilirlik testleri ile tasarım kararlarını veriye dayalı alıyoruz.",
          "Material Design ve Human Interface Guidelines prensiplerine uygun arayüzler tasarlayarak markanızın mobil kimliğini tutarlı şekilde yansıtıyoruz.",
        ],
      },
      {
        heading: "App Store ve Play Store Yayınlama",
        paragraphs: [
          "Uygulama mağazası süreçlerinde rehberlik sağlıyoruz: hesap yapılandırması, metadata optimizasyonu (ASO), ekran görüntüsü ve açıklama metinleri hazırlığı.",
          "Güncelleme yönetimi, crash raporlama entegrasyonu ve kullanıcı geri bildirim döngüsü ile uygulamanızın sürdürülebilir büyümesini destekliyoruz.",
        ],
      },
      {
        heading: "Ankara'dan Türkiye Geneline Mobil Çözümler",
        paragraphs: [
          "Ankara merkezli ekibimiz, uzaktan proje yönetimi ile Türkiye'nin her yerindeki ve yurt dışındaki müşterilerimize mobil uygulama geliştirme hizmeti veriyor.",
          "Mobil projeniz için ücretsiz keşif görüşmesi planlayın; ihtiyaç analizi ve teknik yol haritası çıkaralım.",
        ],
      },
    ],
  },
  {
    slug: "e-ticaret",
    title: "E-Ticaret",
    metaTitle: "E-Ticaret Yazılım Çözümleri | Voxeil Yazılım Ankara",
    metaDescription:
      "Özel e-ticaret platformu, ödeme entegrasyonu, stok yönetimi ve B2B/B2C online mağaza geliştirme. Ankara merkezli Voxeil yazılım ekibi.",
    h1: "E-Ticaret Yazılım Çözümleri",
    intro:
      "Online satış kanallarınızı güçlendirmek için ölçeklenebilir e-ticaret altyapıları geliştiriyoruz. Ödeme sistemleri, stok yönetimi, kargo entegrasyonları ve müşteri paneli dahil uçtan uca e-ticaret yazılım çözümleri sunuyoruz.",
    sections: [
      {
        heading: "Özel E-Ticaret Platformları",
        paragraphs: [
          "Hazır paketlerin sınırlarına takılmadan iş modelinize özel e-ticaret platformları tasarlıyoruz. B2C online mağaza, B2B toptan satış portalları ve marketplace altyapıları geliştirme deneyimimiz mevcuttur.",
          "Ürün kataloğu, varyant yönetimi, kampanya motoru ve indirim kuralları gibi e-ticaret operasyonlarınızı destekleyen modüler bir mimari kuruyoruz.",
        ],
        list: [
          "B2C ve B2B e-ticaret siteleri",
          "Marketplace altyapısı",
          "Abonelik ve tekrarlayan ödeme modelleri",
          "Çok kanallı satış entegrasyonları",
        ],
      },
      {
        heading: "Ödeme ve Lojistik Entegrasyonları",
        paragraphs: [
          "iyzico, PayTR, Stripe ve banka sanal POS entegrasyonları ile güvenli ödeme altyapısı kuruyoruz. 3D Secure, taksit seçenekleri ve iade süreçlerini sorunsuz yönetmenizi sağlıyoruz.",
          "Kargo firmaları, ERP sistemleri ve muhasebe yazılımları ile entegrasyonlar sayesinde siparişten teslimata kadar tüm akışı otomatikleştiriyoruz.",
        ],
      },
      {
        heading: "Stok, Sipariş ve Müşteri Yönetimi",
        paragraphs: [
          "Gerçek zamanlı stok takibi, sipariş durumu bildirimleri ve müşteri self-servis paneli ile operasyonel yükünüzü azaltıyoruz.",
          "Raporlama panelleri ve satış analitiği ile hangi ürünlerin, hangi kanallardan daha iyi performans gösterdiğini anlık izleyebilirsiniz.",
        ],
      },
      {
        heading: "E-Ticaret Projenize Başlayın",
        paragraphs: [
          "Mevcut mağazanızı modernize etmek veya sıfırdan e-ticaret platformu kurmak istiyorsanız Voxeil ekibi yanınızda. Ankara merkezli yazılım şirketimizle ücretsiz keşif görüşmesi planlayın.",
        ],
      },
    ],
  },
  {
    slug: "dijital-donusum",
    title: "Dijital Dönüşüm",
    metaTitle: "Dijital Dönüşüm Danışmanlığı Ankara | Voxeil Yazılım",
    metaDescription:
      "Kurumsal dijital dönüşüm, süreç otomasyonu, bulut migrasyon ve DevOps danışmanlığı. Ankara merkezli Voxeil yazılım ve mühendislik ekibi.",
    h1: "Dijital Dönüşüm ve Otomasyon",
    intro:
      "İş süreçlerinizi dijitalleştirerek verimliliği artırıyor, manuel operasyonları otomasyona taşıyoruz. Voxeil, kurumsal dijital dönüşüm projelerinde strateji, yazılım geliştirme ve altyapı modernizasyonunu bir arada sunar.",
    sections: [
      {
        heading: "Süreç Analizi ve Dijital Strateji",
        paragraphs: [
          "Mevcut iş akışlarınızı analiz ederek dijitalleştirme fırsatlarını belirliyoruz. Önceliklendirilmiş yol haritası ile hızlı kazanımlar (quick wins) ve uzun vadeli dönüşüm hedeflerini dengeliyoruz.",
          "Paydaş görüşmeleri, süreç haritalama ve teknik fizibilite çalışmaları ile projenizin başlangıcından itibaren net bir vizyon oluşturuyoruz.",
        ],
      },
      {
        heading: "İş Süreci Otomasyonu",
        paragraphs: [
          "Tekrarlayan manuel görevleri yazılım otomasyonları ile ortadan kaldırıyoruz. CRM, ERP entegrasyonları, onay akışları, raporlama panelleri ve bildirim sistemleri geliştiriyoruz.",
          "Veri odaklı karar alma için BI dashboard'ları, veri pipeline'ları ve gerçek zamanlı izleme altyapıları kuruyoruz.",
        ],
        list: [
          "CRM ve ERP entegrasyonları",
          "Onay ve iş akışı otomasyonları",
          "Raporlama ve BI panelleri",
          "API ve mikroservis mimarisi",
        ],
      },
      {
        heading: "Bulut Migrasyon ve DevOps",
        paragraphs: [
          "AWS, Azure ve modern DevOps araçları ile altyapınızı buluta taşıyor, CI/CD pipeline'ları kuruyor ve güvenilir deployment süreçleri oluşturuyoruz.",
          "Konteyner orkestrasyonu (Docker, Kubernetes), altyapı kodu (IaC) ve izleme çözümleri ile operasyonel mükemmelliği hedefliyoruz.",
        ],
      },
      {
        heading: "Ankara'dan Kurumsal Dijital Dönüşüm",
        paragraphs: [
          "KOBİ'lerden kurumsal ölçekteki firmalara kadar geniş bir yelpazede dijital dönüşüm projeleri yürütüyoruz. Ücretsiz keşif görüşmesi ile dijital dönüşüm yol haritanızı birlikte çizelim.",
        ],
      },
    ],
  },
];

export const aboutPageContent = {
  metaTitle: "Hakkımızda | Voxeil Yazılım ve Mühendislik",
  metaDescription:
    "Ankara merkezli Voxeil Yazılım ve Mühendislik hakkında bilgi edinin. Web, mobil, e-ticaret ve dijital dönüşümde uzman yazılım ekibimiz.",
  h1: "Voxeil Yazılım ve Mühendislik Hakkında",
  intro:
    "Voxeil, Ankara merkezli bir yazılım ve mühendislik şirketidir. Web geliştirme, mobil uygulama, e-ticaret ve dijital dönüşüm alanlarında iş ortaklarımıza uçtan uca yazılım çözümleri sunuyoruz.",
  sections: [
    {
      heading: "Misyonumuz",
      paragraphs: [
        "İşletmelerin dijital dönüşüm yolculuğunda güvenilir teknoloji ortağı olmak. Modern yazılım mühendisliği pratikleri, şeffaf iletişim ve müşteri odaklı yaklaşımla kalıcı değer üretmek.",
      ],
    },
    {
      heading: "Ne Yapıyoruz?",
      paragraphs: [
        "Kurumsal web siteleri ve web uygulamalarından mobil uygulamalara, e-ticaret platformlarından kurumsal otomasyon sistemlerine kadar geniş bir yelpazede yazılım geliştirme hizmetleri veriyoruz.",
        "AWS, Azure, Next.js, React, TypeScript ve modern DevOps araçları ile ölçeklenebilir, güvenli ve sürdürülebilir dijital ürünler inşa ediyoruz.",
      ],
      list: [
        "Web ve mobil uygulama geliştirme",
        "E-ticaret ve ödeme entegrasyonları",
        "Dijital dönüşüm ve süreç otomasyonu",
        "Bulut altyapısı ve DevOps danışmanlığı",
        "Bakım, izleme ve teknik destek",
      ],
    },
    {
      heading: "Neden Voxeil?",
      paragraphs: [
        "Ankara'da konumlanmış uzman ekibimiz, keşif görüşmesinden proje teslimine kadar her aşamada yanınızda. Sprint bazlı geliştirme metodolojisi, düzenli demo sunumları ve teslim sonrası destek ile uzun vadeli iş ortaklıkları kuruyoruz.",
        "Türkiye genelinde ve yurt dışında uzaktan proje yönetimi ile hizmet veriyoruz. Ankara dışındaki firmalarla da aktif olarak çalışmaktayız.",
      ],
    },
    {
      heading: "İletişim",
      paragraphs: [
        "Projeleriniz hakkında konuşmak ve ücretsiz keşif görüşmesi planlamak için bizimle iletişime geçin.",
      ],
    },
  ] satisfies ContentSection[],
};

export function getServicePage(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export function createServiceMetadata(slug: string): Metadata {
  const page = getServicePage(slug);

  if (!page) {
    return { title: "Sayfa Bulunamadı" };
  }

  const path = `/hizmetler/${slug}/`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}
