import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { projects } from "../../content/projects";
import ProjectScene from "../project/ProjectScene";

export default function Work() {
  const chapter = chapters[3];

  return (
    <Chapter chapter={chapter} variant="light">
      <div className="space-y-24">
        {projects.map((project) => (
          <ProjectScene key={project.slug} project={project} />
        ))}
      </div>
    </Chapter>
  );
}
