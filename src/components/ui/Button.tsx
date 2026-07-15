import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-slate-900 text-white hover:bg-slate-800 btn-shine focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white",
  secondary:
    "bg-sky-600 text-white hover:bg-sky-700 btn-shine focus:ring-2 focus:ring-sky-500/35 focus:ring-offset-2 focus:ring-offset-white",
  ghost:
    "bg-transparent text-slate-900 hover:bg-sky-50 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
  outline:
    "bg-transparent border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white focus:ring-2 focus:ring-sky-500/35 focus:ring-offset-2",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-wider uppercase font-bold",
  md: "px-6 py-3 text-sm tracking-wider uppercase font-bold",
  lg: "px-8 py-4 text-base tracking-wider uppercase font-bold",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-300 cursor-pointer select-none";

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
