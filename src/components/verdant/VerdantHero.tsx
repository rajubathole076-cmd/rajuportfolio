import { useGsap, gsap } from '../../hooks/useGsap';

export default function VerdantHero() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".v-hero-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.2, delay: 1.2 }
    );
    gsap.to(".v-hero-img", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  });

  return (
    <section ref={containerRef} className="relative w-full h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden mb-24 mt-[-6rem]">
      <div className="absolute inset-0 z-0">
        <div className="v-hero-img w-full h-[120%] -top-[10%] relative bg-verdant-text">
          <img 
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000" 
            alt="Verdant Coffee Farm" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 mix-blend-overlay">
        <p className="v-hero-text font-sans text-label uppercase tracking-widest mb-6">Artisanal Coffee Roasters</p>
        <h2 className="v-hero-text font-display text-display-l md:text-display-xl max-w-4xl leading-[0.9]">
          Grown with intention. Roasted with care.
        </h2>
      </div>
    </section>
  );
}