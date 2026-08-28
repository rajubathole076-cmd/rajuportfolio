import type { Project } from "../../types/content";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";
import { useGsap, gsap } from "../../hooks/useGsap";

interface ProjectSceneProps {
  project: Project;
}

export default function ProjectScene({ project }: ProjectSceneProps) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useGsap<HTMLDivElement>(() => {
    // Parallax effect on the preview area
    gsap.to(".project-preview-bg", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Content fade up
    gsap.fromTo(
      ".project-content > *",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  });

  return (
    <article ref={containerRef} className="relative mb-32 last:mb-0" aria-labelledby={`project-${project.slug}`}>
      {/* Large Image Preview Area */}
      <div className="w-full h-[50vh] md:h-[70vh] bg-stone relative overflow-hidden mb-12">
        <div className="project-preview-bg absolute inset-[-10%] bg-carbon flex items-center justify-center">
          {/* Placeholder for Stage C images */}
          <p className="font-sans text-label uppercase tracking-widest text-ash/50 select-none">
            Project Visual (Stage C)
          </p>
        </div>
      </div>

      <div className="grid-base">
        {/* Project info */}
        <div className="md:col-span-5 project-content">
          <span className="font-sans text-label uppercase tracking-widest text-ember border border-ember/30 px-2 py-1 rounded-sm">
            {project.label}
          </span>
          <h3
            id={`project-${project.slug}`}
            className="font-display text-display-m text-carbon mt-6 mb-2"
          >
            {project.title}
          </h3>
          <p className="font-sans text-subhead text-ash mb-8">
            {project.type}
          </p>
          <p className="font-sans text-body text-stone leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-sans text-label uppercase tracking-widest text-stone border border-carbon/20 px-3 py-1 bg-bone/30"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.hasPrototype ? (
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('launch-project', { detail: project.slug }))}
              className="font-sans text-label uppercase tracking-widest text-paper bg-ember hover:bg-rust transition-colors px-6 py-4 flex items-center gap-2 group mt-6"
            >
              Launch Prototype <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          ) : (
            <button
              onClick={() => setExpanded(!expanded)}
              className="font-sans text-label uppercase tracking-widest text-ember hover:text-rust transition-colors flex items-center gap-2 group"
              aria-expanded={expanded}
              aria-controls={`detail-${project.slug}`}
            >
              <span className="w-8 h-[1px] bg-ember group-hover:w-12 transition-all"></span>
              {expanded ? "Hide Details" : "View Details"}
            </button>
          )}
        </div>

        {/* Quick Metadata Column */}
        <div className="md:col-span-6 md:col-start-7 project-content mt-12 md:mt-0">
          <div className="border-t border-carbon/15 pt-6 mb-8">
            <h4 className="font-sans text-label uppercase tracking-widest text-ash mb-2">
              The Goal
            </h4>
            <p className="font-sans text-body-sm text-stone">
              {project.goal}
            </p>
          </div>
          <div className="border-t border-carbon/15 pt-6 mb-8">
            <h4 className="font-sans text-label uppercase tracking-widest text-ash mb-2">
              The Approach
            </h4>
            <p className="font-sans text-body-sm text-stone">
              {project.approach}
            </p>
          </div>
        </div>
      </div>

      {/* Expandable detail */}
      <div 
        id={`detail-${project.slug}`} 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${expanded ? 'max-h-[2000px] opacity-100 mt-16' : 'max-h-0 opacity-0'}`}
      >
        <ProjectDetail project={project} />
      </div>
    </article>
  );
}
