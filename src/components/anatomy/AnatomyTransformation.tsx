import { useGsap, gsap } from '../../hooks/useGsap';
import { useRef } from 'react';

export default function AnatomyTransformation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1
        }
      });

      // 1. Separate words
      tl.to(".ana-trans-word1", { xPercent: -50, ease: "power1.inOut" }, 0)
        .to(".ana-trans-word2", { xPercent: 50, ease: "power1.inOut" }, 0)
        
      // 2. Fragment into letters
        .to(".ana-trans-letter", { 
          y: () => gsap.utils.random(-200, 200),
          x: () => gsap.utils.random(-200, 200),
          rotationZ: () => gsap.utils.random(-45, 45),
          opacity: 0.2,
          ease: "power2.inOut",
          stagger: 0.05
        }, "+=0.2")

      // 3. Resolve into composition
        .to(".ana-trans-letter", {
          y: 0,
          x: 0,
          rotationZ: 0,
          opacity: 1,
          ease: "power3.inOut"
        }, "+=0.5");
    });

    mm.add("(max-width: 767px)", () => {
      // Simplified mobile animation without pinning
      gsap.fromTo(".ana-trans-letter", 
        { opacity: 0, filter: "blur(10px)" },
        { 
          opacity: 1, filter: "blur(0px)", stagger: 0.1, 
          scrollTrigger: { trigger: containerRef.current, start: "top 60%", end: "center center", scrub: true } 
        }
      );
    });

  });

  const word1 = "DECON".split('');
  const word2 = "STRUCT".split('');

  return (
    <section ref={containerRef} className="w-full h-screen flex flex-col justify-center items-center bg-anatomy-bg text-anatomy-text overflow-hidden">
      
      <div className="absolute top-12 md:top-32 left-6 md:left-8 z-10">
        <p className="font-sans text-label uppercase tracking-widest text-anatomy-accent mb-2">05 — Transformation</p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-0 md:gap-4 font-display text-[clamp(4rem,10vw,12rem)] leading-none uppercase">
        
        <div className="ana-trans-word1 flex">
          {word1.map((l, i) => (
            <span key={`w1-${i}`} className="ana-trans-letter inline-block">{l}</span>
          ))}
        </div>
        
        <div className="ana-trans-word2 flex">
          {word2.map((l, i) => (
            <span key={`w2-${i}`} className="ana-trans-letter inline-block text-anatomy-accent">{l}</span>
          ))}
        </div>

      </div>

    </section>
  );
}