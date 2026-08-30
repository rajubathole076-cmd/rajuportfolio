import { useRef } from "react";
import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { processSteps } from "../../content/process";
import { skills } from "../../content/skills";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Approach() {
  const chapter = chapters[2];
  const activePathRef = useRef<SVGPathElement>(null);

  const containerRef = useGsap<HTMLDivElement>(() => {
    
    // MATCH MEDIA: Desktop pinning choreography
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const path = activePathRef.current;
      let pathLength = 0;
      try {
        if (path) {
          pathLength = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });
        }
      } catch (e) {
        pathLength = 500;
      }

      // Initialize grid cell starting styles
      gsap.set([".process-step-1", ".process-step-2", ".process-step-3", ".process-step-4", ".process-step-5"], {
        opacity: 0.15,
        scale: 0.97,
        borderColor: "rgba(22, 19, 16, 0.08)"
      });
      gsap.set(".process-step-0", {
        opacity: 1,
        scale: 1.03,
        borderColor: "#B7410E"
      });
      gsap.set(".process-indicator-0", { opacity: 1 });
      gsap.set([".process-indicator-1", ".process-indicator-2", ".process-indicator-3", ".process-indicator-4", ".process-indicator-5"], {
        opacity: 0
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".process-container",
          start: "top 12%",
          end: "+=300%", 
          pin: true,
          scrub: 1,
        }
      });

      // Transition 1: Step 0 -> Step 1 (Time 0 to 1)
      tl.to(".process-step-0", {
        opacity: 0.5,
        scale: 1.0,
        borderColor: "rgba(22, 19, 16, 0.15)",
        duration: 1
      }, 0)
      .to(".process-indicator-0", { opacity: 0, duration: 0.5 }, 0)
      .to(path, {
        strokeDashoffset: pathLength * 0.8,
        ease: "none",
        duration: 1
      }, 0)
      .to(".process-step-1", {
        opacity: 1.0,
        scale: 1.03,
        borderColor: "#B7410E",
        duration: 1
      }, 0)
      .to(".process-indicator-1", { opacity: 1, duration: 0.5 }, 0.5)

      // Transition 2: Step 1 -> Step 2 (Time 1 to 2)
      .to(".process-step-1", {
        opacity: 0.5,
        scale: 1.0,
        borderColor: "rgba(22, 19, 16, 0.15)",
        duration: 1
      }, 1)
      .to(".process-indicator-1", { opacity: 0, duration: 0.5 }, 1)
      .to(path, {
        strokeDashoffset: pathLength * 0.6,
        ease: "none",
        duration: 1
      }, 1)
      .to(".process-step-2", {
        opacity: 1.0,
        scale: 1.03,
        borderColor: "#B7410E",
        duration: 1
      }, 1)
      .to(".process-indicator-2", { opacity: 1, duration: 0.5 }, 1.5);
      // Transition 3: Step 2 -> Step 3 (Time 2 to 3)
      tl.to(".process-step-2", {
        opacity: 0.5,
        scale: 1.0,
        borderColor: "rgba(22, 19, 16, 0.15)",
        duration: 1
      }, 2)
      .to(".process-indicator-2", { opacity: 0, duration: 0.5 }, 2)
      .to(path, {
        strokeDashoffset: pathLength * 0.4,
        ease: "none",
        duration: 1
      }, 2)
      .to(".process-step-3", {
        opacity: 1.0,
        scale: 1.03,
        borderColor: "#B7410E",
        duration: 1
      }, 2)
      .to(".process-indicator-3", { opacity: 1, duration: 0.5 }, 2.5)

      // Transition 4: Step 3 -> Step 4 (Time 3 to 4)
      .to(".process-step-3", {
        opacity: 0.5,
        scale: 1.0,
        borderColor: "rgba(22, 19, 16, 0.15)",
        duration: 1
      }, 3)
      .to(".process-indicator-3", { opacity: 0, duration: 0.5 }, 3)
      .to(path, {
        strokeDashoffset: pathLength * 0.2,
        ease: "none",
        duration: 1
      }, 3)
      .to(".process-step-4", {
        opacity: 1.0,
        scale: 1.03,
        borderColor: "#B7410E",
        duration: 1
      }, 3)
      .to(".process-indicator-4", { opacity: 1, duration: 0.5 }, 3.5)

      // Transition 5: Step 4 -> Step 5 (Time 4 to 5)
      .to(".process-step-4", {
        opacity: 0.5,
        scale: 1.0,
        borderColor: "rgba(22, 19, 16, 0.15)",
        duration: 1
      }, 4)
      .to(".process-indicator-4", { opacity: 0, duration: 0.5 }, 4)
      .to(path, {
        strokeDashoffset: 0,
        ease: "none",
        duration: 1
      }, 4)
      .to(".process-step-5", {
        opacity: 1.0,
        scale: 1.03,
        borderColor: "#B7410E",
        duration: 1
      }, 4)
      .to(".process-indicator-5", { opacity: 1, duration: 0.5 }, 4.5)

      // Final Resolution: All steps build toward final state (Time 5 to 5.5)
      .to([".process-step-0", ".process-step-1", ".process-step-2", ".process-step-3", ".process-step-4"], {
        opacity: 0.9,
        scale: 1.0,
        borderColor: "rgba(22, 19, 16, 0.2)",
        duration: 0.5
      }, 5)
      .to(".process-step-5", {
        scale: 1.03,
        borderColor: "#B7410E",
        duration: 0.5
      }, 5)
      .to([".process-indicator-0", ".process-indicator-1", ".process-indicator-2", ".process-indicator-3", ".process-indicator-4", ".process-indicator-5"], {
        opacity: 1,
        duration: 0.5
      }, 5);
    });

    // MATCH MEDIA: Mobile vertical fallback (no pinning)
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        ".process-step-mobile",
        { opacity: 0, y: 30 },
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
    });

    // Technology skills animation remains standard
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
        <div className="mb-24 md:mb-32 process-container min-h-[50vh]">
          <div className="flex items-end justify-between mb-16 border-b border-carbon/15 pb-6">
            <h3 className="font-sans text-label uppercase tracking-widest text-ash">
              Process
            </h3>
            <p className="font-sans text-body-sm text-stone hidden md:block">
              A structured approach to creative development.
            </p>
          </div>

          {/* Desktop/Tablet Accumulated Composition Grid */}
          <div className="hidden md:block relative w-full max-w-5xl mx-auto py-8">
            {/* SVG Connecting Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {/* Background trace (inactive line) */}
              <path
                d="M 16.67 25 L 50 25 L 83.33 25 L 83.33 50 L 16.67 50 L 16.67 75 L 50 75 L 83.33 75"
                fill="none"
                stroke="rgba(22, 19, 16, 0.08)"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Foreground active trace (animated) */}
              <path
                ref={activePathRef}
                d="M 16.67 25 L 50 25 L 83.33 25 L 83.33 50 L 16.67 50 L 16.67 75 L 50 75 L 83.33 75"
                fill="none"
                stroke="#B7410E" // ember color
                strokeWidth="0.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Grid Container */}
            <div className="grid grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-12 lg:gap-y-16 relative z-10 h-[50vh] min-h-[380px] max-h-[550px] mt-8">
              {processSteps.map((step, idx) => (
                <div
                  key={step.number}
                  className={`process-step-${idx} relative bg-paper border border-carbon/10 p-6 lg:p-8 shadow-sm rounded-sm flex flex-col justify-between h-full transition-all duration-300`}
                >
                  <div>
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="font-sans text-label text-ember font-bold">
                        {step.number}
                      </span>
                      <span className={`process-indicator-${idx} w-1.5 h-1.5 rounded-full bg-ember opacity-0 transition-opacity duration-300`} />
                    </div>
                    <h4 className="font-display text-subhead lg:text-heading text-carbon mb-2 lg:mb-3 leading-tight">
                      {step.title}
                    </h4>
                    <p className="font-sans text-body-sm text-stone leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Standard Vertical Grid */}
          <div className="md:hidden grid grid-cols-1 gap-y-12">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="process-step-mobile border-t border-carbon/15 pt-6"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-sans text-label text-ember">
                    {step.number}
                  </span>
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
