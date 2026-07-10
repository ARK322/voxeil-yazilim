import { siteConfig } from "@/lib/site";

export default function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.svg`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
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
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.name,
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
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  const webPage = {
    "@context": "https://schema.org",
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

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, localBusiness, website, webPage],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
