import React from "react";
import type { Metadata } from "next";
import {
  Droplets,
  Leaf,
  Recycle,
  Zap,
  CheckCircle2,
  FileSpreadsheet,
} from "lucide-react";
import { sustainabilityData } from "@/content/sustainability";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Sustainability & ESG Facility Operations",
  description:
    "Eco-friendly facility management supporting corporate ESG & BRSR reporting. Zero-runoff pure water systems, Diversey green chemicals, and waste segregation across Gurgaon, Noida, and Delhi NCR.",
  keywords: [
    "Green Facility Management Gurgaon",
    "ESG Facility Management Delhi NCR",
    "Eco Friendly Cleaning Services Gurgaon",
    "Waste Segregation Management Gurgaon",
    "LEED IGBC Building Cleaning Compliance",
  ],
  ...socialMetadata("/sustainability", {
    title: "Sustainability & ESG Facility Operations | KD Integrated Services",
    description:
      "Eco-friendly facility management supporting corporate ESG & BRSR reporting. Zero-runoff pure water systems, Diversey green chemicals, and waste segregation across Gurgaon, Noida, and Delhi NCR.",
  }),
};

const getPillarIcon = (iconName: string) => {
  const props = { className: "w-5 h-5 text-brandgreen-600" };
  switch (iconName) {
    case "Droplets":
      return <Droplets {...props} />;
    case "Leaf":
      return <Leaf {...props} />;
    case "Recycle":
      return <Recycle {...props} />;
    case "Zap":
      return <Zap {...props} />;
    case "CheckCircle2":
      return <CheckCircle2 {...props} />;
    default:
      return <Leaf {...props} />;
  }
};

export default function SustainabilityPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Sustainability & ESG", url: "/sustainability" },
  ];

  return (
    <div className="bg-white">
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-brandgreen-400 block mb-2">
              {sustainabilityData.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              {sustainabilityData.headline}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {sustainabilityData.subheadline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#esg-reporting"
                className="px-5 py-3 bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs transition-colors"
              >
                How We Power Your ESG Reporting
              </a>
              <a
                href="#pillars"
                className="px-5 py-3 bg-navy-900 hover:bg-navy-800 text-white font-medium text-xs border border-slate-700 transition-colors"
              >
                Explore 4 Sustainable Pillars
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Sustainable Operations */}
      <section id="pillars" className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Green Operations"
            title="4 Pillars of Measurable Environmental Stewardship"
            subtitle="We substitute toxic conventional procedures with engineered technologies that preserve natural resources while improving hygiene."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {sustainabilityData.pillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 bg-white border border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-brandgreen-50 border border-brandgreen-200 flex items-center justify-center mb-4">
                    {getPillarIcon(pillar.iconName)}
                  </div>

                  <h3 className="text-lg font-bold font-heading text-navy-950 mb-1">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-brandgreen-700 font-medium mb-3">
                    {pillar.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 border border-slate-200 text-xs text-slate-800 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brandgreen-600 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Measurable Impact:</strong> {pillar.esgMetric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate ESG / CSR Hook */}
      <section id="esg-reporting" className="py-14 sm:py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <SectionHeading
                theme="dark"
                align="left"
                badge="SEBI BRSR & ESG Alignment"
                title={sustainabilityData.corporateEsgHook.title}
                subtitle="Facility management accounts for significant Scope 1 and Scope 2 environmental outputs. We turn routine operational receipts into verifiable compliance data."
              />

              <div className="space-y-2.5 pt-2">
                {sustainabilityData.corporateEsgHook.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-brandgreen-400 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <a
                  href="#assessment-form"
                  className="inline-block px-5 py-3 bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs transition-colors"
                >
                  Schedule Green Facility Audit
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 bg-navy-900 border border-navy-800 space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                  <div>
                    <span className="text-xs font-semibold text-brandgreen-400 block">
                      Audit Readiness
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white">
                      LEED & IGBC Certification Support
                    </h3>
                  </div>
                  <FileSpreadsheet className="w-5 h-5 text-brandgreen-400" />
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Is your commercial tower applying for or maintaining LEED Platinum, Gold, or IGBC Green Building certification? KD Integrated Services supplies:
                </p>

                <div className="space-y-2 text-xs text-slate-300">
                  <div className="p-3 bg-navy-950 border border-navy-800">
                    • Chemical Safety Data Sheets (MSDS) & Green Seal verification
                  </div>
                  <div className="p-3 bg-navy-950 border border-navy-800">
                    • Pure-water meter readings demonstrating water savings
                  </div>
                  <div className="p-3 bg-navy-950 border border-navy-800">
                    • Certified solid & electronic waste recycler receipts
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-400 italic">
                  * Comprehensive quarterly ESG data packets prepared in CSV & PDF for your sustainability committee.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Lead Form */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            headline="Request an Eco-Friendly Facility Assessment"
            subheadline="Learn how our green chemicals, pure-water systems, and waste audits can lower your building's carbon and water footprint."
          />
        </div>
      </section>
    </div>
  );
}
