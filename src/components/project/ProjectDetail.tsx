import type { Project } from "../../types/content";

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { detail } = project;

  return (
    <div className="grid-base border-t border-carbon/15 pt-8">
      {/* Problem */}
      <div className="md:col-span-3">
        <h4 className="font-sans text-label uppercase tracking-widest text-ash mb-3">
          The Goal
        </h4>
        <p className="font-sans text-body-sm text-stone">
          {detail.problem}
        </p>
      </div>

      {/* Solution */}
      <div className="md:col-span-3 md:col-start-5">
        <h4 className="font-sans text-label uppercase tracking-widest text-ash mb-3">
          The Solution
        </h4>
        <p className="font-sans text-body-sm text-stone">
          {detail.solution}
        </p>
      </div>

      {/* Key Decisions */}
      <div className="md:col-span-3">
        <h4 className="font-sans text-label uppercase tracking-widest text-ash mb-3">
          Key Decisions
        </h4>
        <ul className="space-y-2">
          {detail.keyDecisions.map((decision, i) => (
            <li
              key={i}
              className="font-sans text-body-sm text-stone flex items-start"
            >
              <span className="text-ember mr-2">·</span>
              {decision}
            </li>
          ))}
        </ul>
      </div>

      {/* Interactions */}
      <div className="md:col-span-3 md:col-start-5 mt-6 md:mt-0">
        <h4 className="font-sans text-label uppercase tracking-widest text-ash mb-3">
          Interactions
        </h4>
        <ul className="space-y-2">
          {detail.interactions.map((interaction, i) => (
            <li
              key={i}
              className="font-sans text-body-sm text-stone flex items-start"
            >
              <span className="text-ember mr-2">·</span>
              {interaction}
            </li>
          ))}
        </ul>
      </div>

      {/* Motion Notes */}
      <div className="md:col-span-12 mt-6">
        <h4 className="font-sans text-label uppercase tracking-widest text-ash mb-3">
          Motion Notes
        </h4>
        <ul className="space-y-2">
          {project.motionNotes.map((note, i) => (
            <li
              key={i}
              className="font-sans text-body-sm text-stone flex items-start"
            >
              <span className="text-ember mr-2">·</span>
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
