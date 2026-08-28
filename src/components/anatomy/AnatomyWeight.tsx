import { useGsap, gsap } from '../../hooks/useGsap';

export default function AnatomyWeight() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    
    // We bind the font-weight variable axis to the scroll progress of this section
    gsap.to(".ana-weight-target", {
      fontWeight: 900,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true
      }
    });

  });

  return (
    <section ref={containerRef} className="w-full min-h-[150vh] flex flex-col justify-center items-center py-32 bg-anatomy-bg text-anatomy-text border-b border-anatomy-text/10">
      <div className="container-base">
        <p className="font-sans text-label uppercase tracking-widest text-anatomy-accent mb-12">02 — Weight</p>
        
        <div className="w-full text-center">
          <h2 
            className="ana-weight-target font-display text-[clamp(4rem,15vw,15rem)] leading-none mb-12"
            style={{ fontWeight: 200 }} // Starts at minimum weight axis of Fraunces
          >
            GRAVITY
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24">
          <div>
            <p className="font-sans text-label uppercase tracking-widest text-anatomy-text/40 mb-2">Axis</p>
            <p className="font-mono text-body text-anatomy-text">wght [200 - 900]</p>
          </div>
          <div>
            <p className="font-sans text-body text-anatomy-text/70 leading-relaxed max-w-prose">
              The weight axis dictates authority. Interpolating smoothly between delicate hairlines and brutalist slabs alters the optical gravity of the page without changing the underlying architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}