import type { ReactNode } from "react";
import type { ChapterInfo } from "../../types/content";

interface ChapterProps {
  chapter: ChapterInfo;
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export default function Chapter({
  chapter,
  children,
  variant = "light",
  className = "",
}: ChapterProps) {
  const bg = variant === "dark" ? "bg-void text-mist" : "bg-paper text-carbon";

  return (
    <section
      id={chapter.id}
      className={`relative ${bg} py-16 md:py-24 ${className}`}
      aria-labelledby={`chapter-${chapter.id}-title`}
    >
      {/* Chapter number — large, positioned for the persistent visual thread system */}
      <div
        className="container-base"
        aria-hidden="true"
      >
        <span className="font-display text-display-l leading-none text-ember/10 absolute top-4 right-4 md:right-8 select-none">
          {chapter.number}
        </span>
      </div>

      {/* Chapter header */}
      <div className="container-base">
        <p className="text-label uppercase tracking-widest mb-2">
          Chapter {chapter.number}
        </p>
        <h2
          id={`chapter-${chapter.id}-title`}
          className="font-display text-display-l"
        >
          {chapter.title}
        </h2>
        <p className="font-sans text-body-sm text-ash mt-2">
          {chapter.label}
        </p>
      </div>

      {/* Chapter divider at top — except first chapter */}
      {chapter.number !== "01" && (
        <div className="chapter-divider absolute top-0 left-0" aria-hidden="true" />
      )}

      {/* Chapter content */}
      <div className="container-base mt-12">
        {children}
      </div>
    </section>
  );
}
