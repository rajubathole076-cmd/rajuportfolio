import { useGsap, gsap } from '../../hooks/useGsap';

export default function LuminaHero() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".l-hero-elem",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out", stagger: 0.1, delay: 1 }
    );
    
    // Slight parallax on background
    gsap.to(".l-hero-bg", {
      yPercent: 10,
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
    <section ref={containerRef} className="relative w-full min-h-screen flex items-end pb-24 overflow-hidden mt-[-6rem]">
      <div className="absolute inset-0 z-0 bg-lumina-text">
        <div className="l-hero-bg w-full h-[110%] -top-[5%] relative">
          <img 
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&q=80&w=2000" 
            alt="Lumina Architectural Lighting" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity grayscale"
          />
        </div>
      </div>
      
      <div className="relative z-10 container-base">
        <div className="max-w-3xl">
          <div className="l-hero-elem flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-lumina-accent"></span>
            <p className="font-sans text-label uppercase tracking-widest text-lumina-light">Architectural Lighting Platform</p>
          </div>
          <h2 className="l-hero-elem font-display text-display-l text-white leading-tight mb-8">
            Precision illumination for engineered environments.
          </h2>
          <p className="l-hero-elem font-sans text-body text-lumina-light/70 max-w-prose">
            Partnering with architects and designers to deliver technical lighting solutions that define spatial hierarchy.
          </p>
        </div>
      </div>
    </section>
  );
}