import type { Project } from "../types/content";

export const projects: Project[] = [
  {
    slug: "verdant",
    title: "Verdant",
    type: "E-commerce Concept",
    label: "Concept / Self-Initiated",
    goal: "Create a premium e-commerce experience for a fictional specialty coffee brand.",
    approach: "Design a warm, tactile product aesthetic with immersive scroll storytelling, avoiding generic storefront templates.",
    description: "Verdant demonstrates premium product presentation, commerce UX, interaction, motion, and brand storytelling. Built with React and GSAP, it features a functional frontend cart, filtering, and smooth transitions.",
    technologies: ["React", "GSAP", "Tailwind CSS", "Context API"],
    motionNotes: [
      "Scroll-driven product reveals",
      "Smooth cart drawer transitions",
      "Immersive project introduction"
    ],
    images: [],
    detail: {
      problem: "Objective: Create a premium e-commerce experience for a fictional specialty coffee brand.",
      solution: "A bespoke storefront with editorial typography, tactile imagery, and a seamless shopping cart experience without backend constraints.",
      keyDecisions: [
        "Used a warmer, botanical-inspired color palette distinct from the portfolio.",
        "Implemented local client-side state for the shopping cart.",
        "Created an immersive scroll-driven brand introduction."
      ],
      interactions: [
        "Slide-in cart drawer with animated subtotal.",
        "Staggered product grid reveals on scroll.",
        "Hover states that hint at tactile materials."
      ],
    },
  },
];
