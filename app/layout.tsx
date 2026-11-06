import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { companyInfo } from "@/content/company";
import { SITE_URL, defaultOgImage } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Facility Management Company in Gurgaon & Delhi NCR | KD Integrated Services",
    template: "%s | KD Integrated Services",
  },
  description:
    "Integrated Facility Management (IFM) company in Gurgaon and Delhi NCR. Corporate housekeeping, 24/7 PASARA security, HVAC/MEP maintenance, and drone façade cleaning across Gurugram, New Delhi, Noida, Faridabad, and Manesar.",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-IN": SITE_URL,
    },
  },
  keywords: [
    "Facility Management Company in Gurgaon",
    "Facility Management Services in Gurugram",
    "Facility Management Company Delhi NCR",
    "Facility Management Company New Delhi",
    "Integrated Facility Management Company",
    "Housekeeping Services Gurugram",
    "Housekeeping Services Sarita Vihar",
    "Security Services NCR",
    "Corporate Housekeeping Services",
    "Technical Facility Services",
    "Corporate Cleaning Services Gurgaon",
    "Hospital Housekeeping Services Gurgaon",
    "Industrial Cleaning Services Gurgaon",
    "PASARA Security Guard Agency Gurgaon",
  ],
  authors: [{ name: companyInfo.name }],
  creator: companyInfo.name,
  publisher: companyInfo.legalName,
  category: "Facility Management",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: companyInfo.name,
    title: "KD Integrated Services — Integrated Facility Management in Gurgaon & Delhi NCR",
    description:
      "Single-point IFM partner for corporate offices, hospitals, industrial plants, and campuses. Offices in Sector 31 Gurgaon and C-134 Sarita Vihar, New Delhi.",
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "KD Integrated Services — Integrated Facility Management",
    description: "Housekeeping, PASARA security, MEP maintenance, and drone façade cleaning across Gurgaon and Delhi NCR.",
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "google1934754eb265285c",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased text-slate-800 bg-white min-h-screen flex flex-col`}
      >
        <GoogleAnalytics />
        <div id="top" />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

