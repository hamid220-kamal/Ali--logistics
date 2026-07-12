import React from "react";
import Link from "next/link";
import { Truck, Mail, Phone, Clock, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/quote", label: "Get a Quote" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Scheduled Routes",
  "Large Cake Transport",
  "Temperature Controlled",
  "Special Events",
  "Same-Day Delivery",
];

export default function Footer() {
  return (
    <footer className="bg-[#2C2523] text-cream/80 border-t border-white/5">
      {/* Main Footer Sitemap Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand & Socials Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-gold/20 rounded-xl flex items-center justify-center">
                <Truck className="w-5 h-5 text-gold" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-cream leading-tight">
                  Ali
                </span>
                <span className="text-[10px] font-semibold text-cream/50 uppercase tracking-[0.2em] leading-none">
                  Logistics
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60">
              Specialized bakery transport solutions ensuring your baked goods
              arrive fresh, intact, and on time — every single morning delivery run.
            </p>
            <div className="flex gap-3 pt-2">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-cream/60 hover:bg-gold/20 hover:text-cream transition-colors duration-200"
                  aria-label={`Follow us on ${social}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-cream uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-cream uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-cream/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-cream uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-cream/60">
                  123 Baker Street, Suite 200
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-sm text-cream/60 hover:text-gold transition-colors duration-200"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <a
                  href="mailto:hello@alilogistics.com"
                  className="text-sm text-cream/60 hover:text-gold transition-colors duration-200"
                >
                  hello@alilogistics.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="text-sm text-cream/60 space-y-1">
                  <p>Mon – Fri: 3:00 AM – 6:00 PM</p>
                  <p>Sat: 4:00 AM – 12:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-cream/40">
          <p className="text-xs">
            © {new Date().getFullYear()} Ali Logistics. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs hover:text-cream/70 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs hover:text-cream/70 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
