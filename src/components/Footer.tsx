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
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Main Footer Sitemap Grid */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-left">

          {/* Brand & Socials Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center">
                <Truck className="w-5 h-5 text-sky-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  Ali
                </span>
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em] leading-none">
                  Logistics
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Specialized bakery transport solutions ensuring your baked goods
              arrive fresh, intact, and on time — every single morning delivery run.
            </p>
            <div className="flex gap-3 pt-2">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="px-3 py-1.5 rounded-lg bg-white/5 text-xs text-slate-400 hover:bg-sky-500/15 hover:text-white transition-colors duration-200"
                  aria-label={`Follow us on ${social}`}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <span className="text-sm text-slate-400">
                  No. 3, Jalan Subang 6, USJ 1,
                  <br />
                  Subang Jaya, 47600 Selangor
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="tel:+15551234567"
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200"
                >
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="mailto:hello@alilogistics.com"
                  className="text-sm text-slate-400 hover:text-sky-400 transition-colors duration-200"
                >
                  hello@alilogistics.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                <div className="text-sm text-slate-400 space-y-1">
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
      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500">
          <p className="text-xs">
            © {new Date().getFullYear()} Ali Logistics. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
