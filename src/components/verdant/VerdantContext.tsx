import { createContext, useContext, useState, ReactNode } from 'react';
import { VerdantProduct, CartItem } from '../../types/verdant';

interface VerdantContextType {
  cart: CartItem[];
  addToCart: (product: VerdantProduct, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  isCartOpen: boolean;
  setIsCartOpen: (v: boolean) => void;
  selectedProduct: VerdantProduct | null;
  setSelectedProduct: (p: VerdantProduct | null) => void;
}

const VerdantContext = createContext<VerdantContextType | undefined>(undefined);

export function VerdantProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<VerdantProduct | null>(null);

  const addToCart = (product: VerdantProduct, quantity = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return removeFromCart(productId);
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  return (
    <VerdantContext.Provider value={{
      cart, addToCart, removeFromCart, updateQuantity,
      isCartOpen, setIsCartOpen, selectedProduct, setSelectedProduct
    }}>
      {children}
    </VerdantContext.Provider>
  );
}

export function useVerdant() {
  const context = useContext(VerdantContext);
  if (!context) throw new Error('useVerdant must be used within VerdantProvider');
  return context;
}