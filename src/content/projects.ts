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
    hasPrototype: true,
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
  {
    slug: "lumina",
    title: "Lumina",
    type: "B2B/B2C Lighting Platform",
    label: "Concept / Self-Initiated",
    goal: "Transform an offline physical product supplier into a strong digital B2B catalog experience.",
    approach: "Use architectural, precise layouts and pinned GSAP scroll sections to anchor products while revealing technical specifications progressively.",
    description: "Lumina demonstrates catalog presentation, complex technical specifications, and a front-end quote generation flow tailored to wholesalers and designers.",
    technologies: ["React", "GSAP", "ScrollTrigger", "Tailwind CSS"],
    motionNotes: [
      "Pinned product storytelling",
      "Progressive specification reveals",
      "Interactive request-a-quote drawer"
    ],
    images: [],
    hasPrototype: true,
    detail: {
      problem: "Objective: Create a premium catalog and B2B quote experience for a local architectural lighting supplier.",
      solution: "A highly structured, grid-based interface using pinning to keep users visually anchored to the product while digesting technical data.",
      keyDecisions: [
        "Adopted a cool, neutral, architectural color palette.",
        "Categorized specifications into digestible chunks rather than overwhelming engineering tables.",
        "Replaced traditional 'Add to Cart' with a tailored 'Request a Quote' UI."
      ],
      interactions: [
        "Dynamic filter tabs for product discovery.",
        "Slide-in quote drawer interface.",
        "Pinned layout scrolling on product detail pages."
      ],
    },
  },
  {
    slug: "aria",
    title: "Aria",
    type: "Fine-Art Photography Portfolio",
    label: "Concept / Self-Initiated",
    goal: "Demonstrate visually-led, editorial storytelling for high-end personal brands and visual creators.",
    approach: "Strip away conventional UI elements to let photography dominate. Use stark monochrome contrast and horizontal narrative flow.",
    description: "Aria proves the ability to step away from traditional vertical layouts. It creates a digital gallery experience relying on extreme whitespace, editorial typography, and massive image scaling.",
    technologies: ["React", "GSAP", "ScrollTrigger", "Tailwind CSS"],
    motionNotes: [
      "Horizontal scroll translation (xPercent)",
      "Monochrome-to-color hover reveals",
      "Cinematic typographic intro sequencing"
    ],
    images: [],
    hasPrototype: true,
    detail: {
      problem: "Objective: Design an immersive, non-conventional portfolio for a visual artist.",
      solution: "Implemented a horizontal scrolling track that converts natural vertical scrolling into a side-scrolling gallery using GSAP.",
      keyDecisions: [
        "Removed color from the UI entirely to ensure the photography is the sole focus.",
        "Implemented 'lazy' loading for images outside the initial horizontal track to maintain performance.",
        "Disabled the horizontal track natively on mobile to preserve touch usability."
      ],
      interactions: [
        "Images scale and reveal color when interacted with.",
        "Smooth GSAP scrubbing binds the horizontal gallery to the exact scroll position.",
        "Subtle pulsing scroll indicator prevents UX confusion."
      ],
    },
  }
];
