import { useLumina } from './LuminaContext';
import { useGsap, gsap, ScrollTrigger } from '../../hooks/useGsap';

export default function LuminaProductDetail() {
  const { selectedProduct, setSelectedProduct, addToQuote } = useLumina();
  
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".l-detail-reveal",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", stagger: 0.1, delay: 0.2 }
    );

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      ScrollTrigger.create({
        trigger: ".l-pinned-container",
        start: "top 120px",
        end: "bottom bottom",
        pin: ".l-pinned-image",
        pinSpacing: false
      });
    });

    gsap.fromTo(
      ".l-spec-block",
      { opacity: 0, x: 30 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "power2.out", stagger: 0.1,
        scrollTrigger: {
          trigger: ".l-spec-container",
          start: "top 75%"
        }
      }
    );
  });

  if (!selectedProduct) return null;

  return (
    <div ref={containerRef} className="bg-lumina-bg min-h-screen pt-24 pb-32">
      <div className="container-base mb-12">
        <button 
          onClick={() => setSelectedProduct(null)}
          className="l-detail-reveal font-sans text-label uppercase tracking-widest text-lumina-text/50 hover:text-lumina-text flex items-center gap-2 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Catalog
        </button>
      </div>

      <div className="container-base l-pinned-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
        <div className="lg:col-span-6 l-pinned-image h-[50vh] lg:h-[calc(100vh-160px)] top-[120px] flex flex-col">
          <div className="l-detail-reveal w-full flex-grow bg-lumina-light relative overflow-hidden mix-blend-multiply">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover grayscale opacity-90" />
          </div>
          <div className="l-detail-reveal mt-6 grid grid-cols-2 gap-4 hidden lg:grid">
             {selectedProduct.detailImages.map((img, idx) => (
                <div key={idx} className="aspect-[4/3] bg-lumina-light overflow-hidden mix-blend-multiply">
                  <img src={img} alt="Detail" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 transition-opacity" />
                </div>
             ))}
          </div>
        </div>
        
        <div className="lg:col-span-6 lg:col-start-7 l-spec-container pb-24">
          <div className="l-detail-reveal mb-16">
            <p className="font-sans text-label uppercase tracking-widest text-lumina-accent mb-4">{selectedProduct.category}</p>
            <h1 className="font-display text-display-m text-lumina-text mb-6">{selectedProduct.name}</h1>
            <p className="font-sans text-body text-lumina-text/70 leading-relaxed max-w-lg">
              {selectedProduct.shortDescription}
            </p>
          </div>

          <div className="w-full h-[1px] bg-lumina-text/10 mb-16 l-detail-reveal" />

          <div className="space-y-16">
            <div className="l-spec-block">
              <h3 className="font-sans text-label uppercase tracking-widest text-lumina-text/40 mb-6 border-b border-lumina-text/10 pb-4">Applications</h3>
              <ul className="flex flex-wrap gap-4">
                {selectedProduct.application.map(app => (
                  <li key={app} className="font-sans text-body-sm text-lumina-text border border-lumina-text/20 px-4 py-2">{app}</li>
                ))}
              </ul>
            </div>

            <div className="l-spec-block">
              <h3 className="font-sans text-label uppercase tracking-widest text-lumina-text/40 mb-6 border-b border-lumina-text/10 pb-4">Performance</h3>
              <div className="grid grid-cols-2 gap-y-6">
                <div>
                  <p className="font-sans text-label uppercase tracking-widest text-lumina-text/50 mb-1">Color Temp</p>
                  <p className="font-sans text-body text-lumina-text">{selectedProduct.colorTemperature.join(', ')}</p>
                </div>
                <div>
                  <p className="font-sans text-label uppercase tracking-widest text-lumina-text/50 mb-1">Wattage</p>
                  <p className="font-sans text-body text-lumina-text">{selectedProduct.wattage}</p>
                </div>
                <div>
                  <p className="font-sans text-label uppercase tracking-widest text-lumina-text/50 mb-1">IP Rating</p>
                  <p className="font-sans text-body text-lumina-text">{selectedProduct.ipRating}</p>
                </div>
              </div>
            </div>

            <div className="l-spec-block">
              <h3 className="font-sans text-label uppercase tracking-widest text-lumina-text/40 mb-6 border-b border-lumina-text/10 pb-4">Physical</h3>
              <div className="grid grid-cols-2 gap-y-6">
                <div className="col-span-2">
                  <p className="font-sans text-label uppercase tracking-widest text-lumina-text/50 mb-1">Dimensions</p>
                  <p className="font-sans text-body text-lumina-text">{selectedProduct.dimensions}</p>
                </div>
                <div>
                  <p className="font-sans text-label uppercase tracking-widest text-lumina-text/50 mb-1">Material</p>
                  <p className="font-sans text-body text-lumina-text">{selectedProduct.material}</p>
                </div>
                <div>
                  <p className="font-sans text-label uppercase tracking-widest text-lumina-text/50 mb-1">Installation</p>
                  <p className="font-sans text-body text-lumina-text">{selectedProduct.installationType}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-sans text-label uppercase tracking-widest text-lumina-text/50 mb-1">Finishes</p>
                  <p className="font-sans text-body text-lumina-text">{selectedProduct.finish.join(', ')}</p>
                </div>
              </div>
            </div>
            
            <div className="l-spec-block pt-12">
              <button 
                onClick={() => addToQuote(selectedProduct)}
                className="w-full bg-lumina-text text-lumina-bg py-5 font-sans text-label uppercase tracking-widest hover:bg-lumina-accent transition-colors flex justify-between px-8 items-center group"
              >
                <span>Add to Quote</span>
                <span className="group-hover:translate-x-2 transition-transform">→</span>
              </button>
              <p className="font-sans text-[0.65rem] uppercase tracking-widest text-lumina-text/40 text-center mt-4">
                This is a concept project quote flow. No real requests are sent.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
