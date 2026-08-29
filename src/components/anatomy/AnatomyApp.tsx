import { useEffect } from 'react';
import AnatomyHeader from './AnatomyHeader';
import AnatomyForm from './AnatomyForm';
import AnatomyWeight from './AnatomyWeight';
import AnatomyStructure from './AnatomyStructure';
import AnatomyRhythm from './AnatomyRhythm';
import AnatomyTransformation from './AnatomyTransformation';
import { useGsap, gsap } from '../../hooks/useGsap';

function AnatomyLayout() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    // Intro overlay animation
    gsap.fromTo(
      ".ana-intro-overlay",
      { opacity: 1 },
      { opacity: 0, duration: 1.5, delay: 1, ease: "power2.inOut", onComplete: () => {
        gsap.set(".ana-intro-overlay", { display: "none" });
      }}
    );

    gsap.fromTo(
      ".ana-overlay-text",
      { opacity: 0, scale: 1.1, letterSpacing: "-0.05em" },
      { opacity: 1, scale: 1, letterSpacing: "0em", duration: 1, ease: "power3.out" }
    );
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-anatomy-bg text-anatomy-text font-sans selection:bg-anatomy-accent selection:text-anatomy-bg">
      {/* Intro Overlay */}
      <div className="ana-intro-overlay fixed inset-0 z-50 bg-anatomy-text text-anatomy-bg flex items-center justify-center">
        <h1 className="ana-overlay-text font-display text-display-m uppercase tracking-widest text-anatomy-bg">
          Anatomy
        </h1>
      </div>

      <AnatomyHeader />

      <main className="pb-0 overflow-x-hidden pt-24">
        <AnatomyForm />
        <AnatomyWeight />
        <AnatomyStructure />
        <AnatomyRhythm />
        <AnatomyTransformation />
      </main>

      {/* Footer */}
      <footer className="py-24 text-center bg-anatomy-bg">
        <h4 className="font-display text-subhead text-anatomy-text mb-4">Anatomy of Type</h4>
        <p className="font-sans text-body-sm text-anatomy-text/50 max-w-prose mx-auto">
          Concept / Self-Initiated. Experimental front-end typography.
        </p>
      </footer>
    </div>
  );
}

export default function AnatomyApp() {
  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  return <AnatomyLayout />;
}