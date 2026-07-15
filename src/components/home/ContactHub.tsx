"use client";

import React, { useState } from "react";
import { Download, Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactHub() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}. Your logistics request has been received by dispatch!`);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 bg-white border-t border-slate-100 relative overflow-hidden" id="contact-hub">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-20 max-w-6xl mx-auto">
          
          {/* Request for Quotation (RFQ) Download Banner */}
          <div className="border border-slate-100 p-8 sm:p-12 relative rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 bg-slate-50 hover:border-sky-300/80 transition-all duration-300 shadow-sm text-left">
            <div className="space-y-4 max-w-3xl">
              <span className="text-[9px] font-bold tracking-[0.25em] text-sky-600 uppercase">
                Rates & Inquiry
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl text-slate-900 font-extrabold leading-snug">
                Request for Quotation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                For detailed freight logistics inquiries or multi-stop route calculations, download our physical RFQ spec sheet, fill it out with your cargo volume parameters, and email it directly to dispatch.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("RFQ PDF template download triggered.");
                }}
                className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-slate-900 text-[10px] tracking-widest uppercase font-bold text-slate-900 bg-transparent hover:bg-slate-900 hover:text-white transition-all duration-500 rounded-lg cursor-pointer"
              >
                <Download className="w-4.5 h-4.5 mr-2 text-sky-600" />
                Download RFQ Form (PDF)
              </a>
            </div>
          </div>

          {/* Contact Form & Staging Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Side: Contact Form & Office Coordinates (Span 6) */}
            <div className="lg:col-span-6 space-y-12 text-left">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
                  Enquiry Desk
                </span>
                <h4 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
                  Contact Our Dispatch Team
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Submit your bakery volume details, route scheduling requirements, or anti-vibration cargo needs below and a controller will follow up shortly.
                </p>
              </div>

              {/* Interactive Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="form-name" className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Maria Santos"
                      className="w-full border border-slate-200 px-4 py-3 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-all rounded-lg font-light"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="form-email" className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. maria@artisan.com"
                      className="w-full border border-slate-200 px-4 py-3 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-all rounded-lg font-light"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-phone" className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                    Phone Number
                    <span className="text-[9px] text-slate-400 lowercase pl-1">(optional)</span>
                  </label>
                  <input
                    id="form-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. (555) 123-4567"
                    className="w-full border border-slate-200 px-4 py-3 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-all rounded-lg font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="form-message" className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                    Routing & Cargo Details
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your bakery volume, required pickup times, or anti-vibration transport specs..."
                    className="w-full border border-slate-200 px-4 py-3 bg-slate-50 text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:bg-white focus:outline-none transition-all rounded-lg resize-none font-light"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 text-white border border-slate-900 hover:bg-transparent hover:text-slate-900 transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Submit Request to Dispatch
                </button>
              </form>
            </div>

            {/* Right Side: Map Staging Area (Span 6) */}
            <div className="lg:col-span-6 w-full space-y-6">
              <div className="w-full aspect-video border border-slate-100 bg-slate-50 p-2 relative flex items-center justify-center overflow-hidden rounded-2xl">
                {/* Mock Staging Google Map Box */}
                <div className="absolute inset-0 bg-white/45 opacity-80 z-0 pointer-events-none" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-6 text-center space-y-3">
                  <MapPin className="w-8 h-8 text-sky-500" />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-slate-500">
                    Ali Logistics Hub Staging Area
                  </span>
                  <p className="text-xs text-slate-700 font-light max-w-sm">
                    No. 3, Jalan Subang 6, USJ 1, Subang Jaya, Selangor
                  </p>
                  <div className="w-24 h-[1px] bg-slate-200" />
                  <span className="text-[9px] font-bold text-sky-600 uppercase tracking-widest leading-none">
                    Route coordinates active
                  </span>
                </div>
                {/* Visual grid pattern representing map routes */}
                <div className="w-full h-full bg-grid-pattern opacity-10" />
              </div>

              {/* Operational quick-reference box */}
              <div className="border border-slate-100 rounded-2xl p-6 flex flex-col sm:flex-row justify-between gap-6 items-start sm:items-center bg-slate-50 text-left">
                <div className="space-y-1">
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Direct Hotlines
                  </h5>
                  <p className="text-xs text-slate-800 font-bold leading-relaxed">
                    Dispatch: (555) 123-4567
                  </p>
                  <p className="text-xs text-slate-800 font-bold leading-relaxed">
                    Office: hello@alilogistics.com
                  </p>
                </div>
                <div>
                  <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Staging Hours
                  </h5>
                  <p className="text-xs text-slate-800 font-bold leading-relaxed">
                    Pre-dawn staging: 3 AM - 6 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
