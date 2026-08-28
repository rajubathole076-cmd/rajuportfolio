import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { about } from "../../content/about";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Context() {
  const chapter = chapters[1];
  const containerRef = useGsap<HTMLDivElement>(() => {
    // Animate context paragraphs
    gsap.fromTo(
      ".context-para",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );

    // Animate values list
    gsap.fromTo(
      ".context-value",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".context-values-container",
          start: "top 80%",
        },
      }
    );

    // Animate building toward
    gsap.fromTo(
      ".context-building",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".context-building",
          start: "top 85%",
        },
      }
    );
  });

  return (
    <Chapter chapter={chapter} variant="light">
      <div ref={containerRef} className="grid-base">
        <div className="md:col-span-7">
          {about.paragraphs.map((para, i) => (
            <p
              key={i}
              className="context-para font-display text-subhead text-stone leading-relaxed mb-8 md:mb-10 last:mb-0"
            >
              {para}
            </p>
          ))}
        </div>
        <div className="md:col-span-4 md:col-start-9 mt-12 md:mt-0 context-values-container">
          <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-6 border-b border-carbon/15 pb-4">
            What I Value
          </h3>
          <ul className="space-y-4">
            {about.values.map((value, i) => (
              <li
                key={i}
                className="context-value font-sans text-body text-stone flex items-start"
              >
                <span className="text-ember mr-4 font-bold">—</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-20 md:mt-32 pt-12 border-t border-carbon/15">
        <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-6">
          Building Toward
        </h3>
        <p className="context-building font-display text-heading text-carbon max-w-[800px] leading-tight">
          {about.buildingToward}
        </p>
      </div>
    </Chapter>
  );
}
