import { useState } from 'react';
import { luminaProducts } from '../../content/lumina/products';
import { useLumina } from './LuminaContext';
import { useGsap, gsap } from '../../hooks/useGsap';

export default function LuminaCatalog() {
  const [filter, setFilter] = useState<string>('All');
  const { setSelectedProduct } = useLumina();
  
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".l-product-card",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1,
        scrollTrigger: {
          trigger: ".l-product-grid",
          start: "top 75%"
        }
      }
    );
  });

  const categories = ['All', 'Pendants', 'Downlights', 'Track', 'Wall', 'Exterior'];
  const filtered = filter === 'All' ? luminaProducts : luminaProducts.filter(p => p.category === filter);

  return (
    <section ref={containerRef} className="container-base py-24 md:py-32 bg-lumina-bg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-lumina-text/10 pb-6 gap-8">
        <div>
          <h3 className="font-display text-heading text-lumina-text mb-2">Product Catalog</h3>
          <p className="font-sans text-body-sm text-lumina-accent">Select a fixture to view technical specifications.</p>
        </div>
        
        <div className="flex flex-wrap gap-4 md:gap-8">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => {
                setFilter(c);
                gsap.fromTo(".l-product-card", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05 });
              }}
              className={`font-sans text-label uppercase tracking-widest transition-colors ${filter === c ? 'text-lumina-text border-b border-lumina-text pb-1' : 'text-lumina-text/40 hover:text-lumina-text pb-1'}`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="l-product-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-lumina-text/10 border border-lumina-text/10">
        {filtered.map(product => (
          <div 
            key={product.id} 
            className="l-product-card group cursor-pointer bg-lumina-bg p-8 hover:bg-white transition-colors duration-300"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setSelectedProduct(product);
            }}
          >
            <div className="w-full aspect-square bg-lumina-light overflow-hidden mb-8 relative mix-blend-multiply">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
            </div>
            
            <p className="font-sans text-label uppercase tracking-widest text-lumina-accent mb-3">{product.category}</p>
            <h4 className="font-display text-subhead text-lumina-text mb-2">{product.name}</h4>
            <p className="font-sans text-body-sm text-lumina-text/60 line-clamp-2">{product.shortDescription}</p>
            
            <div className="mt-8 flex justify-between items-center border-t border-lumina-text/10 pt-4">
              <span className="font-sans text-label uppercase tracking-widest text-lumina-text/50">View Specs</span>
              <span className="font-sans text-body text-lumina-text group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}