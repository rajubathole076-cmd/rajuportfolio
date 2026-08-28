import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F4F0E8",
        bone: "#E8E1D5",
        carbon: "#161310",
        stone: "#3D3833",
        ash: "#8B8378",
        ember: "#B7410E",
        rust: "#8A3209",
        void: "#0D0B09",
        mist: "#E8E1D5",
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 12vw, 11rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-l": ["clamp(2.5rem, 8vw, 7rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "display-m": ["clamp(2rem, 5vw, 4.5rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        heading: ["clamp(1.5rem, 3vw, 2.5rem)", { lineHeight: "1.25" }],
        subhead: ["clamp(1.125rem, 1.5vw, 1.375rem)", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.5" }],
        label: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.15em" }],
      },
      spacing: {
        "1": "0.5rem",
        "2": "1rem",
        "3": "1.5rem",
        "4": "2rem",
        "6": "3rem",
        "8": "4rem",
        "12": "6rem",
        "16": "8rem",
        "24": "12rem",
      },
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      maxWidth: {
        container: "1440px",
        prose: "680px",
      },
      borderColor: {
        DEFAULT: "rgba(22, 19, 16, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
