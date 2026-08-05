import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-signal-500 text-ink-950 hover:bg-signal-400 font-semibold border border-transparent",
  secondary:
    "border border-mist-300/40 text-mist-100 hover:border-signal-400 hover:text-signal-400 font-medium",
  ghost: "text-mist-100 hover:text-signal-400 font-medium",
};

/**
 * Call-to-action link/button. Renders an anchor by default so it can point at
 * WhatsApp deep links, section anchors (#), or future routes.
 */
export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-colors duration-200 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
