import React from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${alignClass}`}>
      {label && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 ${
            light
              ? "bg-warm-white/15 text-cream"
              : "bg-gold-light text-espresso-light"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
          light ? "text-cream" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-cream/80" : "text-espresso-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
