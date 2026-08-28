import { ReactNode } from 'react';

interface PrototypeHeaderProps {
  title: string;
  onHomeClick: () => void;
  rightAction?: ReactNode;
  theme?: 'dark' | 'light' | 'mix-blend';
  className?: string;
}

export default function PrototypeHeader({ 
  title, 
  onHomeClick, 
  rightAction, 
  theme = 'mix-blend',
  className = ''
}: PrototypeHeaderProps) {
  
  const closeProject = () => {
    window.dispatchEvent(new CustomEvent('close-project'));
  };

  const getThemeClasses = () => {
    if (theme === 'mix-blend') return 'mix-blend-difference text-white';
    if (theme === 'light') return 'text-carbon bg-paper/90 backdrop-blur-md border-b border-carbon/10';
    return 'text-white bg-void/90 backdrop-blur-md border-b border-white/10';
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center transition-colors ${getThemeClasses()} ${className}`}>
      <button
        onClick={closeProject}
        className="font-sans text-label uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2"
      >
        <span>←</span> Exit
      </button>

      <button
        onClick={onHomeClick}
        className="font-display text-heading hover:opacity-70 transition-opacity absolute left-1/2 -translate-x-1/2"
      >
        {title}
      </button>

      <div className="w-[100px] flex justify-end">
        {rightAction}
      </div>
    </header>
  );
}