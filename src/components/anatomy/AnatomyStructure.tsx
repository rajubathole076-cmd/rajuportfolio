import { useGsap, gsap } from '../../hooks/useGsap';

export default function AnatomyStructure() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    
    // Draw the SVG structural lines
    gsap.fromTo(
      ".ana-struct-line",
      { strokeDasharray: "1000", strokeDashoffset: "1000" },
      { 
        strokeDashoffset: 0,
        duration: 2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: 1
        }
      }
    );

    // Fade in text metrics
    gsap.fromTo(
      ".ana-struct-label",
      { opacity: 0, x: -10 },
      { 
        opacity: 1, 
        x: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "center center",
          scrub: true
        }
      }
    );
  });

  return (
    <section ref={containerRef} className="w-full min-h-[120vh] flex flex-col justify-center py-32 bg-anatomy-bg text-anatomy-text border-b border-anatomy-text/10">
      <div className="container-base relative">
        <p className="font-sans text-label uppercase tracking-widest text-anatomy-accent mb-24">03 — Structure</p>
        
        <div className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center">
          
          {/* Typographic Object */}
          <div className="relative z-10 font-display text-[clamp(8rem,25vw,25rem)] leading-none" style={{ fontWeight: 400 }}>
            Ag
          </div>

          {/* SVG Overlay representing baselines, ascenders, descenders */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
            {/* Cap Height */}
            <line className="ana-struct-line" x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(209, 73, 0, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
            {/* X-Height */}
            <line className="ana-struct-line" x1="0" y1="40%" x2="100%" y2="40%" stroke="rgba(209, 73, 0, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
            {/* Baseline */}
            <line className="ana-struct-line" x1="0" y1="75%" x2="100%" y2="75%" stroke="rgba(209, 73, 0, 0.8)" strokeWidth="2" />
            {/* Descender */}
            <line className="ana-struct-line" x1="0" y1="90%" x2="100%" y2="90%" stroke="rgba(209, 73, 0, 0.4)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>

          {/* Labels */}
          <div className="absolute left-0 h-full w-full flex flex-col justify-between pointer-events-none pb-[10%]">
            <span className="ana-struct-label font-sans text-label uppercase tracking-widest text-anatomy-accent absolute top-[18%]">Cap Height</span>
            <span className="ana-struct-label font-sans text-label uppercase tracking-widest text-anatomy-accent absolute top-[38%]">X-Height</span>
            <span className="ana-struct-label font-sans text-label uppercase tracking-widest text-anatomy-accent absolute top-[73%]">Baseline</span>
            <span className="ana-struct-label font-sans text-label uppercase tracking-widest text-anatomy-accent absolute top-[88%]">Descender</span>
          </div>

        </div>
      </div>
    </section>
  );
}