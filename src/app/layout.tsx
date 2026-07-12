import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans-custom",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display-custom",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ali Logistics — Specialized Bakery Transport",
    template: "%s | Ali Logistics",
  },
  description:
    "Premium bakery logistics and temperature-controlled delivery services. From ovens to doorsteps — we transport croissants, cakes, and pastries with care, precision, and punctuality.",
  keywords: [
    "bakery delivery",
    "bakery logistics",
    "cake transport",
    "temperature controlled delivery",
    "food logistics",
    "bakery supply chain",
  ],
  openGraph: {
    title: "Ali Logistics — Specialized Bakery Transport",
    description:
      "Premium bakery logistics and temperature-controlled delivery services.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-cream text-espresso antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
