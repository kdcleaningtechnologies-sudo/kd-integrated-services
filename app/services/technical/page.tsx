import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, HelpCircle, ArrowRight, ChevronRight } from "lucide-react";
import { servicesData } from "@/content/services";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, socialMetadata } from "@/lib/seo";

const technicalCategory = servicesData.find((s) => s.id === "technical-services")!;

export const metadata: Metadata = {
  title: "Engineering & Technical MEP Services in Gurgaon & NCR",
  description:
    "Hard FM, HVAC chiller plant operations, HT/LT substation maintenance, DG backup, and STP/WTP operations across Gurgaon, Manesar, Noida, and Delhi NCR.",
  keywords: [
    "Technical Services Gurgaon",
    "Technical Facility Services",
    "Hard FM Gurgaon",
    "HVAC Chiller Maintenance Gurgaon",
    "Substation Maintenance Gurgaon",
    "STP WTP Operations Gurgaon",
    "Commercial MEP Maintenance Delhi NCR",
  ],
  ...socialMetadata("/services/technical", {
    title: "Engineering & Technical MEP Services in Gurgaon & NCR | KD Integrated Services",
    description: "Planned preventive maintenance (PPM) for commercial HVAC, 11kV electrical substations, and automated DG backups.",
  }),
};

const technicalFaqs = [
  {
    question: "What qualifications do your electro-mechanical engineers hold?",
    answer: "Our technicians hold certified diplomas or B.Tech degrees in Electrical/Mechanical engineering with valid state Wireman/Supervisor licenses for HT/LT electrical operations."
  },
  {
    question: "How do you prevent chiller breakdowns during Delhi NCR's extreme summers?",
    answer: "We enforce rigorous Planned Preventive Maintenance (PPM) including pre-season condenser descaling, eddy-current tube testing, refrigerant pressure audits, and weekly AHU filter chemical cleans."
  },
  {
    question: "What is your emergency breakdown response SLA for MEP failures?",
    answer: "Our mobile technical engineering vans guarantee on-site arrival within 15 minutes for critical electrical trips, DG sync outages, or major plumbing bursts."
  },
  {
    question: "Do you handle statutory environmental compliance for STPs and DG sets?",
    answer: "Yes, our engineers manage daily water parameter testing (BOD/COD/TDS), acoustic enclosure checks, and logbook maintenance in accordance with Haryana State Pollution Control Board (HSPCB) norms."
  }
];

export default function TechnicalServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Technical MEP & Hard Engineering", url: "/services/technical" },
  ];

  const serviceSchema = {
    name: "Hard Services & Technical MEP Maintenance",
    serviceType: "Commercial Building Electro-Mechanical Maintenance",
    description: technicalCategory.description,
    url: `${SITE_URL}/services/technical`,
  };

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <JsonLd type="Service" service={serviceSchema} />
      <JsonLd type="FAQPage" faqs={technicalFaqs} />

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
              <li>
                <Link href="/services" className="hover:text-brandblue-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="font-semibold text-navy-950" aria-current="page">
                Technical MEP Services
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
                {technicalCategory.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {technicalCategory.headline}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {technicalCategory.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#sub-services"
                  className="px-6 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all"
                >
                  View Technical Scope
                </a>
                <a
                  href="#assessment-form"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 transition-colors shadow-md"
                >
                  Book MEP Plant Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Knowledge Link */}
        <section className="bg-slate-50 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600">
              ⚡ <strong>Engineering Whitepaper:</strong> Learn how planned preventive maintenance (PPM) eliminates chiller coil burnouts and transformer trips in commercial buildings.
            </span>
            <Link
              href="/insights/preventive-mep-maintenance-hvac-substations"
              className="text-brandblue-600 font-bold hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              Read Preventive MEP Maintenance Guide <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Sub-services directory */}
        <section id="sub-services" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Service Directory"
              title="MEP Engineering & Plant Operations"
              subtitle="Explore our specialized technical engineering services across Gurugram, Manesar, and Delhi NCR. Delivered by certified wiremen, HVAC technicians, and licensed boiler/STP operators."
            />

            <div className="space-y-6">
              {technicalCategory.subServices.map((sub) => (
                <div
                  key={sub.id}
                  id={sub.slug}
                  className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4">
                      <span className="text-xs font-semibold text-brandblue-600 block mb-1">
                        Hard FM Discipline
                      </span>
                      <h2 className="text-xl font-bold font-heading text-navy-950 mb-2">
                        {sub.title}
                      </h2>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {sub.whatItIs}
                      </p>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80 text-xs space-y-1">
                        <h3 className="font-bold text-navy-950">Target Facility Scale:</h3>
                        <p className="text-slate-600 leading-relaxed">{sub.whoItsFor}</p>
                      </div>

                      <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80 text-xs space-y-1.5">
                        <h3 className="font-bold text-navy-950">Engineering Benchmarks:</h3>
                        <ul className="space-y-1 text-slate-700">
                          {sub.benefits.map((b, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <Check className="w-3.5 h-3.5 text-brandblue-600 flex-shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical FAQs Section */}
        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brandblue-50 text-brandblue-700 border border-brandblue-200 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Common Questions</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                MEP & Hard Services — FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {technicalFaqs.map((faq, i) => (
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
        <section id="assessment-form" className="py-16 sm:py-24 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm
              initialService="Technical MEP & HVAC Maintenance"
              headline="Request a Plant & MEP Engineering Audit"
              subheadline="Our licensed electrical and mechanical engineers will review your single-line diagrams (SLDs), chiller logs, and DG failover timers."
            />
          </div>
        </section>
      </div>
    </>
  );
}
