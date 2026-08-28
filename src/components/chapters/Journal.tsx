import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { journalEntries } from "../../content/journal";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Journal() {
  const chapter = chapters[5];
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".journal-entry",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      }
    );
  });

  return (
    <Chapter chapter={chapter} variant="light">
      <div ref={containerRef} className="min-h-[40vh] flex flex-col justify-center">
        {journalEntries.length === 0 ? (
          <div className="journal-entry border border-carbon/15 p-8 md:p-12 bg-bone/20 flex flex-col items-center justify-center text-center max-w-3xl mx-auto rounded-sm">
            <span className="w-12 h-[1px] bg-ember mb-6 block"></span>
            <h3 className="font-display text-heading text-carbon mb-4">
              The Archive is being prepared
            </h3>
            <p className="font-sans text-body text-stone max-w-prose leading-relaxed">
              This space will serve as a build log and live journal. Entries about new projects, technical experiments, creative discoveries, and milestones will be documented here as the work evolves.
            </p>
            <span className="font-sans text-label uppercase tracking-widest text-ash mt-8">
              System Standing By
            </span>
          </div>
        ) : (
          <div className="space-y-12">
            {journalEntries.map((entry) => (
              <article
                key={entry.id}
                className="journal-entry border-t border-carbon/20 pt-8 max-w-prose group"
              >
                <div className="flex items-center gap-6 mb-4">
                  <span className="font-sans text-label uppercase tracking-widest text-ash">
                    {entry.date}
                  </span>
                  <span className="font-sans text-label uppercase tracking-widest text-ember border border-ember/20 px-2 py-1 bg-ember/5 rounded-sm">
                    {entry.tag}
                  </span>
                </div>
                <h3 className="font-display text-heading text-carbon mb-4 group-hover:text-ember transition-colors">
                  {entry.title}
                </h3>
                <p className="font-sans text-body text-stone leading-relaxed">
                  {entry.excerpt}
                </p>
                <button className="mt-6 font-sans text-label uppercase tracking-widest text-carbon hover:text-ember transition-colors flex items-center gap-2 group-hover:gap-3">
                  Read Entry <span className="text-ember">→</span>
                </button>
              </article>
            ))}
          </div>
        )}
      </div>
    </Chapter>
  );
}
