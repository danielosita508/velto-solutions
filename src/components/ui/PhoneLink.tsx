"use client";

import React, { useState } from "react";
import { Phone, Copy, Check } from "lucide-react";

interface PhoneLinkProps {
  display: string;
  tel: string;
  id?: string;
}

export default function PhoneLink({ display, tel, id }: PhoneLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(display);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback — do nothing
    }
  };

  return (
    <div className="flex items-center gap-3" id={id}>
      <a
        href={`tel:${tel}`}
        className="flex items-center gap-3 text-xl sm:text-2xl font-heading font-semibold text-velto-text hover:text-velto-mint transition-colors duration-300"
        aria-label={`Call ${display}`}
      >
        <Phone size={20} strokeWidth={1.5} className="text-velto-sage" />
        {display}
      </a>
      <button
        onClick={handleCopy}
        className="p-2 rounded-lg hover:bg-velto-emerald/40 transition-colors duration-200 text-velto-sage hover:text-velto-mint cursor-pointer"
        aria-label={copied ? "Copied" : `Copy ${display}`}
        title={copied ? "Copied!" : "Copy number"}
      >
        {copied ? <Check size={16} strokeWidth={2} /> : <Copy size={16} strokeWidth={1.5} />}
      </button>
    </div>
  );
}
