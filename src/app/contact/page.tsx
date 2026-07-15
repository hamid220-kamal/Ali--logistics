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
    <div className="bg-white text-slate-900 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
            alt="Customer support team"
            className="w-full h-full object-cover opacity-20 transform scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">
            Get In Touch
          </p>
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Contact Us
          </h1>
          <p className="text-sm text-slate-200 max-w-xl mx-auto font-light">
            Coordinate morning routes, Anti-vibration event dispatches, or dual temperature settings.
          </p>
        </div>
      </section>

      {/* 2. 2-Column Main Contact Block */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Office Coordinates */}
            <div className="lg:col-span-5 space-y-12 text-left">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-500">
                  Operational Offices
                </span>
                <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                  Corporate Coordinates
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Our dispatch networks connect bakery commissaries daily. Reach out to our regional hubs or coordinate via our direct hotlines.
                </p>
              </div>

              {/* Specific Coordinate Blocks */}
              <div className="space-y-8 text-xs font-light">
                
                {/* Block 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-slate-900 text-sky-300 flex items-center justify-center shrink-0 rounded-lg">
                    <MapPin className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                      USJ Head Office & Staging
                    </h4>
                    <p className="text-slate-655">
                      No. 3, Jalan Subang 6, Taman Perindustrian Subang,
                      <br />
                      USJ 1, 47600 Subang Jaya, Selangor, Malaysia.
                    </p>
                  </div>
                </div>

                {/* Block 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-slate-900 text-sky-300 flex items-center justify-center shrink-0 rounded-lg">
                    <Phone className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                      Hotlines & Fax
                    </h4>
                    <p className="text-slate-655">Dispatch Desk: (555) 123-4567</p>
                    <p className="text-slate-655">Fax Line: (555) 123-4568</p>
                  </div>
                </div>

                {/* Block 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-slate-900 text-sky-300 flex items-center justify-center shrink-0 rounded-lg">
                    <Mail className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                      Email Operations
                    </h4>
                    <a href="mailto:dispatch@alilogistics.com" className="text-slate-600 hover:text-sky-500 block font-medium">
                      dispatch@alilogistics.com
                    </a>
                    <a href="mailto:careers@alilogistics.com" className="text-slate-600 hover:text-sky-500 block font-medium">
                      careers@alilogistics.com
                    </a>
                  </div>
                </div>

                {/* Block 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 bg-slate-900 text-sky-300 flex items-center justify-center shrink-0 rounded-lg">
                    <Clock className="w-4.5 h-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-sans text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                      Dispatch Hours
                    </h4>
                    <p className="text-slate-655">Mon – Fri: 3:00 AM – 6:00 PM</p>
                    <p className="text-slate-655">Sat: 4:00 AM – 12:00 PM</p>
                    <p className="text-slate-655">Sun: Closed</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7 w-full border border-slate-100 p-8 sm:p-10 bg-slate-50 rounded-2xl shadow-sm">
              {submitted ? (
                <div className="text-center py-16 space-y-6">
                  <div className="w-12 h-12 bg-slate-900 text-sky-300 flex items-center justify-center mx-auto rounded-lg">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-sans text-2xl font-extrabold text-slate-900">
                      Enquiry Submitted Successfully
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light max-w-sm mx-auto">
                      Thank you for contacting Ali Logistics. Your routing message has been logged, and a dispatcher will follow up with route options shortly.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="text-left space-y-2">
                    <h3 className="font-sans text-2xl font-extrabold text-slate-900">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">
                      Complete the enquiry form below
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="contact-name" className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Maria Santos"
                          className="w-full border border-slate-200 px-4 py-3 bg-white text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-all rounded-lg font-light"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="contact-email" className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. maria@artisan.com"
                          className="w-full border border-slate-200 px-4 py-3 bg-white text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-all rounded-lg font-light"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-subject" className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Daily routes rates inquiry"
                        className="w-full border border-slate-200 px-4 py-3 bg-white text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-all rounded-lg font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="contact-message" className="text-[10px] uppercase tracking-widest font-bold text-slate-500">
                        Route Request Details *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Detail your baking production counts, retail store locations, or cold chain schedules..."
                        className="w-full border border-slate-200 px-4 py-3 bg-white text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-all rounded-lg resize-none font-light"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-4 bg-slate-900 text-white border border-slate-900 hover:bg-transparent hover:text-slate-900 transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer"
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
      <section className="relative w-full h-[50vh] border-t border-slate-100 bg-slate-50 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-white/40 opacity-75 pointer-events-none" />
        <div className="relative z-10 text-center space-y-4 max-w-lg p-6">
          <MapPin className="w-8 h-8 text-sky-500 mx-auto animate-bounce" />
          <h3 className="font-sans text-2xl font-extrabold text-slate-900">
            USJ Logistics Hub Staging Area
          </h3>
          <p className="text-xs text-slate-700 font-light">
            No. 3, Jalan Subang 6, USJ 1, Subang Jaya, Selangor, Malaysia.
          </p>
          <div className="w-24 h-[1px] bg-slate-200 mx-auto" />
          <span className="text-[9px] font-bold text-sky-600 uppercase tracking-[0.2em]">
            Active dispatch zones loaded
          </span>
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </section>

    </div>
  );
}
