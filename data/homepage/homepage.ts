import { applyDataVariantOverrides } from "data/applyVariantOverrides";

import HOMEPAGE_DATA from "./homepage.json";

export interface HomepageData {
  meta: HomepageMeta;
  heroData: HeroData;
  verticals: PursuitVertical[];
  benefitsInstructors: Instructor[];
  textTestimonials: TextTestimonial[];
  imageTestimonials: ImageTestimonial[];
  ctaSectionTitle: string;
}

export interface HomepageMeta {
  ogTitle: string;
  ogDescription: string;
  ogImg: string;
  canonicalUrl: string;
}

export interface HeroData {
  title: string;
  description: string;
  pricingText: string;
  backgroundUrl: string;
  mobileBackgroundUrl: string;
  socialLogos: SocialProofLogo[];
}

export interface SocialProofSection {
  label: string;
  logos: SocialProofLogo[];
}
export interface SocialProofLogo {
  imageUrl: string;
  alt: string;
}

export type PursuitName = "Music" | "Performing Arts" | "Baking" | "Making & DIY" | "Visual Arts";

export interface PursuitVertical {
  name: PursuitName;
  iconUrl: string;
  iconBgColor: string; // hex code
  landingPageUrl: string;
  pursuits: Pursuit[];
}
export interface Pursuit {
  instructor: Instructor;
  name: string;
  imageUrl: string;
  landingPageUrl: string;
}
export interface Instructor {
  name: string;
  imageUrl: string;
}

export interface TextTestimonial {
  name: string;
  username: string;
  imageUrl: string;
  markdownText: string;
}
export interface ImageTestimonial {
  username: string;
  imageUrl: string;
}

export const getHomepageData = (variant?: string): HomepageData => {
  const data = applyDataVariantOverrides(HOMEPAGE_DATA as any, variant) as HomepageData;
  return data;
};
