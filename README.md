# Portfolio Website

## What this project is

A personal portfolio website for a creative developer based in Indore, India, working with clients worldwide. The site is designed as a single continuous scrolling experience divided into numbered chapters, with projects presented as immersive scenes within the narrative.

## Technology stack

- **Vite** — A fast build tool that serves the project during development and creates optimized production files.
- **React** — A JavaScript library for building user interfaces from reusable components.
- **TypeScript** — A typed version of JavaScript that catches errors before the code runs.
- **Tailwind CSS** — A styling system that uses utility classes and a shared design configuration for consistent colors, spacing, and typography.
- **GSAP + ScrollTrigger** — An animation library for smooth, scroll-driven motion and transitions.

## How to install

Open a terminal in the project folder and run:

```bash
npm install
```

This downloads all the dependencies the project needs. You only need to run this once (or after updating dependencies).

## How to run locally

```bash
npm run dev
```

This starts the development server. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`).

## How to build the production version

```bash
npm run build
```

This creates an optimized version of the site in the `dist/` folder, ready for deployment.

## Project structure

- `src/content/` — All editable website content (projects, services, pricing, FAQ, about, etc.). Changing content here updates the website without touching the UI.
- `src/components/` — React components organized by role: chapter sections, project scenes, UI elements, and layout wrappers.
- `src/hooks/` — Reusable hooks for GSAP animation setup and scroll progress tracking.
- `src/types/` — TypeScript type definitions for all content structures.
- `src/lib/` — Utility modules (Supabase client will be added here in a later stage).
- `src/index.css` — Global styles, design tokens, and Tailwind configuration.

## Current stage

**Stage A — Project Foundation**

The technical and visual foundation is complete: project setup, design system (colors, typography, spacing, grid), content architecture, chapter shells, animation infrastructure, accessibility foundation, and the contact form UI. No backend is connected yet.

## Next stage

**Stage B — Full Chapter Experience**

The seven chapter shells will be developed into their final creative experiences with motion, the persistent visual thread, and polished responsive design.
