import { LucideIcon } from "lucide-react";

export interface ProductHeroData {
  title: string;
  tagline: string;
  description: string[];
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  stats: Array<{
    label: string;
    value: string;
    icon?: LucideIcon;
  }>;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FeatureGridData {
  sectionTag: string;
  heading: string;
  subheading: string;
  features: Feature[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric?: string;
}

export interface TestimonialSectionData {
  testimonials: Testimonial[];
  ctaText?: string;
  ctaHref?: string;
}

export interface Integration {
  name: string;
  description: string;
  logo?: string;
  icon?: LucideIcon;
  href?: string;
}

export interface IntegrationSectionData {
  sectionTag: string;
  heading: string;
  subheading: string;
  integrations: Integration[];
}

export interface DashboardVisualData {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  features?: string[];
}

export interface Industry {
  name: string;
  icon: LucideIcon;
}

export interface IndustryGridData {
  sectionTag: string;
  heading: string;
  subheading: string;
  industries: Industry[];
}

export interface BenefitsSectionData {
  sectionTag: string;
  heading: string;
  benefits: string[];
  visualContent?: {
    title: string;
    description: string;
    icon: LucideIcon;
    ctaText?: string;
    ctaHref?: string;
  };
}

export interface CTASectionData {
  title: string;
  description?: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  variant?: "default" | "dark" | "light";
}

export interface ProductPageData {
  metadata: {
    title: string;
    description: string;
  };
  breadcrumbs: Array<{
    label: string;
    href?: string;
  }>;
  hero: ProductHeroData;
  features: FeatureGridData;
  benefits: BenefitsSectionData;
  testimonials?: TestimonialSectionData;
  integrations?: IntegrationSectionData;
  dashboard?: DashboardVisualData;
  industries?: IndustryGridData;
  ctas: CTASectionData[];
}
