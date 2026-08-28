import { useState } from 'react';
import { verdantProducts } from '../../content/verdant/products';
import { useVerdant } from './VerdantContext';
import { useGsap, gsap } from '../../hooks/useGsap';

export default function VerdantStorefront() {
  const [filter, setFilter] = useState<string>('All');
  const { setSelectedProduct } = useVerdant();
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".v-product-card",
      { opacity: 0, y: 40 },
      { 
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1,
        scrollTrigger: {
          trigger: ".v-product-grid",
          start: "top 80%"
        }
      }
    );
  });

  const roasts = ['All', 'Light', 'Medium', 'Dark'];
  const filtered = filter === 'All' ? verdantProducts : verdantProducts.filter(p => p.roast === filter);

  return (
    <section ref={containerRef} className="container-base">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-verdant-text/10 pb-6">
        <h3 className="font-display text-display-m text-verdant-text mb-6 md:mb-0">Our Collection</h3>
        
        <div className="flex gap-6">
          {roasts.map(r => (
            <button
              key={r}
              onClick={() => {
                setFilter(r);
                gsap.fromTo(".v-product-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 });
              }}
              className={`font-sans text-label uppercase tracking-widest transition-colors ${filter === r ? 'text-verdant-accent border-b border-verdant-accent pb-1' : 'text-verdant-text/50 hover:text-verdant-text pb-1'}`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="v-product-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filtered.map(product => (
          <div 
            key={product.id} 
            className="v-product-card group cursor-pointer"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setSelectedProduct(product);
            }}
          >
            <div className="w-full aspect-[4/5] bg-verdant-light overflow-hidden mb-6 relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-verdant-text/0 group-hover:bg-verdant-text/10 transition-colors duration-500" />
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-display text-heading text-verdant-text group-hover:text-verdant-accent transition-colors">{product.name}</h4>
              <p className="font-sans text-body text-verdant-text">${product.price}</p>
            </div>
            <p className="font-sans text-body-sm text-verdant-text/60 mb-4">{product.origin}</p>
            <div className="flex flex-wrap gap-2">
              {product.tastingNotes.slice(0,2).map(note => (
                <span key={note} className="font-sans text-label uppercase tracking-widest text-verdant-text/50 bg-verdant-light px-2 py-1">
                  {note}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}