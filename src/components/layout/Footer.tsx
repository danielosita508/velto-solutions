import React from "react";
import VeltoLogo from "@/components/ui/VeltoLogo";
import { phoneNumbers } from "@/lib/services";
import { Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-velto-bg border-t border-velto-emerald/30" id="footer">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <VeltoLogo size={30} />
            <p className="text-velto-text-secondary text-sm font-body max-w-xs leading-relaxed">
              Solutions that move you forward.
            </p>
          </div>

          {/* Phone numbers */}
          <div className="flex flex-col gap-3">
            <span className="eyebrow text-velto-sage mb-1">Get in touch</span>
            {phoneNumbers.map((p) => (
              <a
                key={p.tel}
                href={`tel:${p.tel}`}
                className="flex items-center gap-2 text-velto-text-secondary hover:text-velto-mint transition-colors duration-200 text-sm font-body"
              >
                <Phone size={14} strokeWidth={1.5} />
                {p.display}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-velto-emerald/20 text-center">
          <p className="text-velto-sage text-xs font-body">
            &copy; {year} Velto Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
