import { siteConfig } from "@/lib/site";
import { faqItems } from "@/lib/faq";

export function getJsonLdGraph() {
  const brand = {
    "@type": "Brand",
    "@id": `${siteConfig.url}/#brand`,
    name: siteConfig.brandName,
    alternateName: [siteConfig.name, "Voxeil Yazılım Şirketi"],
    description: "Ankara merkezli yazılım şirketi markası",
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
  };

  const organization = {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: [siteConfig.brandName, "Voxeil Yazılım Şirketi"],
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    brand: {
      "@id": `${siteConfig.url}/#brand`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.x,
      siteConfig.social.youtube,
    ],
    founder: siteConfig.founders.map((person) => ({
      "@type": "Person",
      name: person.name,
      jobTitle: person.jobTitle,
      url: person.linkedin,
    })),
  };

  const localBusiness = {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
    alternateName: siteConfig.brandName,
    description: "Ankara merkezli yazılım şirketi",
    image: `${siteConfig.url}/logo.svg`,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    parentOrganization: {
      "@id": `${siteConfig.url}/#organization`,
    },
    openingHours: siteConfig.openingHours,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Türkiye",
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.x,
      siteConfig.social.youtube,
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.brandName,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [brand, organization, localBusiness, website, webPage, faqPage],
  };
}
