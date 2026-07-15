"use client";

import React, { useState } from "react";
import { User, MapPin, Calendar, CheckCircle2, ArrowRight, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, label: "Contact Info", icon: User },
  { id: 2, label: "Freight Details", icon: MapPin },
  { id: 3, label: "Schedule", icon: Calendar },
];

const freightTypes = [
  "Refrigerated — Food & Dairy",
  "Refrigerated — Pharmaceuticals",
  "Refrigerated — Cosmetics & Beauty",
  "Refrigerated — Other",
  "General Freight — Pallets",
  "General Freight — Cartons",
  "General Freight — Bulky/Oversized",
  "Express Delivery — Urgent Freight",
  "Warehousing & 3PL Distribution",
  "Mixed / Multiple Types",
];

const frequencies = [
  "One-time delivery",
  "Daily (Mon–Fri)",
  "Daily (Mon–Sat)",
  "Weekly",
  "Bi-weekly",
  "Monthly",
  "Ad-hoc / On-demand",
];

const inputClass = "w-full border border-slate-200 px-4 py-3 bg-white text-sm text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-all rounded-lg font-light";
const selectClass = "w-full border border-slate-200 px-4 py-3 bg-white text-sm text-slate-900 focus:border-sky-500 focus:outline-none transition-all rounded-lg font-light appearance-none cursor-pointer";
const labelClass = "block text-[10px] uppercase tracking-widest font-bold text-slate-500 mb-1.5";

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", business: "",
    pickupAddress: "", dropoffAddress: "", freightType: "", weight: "",
    preferredDate: "", pickupTime: "", dropoffTime: "", frequency: "",
  });

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));
  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <div className="bg-white text-slate-900 font-sans min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8 py-16 border border-slate-100 bg-slate-50 relative rounded-2xl shadow-sm">
          <div className="w-12 h-12 bg-slate-900 text-sky-300 flex items-center justify-center mx-auto rounded-lg">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h1 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">Quote Request Received</h1>
            <p className="text-sm text-slate-600 font-light">Thank you, <strong>{form.name || "there"}</strong>. Your freight enquiry has been received by our Sydney team.</p>
            <p className="text-xs text-slate-500 leading-relaxed font-light max-w-sm mx-auto">
              We&apos;ll calculate your route options and send a detailed quote to your email within 2 business hours.
            </p>
          </div>
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 text-white border border-slate-900 hover:bg-transparent hover:text-slate-900 transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-slate-900 font-sans">

      {/* 1. Hero Section */}
      <section className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop" alt="Request a quote" className="w-full h-full object-cover opacity-20 transform scale-105" />
          <div className="absolute inset-0 bg-slate-950/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-sky-400">Freight Quote</p>
          <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Request a Quote</h1>
          <p className="text-sm text-slate-200 max-w-xl mx-auto font-light leading-relaxed">
            Tell us about your freight — pickup location, cargo type, and delivery schedule — and we&apos;ll get back with a competitive Sydney quote.
          </p>
        </div>
      </section>

      {/* 2. Step Form */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

          {/* Step Indicators */}
          <div className="flex items-center justify-between mb-16 select-none max-w-xl mx-auto">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-10 h-10 flex items-center justify-center transition-all duration-300 rounded-lg ${currentStep >= step.id ? "bg-slate-900 text-sky-300" : "bg-slate-100 text-slate-400"}`}>
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <span className={`text-[9px] font-bold uppercase tracking-wider hidden sm:block ${currentStep >= step.id ? "text-slate-900" : "text-slate-400"}`}>
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 mx-4">
                      <div className={`h-[1px] transition-all duration-500 ${currentStep > step.id ? "bg-slate-900" : "bg-slate-100"}`} />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="border border-slate-100 p-8 sm:p-10 bg-slate-50 rounded-2xl shadow-sm text-left">

            {/* Step 1 */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2 border-b border-slate-200/60 pb-4">
                  <h2 className="font-sans text-2xl font-extrabold text-slate-900">Your Details</h2>
                  <p className="text-[10px] text-slate-450 uppercase tracking-widest font-bold">Step 1 of 3</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input id="name" type="text" required value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="e.g. James Thornton" className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business" className={labelClass}>Business Name</label>
                    <input id="business" type="text" value={form.business} onChange={(e) => update("business", e.target.value)} placeholder="e.g. Thornton Fresh Foods" className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input id="email" type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="e.g. james@business.com.au" className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                    <input id="phone" type="tel" required value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="e.g. 02 0000 0000" className={inputClass} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2 border-b border-slate-200/60 pb-4">
                  <h2 className="font-sans text-2xl font-extrabold text-slate-900">Freight Details</h2>
                  <p className="text-[10px] text-slate-450 uppercase tracking-widest font-bold">Step 2 of 3</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="pickupAddress" className={labelClass}>Pickup Address — Sydney *</label>
                  <input id="pickupAddress" type="text" required value={form.pickupAddress} onChange={(e) => update("pickupAddress", e.target.value)} placeholder="e.g. 123 Industrial Ave, Parramatta NSW" className={inputClass} />
                </div>
                <div className="space-y-2">
                  <label htmlFor="dropoffAddress" className={labelClass}>Delivery Address *</label>
                  <input id="dropoffAddress" type="text" required value={form.dropoffAddress} onChange={(e) => update("dropoffAddress", e.target.value)} placeholder="e.g. 456 Retail St, CBD Sydney NSW" className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="freightType" className={labelClass}>Freight Type *</label>
                    <div className="relative">
                      <select id="freightType" required value={form.freightType} onChange={(e) => update("freightType", e.target.value)} className={selectClass}>
                        <option value="">Select freight type</option>
                        {freightTypes.map((type) => (<option key={type} value={type}>{type}</option>))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 text-xs">▼</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="weight" className={labelClass}>Estimated Weight / Volume *</label>
                    <input id="weight" type="text" required value={form.weight} onChange={(e) => update("weight", e.target.value)} placeholder="e.g. 500 kg, 2 pallets" className={inputClass} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2 border-b border-slate-200/60 pb-4">
                  <h2 className="font-sans text-2xl font-extrabold text-slate-900">Delivery Schedule</h2>
                  <p className="text-[10px] text-slate-450 uppercase tracking-widest font-bold">Step 3 of 3</p>
                </div>
                <div className="space-y-2">
                  <label htmlFor="preferredDate" className={labelClass}>Preferred Start Date *</label>
                  <input id="preferredDate" type="date" required value={form.preferredDate} onChange={(e) => update("preferredDate", e.target.value)} className={inputClass} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="pickupTime" className={labelClass}>Preferred Pickup Time *</label>
                    <input id="pickupTime" type="time" required value={form.pickupTime} onChange={(e) => update("pickupTime", e.target.value)} className={inputClass} />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dropoffTime" className={labelClass}>Preferred Delivery Time *</label>
                    <input id="dropoffTime" type="time" required value={form.dropoffTime} onChange={(e) => update("dropoffTime", e.target.value)} className={inputClass} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="frequency" className={labelClass}>Delivery Frequency *</label>
                  <div className="relative">
                    <select id="frequency" required value={form.frequency} onChange={(e) => update("frequency", e.target.value)} className={selectClass}>
                      <option value="">Select frequency</option>
                      {frequencies.map((freq) => (<option key={freq} value={freq}>{freq}</option>))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-500 text-xs">▼</div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Navigation */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-slate-200/60 select-none">
              {currentStep > 1 ? (
                <button type="button" onClick={prevStep} className="inline-flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold uppercase text-slate-500 hover:text-slate-900 transition-colors cursor-pointer">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              ) : <div />}

              {currentStep < 3 ? (
                <button type="button" onClick={nextStep} className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 text-white border border-slate-900 hover:bg-transparent hover:text-slate-900 transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer">
                  Continue <ArrowRight className="w-3.5 h-3.5 ml-2 text-sky-400" />
                </button>
              ) : (
                <button type="submit" className="inline-flex items-center justify-center px-6 py-3.5 bg-slate-900 text-white border border-slate-900 hover:bg-transparent hover:text-slate-900 transition-all duration-500 text-[10px] tracking-widest uppercase font-bold rounded-lg cursor-pointer">
                  Submit Quote Request <Send className="w-3.5 h-3.5 ml-2 text-sky-400" />
                </button>
              )}
            </div>

          </form>
        </div>
      </section>

    </div>
  );
}
