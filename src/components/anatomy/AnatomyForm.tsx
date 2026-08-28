import { useGsap, gsap } from '../../hooks/useGsap';

export default function AnatomyForm() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    // Basic scale/form reveal
    gsap.fromTo(
      ".ana-form-letter",
      { scale: 0.8, opacity: 0, rotationY: 45 },
      { 
        scale: 1, 
        opacity: 1, 
        rotationY: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "center center",
          scrub: true
        }
      }
    );
  });

  return (
    <section ref={containerRef} className="w-full min-h-[120vh] flex flex-col justify-center items-center py-32 bg-anatomy-bg text-anatomy-text border-b border-anatomy-text/10">
      <div className="container-base">
        <p className="font-sans text-label uppercase tracking-widest text-anatomy-accent mb-12">01 — Form</p>
        
        <div className="flex justify-center items-center flex-wrap max-w-full overflow-hidden leading-none">
          {['F','O','R','M'].map((letter, i) => (
            <span 
              key={i} 
              className="ana-form-letter font-display text-[clamp(6rem,20vw,20rem)] block"
              style={{ fontWeight: 400 }}
            >
              {letter}
            </span>
          ))}
        </div>
        
        <div className="max-w-md mt-24">
          <p className="font-sans text-body text-anatomy-text/70 leading-relaxed">
            Typography begins as pure geometry. A synthesis of positive and negative space forming recognizable silhouette.
          </p>
        </div>
      </div>
    </section>
  );
}