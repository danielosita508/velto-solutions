import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /** If true, uses the secondary background */
  secondary?: boolean;
}

export default function Section({
  children,
  id,
  className = "",
  secondary = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${
        secondary ? "bg-velto-bg-secondary" : "bg-velto-bg"
      } ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
