import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { site } from "../../content/site";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Overture() {
  const chapter = chapters[0];
  const containerRef = useGsap<HTMLDivElement>(() => {
    
    // MATCH MEDIA: Desktop scroll-driven hero deconstruction
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initialize states via GSAP for clean fallback
      gsap.set(".overture-title", {
        scale: 1.8,
        y: "12vh",
        transformOrigin: "left center"
      });
      gsap.set([".overture-role", ".overture-desc-title", ".overture-desc-body"], {
        opacity: 0,
        y: 40
      });
      gsap.set(".overture-scroll", { opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#overture",
          start: "top top",
          end: "+=100%", 
          pin: true,
          scrub: 1,
        }
      });

      tl.to(".overture-title", {
        scale: 1.0,
        y: 0,
        duration: 1.5,
        ease: "power2.inOut"
      }, 0)
      .to(".overture-scroll", {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      }, 0)
      .to(".overture-role", {
        opacity: 0.6,
        y: 0,
        duration: 1.0,
        ease: "power2.out"
      }, 0.5)
      .to(".overture-desc-title", {
        opacity: 0.9,
        y: 0,
        duration: 1.0,
        ease: "power2.out"
      }, 0.7)
      .to(".overture-desc-body", {
        opacity: 0.6,
        y: 0,
        duration: 1.0,
        ease: "power2.out"
      }, 0.9);
    });
  });

  return (
    <Chapter chapter={chapter} variant="dark" className="min-h-screen flex items-center relative overflow-hidden">
      <div ref={containerRef} className="w-full flex flex-col justify-center pb-12 pt-6 md:pb-24">
        
        {/* Supporting Identity */}
        <p className="overture-role text-label uppercase tracking-widest text-mist/60 mb-8 md:mb-12">
          {site.role} — {site.location}
        </p>
        
        {/* Primary Dominant Name Typography */}
        <h1 className="overture-title font-display text-display-xl md:text-[6vw] lg:text-[5vw] text-mist leading-[0.9] -ml-2 md:-ml-4 origin-left select-none mb-12">
          <span className="block">{site.name || "Raju Bathole"}</span>
        </h1>
        
        {/* Supporting statement grid */}
        <div className="grid-base mt-4 md:mt-12">
          <div className="md:col-span-8 lg:col-span-6 space-y-6">
            <p className="overture-desc-title font-display text-heading text-mist/90 leading-tight">
              Building immersive, narrative-driven websites.
            </p>
            <p className="overture-desc-body font-sans text-body text-mist/60 max-w-prose">
              I am a beginner building professional freelance experience, focused on creating premium digital experiences through motion, typography, and clean code.
            </p>
          </div>
        </div>

        {/* Scroll Invitation */}
        <div className="overture-scroll absolute bottom-8 left-0 flex items-center gap-4">
          <div className="w-[1px] h-12 bg-ember/50">
            <div className="w-full bg-ember animate-pulse h-1/2" />
          </div>
          <p className="font-sans text-label uppercase tracking-widest text-mist/50">
            Scroll to begin
          </p>
        </div>

      </div>
    </Chapter>
  );
}
