import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { services, pricingNote, pricingPositioning } from "../../content/services";
import { faqItems } from "../../content/faq";
import MagneticButton from "../ui/MagneticButton";
import { useState } from "react";

export default function Services() {
  const chapter = chapters[4];
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const formatINR = (n: number): string =>
    `₹${n.toLocaleString("en-IN")}`;

  const formatUSD = (n: number): string =>
    `$${n}`;

  return (
    <Chapter chapter={chapter} variant="light">
      {/* Positioning */}
      <p className="font-display text-subhead text-stone max-w-prose mb-12">
        {pricingPositioning}
      </p>

      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service) => (
          <div
            key={service.id}
            className="border-t border-carbon/15 pt-6"
          >
            <h3 className="font-display text-heading text-carbon mb-2">
              {service.title}
            </h3>
            <p className="font-sans text-body-sm text-stone mb-4">
              {service.description}
            </p>
            <div className="flex items-baseline gap-4 mb-4">
              <div>
                <p className="font-sans text-label uppercase tracking-widest text-ash">
                  Starting at
                </p>
                <p className="font-display text-display-m text-ember">
                  {formatINR(service.startingPriceINR)}
                </p>
                <p className="font-sans text-body-sm text-ash">
                  ≈ {formatUSD(service.startingPriceUSD)} USD
                </p>
              </div>
            </div>
            <ul className="space-y-1">
              {service.features.map((feature, i) => (
                <li
                  key={i}
                  className="font-sans text-body-sm text-stone flex items-start"
                >
                  <span className="text-ember mr-2">·</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Pricing note */}
      <div className="bg-bone p-6 md:p-8 mb-16 max-w-prose">
        <p className="font-display text-subhead text-carbon mb-2">
          {pricingNote.label}
        </p>
        <p className="font-sans text-body-sm text-stone">
          {pricingNote.text}
        </p>
      </div>

      <div className="mb-16">
        <MagneticButton variant="light">Discuss Your Project</MagneticButton>
      </div>

      {/* FAQ */}
      <div>
        <h3 className="font-sans text-label uppercase tracking-widest text-ash mb-8">
          Frequently Asked Questions
        </h3>
        <div className="space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="border-t border-carbon/15 pt-4">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full text-left flex justify-between items-center"
                aria-expanded={openFAQ === i}
              >
                <span className="font-display text-subhead text-carbon">
                  {item.question}
                </span>
                <span className="font-sans text-body text-ember ml-4">
                  {openFAQ === i ? "−" : "+"}
                </span>
              </button>
              {openFAQ === i && (
                <p className="font-sans text-body-sm text-stone mt-3 max-w-prose">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  );
}
