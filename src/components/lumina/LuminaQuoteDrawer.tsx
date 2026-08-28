import { useLumina } from './LuminaContext';
import { gsap } from '../../hooks/useGsap';
import { useEffect, useRef } from 'react';

export default function LuminaQuoteDrawer() {
  const { quote, isQuoteOpen, setIsQuoteOpen, removeFromQuote } = useLumina();
  const drawerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isQuoteOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'block' });
      gsap.to(drawerRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' });
      gsap.to(drawerRef.current, { x: '100%', duration: 0.4, ease: 'power3.in' });
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; }
  }, [isQuoteOpen]);

  return (
    <>
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-lumina-text/40 backdrop-blur-sm z-[110]"
        style={{ display: 'none', opacity: 0 }}
        onClick={() => setIsQuoteOpen(false)}
      />
      
      <div 
        ref={drawerRef}
        className="fixed top-0 right-0 w-full sm:w-[480px] h-full bg-lumina-bg shadow-2xl z-[120] flex flex-col translate-x-full"
      >
        <div className="p-8 border-b border-lumina-text/10 flex justify-between items-center bg-lumina-light">
          <h3 className="font-display text-subhead text-lumina-text">Quote Request</h3>
          <button 
            onClick={() => setIsQuoteOpen(false)}
            className="font-sans text-label uppercase tracking-widest text-lumina-text/50 hover:text-lumina-text"
          >
            Close
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8 bg-lumina-bg">
          {quote.length === 0 ? (
            <p className="font-sans text-body text-lumina-text/50 text-center mt-12">No items added to quote.</p>
          ) : (
            quote.map(item => (
              <div key={item.product.id} className="flex gap-6 group border-b border-lumina-text/10 pb-8 last:border-0">
                <div className="w-24 h-24 bg-lumina-light shrink-0 relative overflow-hidden mix-blend-multiply">
                  <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <p className="font-sans text-[0.65rem] uppercase tracking-widest text-lumina-accent mb-1">{item.projectType}</p>
                    <h4 className="font-display text-body text-lumina-text leading-tight">{item.product.name}</h4>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <p className="font-sans text-body-sm text-lumina-text/60">Qty: {item.quantity}</p>
                    <button onClick={() => removeFromQuote(item.product.id)} className="font-sans text-[0.65rem] uppercase tracking-widest text-lumina-text/30 hover:text-lumina-accent transition-colors">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-8 border-t border-lumina-text/10 bg-lumina-light">
          <div className="space-y-4 mb-6">
            <input type="text" placeholder="Project Name (Optional)" className="w-full bg-lumina-bg border border-lumina-text/20 p-3 font-sans text-body-sm text-lumina-text outline-none focus:border-lumina-accent" />
            <input type="email" placeholder="Email Address" className="w-full bg-lumina-bg border border-lumina-text/20 p-3 font-sans text-body-sm text-lumina-text outline-none focus:border-lumina-accent" />
          </div>
          <button 
            className="w-full bg-lumina-text text-lumina-bg py-4 font-sans text-label uppercase tracking-widest hover:bg-lumina-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={quote.length === 0}
            onClick={() => alert("Concept project quote flow: Request submitted successfully.")}
          >
            Submit Request
          </button>
        </div>
      </div>
    </>
  );
}