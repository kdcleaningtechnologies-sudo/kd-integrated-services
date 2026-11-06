import React from "react";
import type { Metadata } from "next";
import {
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { caseStudiesData } from "@/content/caseStudies";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { ClientsShowcase } from "@/components/ClientsShowcase";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Projects & Case Studies in Gurgaon & Delhi NCR",
  description:
    "Explore deployment archetypes and operational case studies demonstrating our SLA turnaround times, float-crew reserves, and mechanized transitions across Gurugram and Delhi NCR.",
  keywords: [
    "Facility Management Case Studies",
    "Commercial Cleaning Projects Gurgaon",
    "Hospital Housekeeping Deployments",
    "Corporate Security Deployments Delhi NCR",
  ],
  ...socialMetadata("/projects", {
    title: "Projects & Case Studies | KD Integrated Services Gurgaon",
    description:
      "Explore deployment archetypes and operational case studies demonstrating our SLA turnaround times, float-crew reserves, and mechanized transitions across Gurugram and Delhi NCR.",
  }),
};

export default function ProjectsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Projects & Case Studies", url: "/projects" },
  ];

  return (
    <div className="bg-white">
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-brandgreen-400 block mb-2">
              Operational Deliverables
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              Real Impact. Measurable Operational Outcomes.
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Review our deployment blueprints illustrating how we solve chronic cleaner absenteeism, high chiller energy consumption, and high-rise façade access across Gurugram, Noida, and Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Client Engagements */}
      <ClientsShowcase />

      {/* Case Studies Grid */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Case Archetypes"
            title="Operational Blueprints & Transition Models"
            subtitle="Explore how our integrated teams resolve the core challenges that cause conventional contractors to fail."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {caseStudiesData.map((cs) => (
              <div
                key={cs.id}
                className="border border-slate-300 bg-white p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200">
                      {cs.facilityType}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-brandgreen-600" />
                      {cs.location}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-heading text-navy-950 mb-3">
                    {cs.title}
                  </h3>

                  {/* Scope Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cs.scope.map((s, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium px-2 py-0.5 bg-navy-50 text-navy-900 border border-navy-100"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-1">
                        Operational Challenge:
                      </h4>
                      <p className="text-slate-600 leading-relaxed">
                        {cs.challenge}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-brandgreen-800 mb-1">
                        The KD Solution:
                      </h4>
                      <p className="text-slate-700 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-200 space-y-1.5">
                  <h4 className="font-semibold text-navy-950 text-xs">
                    Validated Operational Outcomes:
                  </h4>
                  <ul className="space-y-1">
                    {cs.impactPreview.map((imp, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brandgreen-600 flex-shrink-0 mt-0.5" />
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-navy-50 border border-navy-100 text-center max-w-2xl mx-auto space-y-3">
            <h4 className="text-base sm:text-lg font-bold font-heading text-navy-950">
              Want a Tailored Transition Plan for Your Specific Site?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Our engineering team conducts a 2-hour physical walkthrough and produces a comprehensive gap analysis highlighting cost-saving opportunities.
            </p>
            <a
              href="#assessment-form"
              className="inline-block px-5 py-3 bg-navy-900 hover:bg-navy-950 text-white font-bold text-xs transition-colors"
            >
              Book Complimentary Site Walkthrough
            </a>
          </div>
        </div>
      </section>

      {/* Bottom Lead Form */}
      <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            headline="Request Your Facility Gap Analysis"
            subheadline="Discover where current contractors are bleeding budget or compromising tenant safety."
          />
        </div>
      </section>
    </div>
  );
}
