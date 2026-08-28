import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { site } from "../../content/site";

export default function Overture() {
  const chapter = chapters[0];

  return (
    <Chapter chapter={chapter} variant="dark">
      <div className="min-h-[60vh] flex flex-col justify-center">
        <p className="text-label uppercase tracking-widest text-mist/60 mb-6">
          {site.role} — {site.location}
        </p>
        <h1 className="font-display text-display-xl text-mist">
          {site.name}
        </h1>
        <p className="font-display text-heading text-mist/80 mt-6 max-w-prose">
          Building immersive, narrative-driven websites.
        </p>
        <p className="font-sans text-body text-mist/60 mt-4 max-w-prose">
          Placeholder — one-line positioning will go here.
        </p>
        <p className="font-sans text-label uppercase tracking-widest text-ember mt-12">
          Scroll to begin
        </p>
      </div>
    </Chapter>
  );
}
