import type { IconType } from "react-icons";
import {
  FaCloud,
  FaCode,
  FaLightbulb,
  FaMobileAlt,
  FaServer,
  FaShoppingCart,
} from "react-icons/fa";

export type ServiceItem = {
  slug: string;
  icon: IconType;
  title: string;
  description: string;
  features: string[];
};

export const serviceItems: ServiceItem[] = [
  {
    slug: "web-gelistirme",
    icon: FaCode,
    title: "Web Geliştirme",
    description:
      "Modern ve responsive web siteleri ile dijital varlığınızı güçlendirin. Kullanıcı deneyimini ön planda tutan, performans odaklı çözümler sunuyoruz.",
    features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yükleme", "Güvenli Altyapı"],
  },
  {
    slug: "mobil-uygulama",
    icon: FaMobileAlt,
    title: "Mobil Uygulama",
    description:
      "iOS ve Android platformları için yenilikçi mobil uygulamalar geliştiriyoruz. Hedef kitlenize her an ulaşın.",
    features: [
      "iOS & Android",
      "Native Performans",
      "Kullanıcı Dostu Arayüz",
      "App Store Optimizasyonu",
    ],
  },
  {
    slug: "e-ticaret",
    icon: FaShoppingCart,
    title: "E-Ticaret Çözümleri",
    description:
      "Güvenli ve kullanıcı dostu e-ticaret platformları ile satışlarınızı artırın. Ödeme entegrasyonları ve stok yönetimi dahil.",
    features: ["Güvenli Ödeme", "Stok Yönetimi", "Sipariş Takibi", "Müşteri Paneli"],
  },
  {
    slug: "danismanlik",
    icon: FaLightbulb,
    title: "Danışmanlık & Destek",
    description:
      "Yazılım ihtiyaçlarınızda uzman danışmanlık ve sürekli destek hizmetleri. Teknoloji yol haritanızı birlikte çizelim.",
    features: ["Teknik Danışmanlık", "7/24 Destek", "Proje Yönetimi", "Bakım & Güncelleme"],
  },
  {
    slug: "bulut",
    icon: FaCloud,
    title: "Bulut Çözümleri",
    description:
      "Ölçeklenebilir bulut altyapıları ile işinizi büyütün. AWS, Azure ve özel bulut çözümleri sunuyoruz.",
    features: ["AWS & Azure", "Ölçeklenebilirlik", "Yedekleme", "Güvenlik"],
  },
  {
    slug: "backend-microservices",
    icon: FaServer,
    title: "Backend & Microservices",
    description:
      "REST/GraphQL API, event-driven mimari ve legacy modernizasyon ile ölçeklenebilir sunucu tarafı sistemler.",
    features: ["API Tasarımı", "Microservices", "Mesaj Kuyrukları", "Veri Migrasyonu"],
  },
];

export const serviceHighlights = [
  "Kurumsal web sitesi ve landing page geliştirme",
  "iOS ve Android mobil uygulama geliştirme",
  "E-ticaret altyapısı, ödeme ve stok entegrasyonları",
  "CRM, ERP ve iş süreci otomasyon yazılımları",
  "Bulut migrasyon, CI/CD ve DevOps danışmanlığı",
  "Bakım, izleme ve teknik destek hizmetleri",
];
