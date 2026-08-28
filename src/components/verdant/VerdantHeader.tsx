import { useVerdant } from './VerdantContext';
import PrototypeHeader from '../prototypes/shared/PrototypeHeader';

export default function VerdantHeader() {
  const { cart, setIsCartOpen, setSelectedProduct } = useVerdant();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <PrototypeHeader
      title="VERDANT"
      onHomeClick={() => setSelectedProduct(null)}
      rightAction={
        <button
          onClick={() => setIsCartOpen(true)}
          className="font-sans text-label uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          Cart ({cartCount})
        </button>
      }
    />
  );
}
