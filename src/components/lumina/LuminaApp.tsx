import { LuminaProvider, useLumina } from './LuminaContext';
import LuminaHeader from './LuminaHeader';
import LuminaHero from './LuminaHero';
import LuminaCatalog from './LuminaCatalog';
import LuminaProductDetail from './LuminaProductDetail';
import LuminaQuoteDrawer from './LuminaQuoteDrawer';
import { useGsap, gsap } from '../../hooks/useGsap';
import { useEffect } from 'react';

function LuminaLayout() {
  const { selectedProduct } = useLumina();

  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".lumina-intro-overlay",
      { opacity: 1 },
      { opacity: 0, duration: 1.5, delay: 1, ease: "power2.inOut", onComplete: () => {
        gsap.set(".lumina-intro-overlay", { display: "none" });
      }}
    );
    gsap.fromTo(
      ".lumina-intro-line",
      { scaleX: 0 },
      { scaleX: 1, duration: 1, ease: "power3.inOut" }
    );
    gsap.fromTo(
      ".lumina-intro-text",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power2.out" }
    );
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-lumina-bg text-lumina-text font-sans selection:bg-lumina-accent selection:text-lumina-bg">
      {/* Intro Overlay */}
      <div className="lumina-intro-overlay fixed inset-0 z-50 bg-lumina-bg text-lumina-text flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-sm">
          <p className="lumina-intro-text font-sans text-label uppercase tracking-widest text-lumina-accent mb-6 text-center">Concept / Self-Initiated</p>
          <div className="lumina-intro-line h-[1px] bg-lumina-text/20 w-full origin-left mb-6" />
          <h1 className="lumina-intro-text font-display text-display-m text-center">Lumina Architectural</h1>
        </div>
      </div>

      <LuminaHeader />
      
      <main className="pb-0">
        {!selectedProduct ? (
          <>
            <LuminaHero />
            <LuminaCatalog />
          </>
        ) : (
          <LuminaProductDetail />
        )}
      </main>

      <LuminaQuoteDrawer />
      
      {/* Footer */}
      <footer className="border-t border-lumina-text/10 py-16 bg-lumina-light text-center">
        <h4 className="font-display text-subhead text-lumina-text mb-4">Lumina Architectural Lighting</h4>
        <p className="font-sans text-body-sm text-lumina-text/60 max-w-prose mx-auto">
          This is a concept project created to demonstrate digital B2B catalog architecture, precision layout, and technical data presentation.
        </p>
      </footer>
    </div>
  );
}

export default function LuminaApp() {
  useEffect(() => {
    document.body.style.overflow = 'auto'; 
  }, []);

  return (
    <LuminaProvider>
      <LuminaLayout />
    </LuminaProvider>
  );
}