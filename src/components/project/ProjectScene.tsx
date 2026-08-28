import type { Project } from "../../types/content";
import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

interface ProjectSceneProps {
  project: Project;
}

export default function ProjectScene({ project }: ProjectSceneProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="relative" aria-labelledby={`project-${project.slug}`}>
      <div className="grid-base">
        {/* Project info */}
        <div className="md:col-span-5">
          <span className="font-sans text-label uppercase tracking-widest text-ember">
            {project.label}
          </span>
          <h3
            id={`project-${project.slug}`}
            className="font-display text-display-m text-carbon mt-2 mb-1"
          >
            {project.title}
          </h3>
          <p className="font-sans text-body-sm text-ash mb-6">
            {project.type}
          </p>
          <p className="font-sans text-body text-stone mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="font-sans text-label uppercase tracking-widest text-stone border border-carbon/20 px-3 py-1"
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className="font-sans text-body-sm text-ember hover:text-rust transition-colors"
            aria-expanded={expanded}
            aria-controls={`detail-${project.slug}`}
          >
            {expanded ? "Show less −" : "Read more +"}
          </button>
        </div>

        {/* Visual preview area — images added in Stage C */}
        <div className="md:col-span-6 md:col-start-7 min-h-[300px] bg-bone flex items-center justify-center">
          <p className="font-sans text-label uppercase tracking-widest text-ash">
            Project Preview
          </p>
        </div>
      </div>

      {/* Expandable detail */}
      {expanded && (
        <div id={`detail-${project.slug}`} className="mt-8">
          <ProjectDetail project={project} />
        </div>
      )}
    </article>
  );
}
