import Link from "next/link";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";

type MetaItem = string | { label: string; Icon?: IconType };

type CompanyHeroProps = {
  title: string;
  lead: string;
  meta?: MetaItem[];
};

type CompanyIconProps = {
  Icon: IconType;
  size?: "sm" | "md";
  label?: string;
};

export function CompanyIcon({ Icon, size = "sm", label }: CompanyIconProps) {
  return (
    <span
      className={`company-icon${size === "md" ? " company-icon--md" : ""}`}
      aria-hidden={label ? undefined : true}
      aria-label={label}
    >
      <Icon />
    </span>
  );
}

type CompanyBlockProps = {
  title: string;
  intro?: string;
  children: ReactNode;
  titleId: string;
};

type CompanyCtaProps = {
  text: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CompanyHero({ title, lead, meta }: CompanyHeroProps) {
  return (
    <header className="company-hero">
      <h1 className="company-hero__title">{title}</h1>
      <p className="company-hero__lead">{lead}</p>
      {meta && meta.length > 0 ? (
        <ul className="company-hero__meta">
          {meta.map((item) => {
            if (typeof item === "string") {
              return (
                <li key={item}>
                  <span>●</span>
                  {item}
                </li>
              );
            }

            const MetaIcon = item.Icon;
            return (
              <li key={item.label} className="company-hero__meta-item">
                {MetaIcon ? <CompanyIcon Icon={MetaIcon} /> : <span>●</span>}
                {item.label}
              </li>
            );
          })}
        </ul>
      ) : null}
    </header>
  );
}

export function CompanyBlock({ title, intro, children, titleId }: CompanyBlockProps) {
  return (
    <section className="company-block" aria-labelledby={titleId}>
      <div className="company-block__head">
        <h2 id={titleId} className="company-block__title">
          {title}
        </h2>
        {intro ? <p className="company-block__intro">{intro}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function CompanyCta({
  text,
  primaryHref = "/iletisim/",
  primaryLabel = "Görüşme Planla",
  secondaryHref,
  secondaryLabel,
}: CompanyCtaProps) {
  return (
    <div className="company-cta">
      <p>{text}</p>
      <div className="company-cta__actions">
        <Link href={primaryHref} className="site-btn-primary">
          {primaryLabel}
        </Link>
        {secondaryHref && secondaryLabel ? (
          <Link href={secondaryHref} className="site-btn-ghost">
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </div>
  );
}
