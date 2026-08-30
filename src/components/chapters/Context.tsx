import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { about } from "../../content/about";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Context() {
  const chapter = chapters[1];
  const containerRef = useGsap<HTMLDivElement>(() => {
    
    // MATCH MEDIA: Desktop subtle scroll-driven identity/values
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Initialize states via GSAP for clean fallback on non-js/reduced-motion
      gsap.set(".context-para-group", { opacity: 1, y: 0 });
      gsap.set(".context-building-group", { opacity: 0.3, y: 30 });
      gsap.set(".context-value-item", { opacity: 0.05, x: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#context",
          start: "top top",
          end: "+=100%", 
          pin: true,
          scrub: 1,
        }
      });

      // State 1 -> State 2: primary statement shifts slightly, Building Toward becomes prominent
      tl.to(".context-para-group", {
        opacity: 0.6,
        y: -15,
        duration: 1.0,
        ease: "power1.inOut"
      }, 0)
      .to(".context-building-group", {
        opacity: 1.0,
        y: 0,
        duration: 1.2,
        ease: "power1.inOut"
      }, 0)

      // State 2 -> State 3: Values glide into the negative space
      .to(".context-value-item", {
        opacity: 1.0,
        x: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "power2.out"
      }, 0.5)

      // State 4: Everything settles into a final resolved composition
      .to(".context-para-group", {
        opacity: 0.95,
        duration: 0.8,
        ease: "power1.out"
      }, 1.8);
    });

    // MATCH MEDIA: Mobile subtle scroll entries
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".context-para",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      gsap.fromTo(
        ".context-value-item",
        { opacity: 0, x: -15 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".context-values-container",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".context-building-group",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".context-building-group",
            start: "top 85%",
          },
        }
      );
    });
  });

  return (
    <Chapter chapter={chapter} variant="light">
      <div ref={containerRef} className="pb-12 pt-6">
        
        <div className="grid-base">
          {/* Bio Column */}
          <div className="md:col-span-7 context-para-group transition-all duration-300">
            {about.paragraphs.map((para, i) => (
              <p
                key={i}
                className="context-para font-display text-subhead text-stone leading-relaxed mb-8 md:mb-10 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Values Column */}
          <div className="md:col-span-4 md:col-start-9 mt-12 md:mt-0 context-values-container">
            <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-6 border-b border-carbon/15 pb-4">
              What I Value
            </h3>
            <ul className="space-y-4">
              {about.values.map((value, i) => (
                <li
                  key={i}
                  className="context-value-item font-sans text-body text-stone flex items-start"
                >
                  <span className="text-ember mr-4 font-bold">—</span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Building Toward Section */}
        <div className="mt-20 md:mt-32 pt-12 border-t border-carbon/15 context-building-group transition-all duration-300">
          <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-6">
            Building Toward
          </h3>
          <p className="font-display text-heading text-carbon max-w-[800px] leading-tight">
            {about.buildingToward}
          </p>
        </div>

      </div>
    </Chapter>
  );
}
