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
      ".service-card-reveal",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".services-stack-trigger",
          start: "top 80%",
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

        {/* Services Stack Trigger */}
        <div className="services-stack-trigger relative w-full">
          
          {/* Desktop Stacked Services */}
          <div className="hidden md:flex flex-col items-center relative w-full max-w-5xl mx-auto mb-24 py-8">
            {services.map((service, idx) => {
              const widths = [
                "w-full max-w-5xl",
                "w-full max-w-[61rem]",
                "w-full max-w-[58rem]",
                "w-full max-w-[55rem]",
              ];
              const bgColors = [
                "bg-[#FBF9F4]",
                "bg-[#F5F2E9]",
                "bg-[#EFEADB]",
                "bg-[#E9E3CE]",
              ];
              const shadows = [
                "shadow-[0_4px_20px_rgba(22,19,16,0.03)]",
                "shadow-[0_10px_30px_rgba(22,19,16,0.06)]",
                "shadow-[0_16px_40px_rgba(22,19,16,0.09)]",
                "shadow-[0_24px_50px_rgba(22,19,16,0.12)]",
              ];
              const topOffset = 100 + idx * 80;

              return (
                <div
                  key={service.id}
                  className={`service-card-reveal sticky ${widths[idx]} ${bgColors[idx]} ${shadows[idx]} border border-carbon/15 p-8 lg:p-10 rounded-sm mb-16`}
                  style={{
                    top: `${topOffset}px`,
                    zIndex: (idx + 1) * 10,
                  }}
                >
                  {/* Card Header (stays visible when stacked) */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-carbon/10 pb-6 mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="font-sans text-label text-ember font-bold text-lg">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display text-subhead lg:text-heading text-carbon font-semibold">
                        {service.title}
                      </h3>
                    </div>
                    <div className="flex items-baseline gap-2 bg-paper/50 px-4 py-1.5 border border-carbon/5 rounded-sm">
                      <span className="font-sans text-label text-ash text-[10px] tracking-widest uppercase">Starting at</span>
                      <span className="font-display text-subhead lg:text-heading text-ember font-bold">
                        {formatINR(service.startingPriceINR)}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
                    {/* Left Column: Description & Scope Indicator */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        <p className="font-sans text-body text-stone leading-relaxed mb-6">
                          {service.description}
                        </p>
                        
                        {/* Scope & Complexity Indicator */}
                        <div className="flex items-center gap-3 bg-carbon/5 p-4 rounded-sm border border-carbon/5 max-w-md">
                          <span className="font-sans text-label text-stone uppercase tracking-widest text-[10px] font-bold">
                            Scope Layer:
                          </span>
                          <div className="flex gap-1.5 h-2 flex-grow">
                            {[1, 2, 3, 4].map((step) => (
                              <div
                                key={step}
                                className={`flex-grow h-full rounded-full transition-all duration-500 ${
                                  step <= idx + 1 ? "bg-ember" : "bg-carbon/10"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="font-sans text-body-sm text-ember font-bold text-xs ml-1">
                            {idx + 1}/4
                          </span>
                        </div>
                      </div>

                      {/* USD conversion rate */}
                      <p className="font-sans text-body-sm text-stone/60 mt-6 italic">
                        Equivalent to approximately {formatUSD(service.startingPriceUSD)} USD.
                      </p>
                    </div>

                    {/* Right Column: Features & CTA */}
                    <div className="lg:col-span-5 flex flex-col justify-between border-l border-carbon/10 lg:pl-8">
                      <div>
                        <h4 className="font-sans text-label uppercase tracking-widest text-ash mb-4 text-[10px] font-bold">
                          Included Deliverables
                        </h4>
                        <ul className="space-y-3 mb-8">
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

                      <button 
                        onClick={() => {
                          const contactSection = document.getElementById("contact");
                          if (contactSection) {
                            contactSection.scrollIntoView({ behavior: "smooth" });
                          }
                        }}
                        className="w-full text-center font-sans text-label uppercase tracking-widest text-paper bg-carbon hover:bg-ember transition-colors py-3 px-6 rounded-sm text-xs font-semibold"
                      >
                        Inquire About 0{idx + 1} Scope →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Mobile Standard Vertical List */}
          <div className="md:hidden flex flex-col gap-10 mb-24">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="service-card-reveal border-t border-carbon/15 pt-8 flex flex-col"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-sans text-label text-ember font-bold">
                    0{idx + 1}
                  </span>
                  <h3 className="font-display text-heading text-carbon">
                    {service.title}
                  </h3>
                </div>
                
                <p className="font-sans text-body-sm text-stone mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Scope Indicator for Mobile */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="font-sans text-label text-ash uppercase tracking-widest text-[9px] font-bold">Scope:</span>
                  <div className="flex gap-1 h-1 flex-grow max-w-[100px]">
                    {[1, 2, 3, 4].map((step) => (
                      <div
                        key={step}
                        className={`flex-grow h-full rounded-full ${
                          step <= idx + 1 ? "bg-ember" : "bg-carbon/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col gap-1 mb-6 p-5 bg-bone/30 rounded-sm">
                  <p className="font-sans text-label uppercase tracking-widest text-ash text-[9px]">
                    Starting at
                  </p>
                  <div className="flex items-baseline gap-3 mt-1">
                    <p className="font-display text-display-m text-ember leading-none">
                      {formatINR(service.startingPriceINR)}
                    </p>
                    <p className="font-sans text-body-sm text-stone/75">
                      ≈ {formatUSD(service.startingPriceUSD)} USD
                    </p>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
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
          <MagneticButton 
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            variant="light"
          >
            Discuss Your Project
          </MagneticButton>
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
