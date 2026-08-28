// ── Site Information ──────────────────────────────────────
export interface SiteInfo {
  name: string;
  role: string;
  location: string;
  email: string;
  whatsapp: string;
  github: string;
  socials: SocialLink[];
}

export interface SocialLink {
  label: string;
  url: string;
}

// ── Chapters ──────────────────────────────────────────────
export interface ChapterInfo {
  number: string;
  id: string;
  title: string;
  label: string;
}

// ── About ─────────────────────────────────────────────────
export interface AboutInfo {
  paragraphs: string[];
  values: string[];
  buildingToward: string;
}

// ── Process ───────────────────────────────────────────────
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// ── Skills ────────────────────────────────────────────────
export interface Skill {
  name: string;
  description: string;
}

// ── Services ──────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  startingPriceINR: number;
  startingPriceUSD: number;
  features: string[];
}

export interface PricingNote {
  label: string;
  text: string;
}

// ── Projects ──────────────────────────────────────────────
export interface Project {
  slug: string;
  title: string;
  type: string;
  label: string;
  goal: string;
  approach: string;
  description: string;
  technologies: string[];
  motionNotes: string[];
  images: ProjectImage[];
  detail: ProjectDetail;
  hasPrototype?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectDetail {
  problem: string;
  solution: string;
  keyDecisions: string[];
  interactions: string[];
}

// ── FAQ ───────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

// ── Journal ───────────────────────────────────────────────
export interface JournalEntry {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  tag: string;
}

// ── Testimonials ──────────────────────────────────────────
export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
}

// ── Contact Form ──────────────────────────────────────────
export type ProjectType =
  | "Landing Page"
  | "Business / Personal Brand"
  | "E-commerce"
  | "Interactive / Animated"
  | "Other";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  projectType: ProjectType | "";
  budget: string;
  description: string;
  timeline: string;
}
