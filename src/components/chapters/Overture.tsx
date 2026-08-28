import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { site } from "../../content/site";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Overture() {
  const chapter = chapters[0];
  const containerRef = useGsap<HTMLDivElement>(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(
      ".overture-role",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
    )
    .fromTo(
      ".overture-title",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(
      ".overture-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      ".overture-scroll",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
      "+=0.4"
    );
  });

  return (
    <Chapter chapter={chapter} variant="dark" className="min-h-screen flex items-center">
      <div ref={containerRef} className="w-full flex flex-col justify-center pb-24 pt-12 md:pb-32">
        <p className="overture-role text-label uppercase tracking-widest text-mist/60 mb-8 md:mb-12">
          {site.role} — {site.location}
        </p>
        
        <h1 className="overture-title font-display text-display-xl text-mist leading-[0.9] -ml-2 md:-ml-4">
          <span className="block">{site.name || "RAJU"}</span>
        </h1>
        
        <div className="grid-base mt-12 md:mt-24">
          <div className="md:col-span-8 lg:col-span-6">
            <p className="overture-desc font-display text-heading text-mist/90 mb-6 leading-tight">
              Building immersive, narrative-driven websites.
            </p>
            <p className="overture-desc font-sans text-body text-mist/60 max-w-prose">
              I am a beginner building professional freelance experience, focused on creating premium digital experiences through motion, typography, and clean code.
            </p>
          </div>
        </div>

        <div className="overture-scroll absolute bottom-8 left-4 sm:left-6 md:left-8 flex items-center gap-4">
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
