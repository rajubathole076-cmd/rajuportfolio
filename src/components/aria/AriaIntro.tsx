import { ariaData } from '../../content/aria/data';
import { useGsap, gsap } from '../../hooks/useGsap';

export default function AriaIntro() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".a-intro-elem",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.15, delay: 0.8 }
    );
  });

  return (
    <section ref={containerRef} className="w-full min-h-screen flex flex-col justify-center items-center px-6 text-center relative overflow-hidden bg-aria-bg text-aria-text mt-[-6rem]">
      {/* Background ambient noise/gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-aria-surface to-aria-bg opacity-50 z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <p className="a-intro-elem font-sans text-label uppercase tracking-widest text-aria-text/40 mb-8">
          Aria // Photography
        </p>
        <h2 className="a-intro-elem font-display text-[clamp(3rem,8vw,6rem)] leading-[1.05] tracking-tight mb-8">
          {ariaData.intro.headline}
        </h2>
        <p className="a-intro-elem font-sans text-body text-aria-text/60 max-w-md mx-auto">
          {ariaData.intro.subhead}
        </p>
        
        <div className="a-intro-elem mt-24 flex flex-col items-center gap-4">
          <div className="w-[1px] h-16 bg-gradient-to-b from-aria-text/0 via-aria-text/40 to-aria-text/0 animate-pulse" />
          <p className="font-sans text-[0.65rem] uppercase tracking-widest text-aria-text/30">Scroll to Explore</p>
        </div>
      </div>
    </section>
  );
}