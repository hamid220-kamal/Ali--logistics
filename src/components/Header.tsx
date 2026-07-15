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

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-slate-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className={`w-9 h-9 flex items-center justify-center transition-all duration-300 shadow-sm rounded-lg ${
              scrolled ? "bg-slate-900" : "bg-white/10 backdrop-blur-sm"
            }`}>
              <Truck className={`w-4.5 h-4.5 transition-colors duration-300 ${
                scrolled ? "text-sky-400" : "text-white"
              }`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-sans font-extrabold leading-none tracking-tight transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}>
                Ali
              </span>
              <span className={`text-[9px] font-bold uppercase tracking-[0.2em] leading-none mt-1 transition-colors duration-300 ${
                scrolled ? "text-slate-500" : "text-slate-300"
              }`}>
                Logistics
              </span>
            </div>
          </Link>

          {/* Desktop Nav links */}
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
                        ? "text-slate-900 font-bold"
                        : "text-slate-600 hover:text-slate-900"
                      : isActive
                      ? "text-sky-300 font-bold"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-sky-500 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block shrink-0">
            <Link
              href="/quote"
              className={`inline-flex items-center justify-center px-5 py-2.5 text-[10px] tracking-widest uppercase font-bold transition-all duration-500 rounded-lg cursor-pointer border ${
                scrolled
                  ? "text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white"
                  : "text-white border-white/40 hover:border-white hover:bg-white hover:text-slate-900"
              }`}
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 focus:outline-none ${
              scrolled
                ? "hover:bg-slate-100 text-slate-900"
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
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-slate-900" />
              <span className="text-lg font-bold text-slate-900">Ali Logistics</span>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-700"
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
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-sky-50 text-sky-700 font-semibold"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="p-6 border-t border-slate-100 bg-slate-50">
            <Link
              href="/quote"
              className="block w-full text-center px-6 py-3.5 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all duration-300 text-sm tracking-wider uppercase"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
