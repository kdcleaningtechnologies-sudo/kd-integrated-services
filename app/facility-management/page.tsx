import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ShieldCheck,
  BarChart3,
  Clock,
  HelpCircle,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { TierComparisonTable } from "@/components/TierComparisonTable";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { ClientsShowcase } from "@/components/ClientsShowcase";
import { SITE_URL, socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Integrated Facility Management (IFM) in Gurgaon & NCR",
  description:
    "End-to-end Integrated Facility Management services across Gurugram, Manesar, Noida, and Delhi NCR. Single SLA contracts for soft services, 24/7 security, MEP engineering, and tech-driven operations.",
  keywords: [
    "integrated facility management company",
    "facility management company India",
    "IFM services Delhi NCR",
    "corporate IFM contract Gurugram",
    "single vendor facility management",
    "integrated facility management Gurgaon",
  ],
  ...socialMetadata("/facility-management", {
    title: "Integrated Facility Management (IFM) in Gurgaon & NCR | KD Integrated Services",
    description: "Single-point IFM partner in Delhi NCR: corporate housekeeping, 24/7 PASARA security, and MEP engineering under one unified SLA.",
  }),
};

const ifmFaqs = [
  {
    question: "What is the difference between IFM and hiring multiple individual vendors?",
    answer: "In a conventional model, you manage 4 to 6 separate contracts for cleaning, security, MEP, and pest control, resulting in blame-shifting and heavy administrative invoice reconciliation. Under IFM, KD acts as your single accountable partner with one unified SLA, one on-site facility manager, and one consolidated monthly bill."
  },
  {
    question: "What cost savings can enterprise clients expect by switching to IFM?",
    answer: "By eliminating overlapping supervisory layers, bulk purchasing eco-friendly consumables, and deploying cross-trained technicians, corporate clients typically achieve 18% to 25% net operational savings."
  },
  {
    question: "What contract durations do you support?",
    answer: "We offer flexible monthly, quarterly, or annual Annual Maintenance Contracts (AMCs) with transparent 30-day performance-linked exit clauses and zero lock-in."
  },
  {
    question: "How do you ensure statutory wage compliance for all deployed personnel?",
    answer: "We provide month-wise bank disbursement proof, electronic EPFO/ESIC challans, and proof of GST payment on the 7th of every month, completely shielding principal employers from labor liabilities."
  }
];

