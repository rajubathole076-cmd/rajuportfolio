import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { site } from "../../content/site";
import ContactForm from "../ui/ContactForm";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function ContactOutro() {
  const chapter = chapters[6];
  const containerRef = useGsap<HTMLDivElement>(() => {
    gsap.fromTo(
      ".outro-reveal",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );
  });

  return (
    <Chapter chapter={chapter} variant="dark" className="pb-0">
      <div ref={containerRef} className="min-h-[80vh] flex flex-col justify-between pt-12">
        <div className="outro-reveal mb-24 max-w-2xl">
          <p className="font-display text-heading text-mist/90 leading-tight mb-6">
            Every great digital experience starts with a conversation. Let's build something intentional together.
          </p>
          <p className="font-sans text-body text-mist/60">
            Currently accepting new projects for Q4.
          </p>
        </div>

        <div className="grid-base flex-grow">
          {/* Contact form */}
          <div className="outro-reveal md:col-span-7 lg:col-span-6 mb-16 md:mb-0">
            <h3 className="font-sans text-label uppercase tracking-widest text-mist/40 mb-8 border-b border-mist/10 pb-4">
              Start a Project
            </h3>
            <ContactForm />
          </div>

          {/* Contact methods */}
          <div className="outro-reveal md:col-span-4 md:col-start-9">
            <h3 className="font-sans text-label uppercase tracking-widest text-mist/40 mb-8 border-b border-mist/10 pb-4">
              Direct
            </h3>
            <ul className="space-y-6">
              <li>
                <p className="font-sans text-label uppercase tracking-widest text-mist/40 mb-2">Email</p>
                <a
                  href={`mailto:${site.email || "hello@example.com"}`}
                  className="font-display text-subhead text-mist hover:text-ember transition-colors inline-block"
                >
                  {site.email || "hello@example.com"}
                </a>
              </li>
              <li>
                <p className="font-sans text-label uppercase tracking-widest text-mist/40 mb-2">WhatsApp</p>
                <a
                  href={`https://wa.me/${site.whatsapp || "0000000000"}`}
                  className="font-display text-subhead text-mist hover:text-ember transition-colors inline-block"
                >
                  {site.whatsapp ? "Send a Message" : "+91 (000) 000-0000"}
                </a>
              </li>
              {site.github && (
                <li>
                  <p className="font-sans text-label uppercase tracking-widest text-mist/40 mb-2">GitHub</p>
                  <a
                    href={site.github}
                    className="font-display text-subhead text-mist hover:text-ember transition-colors inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Source
                  </a>
                </li>
              )}
            </ul>
            
            <div className="mt-16 pt-8 border-t border-mist/10">
              <p className="font-sans text-body-sm text-mist/50">
                Based in {site.location}
                <br />Working worldwide
              </p>
            </div>
          </div>
        </div>
        
        <div className="outro-reveal w-full border-t border-mist/10 py-6 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-label uppercase tracking-widest text-mist/40">
            © {new Date().getFullYear()} {site.name || "RAJU"}
          </p>
          <p className="font-sans text-label uppercase tracking-widest text-mist/40">
            Built with purpose
          </p>
        </div>
      </div>
    </Chapter>
  );
}
