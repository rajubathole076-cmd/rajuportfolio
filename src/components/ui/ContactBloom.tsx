import { useState, useRef, useEffect } from "react";
import { site } from "../../content/site";
import { WhatsAppIcon, EmailIcon, InstagramIcon, LinkedInIcon, GitHubIcon, XIcon } from "./SocialIcons";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
};

export default function ContactBloom() {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const destinations = [
    { id: "whatsapp", label: "WhatsApp", url: `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`, Icon: WhatsAppIcon },
    { id: "email", label: "Email", url: `mailto:${site.email}`, Icon: EmailIcon },
    ...site.socials.map(social => ({
      id: social.id,
      label: social.label,
      url: social.url,
      Icon: iconMap[social.id] || GitHubIcon
    })),
    ...(site.github ? [{ id: "github", label: "GitHub", url: site.github, Icon: GitHubIcon }] : [])
  ];

  const coordinates = [
    [-7, -7],
    [9, -4],
    [3, 8],
    [-9, 2],
    [2, -10],
    [-4, 10],
  ];

  return (
    <nav 
      ref={containerRef}
      aria-label="Social connections" 
      className="relative w-full h-[300px] flex items-center justify-center perspective-[1000px] group/bloom"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
    >
      <button
        onClick={() => setIsActive(!isActive)}
        aria-expanded={isActive}
        aria-controls="bloom-icons"
        className="relative z-20 w-16 h-16 flex items-center justify-center bg-mist text-void rounded-sm transition-transform duration-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember"
        style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
      >
        <span className="sr-only">Toggle contact methods</span>
        <div className="absolute w-6 h-[2px] bg-void transition-transform duration-500" />
        <div className="absolute w-[2px] h-6 bg-void transition-transform duration-500" />
      </button>

      <div id="bloom-icons" className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        {destinations.map((dest, idx) => {
          const Icon = dest.Icon;
          const coord = coordinates[idx] || [0, 0];
          
          return (
            <a
              key={dest.id}
              href={dest.url}
              target={["whatsapp", "email"].includes(dest.id) ? "_self" : "_blank"}
              rel={["whatsapp", "email"].includes(dest.id) ? undefined : "noopener noreferrer"}
              className={`absolute flex items-center justify-center w-14 h-14 bg-void border border-mist/20 text-mist transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] pointer-events-auto hover:scale-110 hover:text-ember hover:border-ember/50 hover:z-30 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember ${isActive ? "opacity-100" : "opacity-0 scale-50 pointer-events-none"} motion-reduce:opacity-100 motion-reduce:scale-100 motion-reduce:transform-none motion-reduce:relative motion-reduce:m-2`}
              style={{
                transform: isActive 
                  ? `translate3d(${coord[0]}rem, ${coord[1]}rem, 50px)` 
                  : `translate3d(0, 0, 0)`,
                transitionDelay: isActive ? `${idx * 50}ms` : "0ms"
              }}
              onFocus={() => setIsActive(true)}
            >
              <span className="sr-only">Contact me on {dest.label}</span>
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>
    </nav>
  );
}
