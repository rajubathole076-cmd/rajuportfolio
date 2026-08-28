import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { services, pricingNote, pricingPositioning } from "../../content/services";
import { faqItems } from "../../content/faq";
import MagneticButton from "../ui/MagneticButton";
import { useState } from "react";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function Services() {
  const chapter = chapters[4];
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".service-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 75%",
        },
      }
    );

    gsap.fromTo(
      ".faq-item",
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".faq-container",
          start: "top 80%",
        },
      }
    );
  });

  const formatINR = (n: number): string =>
    `₹${n.toLocaleString("en-IN")}`;

  const formatUSD = (n: number): string =>
    `$${n}`;

  return (
    <Chapter chapter={chapter} variant="light">
      <div ref={containerRef}>
        {/* Positioning */}
        <p className="font-display text-subhead text-stone max-w-prose mb-16 md:mb-20">
          {pricingPositioning}
        </p>

        {/* Services */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-item border-t border-carbon/20 pt-8 group"
            >
              <h3 className="font-display text-heading text-carbon mb-3 group-hover:text-ember transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-body-sm text-stone mb-8 leading-relaxed min-h-[3rem]">
                {service.description}
              </p>
              
              <div className="flex flex-col gap-1 mb-8 p-6 bg-bone/30 rounded-sm">
                <p className="font-sans text-label uppercase tracking-widest text-ash">
                  Starting at
                </p>
                <div className="flex items-baseline gap-4 mt-1">
                  <p className="font-display text-display-m text-ember leading-none">
                    {formatINR(service.startingPriceINR)}
                  </p>
                  <p className="font-sans text-body-sm text-stone">
                    ≈ {formatUSD(service.startingPriceUSD)} USD
                  </p>
                </div>
              </div>
              
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li
                    key={i}
                    className="font-sans text-body-sm text-stone flex items-start"
                  >
                    <span className="text-ember mr-3">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Pricing note */}
        <div className="bg-bone p-8 md:p-10 mb-20 max-w-prose border-l-2 border-ember">
          <p className="font-display text-subhead text-carbon mb-3">
            {pricingNote.label}
          </p>
          <p className="font-sans text-body-sm text-stone leading-relaxed">
            {pricingNote.text}
          </p>
        </div>

        <div className="mb-24 flex justify-start">
          <MagneticButton variant="light">Discuss Your Project</MagneticButton>
        </div>

        {/* FAQ */}
        <div className="faq-container">
          <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-10 border-b border-carbon/15 pb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-0">
            {faqItems.map((item, i) => (
              <div key={i} className="faq-item border-b border-carbon/15 last:border-b-0 py-6">
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full text-left flex justify-between items-center group"
                  aria-expanded={openFAQ === i}
                >
                  <span className="font-display text-subhead text-carbon group-hover:text-ember transition-colors">
                    {item.question}
                  </span>
                  <span className="font-sans text-body text-ember ml-4 transition-transform duration-300 transform" style={{ transform: openFAQ === i ? 'rotate(45deg)' : 'rotate(0)' }}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === i ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-sans text-body-sm text-stone max-w-prose leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Chapter>
  );
}
