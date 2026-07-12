"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-[#FAF9F5] text-[#1C1716] font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-[#1C1716] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
            alt="Customer support team"
            className="w-full h-full object-cover opacity-25 transform scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5D3B3]">
            Get In Touch
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#FAF9F5] tracking-wide">
            Contact Us
          </h1>
          <p className="text-sm text-[#FAF9F5]/70 max-w-xl mx-auto font-light">
            Coordinate morning routes, Anti-vibration event dispatches, or dual temperature settings.
          </p>
        </div>
      </section>

      {/* 2. 2-Column Main Contact Block */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Office Coordinates (Span 5) */}
            <div className="lg:col-span-5 space-y-12 text-left">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#D4AF37]">
                  Operational Offices
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#1C1716] leading-tight tracking-wide">
                  Corporate Coordinates
                </h2>
                <p className="text-sm text-[#1C1716]/70 leading-relaxed font-light">
                  Our dispatch networks connect bakery commissaries daily. Reach out to our regional hubs or coordinate via our direct hotlines.
                </p>
              </div>

              {/* Specific Coordinate Blocks */}
              <div className="space-y-8 text-xs font-light">
                
                {/* Block 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#1C1716] text-[#E5D3B3] flex items-center justify-center shrink-0">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-normal text-[#1C1716] uppercase tracking-wider">
                      USJ Head Office & Staging
                    </h4>
                    <p className="text-[#1C1716]/75">
                      No. 3, Jalan Subang 6, Taman Perindustrian Subang,
                      <br />
                      USJ 1, 47600 Subang Jaya, Selangor, Malaysia.
                    </p>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#1C1716] text-[#E5D3B3] flex items-center justify-center shrink-0">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-normal text-[#1C1716] uppercase tracking-wider">
                      Hotlines & Fax
                    </h4>
                    <p className="text-[#1C1716]/75">Dispatch Desk: (555) 123-4567</p>
                    <p className="text-[#1C1716]/75">Fax Line: (555) 123-4568</p>
                  </div>
                </div>

                {/* Block 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#1C1716] text-[#E5D3B3] flex items-center justify-center shrink-0">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-normal text-[#1C1716] uppercase tracking-wider">
                      Email Operations
                    </h4>
                    <a href="mailto:dispatch@alilogistics.com" className="text-[#1C1716]/75 hover:text-[#D4AF37] block">
                      dispatch@alilogistics.com
                    </a>
                    <a href="mailto:careers@alilogistics.com" className="text-[#1C1716]/75 hover:text-[#D4AF37] block">
                      careers@alilogistics.com
                    </a>
                  </div>
                </div>

                {/* Block 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-[#1C1716] text-[#E5D3B3] flex items-center justify-center shrink-0">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-sm font-normal text-[#1C1716] uppercase tracking-wider">
                      Dispatch Hours
                    </h4>
                    <p className="text-[#1C1716]/75">Mon – Fri: 3:00 AM – 6:00 PM</p>
                    <p className="text-[#1C1716]/75">Sat: 4:00 AM – 12:00 PM</p>
                    <p className="text-[#1C1716]/75">Sun: Closed</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Enquiry Form (Span 7) */}
            <div className="lg:col-span-7 w-full border border-[#1C1716]/10 p-8 sm:p-10 bg-transparent rounded-none">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-12 h-12 bg-[#1C1716] text-[#E5D3B3] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-normal text-[#1C1716]">
                      Enquiry Submitted Successfully
                    </h3>
                    <p className="text-xs text-[#1C1716]/75 leading-relaxed font-light font-sans max-w-sm mx-auto">
                      Thank you for contacting Ali Logistics. Your routing message has been logged, and a dispatcher will follow up with route options shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="text-left space-y-2">
                    <h3 className="font-serif text-2xl font-normal text-[#1C1716]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#1C1716]/50 uppercase tracking-widest font-semibold font-sans">
                      Complete the enquiry form below
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contact-name" className="text-[10px] uppercase tracking-widest font-bold text-[#1C1716]/60">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Maria Santos"
                          className="w-full border border-[#1C1716]/10 px-4 py-3 bg-[#1C1716]/5 text-sm text-[#1C1716] placeholder-[#1C1716]/40 focus:border-[#D4AF37] focus:outline-none transition-all rounded-none font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest font-bold text-[#1C1716]/60">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. maria@artisan.com"
                          className="w-full border border-[#1C1716]/10 px-4 py-3 bg-[#1C1716]/5 text-sm text-[#1C1716] placeholder-[#1C1716]/40 focus:border-[#D4AF37] focus:outline-none transition-all rounded-none font-light"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="text-[10px] uppercase tracking-widest font-bold text-[#1C1716]/60">
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Daily routes rates inquiry"
                        className="w-full border border-[#1C1716]/10 px-4 py-3 bg-[#1C1716]/5 text-sm text-[#1C1716] placeholder-[#1C1716]/40 focus:border-[#D4AF37] focus:outline-none transition-all rounded-none font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest font-bold text-[#1C1716]/60">
                        Route Request Details *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your baking production counts, retail store locations, or cold chain schedules..."
                        className="w-full border border-[#1C1716]/10 px-4 py-3 bg-[#1C1716]/5 text-sm text-[#1C1716] placeholder-[#1C1716]/40 focus:border-[#D4AF37] focus:outline-none transition-all rounded-none resize-none font-light"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-[#1C1716] text-[#FAF9F5] border border-[#1C1716] hover:bg-transparent hover:text-[#1C1716] transition-all duration-500 text-[10px] tracking-widest uppercase font-semibold rounded-none cursor-pointer"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Routing Enquiry
                    </button>
                  </form>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bottom Full-Width Dispatch Map Staging Section */}
      <section className="relative w-full h-[50vh] border-t border-[#1C1716]/10 bg-[#1C1716]/5 flex items-center justify-center overflow-hidden">
        {/* Mock Map Staging Background */}
        <div className="absolute inset-0 bg-[#FAF9F5]/40 opacity-75 pointer-events-none" />
        <div className="relative z-10 text-center space-y-4 max-w-lg p-6">
          <MapPin className="w-8 h-8 text-[#D4AF37] mx-auto animate-bounce" />
          <h3 className="font-serif text-2xl font-normal text-[#1C1716]">
            USJ Logistics Hub Staging Area
          </h3>
          <p className="text-xs text-[#1C1716]/80 font-light">
            No. 3, Jalan Subang 6, USJ 1, Subang Jaya, Selangor, Malaysia.
          </p>
          <div className="w-24 h-[1px] bg-[#1C1716]/15 mx-auto" />
          <span className="text-[9px] font-bold text-[#D4AF37] uppercase tracking-[0.2em]">
            Active dispatch zones loaded
          </span>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </section>

    </div>
  );
}
