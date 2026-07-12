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
import SectionHeading from "@/components/ui/SectionHeading";

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
  "w-full px-4 py-3 bg-warm-white border border-gold/30 rounded-xl text-espresso placeholder:text-espresso-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 text-sm";

const labelClass = "block text-sm font-semibold text-espresso mb-1.5";

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
    specialInstructions: "",
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
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-cream min-h-screen flex items-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-6 animate-scale-in">
            <CheckCircle2 className="w-10 h-10 text-sage-dark" />
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-espresso mb-4">
            Quote Request Received!
          </h1>
          <p className="text-espresso-muted text-lg mb-2">
            Thank you, <strong>{form.name || "there"}</strong>! We&apos;ve received your
            request.
          </p>
          <p className="text-espresso-muted mb-8">
            Our team will review your details and get back to you within 2
            business hours with a customized quote.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-cream font-semibold rounded-xl hover:bg-espresso-light transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-espresso">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso to-espresso-light opacity-90" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cream/80 text-sm font-semibold tracking-wide uppercase mb-6">
            Get Started
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4">
            Request a <span className="text-gradient-gold">Quote</span>
          </h1>
          <p className="text-cream/60 max-w-xl mx-auto">
            Tell us about your bakery delivery needs and we&apos;ll provide a
            tailored quote within hours.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      currentStep >= step.id
                        ? "bg-espresso text-cream shadow-lg"
                        : "bg-cream-dark text-espresso-muted"
                    }`}
                  >
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-semibold hidden sm:block ${
                      currentStep >= step.id
                        ? "text-espresso"
                        : "text-espresso-muted"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-3">
                    <div
                      className={`h-1 rounded-full transition-all duration-500 ${
                        currentStep > step.id ? "bg-espresso" : "bg-cream-dark"
                      }`}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Form Card */}
          <form onSubmit={handleSubmit}>
            <div className="bg-warm-white rounded-3xl shadow-lg border border-gold/15 p-6 md:p-10">
              {/* Step 1: Contact Info */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <h2 className="text-xl font-bold text-espresso mb-6">
                    Contact Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        className={inputClass}
                        placeholder="Jane Smith"
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className={labelClass}>Business Name</label>
                      <input
                        id="business"
                        type="text"
                        className={inputClass}
                        placeholder="Jane's Bakery"
                        value={form.business}
                        onChange={(e) => update("business", e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={labelClass}>Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        className={inputClass}
                        placeholder="jane@bakery.com"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone Number *</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        className={inputClass}
                        placeholder="(555) 123-4567"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Delivery Details */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <h2 className="text-xl font-bold text-espresso mb-6">
                    Delivery Details
                  </h2>
                  <div>
                    <label htmlFor="pickupAddress" className={labelClass}>Pickup Address *</label>
                    <input
                      id="pickupAddress"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="123 Baker Street, San Francisco, CA"
                      value={form.pickupAddress}
                      onChange={(e) => update("pickupAddress", e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="dropoffAddress" className={labelClass}>Drop-off Address *</label>
                    <input
                      id="dropoffAddress"
                      type="text"
                      required
                      className={inputClass}
                      placeholder="456 Café Boulevard, San Francisco, CA"
                      value={form.dropoffAddress}
                      onChange={(e) => update("dropoffAddress", e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="itemType" className={labelClass}>Bakery Item Type *</label>
                      <select
                        id="itemType"
                        required
                        className={inputClass}
                        value={form.itemType}
                        onChange={(e) => update("itemType", e.target.value)}
                      >
                        <option value="">Select item type</option>
                        {itemTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="volume" className={labelClass}>Estimated Volume *</label>
                      <input
                        id="volume"
                        type="text"
                        required
                        className={inputClass}
                        placeholder="e.g., 50 trays, 3 tiered cakes"
                        value={form.volume}
                        onChange={(e) => update("volume", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Schedule */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <h2 className="text-xl font-bold text-espresso mb-6">
                    Delivery Schedule
                  </h2>
                  <div>
                    <label htmlFor="preferredDate" className={labelClass}>
                      Preferred Start Date *
                    </label>
                    <input
                      id="preferredDate"
                      type="date"
                      required
                      className={inputClass}
                      value={form.preferredDate}
                      onChange={(e) =>
                        update("preferredDate", e.target.value)
                      }
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="pickupTime" className={labelClass}>Preferred Pickup Time *</label>
                      <input
                        id="pickupTime"
                        type="time"
                        required
                        className={inputClass}
                        value={form.pickupTime}
                        onChange={(e) => update("pickupTime", e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="dropoffTime" className={labelClass}>Preferred Drop-off Time *</label>
                      <input
                        id="dropoffTime"
                        type="time"
                        required
                        className={inputClass}
                        value={form.dropoffTime}
                        onChange={(e) => update("dropoffTime", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="frequency" className={labelClass}>Delivery Frequency *</label>
                    <select
                      id="frequency"
                      required
                      className={inputClass}
                      value={form.frequency}
                      onChange={(e) => update("frequency", e.target.value)}
                    >
                      <option value="">Select frequency</option>
                      {frequencies.map((freq) => (
                        <option key={freq} value={freq}>
                          {freq}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-gold/15">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-espresso-muted hover:text-espresso transition-colors rounded-xl hover:bg-cream-dark"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-espresso text-cream font-semibold rounded-xl hover:bg-espresso-light transition-all duration-300 btn-shine"
                  >
                    Continue
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-espresso font-semibold rounded-xl hover:bg-gold-dark transition-all duration-300 btn-shine"
                  >
                    Submit Request
                    <Send className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
