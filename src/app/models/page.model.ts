export interface PageFeature {
  title: string;
  description: string;
}

export interface PageCard {
  title: string;
  category: string;
  description: string;
  imageUrl?: string;
}

export interface PageStep {
  number: string;
  title: string;
  description: string;
}

export interface PageConfig {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  heroImage: string;
  stats: {
    value: string;
    label: string;
  }[];
  features: PageFeature[];
  cards: PageCard[];
  steps: PageStep[];
}