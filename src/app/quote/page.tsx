"use client";

import React, { useState } from "react";
import {
  User,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
} from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, label: "Contact Info", icon: User },
  { id: 2, label: "Delivery Details", icon: MapPin },
  { id: 3, label: "Schedule", icon: Calendar },
];

const itemTypes = [
  "Artisan Breads & Rolls",
  "Croissants & Pastries",
  "Tiered / Wedding Cakes",
  "Cupcakes & Small Cakes",
  "Cooled Desserts & Mousse",
  "Cookies & Biscuits",
  "Mixed / Assorted",
];

const frequencies = [
  "One-time delivery",
  "Daily (Mon–Fri)",
  "Daily (Mon–Sat)",
  "Weekly",
  "Bi-weekly",
  "Custom schedule",
];

const inputClass =
  "w-full border border-[#1C1716]/10 px-4 py-3 bg-[#1C1716]/5 text-sm text-[#1C1716] placeholder-[#1C1716]/40 focus:border-[#D4AF37] focus:outline-none transition-all rounded-none font-light";

const selectClass =
  "w-full border border-[#1C1716]/10 px-4 py-3 bg-[#1C1716]/5 text-sm text-[#1C1716] focus:border-[#D4AF37] focus:outline-none transition-all rounded-none font-light appearance-none cursor-pointer";

const labelClass = "block text-[10px] uppercase tracking-widest font-bold text-[#1C1716]/60 mb-1.5";

