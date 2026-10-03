"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import VeltoLogo from "@/components/ui/VeltoLogo";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-velto-bg/80 backdrop-blur-xl border-b border-velto-emerald/40 shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between h-16 sm:h-18">
        {/* Logo */}
        <Link href="/" aria-label="Velto Solutions home" className="relative z-50">
          <VeltoLogo size={34} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-velto-text-secondary hover:text-velto-mint transition-colors duration-200 font-body"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+2348100982105"
            className="inline-flex items-center gap-2 rounded-full bg-velto-mint px-5 py-2.5 text-sm font-medium text-velto-bg hover:shadow-[0_0_20px_rgba(197,240,208,0.2)] transition-all duration-300 font-body"
            id="header-call-btn"
          >
            <Phone size={14} strokeWidth={2} />
            Call us
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          id="mobile-menu-toggle"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block w-6 h-0.5 bg-velto-text transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-velto-text transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-velto-text transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile menu */}
        <div
          className={`md:hidden fixed inset-0 bg-velto-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          id="mobile-menu"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-2xl text-velto-text hover:text-velto-mint transition-colors duration-200 font-heading"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+2348100982105"
            className="inline-flex items-center gap-2 rounded-full bg-velto-mint px-6 py-3 text-base font-medium text-velto-bg font-body mt-4"
          >
            <Phone size={16} strokeWidth={2} />
            Call us
          </a>
        </div>
      </nav>
    </header>
  );
}
