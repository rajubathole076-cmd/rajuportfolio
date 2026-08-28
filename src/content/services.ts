import type { Service, PricingNote } from "../types/content";

export const services: Service[] = [
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "A focused single-page site designed to convert visitors into action.",
    startingPriceINR: 3000,
    startingPriceUSD: 36,
    features: [
      "Single-page design",
      "Responsive layout",
      "Basic animations",
      "Contact integration",
    ],
  },
  {
    id: "business-brand",
    title: "Business / Personal Brand Website",
    description:
      "A multi-section website that presents your business or personal brand with clarity and polish.",
    startingPriceINR: 7500,
    startingPriceUSD: 90,
    features: [
      "Multi-section layout",
      "Custom design system",
      "Content architecture",
      "Responsive across devices",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Website",
    description:
      "An online store with product browsing, cart, and checkout flow.",
    startingPriceINR: 12000,
    startingPriceUSD: 144,
    features: [
      "Product catalog",
      "Cart and checkout flow",
      "Product filtering",
      "Admin-friendly structure",
    ],
  },
  {
    id: "interactive",
    title: "Interactive / Animated Website",
    description:
      "A highly animated, scroll-driven experience for creative and immersive storytelling.",
    startingPriceINR: 20000,
    startingPriceUSD: 240,
    features: [
      "Scroll-driven animation",
      "Custom interaction design",
      "Cinematic storytelling",
      "Advanced motion choreography",
    ],
  },
];

export const pricingNote: PricingNote = {
  label: "Starting at ≠ final price",
  text: "Starting prices are introductory launch pricing for portfolio-building purposes. The final price depends on project scope, number of pages, design complexity, animation requirements, e-commerce functionality, integrations, custom functionality, content requirements, and timeline.",
};

export const pricingPositioning =
  "Premium-quality work at accessible introductory pricing while building my client portfolio.";
