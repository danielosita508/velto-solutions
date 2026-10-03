import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  type?: "button" | "submit";
  id?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-velto-mint text-velto-bg hover:bg-opacity-90 hover:shadow-[0_0_24px_rgba(197,240,208,0.2)]",
  secondary:
    "bg-transparent border border-velto-sage/30 text-velto-text hover:border-velto-mint/50 hover:text-velto-mint",
  ghost:
    "bg-transparent text-velto-sage hover:text-velto-mint",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  icon = false,
  type = "button",
  id,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium font-body transition-all duration-300 cursor-pointer select-none";

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight size={16} strokeWidth={2} />}
    </>
  );

  if (href) {
    // External or anchor link
    if (href.startsWith("#") || href.startsWith("tel:") || href.startsWith("http")) {
      return (
        <a href={href} className={classes} id={id}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} id={id}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} id={id}>
      {content}
    </button>
  );
}
