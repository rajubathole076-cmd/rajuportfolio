import Chapter from "../layout/Chapter";
import { chapters } from "../../content/chapters";
import { site } from "../../content/site";
import ContactForm from "../ui/ContactForm";
import ContactBloom from "../ui/ContactBloom";
import { useGsap, gsap } from "../../hooks/useGsap";

export default function ContactOutro() {
  const chapter = chapters[6];
  const containerRef = useGsap<HTMLDivElement>(() => {
    
    // MATCH MEDIA: Desktop scroll-driven outro reveal
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Set initial quiet states for fallback-safe loading
      gsap.set(".outro-statement", { opacity: 0.1, y: 30 });
      gsap.set(".outro-thread", { scaleY: 0, transformOrigin: "top center", opacity: 0 });
      gsap.set(".outro-form-container", { opacity: 0, y: 40 });
      gsap.set(".outro-bloom-container", { opacity: 0, scale: 0.92, y: 40 });
      gsap.set(".outro-footer", { opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top 60%",
          end: "bottom bottom",
          scrub: 1,
        }
      });

      // 1. Closing Statement enters
      tl.to(".outro-statement", {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: "power2.out"
      }, 0)
      
      // 2. Vertical Thread descends (representing negative space and visual bridge)
      .to(".outro-thread", {
        scaleY: 1,
        opacity: 1,
        duration: 1.2,
        ease: "none"
      }, 0.3)

      // 3. Central Contact Mark (Bloom) & Contact Form fade in
      .to(".outro-bloom-container", {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
      }, 0.6)
      .to(".outro-form-container", {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out"
      }, 0.8)

      // 4. Subtle pulse on the central bloom button as resolution
      .to(".group\\/bloom button", {
        boxShadow: "0 0 25px rgba(183, 65, 14, 0.4)",
        borderColor: "rgba(183, 65, 14, 0.6)",
        scale: 1.08,
        duration: 0.8,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut"
      }, 1.4)

      // 5. Footer settles in
      .to(".outro-footer", {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out"
      }, 1.6);
    });

    // MATCH MEDIA: Mobile standard entrances
    mm.add("(max-width: 767px)", () => {
      gsap.fromTo(
        [".outro-statement", ".outro-form-container", ".outro-bloom-container", ".outro-footer"],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
          },
        }
      );
    });
  });

  return (
    <Chapter chapter={chapter} variant="dark" className="pb-0">
      <div ref={containerRef} className="min-h-[90vh] flex flex-col justify-between pt-12">
        
        {/* Outro statement */}
        <div className="outro-statement max-w-2xl mt-8">
          <p className="font-display text-heading text-mist/90 leading-tight mb-6">
            Every great digital experience starts with a conversation. Let's build something intentional together.
          </p>
          <p className="font-sans text-body text-mist/60">
            Currently accepting new projects for Q4.
          </p>
        </div>

        {/* Spacious Breath / Negative Space Vertical Thread (Desktop) */}
        <div className="outro-thread hidden md:block w-[1px] h-24 bg-gradient-to-b from-mist/5 via-ember to-mist/10 mx-auto my-12" />

        {/* Contact Form and Bloom Grid */}
        <div className="grid-base flex-grow mt-8">
          {/* Contact form */}
          <div className="outro-form-container md:col-span-7 lg:col-span-6 mb-16 md:mb-0">
            <h3 className="font-sans text-label uppercase tracking-widest text-mist/40 mb-8 border-b border-mist/10 pb-4">
              Start a Project
            </h3>
            <ContactForm />
          </div>

          {/* Contact Bloom / Direct */}
          <div className="outro-bloom-container md:col-span-4 md:col-start-9 flex flex-col justify-between">
            <div>
              <h3 className="font-sans text-label uppercase tracking-widest text-mist/40 mb-8 border-b border-mist/10 pb-4">
                Direct
              </h3>
              
              <div className="flex items-center justify-center py-8">
                <ContactBloom />
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-mist/10">
              <p className="font-sans text-body-sm text-mist/50 leading-relaxed">
                Based in {site.location}
                <br />Working worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="outro-footer w-full border-t border-mist/10 py-6 mt-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-label uppercase tracking-widest text-mist/40">
            © {new Date().getFullYear()} {site.name || "Raju Bathole"}
          </p>
          <p className="font-sans text-label uppercase tracking-widest text-mist/40">
            Built with purpose
          </p>
        </div>

      </div>
    </Chapter>
  );
}
