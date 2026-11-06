import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Building2,
  ExternalLink,
} from "lucide-react";
import { companyInfo } from "@/content/company";
import { citiesData } from "@/content/cities";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us & Free Facility Assessment",
  description:
    "Request a free facility assessment in Gurgaon or Delhi NCR. Visit HQ at 521, Sector 31, Gurgaon or Delhi office at C-134, Sarita Vihar, New Delhi 110076. Call +91 8796682266 or Marketing Head Vinod Singh at +91 8800883467.",
  keywords: [
    "Contact KD Integrated Services",
    "Facility Management Gurgaon Office",
    "Facility Management Delhi Office Sarita Vihar",
    "Request Facility Audit Gurugram",
    "Commercial Cleaning Quote Delhi NCR",
    "Integrated Facility Management Contact",
  ],
  ...socialMetadata("/contact", {
    title: "Contact KD Integrated Services | Gurgaon & Delhi Offices",
    description:
      "Free on-site facility assessment. Gurgaon HQ: 521, Sector 31. Delhi office: C-134, Sarita Vihar, New Delhi 110076.",
  }),
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Contact & Assessment", url: "/contact" },
  ];

  return (
    <>
      <JsonLd type="LocalBusiness" city="Gurgaon" />
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />

      <div className="bg-white">
        {/* Hero Header */}
        <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold text-brandgreen-400 block mb-2">
                24/7 Operations Desk
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
                Request a Free On-Site Facility Assessment
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Connect with our senior technical directors across Gurugram, Manesar, Noida, and Delhi NCR. We inspect your property, calculate transparent manpower line-items, and provide a customized SLA proposal within 2 business hours.
              </p>
            </div>
          </div>
        </section>

        {/* Main Contact Grid */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Left Column: Direct Details, Empanelment, City List */}
              <div className="lg:col-span-5 space-y-6">
                {/* Direct Contact Card */}
                <div className="p-6 sm:p-7 bg-slate-50 rounded-2xl border border-slate-200/90 shadow-sm space-y-5">
                  <h3 className="text-lg font-bold font-heading text-navy-950">
                    {companyInfo.name}
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm">
                    {/* Gurgaon Office */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-900 block">Gurgaon Office (HQ):</strong>
                        <span className="text-slate-600">
                          {companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state} — {companyInfo.address.pincode}
                        </span>
                      </div>
                    </div>

                    {/* Delhi Office */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-900 block">Delhi Office:</strong>
                        <span className="text-slate-600">
                          {companyInfo.delhiAddress.street}, {companyInfo.delhiAddress.city}, {companyInfo.delhiAddress.pincode}
                        </span>
                      </div>
                    </div>

                    {/* Netherlands Office */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-900 block">Netherlands Office:</strong>
                        <span className="text-slate-600">
                          {companyInfo.netherlandsAddress.street}, {companyInfo.netherlandsAddress.pincode} {companyInfo.netherlandsAddress.city}
                        </span>
                      </div>
                    </div>

                    {/* Phone Helplines */}
                    <div className="flex items-start gap-3">
                      <Phone className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-slate-500 text-xs block">Operations & Support Desks</span>
                        <a href={`tel:${companyInfo.phone}`} className="font-bold text-navy-950 hover:text-brandblue-600 transition-colors">
                          {companyInfo.phoneIndia}
                        </a>
                      </div>
                    </div>

                    {/* Marketing Head */}
                    <div className="flex items-start gap-3 pt-1 border-t border-slate-200">
                      <Phone className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <span className="text-slate-500 text-xs block">{companyInfo.marketingHead.designation}</span>
                        <strong className="text-navy-900 block">{companyInfo.marketingHead.name}</strong>
                        <a
                          href={`tel:${companyInfo.marketingHead.phone}`}
                          className="font-bold text-navy-950 hover:text-brandblue-600 transition-colors"
                        >
                          {companyInfo.marketingHead.displayPhone}
                        </a>
                        <a
                          href={`https://wa.me/${companyInfo.marketingHead.whatsappNumber}?text=${encodeURIComponent(`Hello ${companyInfo.marketingHead.name}, I would like to discuss facility management services for our property.`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#25D366] hover:underline flex items-center gap-1 font-semibold"
                        >
                          WhatsApp {companyInfo.marketingHead.designation} <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>

                    {/* Official Email */}
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-navy-900 block">Official Email / RFP Desk:</strong>
                        <a
                          href={`mailto:${companyInfo.email}`}
                          className="font-bold text-navy-950 hover:text-brandblue-600 transition-colors"
                        >
                          {companyInfo.email}
                        </a>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-3 pt-1">
                      <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                      <div>
                        <span className="text-slate-500 text-xs block">Direct WhatsApp Operations Desk</span>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-[#25D366] hover:underline flex items-center gap-1"
                        >
                          Chat with Operations Team <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* City-wise Service Area List */}
                <div className="p-6 bg-white border border-slate-300 space-y-3">
                  <h3 className="text-base font-bold font-heading text-navy-950">
                    NCR Dispatch Hubs & Operational Coverage
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We maintain dedicated supervisory dispatch bases across key commercial nodes to guarantee sub-30 minute emergency turnaround:
                  </p>

                  <div className="space-y-2 pt-1">
                    {Object.values(citiesData).map((c) => (
                      <Link
                        key={c.slug}
                        href={`/${c.slug}`}
                        className="p-3 bg-slate-50 hover:bg-navy-50 border border-slate-200 flex items-center justify-between text-xs font-semibold text-navy-900 group transition-colors"
                      >
                        <div>
                          <span className="block font-bold group-hover:text-brandgreen-700">{c.name}</span>
                          <span className="text-[11px] text-slate-500 font-normal">{c.dispatchTime}</span>
                        </div>
                        <span className="text-xs font-semibold text-slate-400 group-hover:text-brandgreen-700">View Node</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Corporate Procurement & Empanelment Note */}
                <div className="p-5 bg-navy-950 text-white space-y-2.5 border border-navy-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-brandgreen-400">
                    <ShieldCheck className="w-4 h-4" />
                    Corporate Empanelment Desk
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Need vendor registration packets for your procurement committee? We submit active GSTIN, EPFO/ESIC bank returns, PASARA certifications, and ₹5 Cr public liability certificates within 4 business hours.
                  </p>
                  <div className="pt-1 text-xs text-brandcyan-400 font-medium">
                    Email RFP to: <a href={`mailto:${companyInfo.email}`} className="underline hover:text-white font-bold">{companyInfo.email}</a>
                  </div>
                </div>
              </div>

              {/* Right Column: Lead Form & Embedded Map */}
              <div className="lg:col-span-7 space-y-6">
                <LeadForm
                  headline="Get Your Free Facility Assessment"
                  subheadline="Fill out the property details below. We'll assign a senior operations manager to inspect your site."
                />

                {/* Embedded Map Representation */}
                <div className="border border-slate-300 bg-slate-100 p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-semibold text-navy-950">
                      <Building2 className="w-4 h-4 text-brandcyan-600" />
                      Gurgaon Headquarters (Sector 31)
                    </div>
                    <a
                      href="https://maps.google.com/?q=Sector+31+Gurgaon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-brandblue-600 hover:underline flex items-center gap-1"
                    >
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Responsive Clean Map Frame */}
                  <div className="w-full h-60 border border-slate-300 bg-slate-200 relative flex items-center justify-center text-center p-4">
                    <iframe
                      title="KD Integrated Services Gurgaon Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14030.589886361546!2d77.03960161868352!3d28.459746356770227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1858a74e6c07%3A0xb3663673c683b544!2sSector%2031%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                      className="w-full h-full border-0 absolute inset-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  <p className="text-xs text-slate-500 text-center">
                    {companyInfo.address.street}, {companyInfo.address.city}, {companyInfo.address.state} — {companyInfo.address.pincode}
                  </p>
                  <p className="text-xs text-slate-500 text-center">
                    Delhi Office: {companyInfo.delhiAddress.street}, {companyInfo.delhiAddress.city} — {companyInfo.delhiAddress.pincode}
                    {" · "}
                    <a
                      href="https://maps.google.com/?q=C-134+Sarita+Vihar+New+Delhi+110076"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brandblue-600 hover:underline font-semibold"
                    >
                      Open in Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
