import { VerdantProvider, useVerdant } from './VerdantContext';
import VerdantHeader from './VerdantHeader';
import VerdantHero from './VerdantHero';
import VerdantStorefront from './VerdantStorefront';
import VerdantProductDetail from './VerdantProductDetail';
import VerdantCart from './VerdantCart';
import { useGsap, gsap } from '../../hooks/useGsap';
import { useEffect } from 'react';

function VerdantLayout() {
  const { selectedProduct } = useVerdant();
  
  // Animation for entering Verdant
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".verdant-intro-overlay",
      { opacity: 1 },
      { opacity: 0, duration: 1.5, delay: 1, ease: "power2.inOut", onComplete: () => {
        gsap.set(".verdant-intro-overlay", { display: "none" });
      }}
    );
    gsap.fromTo(
      ".verdant-intro-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
    gsap.to(".verdant-intro-text", {
      opacity: 0, y: -20, duration: 0.8, delay: 0.8, ease: "power2.in"
    });
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-verdant-bg text-verdant-text font-sans selection:bg-verdant-accent selection:text-verdant-bg">
      {/* Intro Overlay */}
      <div className="verdant-intro-overlay fixed inset-0 z-50 bg-verdant-text text-verdant-bg flex flex-col items-center justify-center">
        <p className="verdant-intro-text font-sans text-label uppercase tracking-widest text-verdant-accent mb-4">Concept / Self-Initiated</p>
        <h1 className="verdant-intro-text font-display text-display-l">Verdant Roasters</h1>
      </div>

      <VerdantHeader />
      
      <main className="pb-32">
        {!selectedProduct ? (
          <>
            <VerdantHero />
            <VerdantStorefront />
          </>
        ) : (
          <VerdantProductDetail />
        )}
      </main>

      <VerdantCart />
      
      {/* Footer */}
      <footer className="border-t border-verdant-text/10 py-12 text-center">
        <p className="font-sans text-body-sm text-verdant-text/60">
          A concept project by the portfolio author. Not a real store.
        </p>
      </footer>
    </div>
  );
}

export default function VerdantApp() {
  // Ensure the portfolio scroll is reset and we hide body scroll if needed, 
  // actually VerdantApp covers everything so normal scroll is fine.
  useEffect(() => {
    document.body.style.overflow = 'auto'; // ensure body can scroll
  }, []);

  return (
    <VerdantProvider>
      <VerdantLayout />
    </VerdantProvider>
  );
}