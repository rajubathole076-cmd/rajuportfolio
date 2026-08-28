import { useVerdant } from './VerdantContext';

export default function VerdantHeader() {
  const { cart, setIsCartOpen, setSelectedProduct } = useVerdant();
  
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const closeProject = () => {
    window.dispatchEvent(new CustomEvent('close-project'));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      <button 
        onClick={closeProject}
        className="font-sans text-label uppercase tracking-widest hover:opacity-70 transition-opacity flex items-center gap-2"
      >
        <span>←</span> Exit Prototype
      </button>

      <button 
        onClick={() => setSelectedProduct(null)}
        className="font-display text-heading hover:opacity-70 transition-opacity"
      >
        VERDANT
      </button>

      <button 
        onClick={() => setIsCartOpen(true)}
        className="font-sans text-label uppercase tracking-widest hover:opacity-70 transition-opacity"
      >
        Cart ({cartCount})
      </button>
    </header>
  );
}