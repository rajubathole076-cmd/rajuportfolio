import { useGsap, gsap } from '../../hooks/useGsap';
import { ariaData } from '../../content/aria/data';

export default function AriaAbout() {
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".a-about-elem",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      }
    );
  });

  return (
    <section ref={containerRef} className="w-full bg-aria-bg text-aria-text py-24 md:py-48 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Visual Statement */}
        <div className="mb-32 md:mb-48">
          <p className="a-about-elem font-display text-display-m leading-tight text-aria-text/90 indent-12 md:indent-24">
            {ariaData.statement.text}
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <div className="md:col-span-4 a-about-elem">
            <h3 className="font-sans text-label uppercase tracking-widest text-aria-text/40 mb-2">Background</h3>
            <p className="font-sans text-body text-aria-text/80 leading-relaxed">
              {ariaData.about.background}
            </p>
          </div>
          
          <div className="md:col-span-4 md:col-start-5 a-about-elem">
            <h3 className="font-sans text-label uppercase tracking-widest text-aria-text/40 mb-2">Approach</h3>
            <p className="font-sans text-body text-aria-text/80 leading-relaxed">
              {ariaData.about.approach}
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-9 a-about-elem">
            <h3 className="font-sans text-label uppercase tracking-widest text-aria-text/40 mb-2">Philosophy</h3>
            <p className="font-sans text-body text-aria-text/80 leading-relaxed mb-12">
              {ariaData.about.philosophy}
            </p>
            <h3 className="font-sans text-label uppercase tracking-widest text-aria-text/40 mb-2">Location</h3>
            <p className="font-sans text-body text-aria-text/80 leading-relaxed">
              {ariaData.about.location}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}