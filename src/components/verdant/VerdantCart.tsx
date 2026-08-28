import { useVerdant } from './VerdantContext';
import { gsap } from '../../hooks/useGsap';
import { useEffect, useRef } from 'react';

export default function VerdantCart() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart } = useVerdant();
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCartOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'block' });
      gsap.to(drawerRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' });
      gsap.to(drawerRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' });
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; }
  }, [isCartOpen]);

  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  return (
    <>
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-verdant-text/20 backdrop-blur-sm z-[110]"
        style={{ display: 'none', opacity: 0 }}
        onClick={() => setIsCartOpen(false)}
      />
      
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 w-full sm:w-[400px] h-full bg-verdant-bg shadow-2xl z-[120] flex flex-col translate-x-full"
      >
        <div className="p-6 border-b border-verdant-text/10 flex justify-between items-center bg-verdant-bg">
          <h3 className="font-display text-subhead text-verdant-text">Your Cart</h3>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="font-sans text-label uppercase tracking-widest text-verdant-text/50 hover:text-verdant-text"
          >
            Close
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 space-y-8 bg-verdant-bg">
          {cart.length === 0 ? (
            <p className="font-sans text-body text-verdant-text/50 text-center mt-12">Your cart is empty.</p>
          ) : (
            cart.map(item => (
              <div key={item.product.id} className="flex gap-4 group">
                <div className="w-20 h-24 bg-verdant-light shrink-0 relative overflow-hidden">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <h4 className="font-display text-body text-verdant-text leading-tight">{item.product.name}</h4>
                    <p className="font-sans text-body-sm text-verdant-text/50 mt-1">{item.product.weight}</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-3 border border-verdant-text/20 p-1">
                      <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="px-2 text-verdant-text/50 hover:text-verdant-text">−</button>
                      <span className="font-sans text-body-sm w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="px-2 text-verdant-text/50 hover:text-verdant-text">+</button>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <p className="font-sans text-body text-verdant-text">${item.product.price * item.quantity}</p>
                      <button onClick={() => removeFromCart(item.product.id)} className="font-sans text-[0.65rem] uppercase tracking-widest text-verdant-text/30 hover:text-verdant-accent transition-colors">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-verdant-text/10 bg-verdant-bg">
          <div className="flex justify-between items-center mb-6">
            <span className="font-sans text-body text-verdant-text">Subtotal</span>
            <span className="font-display text-heading text-verdant-text">${subtotal} USD</span>
          </div>
          <button 
            className="w-full bg-verdant-accent text-white py-4 font-sans text-label uppercase tracking-widest hover:bg-verdant-text transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={cart.length === 0}
            onClick={() => alert("This is a concept project. Checkout is not implemented.")}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}