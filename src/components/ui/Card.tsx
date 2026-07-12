import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingStyles = {
  sm: "p-4 md:p-5",
  md: "p-6 md:p-8",
  lg: "p-8 md:p-10",
};

export default function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={`bg-warm-white rounded-2xl shadow-sm border border-gold/20 ${paddingStyles[padding]} ${
        hover ? "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
