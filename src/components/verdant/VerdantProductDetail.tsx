import { useVerdant } from './VerdantContext';
import { useGsap, gsap } from '../../hooks/useGsap';

export default function VerdantProductDetail() {
  const { selectedProduct, setSelectedProduct, addToCart } = useVerdant();
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".v-detail-reveal",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1 }
    );
  });

  if (!selectedProduct) return null;

  return (
    <div ref={containerRef} className="container-base pt-12 md:pt-24">
      <button 
        onClick={() => setSelectedProduct(null)}
        className="v-detail-reveal font-sans text-label uppercase tracking-widest text-verdant-text/50 hover:text-verdant-text mb-12 flex items-center gap-2 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Collection
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div className="v-detail-reveal aspect-[3/4] bg-verdant-light overflow-hidden">
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <div className="v-detail-reveal mb-8">
            <h2 className="font-display text-display-l text-verdant-text mb-4 leading-tight">{selectedProduct.name}</h2>
            <p className="font-display text-heading text-verdant-accent">${selectedProduct.price} USD</p>
          </div>

          <div className="v-detail-reveal w-full h-[1px] bg-verdant-text/10 mb-8" />

          <p className="v-detail-reveal font-sans text-body text-verdant-text/80 leading-relaxed mb-12">
            {selectedProduct.description}
          </p>

          <div className="v-detail-reveal grid grid-cols-2 gap-8 mb-12">
            <div>
              <p className="font-sans text-label uppercase tracking-widest text-verdant-text/50 mb-2">Origin</p>
              <p className="font-sans text-body text-verdant-text">{selectedProduct.origin}</p>
            </div>
            <div>
              <p className="font-sans text-label uppercase tracking-widest text-verdant-text/50 mb-2">Process</p>
              <p className="font-sans text-body text-verdant-text">{selectedProduct.process}</p>
            </div>
            <div>
              <p className="font-sans text-label uppercase tracking-widest text-verdant-text/50 mb-2">Roast</p>
              <p className="font-sans text-body text-verdant-text">{selectedProduct.roast}</p>
            </div>
            <div>
              <p className="font-sans text-label uppercase tracking-widest text-verdant-text/50 mb-2">Weight</p>
              <p className="font-sans text-body text-verdant-text">{selectedProduct.weight}</p>
            </div>
          </div>

          <div className="v-detail-reveal mb-12">
            <p className="font-sans text-label uppercase tracking-widest text-verdant-text/50 mb-3">Tasting Notes</p>
            <div className="flex flex-wrap gap-3">
              {selectedProduct.tastingNotes.map(note => (
                <span key={note} className="font-sans text-body-sm text-verdant-text bg-verdant-light px-4 py-2 border border-verdant-text/5">
                  {note}
                </span>
              ))}
            </div>
          </div>

          <button 
            onClick={() => addToCart(selectedProduct)}
            className="v-detail-reveal w-full bg-verdant-text text-verdant-bg py-5 font-sans text-label uppercase tracking-widest hover:bg-verdant-accent transition-colors"
          >
            Add to Cart — ${selectedProduct.price}
          </button>
        </div>
      </div>
    </div>
  );
}