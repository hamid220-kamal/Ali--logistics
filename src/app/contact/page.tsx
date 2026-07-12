"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import Card from "@/components/ui/Card";

const inputClass =
  "w-full px-4 py-3 bg-warm-white border border-gold/30 rounded-xl text-espresso placeholder:text-espresso-muted/50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-200 text-sm";

const labelClass = "block text-sm font-semibold text-espresso mb-1.5";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden bg-espresso">
        <div className="absolute inset-0 bg-gradient-to-b from-espresso to-espresso-light opacity-90" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-cream/80 text-sm font-semibold tracking-wide uppercase mb-6">
            Get in Touch
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-cream leading-tight mb-4">
            Contact <span className="text-gradient-gold">Us</span>
          </h1>
          <p className="text-cream/60 max-w-xl mx-auto">
            Have questions about our bakery transport services? We&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-espresso mb-2">
                  Let&apos;s Talk
                </h2>
                <p className="text-sm text-espresso-muted leading-relaxed">
                  Whether you&apos;re ready to start a delivery contract or just want
                  to learn more, our team is here to help.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card hover={false} padding="md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-espresso mb-1">Phone</h3>
                      <a
                        href="tel:+15551234567"
                        className="text-sm text-espresso-muted hover:text-espresso transition-colors"
                      >
                        (555) 123-4567
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover={false} padding="md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-sage-dark" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-espresso mb-1">Email</h3>
                      <a
                        href="mailto:hello@alilogistics.com"
                        className="text-sm text-espresso-muted hover:text-espresso transition-colors"
                      >
                        hello@alilogistics.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card hover={false} padding="md">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-gold-dark" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-espresso mb-1">Address</h3>
                      <p className="text-sm text-espresso-muted">
                        123 Baker Street, Suite 200
                        <br />
                        San Francisco, CA 94102
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-3">
              <div className="bg-warm-white rounded-3xl shadow-lg border border-gold/15 p-6 md:p-10">
                {submitted ? (
                  <div className="text-center py-12 animate-scale-in">
                    <div className="w-16 h-16 bg-sage-light rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-sage-dark" />
                    </div>
                    <h3 className="text-xl font-bold text-espresso mb-2">Message Sent!</h3>
                    <p className="text-espresso-muted">
                      We&apos;ll get back to you within 24 hours. Thank you for
                      reaching out!
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 rounded-xl bg-gold-light flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-gold-dark" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-espresso">Send Us a Message</h2>
                        <p className="text-xs text-espresso-muted">Fill out the form below.</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label htmlFor="contact-name" className={labelClass}>Full Name *</label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            className={inputClass}
                            placeholder="Jane Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className={labelClass}>Email Address *</label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            className={inputClass}
                            placeholder="jane@bakery.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-subject" className={labelClass}>Subject *</label>
                        <input
                          id="contact-subject"
                          type="text"
                          required
                          className={inputClass}
                          placeholder="e.g., Interested in daily bread delivery"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-message" className={labelClass}>Message *</label>
                        <textarea
                          id="contact-message"
                          rows={6}
                          required
                          className={inputClass}
                          placeholder="Tell us about your bakery delivery needs..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-espresso text-cream font-semibold rounded-xl hover:bg-espresso-light transition-all duration-300 btn-shine"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
