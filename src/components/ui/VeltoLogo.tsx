import React from "react";

interface VeltoLogoProps {
  className?: string;
  size?: number;
}

/**
 * Placeholder logo component.
 * Replace the SVG content with your real logo, or swap this component
 * to render <Image src="/logo.svg" ... /> once you have the file.
 */
export default function VeltoLogo({ className = "", size = 40 }: VeltoLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Monogram mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          x="1"
          y="1"
          width="46"
          height="46"
          rx="10"
          stroke="#C5F0D0"
          strokeWidth="1.5"
          fill="rgba(18,56,43,0.35)"
        />
        {/* V */}
        <path
          d="M14 15L20 33L26 15"
          stroke="#C5F0D0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* S */}
        <path
          d="M28 18C28 16.5 29.5 15 32 15C34.5 15 36 16.5 36 18C36 21 28 21 28 27C28 29 29.5 33 32 33C34.5 33 36 31 36 29"
          stroke="#C5F0D0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className="text-velto-text font-heading font-semibold tracking-wide"
          style={{ fontSize: size * 0.42 }}
        >
          VELTO
        </span>
        <span
          className="text-velto-sage font-body tracking-[0.25em] uppercase"
          style={{ fontSize: size * 0.2 }}
        >
          Solutions
        </span>
      </div>
    </div>
  );
}
