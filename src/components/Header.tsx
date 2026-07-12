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
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-md border-b border-gold/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                scrolled || pathname !== "/"
                  ? "bg-espresso"
                  : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              <Truck className="w-5 h-5 text-gold" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold leading-none tracking-tight transition-colors duration-300 ${
                  scrolled || pathname !== "/" ? "text-espresso" : "text-cream"
                }`}
              >
                Ali
              </span>
              <span
                className={`text-[10px] font-semibold uppercase tracking-[0.2em] leading-none mt-1 transition-colors duration-300 ${
                  scrolled || pathname !== "/" ? "text-espresso-muted" : "text-cream/60"
                }`}
              >
                Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Nav links (Comfortable layout, no redundant link) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    scrolled || pathname !== "/"
                      ? isActive
                        ? "text-espresso bg-gold/30"
                        : "text-espresso-muted hover:text-espresso hover:bg-gold-light"
                      : isActive
                      ? "text-gold bg-white/10"
                      : "text-cream/80 hover:text-cream hover:bg-white/10"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full ${
                        scrolled || pathname !== "/" ? "bg-espresso" : "bg-gold"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA (Comfortable layout) */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/quote"
              className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 btn-shine ${
                scrolled || pathname !== "/"
                  ? "bg-espresso text-cream hover:bg-espresso-light"
                  : "bg-gold text-espresso hover:bg-gold-dark"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 ${
              scrolled || pathname !== "/"
                ? "hover:bg-gold-light focus:ring-gold text-espresso"
                : "hover:bg-white/10 focus:ring-white text-cream"
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
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen
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
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-cream shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
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
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive
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
