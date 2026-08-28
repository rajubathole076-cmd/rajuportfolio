import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { processSteps } from "../../content/process";
import { skills } from "../../content/skills";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Approach() {
  const chapter = chapters[2];
  const containerRef = useGsap<HTMLDivElement>(() => {
    // Process steps animation
    gsap.fromTo(
      ".process-step",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".process-container",
          start: "top 75%",
        },
      }
    );

    // Technology skills animation
    gsap.fromTo(
      ".tech-skill",
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-container",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <Chapter chapter={chapter} variant="light">
      <div ref={containerRef}>
        {/* Process */}
        <div className="mb-24 md:mb-32 process-container">
          <div className="flex items-end justify-between mb-12 border-b border-carbon/15 pb-6">
            <h3 className="font-sans text-label uppercase tracking-widest text-ash">
              Process
            </h3>
            <p className="font-sans text-body-sm text-stone hidden md:block">
              A structured approach to creative development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="process-step group"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-sans text-label text-ember">
                    {step.number}
                  </span>
                  <div className="flex-grow h-[1px] bg-carbon/10 transition-colors group-hover:bg-ember/50"></div>
                </div>
                <h4 className="font-display text-heading text-carbon mb-3">
                  {step.title}
                </h4>
                <p className="font-sans text-body-sm text-stone leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="tech-container">
          <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-8 border-b border-carbon/15 pb-6">
            Core Technology
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="tech-skill p-6 bg-bone hover:bg-bone/80 transition-colors rounded-sm"
              >
                <h4 className="font-display text-subhead text-carbon mb-2">
                  {skill.name}
                </h4>
                <p className="font-sans text-body-sm text-stone/80">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chapter>
  );
}
