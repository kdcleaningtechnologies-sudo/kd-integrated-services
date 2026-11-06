"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { companyInfo } from "@/content/company";
import { BrandLogo } from "@/components/BrandLogo";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="relative bg-[#071426] text-slate-300 pt-12 sm:pt-14 pb-6 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <div className="hidden md:grid max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 grid-cols-4 items-center">
          {["K", "D", "I", "S"].map((letter) => (
            <span
              key={letter}
              className="font-black text-white/[0.08] text-[16rem] lg:text-[21rem] xl:text-[24rem] leading-[0.62] text-center"
            >
              {letter}
            </span>
          ))}
        </div>
        <div className="md:hidden flex h-full flex-col items-center justify-evenly py-2">
          {["K", "D", "I", "S"].map((letter) => (
            <span
              key={`m-${letter}`}
              className="block font-black text-white/[0.10] text-[36vw] leading-[0.62] text-center"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-10">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <BrandLogo variant="facilities" size="md" theme="dark" />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Smart Solutions | Sparkling Results | Trusted Care
            </p>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0 mt-0.5" />
                <span>HQ: 521, Sector 31, Gurgaon, Haryana 122001</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0 mt-0.5" />
                <span>Delhi: C-134, Sarita Vihar, New Delhi 110076</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0 mt-0.5" />
                <span>Netherlands: Kwikstraat 3, Oostervaart, Lelystad 8211 AM</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/facility-management" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  Integrated FM
                </Link>
              </li>
              <li>
                <Link href="/services/cleaning#corporate-housekeeping" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  Housekeeping
                </Link>
              </li>
              <li>
                <Link href="/services/security" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/services/specialised#facade-cleaning" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  High-Rise & Drone
                </Link>
              </li>
              <li>
                <Link href="/services/technical" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  Maintenance
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/technology" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-brandcyan-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Socials</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={companyInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-brandcyan-300 transition-colors"
                >
                  LinkedIn
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-brandcyan-300 transition-colors"
                >
                  Instagram
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={companyInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-brandcyan-300 transition-colors"
                >
                  Facebook
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-brandcyan-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brandcyan-400" />
                  {companyInfo.phoneIndia.replace(" (India)", "")}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-brandcyan-300 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-brandcyan-400 flex-shrink-0" />
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} KD INTEGRATED SERVICES PVT LTD. All rights reserved.</p>
          <p className="text-slate-400 font-medium">Powered by People | Driven by Technology</p>
        </div>
      </div>
    </footer>
  );
};
