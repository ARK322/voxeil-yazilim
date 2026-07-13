type PageHeroProps = {
  title: string;
  description?: string;
};

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <header className="site-section__header mb-8 sm:mb-10">
      <h1 className="site-section__title">{title}</h1>
      {description ? <p className="site-section__desc">{description}</p> : null}
    </header>
  );
}
