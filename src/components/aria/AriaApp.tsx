import { useEffect } from 'react';
import AriaHeader from './AriaHeader';
import AriaIntro from './AriaIntro';
import AriaGallery from './AriaGallery';
import AriaAbout from './AriaAbout';
import { useGsap, gsap } from '../../hooks/useGsap';

function AriaLayout() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    // Intro overlay animation
    gsap.fromTo(
      ".aria-intro-overlay",
      { opacity: 1 },
      { opacity: 0, duration: 2, delay: 1.5, ease: "power2.inOut", onComplete: () => {
        gsap.set(".aria-intro-overlay", { display: "none" });
      }}
    );
    
    gsap.fromTo(
      ".aria-overlay-text",
      { opacity: 0, scale: 0.95, filter: "blur(10px)" },
      { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power2.out" }
    );

    gsap.to(".aria-overlay-text", {
      opacity: 0, scale: 1.05, filter: "blur(10px)", duration: 1.5, delay: 1, ease: "power2.in"
    });
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-aria-bg text-aria-text font-sans selection:bg-aria-accent selection:text-aria-bg">
      {/* Cinematic Intro Overlay */}
      <div className="aria-intro-overlay fixed inset-0 z-50 bg-aria-bg text-aria-text flex items-center justify-center">
        <h1 className="aria-overlay-text font-display text-display-m text-aria-accent uppercase tracking-[0.2em] font-light">
          Aria
        </h1>
      </div>

      <AriaHeader />
      
      <main className="pb-0 overflow-x-hidden">
        <AriaIntro />
        <AriaGallery />
        <AriaAbout />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-aria-text/10 py-16 text-center bg-aria-bg">
        <h4 className="font-display text-subhead text-aria-text mb-4">Aria Photography</h4>
        <p className="font-sans text-body-sm text-aria-text/40 max-w-prose mx-auto">
          Concept / Self-Initiated. This project demonstrates high-contrast editorial photography layouts and GSAP horizontal scroll conversion.
        </p>
      </footer>
    </div>
  );
}

export default function AriaApp() {
  useEffect(() => {
    document.body.style.overflow = 'auto'; 
  }, []);

  return <AriaLayout />;
}