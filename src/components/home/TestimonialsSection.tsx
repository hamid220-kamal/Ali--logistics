"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "James Thornton",
    business: "Thornton Fresh Foods, Parramatta",
    quote:
      "Ali Logistics have been our go-to freight partner for over two years. Their refrigerated runs keep our dairy and deli products in perfect condition from our warehouse to 15 retail outlets across Sydney. Truly reliable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Sarah Mitchell",
    business: "Mitchell Pharma Distributors, Chatswood",
    quote:
      "We rely on Ali Logistics for temperature-sensitive pharmaceutical deliveries. Their cold chain compliance is faultless, and they've never missed a delivery window. Highly professional team that truly understands our needs.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "David Chen",
    business: "Chen Wholesale Distribution, Blacktown",
    quote:
      "Switched to Ali Logistics for our general freight runs six months ago. Their fleet is modern, drivers are punctual, and the booking process is simple. Best freight partner we've worked with across Greater Sydney.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((a) => (a === 0 ? total - 1 : a - 1));
  const next = () => setActive((a) => (a === total - 1 ? 0 : a + 1));

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-100">
      <div className="absolute top-0 left-0 w-96 h-96 bg-sky-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <SectionHeading
          label="Client Testimonials"
          title="Trusted by Sydney Businesses"
          subtitle="Discover how businesses across Greater Sydney rely on Ali Logistics for dependable refrigerated and general freight transport."
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 md:p-16 shadow-md text-left">

            <Quote className="w-16 h-16 sm:w-24 sm:h-24 text-sky-500/5 absolute right-8 bottom-8 pointer-events-none" />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[active].rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-sky-500 text-sky-500" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="font-sans text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed font-light italic mb-8">
              &ldquo;{testimonials[active].quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={testimonials[active].image}
                alt={testimonials[active].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-slate-100"
              />
              <div>
                <p className="font-sans text-sm font-extrabold text-slate-900">
                  {testimonials[active].name}
                </p>
                <p className="text-xs text-slate-500 font-light">
                  {testimonials[active].business}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-8 border-t border-slate-100 pt-6">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-lg border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all duration-200 text-slate-600 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-lg border border-slate-200 hover:border-slate-900 hover:bg-slate-900 hover:text-white flex items-center justify-center transition-all duration-200 text-slate-600 cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <div className="ml-2 flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      i === active ? "w-6 bg-sky-500" : "w-1.5 bg-slate-200 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
