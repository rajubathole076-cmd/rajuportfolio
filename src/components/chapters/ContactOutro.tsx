import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { site } from "../../content/site";
import ContactForm from "../ui/ContactForm";

export default function ContactOutro() {
  const chapter = chapters[6];

  return (
    <Chapter chapter={chapter} variant="dark">
      <div className="min-h-[50vh] flex flex-col justify-center">
        <p className="font-display text-subhead text-mist/70 max-w-prose mb-12">
          Placeholder — the emotional closing message goes here. The designed
          ending of the journey.
        </p>

        <div className="grid-base">
          {/* Contact form */}
          <div className="md:col-span-8">
            <h3 className="font-sans text-label uppercase tracking-widest text-mist/60 mb-6">
              Start a Project
            </h3>
            <ContactForm />
          </div>

          {/* Contact methods */}
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="font-sans text-label uppercase tracking-widest text-mist/60 mb-6">
              Direct
            </h3>
            <ul className="space-y-3">
              {site.email && (
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="font-sans text-body-sm text-mist hover:text-ember transition-colors"
                  >
                    {site.email}
                  </a>
                </li>
              )}
              {site.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${site.whatsapp}`}
                    className="font-sans text-body-sm text-mist hover:text-ember transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
              )}
              {site.github && (
                <li>
                  <a
                    href={site.github}
                    className="font-sans text-body-sm text-mist hover:text-ember transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              )}
            </ul>
            <p className="font-sans text-body-sm text-mist/50 mt-8">
              {site.location} — working worldwide
            </p>
          </div>
        </div>
      </div>
    </Chapter>
  );
}
