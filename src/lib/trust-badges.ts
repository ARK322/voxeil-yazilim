export type TrustBadgeEmbed = {
  type: "embed";
  id: string;
  label: string;
  provider: string;
  providerUrl: string;
  containerId: string;
  scriptSrc: string;
  profileUrl: string;
};

export type TrustBadgeCardConfig = {
  type: "card";
  id: string;
  label: string;
  provider: string;
  providerUrl: string;
  href: string;
  tierLabel: string;
  accentHex: string;
  accentBorder: string;
  score: string;
  scoreSuffix?: string;
};

export type TrustBadge = TrustBadgeEmbed | TrustBadgeCardConfig;

/** Footer rozetleri — yeni sertifika aldıkça bu listeye ekle. */
export const trustBadges: TrustBadge[] = [
  {
    type: "embed",
    id: "tepeseo-silver",
    label: "TEPESEO Gümüş SEO Rozeti",
    provider: "TEPESEO",
    providerUrl: "https://tepeseo.com",
    containerId: "tepeseo-badge",
    scriptSrc:
      "https://tepeseo.com/rozet/Fvh3Xa0j6dVwkn3yGgkhnJHnM3ERbf2YtAATjjgiSNJd3Fx0/embed.js",
    profileUrl: "https://tepeseo.com/rozet/Fvh3Xa0j6dVwkn3yGgkhnJHnM3ERbf2YtAATjjgiSNJd3Fx0",
  },
  {
    type: "card",
    id: "scamadviser",
    label: "ScamAdviser güven skoru — SSL sertifikası ve DNSFilter güvenliği doğrulandı",
    provider: "ScamAdviser",
    providerUrl: "https://www.scamadviser.com",
    href: "https://www.scamadviser.com/check-website/voxeil.com",
    tierLabel: "Güven Rozeti",
    accentHex: "#22C55E",
    accentBorder: "#16A34A",
    score: "SSL",
    scoreSuffix: "OK",
  },
];

export function getTrustBadgeAwards(): string[] {
  return trustBadges.map((badge) => badge.label);
}

export function getTrustBadgeCredentials() {
  return trustBadges.map((badge) => ({
    "@type": "EducationalOccupationalCredential",
    name: badge.label,
    credentialCategory: badge.provider === "TEPESEO" ? "SEO Sertifikası" : "Güven Doğrulaması",
    recognizedBy: {
      "@type": "Organization",
      name: badge.provider,
      url: badge.providerUrl,
    },
    url: badge.type === "embed" ? badge.profileUrl : badge.href,
  }));
}
