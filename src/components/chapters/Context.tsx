import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { about } from "../../content/about";

export default function Context() {
  const chapter = chapters[1];

  return (
    <Chapter chapter={chapter} variant="light">
      <div className="grid-base">
        <div className="md:col-span-7">
          {about.paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-display text-subhead text-stone leading-relaxed mb-6"
            >
              {para}
            </p>
          ))}
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-4">
            What I Value
          </h3>
          <ul className="space-y-3">
            {about.values.map((value, i) => (
              <li
                key={i}
                className="font-sans text-body text-stone flex items-start"
              >
                <span className="text-ember mr-3">—</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-12">
        <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-3">
          Building Toward
        </h3>
        <p className="font-display text-heading text-carbon max-w-prose">
          {about.buildingToward}
        </p>
      </div>
    </Chapter>
  );
}
