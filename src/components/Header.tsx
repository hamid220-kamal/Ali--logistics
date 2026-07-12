"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Truck } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-xs border-b border-[#1C1716]/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className={`w-9 h-9 flex items-center justify-center transition-all duration-300 shadow-sm rounded-none ${
              scrolled ? "bg-[#1C1716]" : "bg-[#FAF9F5]/10 backdrop-blur-sm"
            }`}>
              <Truck className={`w-4.5 h-4.5 transition-colors duration-300 ${
                scrolled ? "text-[#E5D3B3]" : "text-[#FAF9F5]"
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-serif font-bold leading-none tracking-tight transition-colors duration-300 ${
                scrolled ? "text-[#1C1716]" : "text-[#FAF9F5]"
              }`}>
                Ali
              </span>
              <span className={`text-[9px] font-semibold uppercase tracking-[0.2em] leading-none mt-1 transition-colors duration-300 ${
                scrolled ? "text-[#1C1716]/60" : "text-[#FAF9F5]/70"
              }`}>
                Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Nav links (Luxury Editorial tracking with dynamic scroll color) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-1 py-1 text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 group ${
                    scrolled
                      ? isActive
                        ? "text-[#1C1716] font-bold"
                        : "text-[#1C1716]/60 hover:text-[#1C1716]"
                      : isActive
                      ? "text-[#E5D3B3] font-bold"
                      : "text-[#FAF9F5]/85 hover:text-[#FAF9F5]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#D4AF37] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA (Refined Luxury Outline element with dynamic color) */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/quote"
              className={`inline-flex items-center justify-center px-5 py-2.5 text-[10px] tracking-widest uppercase font-semibold transition-all duration-500 rounded-none cursor-pointer border ${
                scrolled
                  ? "text-[#1C1716] border-[#1C1716] hover:bg-[#1C1716] hover:text-[#FAF9F5]"
                  : "text-[#FAF9F5] border-[#FAF9F5]/40 hover:border-[#FAF9F5] hover:bg-[#FAF9F5] hover:text-[#1C1716]"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-none transition-colors duration-200 focus:outline-none ${
              scrolled
                ? "hover:bg-[#1C1716]/5 text-[#1C1716]"
                : "hover:bg-white/10 text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-espresso/45 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl transition-transform duration-300 ease-out flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gold/25">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-espresso" />
              <span className="text-lg font-bold text-espresso">Ali Logistics</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-gold-light transition-colors text-espresso"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-1 overflow-y-auto flex-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive
                      ? "bg-gold/30 text-espresso"
                      : "text-espresso-muted hover:bg-gold-light hover:text-espresso"
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="p-6 border-t border-gold/15 bg-warm-white">
            <Link
              href="/quote"
              className="block w-full text-center px-6 py-3.5 bg-espresso text-cream font-semibold rounded-xl hover:bg-espresso-light transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
