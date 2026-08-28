import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { journalEntries } from "../../content/journal";

export default function Journal() {
  const chapter = chapters[5];

  return (
    <Chapter chapter={chapter} variant="light">
      {journalEntries.length === 0 ? (
        <p className="font-display text-subhead text-ash max-w-prose">
          The journal begins here. Entries about new projects, experiments, and
          milestones will appear as the work evolves.
        </p>
      ) : (
        <div className="space-y-8">
          {journalEntries.map((entry) => (
            <article
              key={entry.id}
              className="border-t border-carbon/15 pt-4 max-w-prose"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="font-sans text-label uppercase tracking-widest text-ash">
                  {entry.date}
                </span>
                <span className="font-sans text-label uppercase tracking-widest text-ember">
                  {entry.tag}
                </span>
              </div>
              <h3 className="font-display text-heading text-carbon mb-2">
                {entry.title}
              </h3>
              <p className="font-sans text-body text-stone">
                {entry.excerpt}
              </p>
            </article>
          ))}
        </div>
      )}
    </Chapter>
  );
}
