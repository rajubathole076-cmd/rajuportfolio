import { useState } from "react";
import { chapters } from "../../content/chapters";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { site } from "../../content/site";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const progress = useScrollProgress();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Progress bar — top of screen */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-ember z-50 transition-all duration-300 ease-out"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      {/* Persistent Visual Signature Mark (B) */}
      <div className="fixed top-4 left-4 md:top-6 md:left-8 z-40 mix-blend-difference pointer-events-none">
        <span className="font-display text-subhead text-paper/90 select-none tracking-tight">
          {site.name ? site.name.split(' ')[0] : 'RAJU'}
          <span className="text-ember">.</span>
        </span>
      </div>

      {/* Navigation */}
      <nav
        className="fixed top-0 right-0 z-40 p-4 md:p-6"
        aria-label="Chapter navigation"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-sans text-label uppercase tracking-widest text-carbon mix-blend-difference text-paper/90 hover:text-ember transition-colors bg-carbon/10 px-4 py-2 rounded-sm backdrop-blur-sm"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {isOpen && (
          <div className="absolute top-full right-4 md:right-6 mt-2 bg-paper/95 backdrop-blur-md border border-carbon/15 py-6 px-8 min-w-[240px] shadow-2xl origin-top-right animate-in fade-in zoom-in-95 duration-200">
            <ul id="nav-menu" className="space-y-4">
              {chapters.map((ch) => (
                <li key={ch.id}>
                  <a
                    href={`#${ch.id}`}
                    onClick={(e) => handleNavClick(e, ch.id)}
                    className="group block font-display text-subhead text-stone hover:text-ember transition-colors"
                  >
                    <span className="font-sans text-label text-ash mr-4 group-hover:text-ember transition-colors">{ch.number}</span>
                    {ch.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
