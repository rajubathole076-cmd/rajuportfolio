import { ButtonHTMLAttributes, forwardRef } from "react";

interface MagneticButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "light" | "dark";
}

const MagneticButton = forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ variant = "light", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-sans font-medium text-body-sm uppercase tracking-widest transition-colors duration-200 px-6 py-3 rounded-none";
    const variants = {
      light:
        "bg-carbon text-paper hover:bg-ember",
      dark:
        "bg-mist text-void hover:bg-ember hover:text-paper",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";

export default MagneticButton;
