import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsap<T extends HTMLElement = HTMLDivElement>(callback?: () => void) {
  const scope = useRef<T>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      if (callback) callback();
    }, scope);

    return () => {
      ctx.revert();
    };
  }, []);

  return scope;
}

export { gsap, ScrollTrigger };
