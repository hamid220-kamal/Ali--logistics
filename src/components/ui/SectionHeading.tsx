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
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 ${
            light
              ? "bg-white/10 text-white"
              : "bg-sky-50 text-sky-700"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-sans text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-4 ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
            align === "center" ? "mx-auto" : ""
          } ${light ? "text-slate-200" : "text-slate-600"} font-light`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
