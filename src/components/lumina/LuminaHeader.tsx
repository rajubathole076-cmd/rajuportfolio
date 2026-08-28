import { useLumina } from './LuminaContext';
import PrototypeHeader from '../prototypes/shared/PrototypeHeader';

export default function LuminaHeader() {
  const { quote, setIsQuoteOpen, setSelectedProduct } = useLumina();

  const quoteCount = quote.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <PrototypeHeader
      title="LUMINA"
      theme="light"
      onHomeClick={() => setSelectedProduct(null)}
      className="!bg-lumina-bg/90 !border-lumina-text/10 !text-lumina-text"
      rightAction={
        <button
          onClick={() => setIsQuoteOpen(true)}
          className="font-sans text-label uppercase tracking-widest hover:text-lumina-accent transition-colors"
        >
          Quote ({quoteCount})
        </button>
      }
    />
  );
}