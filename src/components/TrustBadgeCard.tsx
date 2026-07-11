type TrustBadgeCardProps = {
  href: string;
  title: string;
  provider: string;
  tierLabel: string;
  accentHex: string;
  accentBorder: string;
  score: string;
  scoreSuffix?: string;
};

export default function TrustBadgeCard({
  href,
  title,
  provider,
  tierLabel,
  accentHex,
  accentBorder,
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
      className="trust-badge-card"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        padding: "6px 8px 6px 6px",
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "10px",
        textDecoration: "none",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        transition: "all 0.2s ease",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "8px",
          background: `linear-gradient(135deg, ${accentHex}, ${accentBorder})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill="white"
          />
        </svg>
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
        <span
          style={{
            fontSize: "10px",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 500,
            letterSpacing: "1px",
          }}
        >
          {provider}
        </span>
        <span style={{ fontSize: "13px", fontWeight: 700, color: accentHex }}>{tierLabel}</span>
      </div>
      <div
        style={{
          marginLeft: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          lineHeight: 1,
        }}
      >
        <span style={{ fontSize: "18px", fontWeight: 800, color: "white" }}>{score}</span>
        {scoreSuffix ? (
          <span
            style={{
              fontSize: "8px",
              color: "rgba(255,255,255,0.4)",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            {scoreSuffix}
          </span>
        ) : null}
      </div>
    </a>
  );
}
