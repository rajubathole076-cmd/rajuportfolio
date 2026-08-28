import { useGsap, gsap, ScrollTrigger } from "../../hooks/useGsap";
import { ariaData } from "../../content/aria/data";
import { useRef } from "react";

export default function AriaGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGsap(() => {
    if (!trackRef.current || !containerRef.current) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const trackWidth = trackRef.current?.scrollWidth || 0;
      const viewportWidth = window.innerWidth;
      const xDistance = trackWidth - viewportWidth;

      if (xDistance > 0) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: `+=${xDistance}`,
          pin: true,
          animation: gsap.to(trackRef.current, {
            x: -xDistance,
            ease: "none"
          }),
          scrub: 1
        });
      }
    });

    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(".a-gallery-item",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: containerRef.current, start: "top 80%" } }
      );
    });

  });

  return (
    <section ref={containerRef} className="relative w-full md:h-screen bg-aria-bg overflow-hidden flex md:items-center py-24 md:py-0">
      <div 
        ref={trackRef} 
        className="flex flex-col md:flex-row items-center gap-16 md:gap-32 px-6 md:px-[20vw] w-full md:w-max h-full"
      >
        {ariaData.gallery.map((img, idx) => {
          let dimensions = "w-full md:w-[40vw] max-w-[600px]";
          let alignment = "md:self-center";

          if (img.aspectRatio === "portrait") {
            dimensions = "w-4/5 md:w-[30vw] max-w-[450px]";
            alignment = idx % 2 === 0 ? "md:self-start md:mt-24" : "md:self-end md:mb-24";
          } else if (img.aspectRatio === "panoramic") {
            dimensions = "w-full md:w-[70vw] max-w-[1200px]";
          } else if (img.aspectRatio === "square") {
            dimensions = "w-3/4 md:w-[35vw] max-w-[500px]";
          }

          return (
            <div key={img.id} className={`a-gallery-item flex flex-col gap-6 shrink-0 ${dimensions} ${alignment}`}>
              <div className="relative w-full overflow-hidden bg-aria-surface">
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  className="a-gallery-img w-full h-full object-cover transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-105"
                  loading={idx > 2 ? "lazy" : "eager"}
                />
              </div>
              <div className="flex justify-between items-start border-t border-aria-text/10 pt-4">
                <div>
                  <h3 className="font-display text-heading text-aria-text">{img.title}</h3>
                  <p className="font-sans text-label uppercase tracking-widest text-aria-accent mt-2">{img.category}</p>
                </div>
                <span className="font-sans text-body-sm text-aria-text/40">{img.year}</span>
              </div>
            </div>
          );
        })}
        
        <div className="hidden md:flex w-[20vw] shrink-0 h-full items-center justify-center">
          <span className="w-16 h-[1px] bg-aria-text/20"></span>
        </div>
      </div>
    </section>
  );
}
