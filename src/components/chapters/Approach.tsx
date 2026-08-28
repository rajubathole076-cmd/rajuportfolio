import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { processSteps } from "../../content/process";
import { skills } from "../../content/skills";

export default function Approach() {
  const chapter = chapters[2];

  return (
    <Chapter chapter={chapter} variant="light">
      {/* Process */}
      <div className="mb-16">
        <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-8">
          Process
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="border-t border-carbon/15 pt-4"
            >
              <p className="font-display text-display-m text-ember mb-2">
                {step.number}
              </p>
              <h4 className="font-display text-heading text-carbon mb-2">
                {step.title}
              </h4>
              <p className="font-sans text-body-sm text-stone">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-8">
          Technology
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="border-t border-carbon/15 pt-4"
            >
              <h4 className="font-display text-subhead text-carbon mb-1">
                {skill.name}
              </h4>
              <p className="font-sans text-body-sm text-stone">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  );
}
