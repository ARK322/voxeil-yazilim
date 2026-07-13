"use client";

import TrustBadgeCard from "@/components/layout/trust-badges/TrustBadgeCard";
import { trustBadges } from "@/lib/trust-badges";

export default function TrustBadges() {
  if (!trustBadges.length) return null;

  return (
    <div className="trust-badges" aria-label="Güven ve sertifika rozetleri">
      {trustBadges.map((badge) => {
        if (badge.type !== "card") return null;

        return (
          <TrustBadgeCard
            key={badge.id}
            badgeId={badge.id}
            href={badge.href}
            title={badge.label}
            provider={badge.provider.toUpperCase()}
            tierLabel={badge.tierLabel}
            score={badge.score}
            scoreSuffix={badge.scoreSuffix}
          />
        );
      })}
    </div>
  );
}
