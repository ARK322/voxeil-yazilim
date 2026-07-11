"use client";

import Script from "next/script";
import TrustBadgeCard from "@/components/TrustBadgeCard";
import { trustBadges } from "@/lib/trust-badges";

export default function TrustBadges() {
  const embedBadges = trustBadges.filter((badge) => badge.type === "embed");
  const cardBadges = trustBadges.filter((badge) => badge.type === "card");

  if (!trustBadges.length) return null;

  return (
    <div
      className="flex flex-wrap items-center justify-center gap-3 pt-4 [&_.trust-badge-card:hover]:-translate-y-px [&_.trust-badge-card:hover]:border-white/20 [&_.trust-badge-card:hover]:shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
      aria-label="Güven ve sertifika rozetleri"
    >
      {embedBadges.map((badge) => (
        <div key={badge.id} id={badge.containerId} title={badge.label} />
      ))}

      {cardBadges.map((badge) => (
        <TrustBadgeCard
          key={badge.id}
          href={badge.href}
          title={badge.label}
          provider={badge.provider.toUpperCase()}
          tierLabel={badge.tierLabel}
          accentHex={badge.accentHex}
          accentBorder={badge.accentBorder}
          score={badge.score}
          scoreSuffix={badge.scoreSuffix}
        />
      ))}

      {embedBadges.map((badge) => (
        <Script key={`${badge.id}-script`} src={badge.scriptSrc} strategy="lazyOnload" />
      ))}
    </div>
  );
}
