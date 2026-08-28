import { createContext, useContext, useState, ReactNode } from 'react';
import { LuminaProduct, QuoteItem } from '../../types/lumina';

interface LuminaContextType {
  quote: QuoteItem[];
  addToQuote: (product: LuminaProduct, quantity?: number, projectType?: string) => void;
  removeFromQuote: (productId: string) => void;
  isQuoteOpen: boolean;
  setIsQuoteOpen: (v: boolean) => void;
  selectedProduct: LuminaProduct | null;
  setSelectedProduct: (p: LuminaProduct | null) => void;
}

const LuminaContext = createContext<LuminaContextType | undefined>(undefined);

export function LuminaProvider({ children }: { children: ReactNode }) {
  const [quote, setQuote] = useState<QuoteItem[]>([]);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<LuminaProduct | null>(null);

  const addToQuote = (product: LuminaProduct, quantity = 1, projectType = 'Commercial') => {
    setQuote(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity, projectType }
            : item
        );
      }
      return [...prev, { product, quantity, projectType }];
    });
    setIsQuoteOpen(true);
  };

  const removeFromQuote = (productId: string) => {
    setQuote(prev => prev.filter(item => item.product.id !== productId));
  };

  return (
    <LuminaContext.Provider value={{
      quote, addToQuote, removeFromQuote,
      isQuoteOpen, setIsQuoteOpen, selectedProduct, setSelectedProduct
    }}>
      {children}
    </LuminaContext.Provider>
  );
}

export function useLumina() {
  const context = useContext(LuminaContext);
  if (!context) throw new Error('useLumina must be used within LuminaProvider');
  return context;
}