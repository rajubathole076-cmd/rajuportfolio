import { useGsap, gsap } from '../../hooks/useGsap';

export default function AnatomyRhythm() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    
    gsap.fromTo(
      ".ana-rhythm-word",
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        stagger: {
          each: 0.1,
          from: "start"
        },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "center center",
          scrub: true
        }
      }
    );

    gsap.to(".ana-rhythm-track", {
      letterSpacing: "0.2em",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "center center",
        end: "bottom center",
        scrub: true
      }
    });

  });

  return (
    <section ref={containerRef} className="w-full min-h-[150vh] flex flex-col justify-center py-32 bg-anatomy-bg text-anatomy-text border-b border-anatomy-text/10">
      <div className="container-base">
        <p className="font-sans text-label uppercase tracking-widest text-anatomy-accent mb-24">04 — Rhythm</p>
        
        <div className="flex flex-col gap-4 font-display text-[clamp(3rem,8vw,8rem)] leading-none uppercase overflow-hidden">
          {["Pacing", "Cadence", "Interval", "Frequency"].map((word, i) => (
            <div key={i} className="ana-rhythm-word whitespace-nowrap">
              <span className="ana-rhythm-track transition-all duration-75">{word}</span>
            </div>
          ))}
        </div>

        <div className="max-w-md mt-24">
          <p className="font-sans text-body text-anatomy-text/70 leading-relaxed">
            Typography is musical. Kerning and tracking manipulate the intervals between forms, establishing the tempo at which information is consumed.
          </p>
        </div>
      </div>
    </section>
  );
}