export default function QuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    pickupAddress: "",
    dropoffAddress: "",
    itemType: "",
    volume: "",
    preferredDate: "",
    pickupTime: "",
    dropoffTime: "",
    frequency: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const nextStep = () => setCurrentStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setCurrentStep((s) => Math.max(s - 1, 1));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#FAF9F5] text-[#1C1716] font-sans min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-xl mx-auto px-6 text-center space-y-8 py-16 border border-[#1C1716]/10 bg-transparent relative rounded-none">
          <div className="w-12 h-12 bg-[#1C1716] text-[#E5D3B3] flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div className="space-y-3">
            <h1 className="font-serif text-3xl font-normal text-[#1C1716] tracking-wide">
              Quote Request Logged
            </h1>
            <p className="text-sm text-[#1C1716]/75 font-light">
              Thank you, <strong>{form.name || "there"}</strong>. Your bakery routing constraints have been queued.
            </p>
            <p className="text-xs text-[#1C1716]/60 leading-relaxed font-light max-w-sm mx-auto">
              Our dispatch planners will calculate route parameters and email a detailed custom proposal to you within 2 business hours.
            </p>
          </div>
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1C1716] text-[#FAF9F5] border border-[#1C1716] hover:bg-transparent hover:text-[#1C1716] transition-all duration-500 text-[10px] tracking-widest uppercase font-semibold rounded-none cursor-pointer"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F5] text-[#1C1716] font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative w-full h-[45vh] flex items-center justify-center overflow-hidden bg-[#1C1716] pt-16">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop"
            alt="Quote banner"
            className="w-full h-full object-cover opacity-25 transform scale-105"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#E5D3B3]">
            Rates Inquiry
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#FAF9F5] tracking-wide">
            Request a Quote
          </h1>
          <p className="text-sm text-[#FAF9F5]/70 max-w-xl mx-auto font-light leading-relaxed">
            Provide your bakery staging locations, temperature limits, and dispatch timetables below.
          </p>
        </div>
      </section>

      {/* 2. Step Form */}
      <section className="py-24 bg-[#FAF9F5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          
          {/* Step indicators */}
          <div className="flex items-center justify-between mb-16 select-none max-w-xl mx-auto">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center gap-2">
                    <div
                      className={`w-10 h-10 flex items-center justify-center transition-all duration-300 ${
                        currentStep >= step.id
                          ? "bg-[#1C1716] text-[#E5D3B3]"
                          : "bg-[#1C1716]/10 text-[#1C1716]/40"
                      }`}
                    >
                      <StepIcon className="w-4 h-4" />
                    </div>
                    <span
                      className={`text-[9px] font-bold uppercase tracking-wider hidden sm:block ${
                        currentStep >= step.id ? "text-[#1C1716]" : "text-[#1C1716]/40"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-1 mx-4">
                      <div
                        className={`h-[1px] transition-all duration-500 ${
                          currentStep > step.id ? "bg-[#1C1716]" : "bg-[#1C1716]/10"
                        }`}
                      />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Form Content Block */}
          <form onSubmit={handleSubmit} className="border border-[#1C1716]/10 p-8 sm:p-10 bg-transparent rounded-none text-left">
            
            {/* Step 1: Contact Details */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="space-y-2 border-b border-[#1C1716]/10 pb-4">
                  <h2 className="font-serif text-2xl font-normal text-[#1C1716]">
                    Contact Information
                  </h2>
                  <p className="text-[10px] text-[#1C1716]/50 uppercase tracking-widest font-semibold font-sans">
                    Step 1 of 3
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className={labelClass}>Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="e.g. Maria Santos"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="business" className={labelClass}>Business Name</label>
                    <input
                      id="business"
                      type="text"
                      value={form.business}
                      onChange={(e) => update("business", e.target.value)}
                      placeholder="e.g. Maria's Artisan Bakery"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className={labelClass}>Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="e.g. maria@artisan.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="e.g. (555) 123-4567"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Delivery Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="space-y-2 border-b border-[#1C1716]/10 pb-4">
                  <h2 className="font-serif text-2xl font-normal text-[#1C1716]">
                    Routing Specifications
                  </h2>
                  <p className="text-[10px] text-[#1C1716]/50 uppercase tracking-widest font-semibold font-sans">
                    Step 2 of 3
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="pickupAddress" className={labelClass}>Pickup Address *</label>
                  <input
                    id="pickupAddress"
                    type="text"
                    required
                    value={form.pickupAddress}
                    onChange={(e) => update("pickupAddress", e.target.value)}
                    placeholder="e.g. 123 Artisan Parkway, USJ Hub"
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="dropoffAddress" className={labelClass}>Drop-off Address *</label>
                  <input
                    id="dropoffAddress"
                    type="text"
                    required
                    value={form.dropoffAddress}
                    onChange={(e) => update("dropoffAddress", e.target.value)}
                    placeholder="e.g. 456 Retail Blvd, Downtown Outpost"
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="itemType" className={labelClass}>Bakery Item Type *</label>
                    <div className="relative">
                      <select
                        id="itemType"
                        required
                        value={form.itemType}
                        onChange={(e) => update("itemType", e.target.value)}
                        className={selectClass}
                      >
                        <option value="">Select item type</option>
                        {itemTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#1C1716]/60 text-xs">
                        ▼
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="volume" className={labelClass}>Estimated Volume *</label>
                    <input
                      id="volume"
                      type="text"
                      required
                      value={form.volume}
                      onChange={(e) => update("volume", e.target.value)}
                      placeholder="e.g. 150 croissants daily"
                      className={inputClass}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Schedule details */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="space-y-2 border-b border-[#1C1716]/10 pb-4">
                  <h2 className="font-serif text-2xl font-normal text-[#1C1716]">
                    Delivery Timetables
                  </h2>
                  <p className="text-[10px] text-[#1C1716]/50 uppercase tracking-widest font-semibold font-sans">
                    Step 3 of 3
                  </p>
                </div>

                <div className="space-y-2">
                  <label htmlFor="preferredDate" className={labelClass}>Preferred Start Date *</label>
                  <input
                    id="preferredDate"
                    type="date"
                    required
                    value={form.preferredDate}
                    onChange={(e) => update("preferredDate", e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="pickupTime" className={labelClass}>Preferred Pickup Time *</label>
                    <input
                      id="pickupTime"
                      type="time"
                      required
                      value={form.pickupTime}
                      onChange={(e) => update("pickupTime", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dropoffTime" className={labelClass}>Preferred Delivery Time *</label>
                    <input
                      id="dropoffTime"
                      type="time"
                      required
                      value={form.dropoffTime}
                      onChange={(e) => update("dropoffTime", e.target.value)}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="frequency" className={labelClass}>Route Frequency *</label>
                  <div className="relative">
                    <select
                      id="frequency"
                      required
                      value={form.frequency}
                      onChange={(e) => update("frequency", e.target.value)}
                      className={selectClass}
                    >
                      <option value="">Select frequency</option>
                      {frequencies.map((freq) => (
                        <option key={freq} value={freq}>
                          {freq}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#1C1716]/60 text-xs">
                      ▼
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form actions footer */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-[#1C1716]/10 select-none">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="inline-flex items-center justify-center gap-1.5 text-[10px] tracking-widest font-bold uppercase text-[#1C1716]/60 hover:text-[#1C1716] transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4.5 h-4.5" />
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1C1716] text-[#FAF9F5] border border-[#1C1716] hover:bg-transparent hover:text-[#1C1716] transition-all duration-500 text-[10px] tracking-widest uppercase font-semibold rounded-none cursor-pointer"
                >
                  Continue
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3.5 bg-[#1C1716] text-[#FAF9F5] border border-[#1C1716] hover:bg-transparent hover:text-[#1C1716] transition-all duration-500 text-[10px] tracking-widest uppercase font-semibold rounded-none cursor-pointer"
                >
                  Submit Request
                  <Send className="w-3.5 h-3.5 ml-2" />
                </button>
              )}
            </div>

          </form>

        </div>
      </section>

    </div>
  );
}
