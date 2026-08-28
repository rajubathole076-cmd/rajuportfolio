import { useState, useEffect } from 'react';
import VerdantApp from '../verdant/VerdantApp';
import LuminaApp from '../lumina/LuminaApp'; // to be built

const PrototypeRegistry: Record<string, React.ComponentType> = {
  verdant: VerdantApp,
  lumina: LuminaApp,
};

export default function PrototypeManager() {
  const [activePrototype, setActivePrototype] = useState<string | null>(null);

  useEffect(() => {
    const handleLaunch = (e: CustomEvent<string>) => {
      setActivePrototype(e.detail);
    };
    
    const handleClose = () => {
      setActivePrototype(null);
    };

    window.addEventListener('launch-project', handleLaunch as EventListener);
    window.addEventListener('close-project', handleClose);

    return () => {
      window.removeEventListener('launch-project', handleLaunch as EventListener);
      window.removeEventListener('close-project', handleClose);
    };
  }, []);

  if (!activePrototype) return null;

  const ActiveApp = PrototypeRegistry[activePrototype];
  
  if (!ActiveApp) {
    console.error(`Prototype ${activePrototype} not found in registry.`);
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-paper overflow-y-auto">
      <ActiveApp />
    </div>
  );
}