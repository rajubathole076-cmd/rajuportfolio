import { useState } from "react";
import { chapters } from "../../content/chapters";
import { useScrollProgress } from "../../hooks/useScrollProgress";

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
        className="fixed top-0 left-0 h-[2px] bg-ember z-50"
        style={{ width: `${progress * 100}%` }}
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav
        className="fixed top-0 right-0 z-40 p-4 md:p-6"
        aria-label="Chapter navigation"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-sans text-label uppercase tracking-widest text-carbon hover:text-ember transition-colors"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
        >
          {isOpen ? "Close" : "Menu"}
        </button>

        {isOpen && (
          <ul
            id="nav-menu"
            className="absolute top-full right-0 mt-2 bg-paper border border-carbon/15 py-4 px-6 min-w-[200px]"
          >
            {chapters.map((ch) => (
              <li key={ch.id}>
                <a
                  href={`#${ch.id}`}
                  onClick={(e) => handleNavClick(e, ch.id)}
                  className="block py-2 font-sans text-body-sm text-stone hover:text-ember transition-colors"
                >
                  <span className="text-ash mr-3">{ch.number}</span>
                  {ch.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
}
