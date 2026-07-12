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
    "bg-espresso text-cream hover:bg-espresso-light btn-shine focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-cream",
  secondary:
    "bg-gold text-espresso hover:bg-gold-dark btn-shine focus:ring-2 focus:ring-espresso/30 focus:ring-offset-2 focus:ring-offset-cream",
  ghost:
    "bg-transparent text-espresso hover:bg-gold-light focus:ring-2 focus:ring-gold focus:ring-offset-2",
  outline:
    "bg-transparent border-2 border-espresso text-espresso hover:bg-espresso hover:text-cream focus:ring-2 focus:ring-espresso/30 focus:ring-offset-2",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none";

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
