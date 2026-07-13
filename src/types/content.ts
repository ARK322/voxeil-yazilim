export type ContentBlock = {
  heading: string;
  body: string;
  bullets?: string[];
};

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  hero: string;
  sections: ContentBlock[];
};

export type HubItem = {
  slug: string;
  title: string;
  excerpt: string;
};

export type HubContent = {
  title: string;
  description: string;
  intro: string;
  basePath: string;
  items: HubItem[];
};

export type ProjectContent = PageContent & {
  sector?: string;
  stack?: string[];
  outcome?: string;
};
