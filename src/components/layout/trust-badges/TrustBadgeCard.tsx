type TrustBadgeCardProps = {
  badgeId: string;
  href: string;
  title: string;
  provider: string;
  tierLabel: string;
  score: string;
  scoreSuffix?: string;
};

export default function TrustBadgeCard({
  badgeId,
  href,
  title,
  provider,
  tierLabel,
  score,
  scoreSuffix = "/100",
}: TrustBadgeCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      aria-label={title}
      className={`trust-badge-card trust-badge-card--${badgeId}`}
    >
      <div className="trust-badge-card__icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="white"
          />
        </svg>
      </div>
      <div className="trust-badge-card__meta">
        <span className="trust-badge-card__provider">{provider}</span>
        <span className="trust-badge-card__tier">{tierLabel}</span>
      </div>
      <div className="trust-badge-card__score-wrap">
        <span className="trust-badge-card__score">{score}</span>
        {scoreSuffix ? <span className="trust-badge-card__suffix">{scoreSuffix}</span> : null}
      </div>
    </a>
  );
}