export default function FacilityManagementPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Integrated Facility Management (IFM)", url: "/facility-management" },
  ];

  const serviceSchema = {
    name: "Integrated Facility Management (IFM)",
    serviceType: "Total Integrated Facility Operations & Property Maintenance",
    description: "End-to-end single-SLA corporate facility management uniting housekeeping, 24/7 manned security, MEP plant maintenance, and robotics.",
    url: `${SITE_URL}/facility-management`,
  };

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <JsonLd type="Service" service={serviceSchema} />
      <JsonLd type="FAQPage" faqs={ifmFaqs} />

      <div className="bg-white">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200/80 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-xs text-slate-600">
              <li>
                <Link href="/" className="hover:text-brandblue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="font-semibold text-navy-950" aria-current="page">
                Integrated Facility Management (IFM)
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Header */}
        <section className="bg-hero-gradient text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brandblue-500/20 text-brandcyan-300 border border-brandcyan-400/30 mb-3">
                Integrated Facility Management (IFM)
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                One Contract. One Point of Contact.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#00D2B4]">
                  Total Operational Peace of Mind.
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Stop juggling four separate vendors for cleaning, security guards, HVAC mechanics, and pest control. Our unified IFM model delivers cohesive operations, synchronized shift handovers, and a single consolidated monthly bill across Gurugram, Manesar, Noida, and Delhi NCR.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#packages"
                  className="px-6 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all"
                >
                  View AMC Packages
                </a>
                <a
                  href="#sla-framework"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 transition-colors shadow-md"
                >
                  Performance-Linked SLAs
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guide Callout for Internal Linking */}
        <section className="bg-slate-50 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600">
              📖 <strong>Executive Whitepaper:</strong> The Complete Guide to Integrated Facility Management (IFM) for Corporate Tech Parks in Delhi NCR.
            </span>
            <Link
              href="/insights/complete-guide-integrated-facility-management-delhi-ncr"
              className="text-brandblue-600 font-bold hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              Read Full IFM Strategy Guide <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* The Single-Vendor Advantage */}
        <section className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="The IFM Paradigm"
              title="Why Multi-Vendor Facility Management Fails Corporates"
              subtitle="When your facility relies on separate, fragmented contractors, finger-pointing is inevitable when issues arise."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* The Old Way */}
              <div className="p-7 bg-red-50/40 border border-red-200 rounded-2xl space-y-3">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider block mb-1">
                  The Conventional Multi-Vendor Trap
                </span>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Fragmented Contractors & Endless Friction
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 pt-2">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold">✕</span>
                    <span><strong>Blame Shifting:</strong> Security guards blame cleaners for gate mess; cleaners blame MEP technicians for water leakages.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold">✕</span>
                    <span><strong>Administrative Overhead:</strong> Processing 4 to 6 separate monthly bills, verifying statutory challans across multiple entities.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-600 font-bold">✕</span>
                    <span><strong>Inconsistent Service Culture:</strong> Different uniforms, mismatched grooming, and clashing operational standards across your property.</span>
                  </li>
                </ul>
              </div>

              {/* The KD Way */}
              <div className="p-7 bg-gradient-to-br from-brandblue-50/80 via-white to-brandcyan-50/60 border border-brandblue-200/90 rounded-2xl space-y-3 shadow-sm">
                <span className="text-xs font-bold text-brandblue-600 uppercase tracking-wider block mb-1">
                  The KD Integrated Model
                </span>
                <h3 className="text-xl font-bold font-heading text-navy-950">
                  Single-SLA Unified Command
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-800 pt-2">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brandblue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>One Dedicated On-Site Facility Manager:</strong> A single point of escalation who oversees housekeeping, security, and MEP teams.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brandblue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Consolidated Monthly Invoicing:</strong> One transparent bill with verified 100% PF/ESIC bank remittances.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-brandblue-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Synchronized Shift Handover:</strong> Unified morning briefings, standardized uniforms, and cross-trained support crews.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SLA Framework Section */}
        <section id="sla-framework" className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Performance Guarantees"
              title="Performance-Linked SLA Framework"
              subtitle="We link our monthly billings to contractual service level agreements. If we do not hit our turnaround metrics, invoice penalties apply."
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brandblue-50 border border-brandblue-200 flex items-center justify-center text-brandblue-600 mb-3">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950">30-Minute Restroom Loop</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Peak office hours washroom sanitization turnaround verified via real-time digital QR scans behind every cubicle door.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brandblue-50 border border-brandblue-200 flex items-center justify-center text-brandblue-600 mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950">15% Float Crew Reserve</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We maintain a dedicated reserve pool at our Sector 31 hub to guarantee zero absenteeism disruption on your floors.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-xl bg-brandblue-50 border border-brandblue-200 flex items-center justify-center text-brandblue-600 mb-3">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-navy-950">15-Min Breakdown Response</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Emergency technical response for DG synchronization failures, HT breaker trips, or mainline plumbing leaks.
                </p>
              </div>
            </div>

            {/* Recurring contract banner in clean brand theme */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-brandblue-50/90 via-white to-brandcyan-50/70 border border-brandblue-200/80 text-navy-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm hover:shadow-md transition-all">
              <div className="space-y-1 text-center md:text-left">
                <span className="text-xs font-bold text-brandblue-600 uppercase tracking-wider block mb-1">
                  Flexible Contracting
                </span>
                <h4 className="text-lg font-bold font-heading text-navy-950">
                  Monthly, Quarterly, or Annual Retainers — Zero Lock-In
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  We do not demand punitive multi-year lock-ins. Our contracts operate with straightforward 30-day exit clauses. We earn your renewal every 30 days through performance.
                </p>
              </div>
              <a
                href="#packages"
                className="px-6 py-3 rounded-xl btn-brand-primary text-xs font-bold whitespace-nowrap shadow-md hover:shadow-lg transition-all"
              >
                Explore AMC Tiers
              </a>
            </div>
          </div>
        </section>

        {/* Clients Showcase */}
        <ClientsShowcase />

        {/* Tier Comparison Table Section */}
        <section id="packages" className="py-14 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Operating Models"
              title="Compare Our Facility Management Packages"
              subtitle="Choose between soft-only services or complete enterprise integrated facility management with mechanized robotics."
            />

            <TierComparisonTable />
          </div>
        </section>

        {/* IFM FAQs */}
        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brandblue-50 text-brandblue-700 border border-brandblue-200 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Integrated Facility Management — FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {ifmFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2"
                >
                  <h3 className="text-sm sm:text-base font-bold text-navy-950 flex items-start gap-2">
                    <span className="text-brandblue-600 font-extrabold">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Lead Form */}
        <section id="assessment-form" className="py-14 sm:py-20 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm
              headline="Request an IFM Audit for Your Property"
              subheadline="Let our engineering team calculate exact manpower requirements and design your tailored SLA matrix."
            />
          </div>
        </section>
      </div>
    </>
  );
}
