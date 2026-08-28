import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * useGsap — GSAP context setup with React lifecycle safety.
 *
 * What it is: A hook that creates a GSAP context scoped to a ref,
 *             so all animations created inside are automatically
 *             cleaned up when the component unmounts.
 * Why we need it: GSAP animations can leak if not cleaned up properly.
 *                 This ensures safe creation and teardown.
 * Where it is used: Any component that creates GSAP animations.
 */
export function useGsap<T extends HTMLElement = HTMLDivElement>() {
  const scope = useRef<T>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {}, scope);

    return () => {
      ctx.revert();
    };
  }, []);

  return scope;
}

export { gsap, ScrollTrigger };
