import { useEffect, useState } from "react";

/**
 * useScrollProgress — tracks the page scroll position as a
 *                     percentage (0 to 1) for progress indicators.
 *
 * What it is: A hook that returns the current scroll progress.
 * Why we need it: The persistent visual thread and chapter
 *                 indicators need to know how far the user has scrolled.
 * Where it is used: Navigation, progress indicators, visual thread.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return progress;
}
