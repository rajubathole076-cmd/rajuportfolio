import { chapters } from "../../content/chapters";
import { projects } from "../../content/projects";
import ProjectScene from "../project/ProjectScene";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Work() {
  const chapter = chapters[3];
  const containerRef = useGsap<HTMLDivElement>(() => {
    // 1. Establish the color mapping array matching the 4 projects in order:
    // Verdant (Warm), Lumina (Cool Grey), Aria (Dark), Anatomy (Off-white)
    // Default fallback to paper if it goes out of bounds.
    const colors = ["#F4F2EC", "#F9F9F9", "#0A0A0A", "#EFEFEF"];
    
    // 2. Select all project articles
    const projectElements = gsap.utils.toArray(".project-scene-wrapper");

    projectElements.forEach((el: any, index) => {
      // 3. For each project, animate the wrapper s background color when it hits the center of the viewport
      gsap.to(".work-background-transition", {
        backgroundColor: colors[index] || "#F4F0E8", // target color
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top center", // begins transition when the top of the project hits center of screen
          end: "bottom center", // ends transition when bottom hits center
          scrub: true,
          // onEnter/onLeaveBack callbacks could handle snap logic, but scrub is smoother
        }
      });
      
      // Secondary logic: Shift the text colors dynamically if the background gets too dark (like Aria)
      const isDark = colors[index] === "#0A0A0A";
      gsap.to(".work-text-transition", {
        color: isDark ? "#F2F2F2" : "#161310", // mist/paper vs carbon
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });
      
      gsap.to(".work-border-transition", {
        borderColor: isDark ? "rgba(242, 242, 242, 0.15)" : "rgba(22, 19, 16, 0.15)",
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true
        }
      });
    });
  });

  return (
    // Note: We bypass the Chapter component s fixed background class and use a custom wrapper 
    // to allow GSAP to interpolate the background color smoothly.
    <section
      id={chapter.id}
      ref={containerRef}
      className="relative work-background-transition py-16 md:py-24"
      aria-labelledby={`chapter-${chapter.id}-title`}
      style={{ backgroundColor: "#F4F0E8" }} // Initial state: Paper
    >
      {/* Chapter number */}
      <div className="container-base" aria-hidden="true">
        <span className="font-display text-display-l leading-none text-ember/10 absolute top-4 right-4 md:right-8 select-none">
          {chapter.number}
        </span>
      </div>

      {/* Chapter header */}
      <div className="container-base">
        <p className="text-label uppercase tracking-widest mb-2 work-text-transition opacity-60">
          Chapter {chapter.number}
        </p>
        <h2
          id={`chapter-${chapter.id}-title`}
          className="font-display text-display-l work-text-transition"
        >
          {chapter.title}
        </h2>
        <p className="font-sans text-body-sm mt-2 work-text-transition opacity-60">
          {chapter.label}
        </p>
      </div>

      {/* Chapter divider at top */}
      <div className="chapter-divider absolute top-0 left-0 work-border-transition" aria-hidden="true" />

      {/* Chapter content */}
      <div className="container-base mt-12 space-y-24">
        {projects.map((project) => (
          <div key={project.slug} className="project-scene-wrapper">
            <ProjectScene project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
