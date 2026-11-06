import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ShieldCheck, HelpCircle, ArrowRight, ChevronRight } from "lucide-react";
import { servicesData } from "@/content/services";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, socialMetadata } from "@/lib/seo";

const softCategory = servicesData.find((s) => s.id === "soft-services")!;

export const metadata: Metadata = {
  title: "Cleaning & Housekeeping Services in Gurgaon & NCR",
  description:
    "Professional corporate housekeeping, commercial deep cleaning, cafeteria stewardship, and facade washing across Gurgaon & Delhi NCR. Eco-friendly chemicals & verified staff.",
  keywords: [
    "Housekeeping Services Gurgaon",
    "Corporate Cleaning Services Gurgaon",
    "Corporate Housekeeping Services",
    "Commercial Cleaning Company Gurgaon",
    "Hospital Housekeeping Services Gurgaon",
    "Facade Cleaning Services Gurgaon",
    "Industrial Cleaning Services NCR",
  ],
  ...socialMetadata("/services/cleaning", {
    title: "Cleaning & Housekeeping Services in Gurgaon & NCR | KD Integrated Services",
    description: "Professional corporate housekeeping, commercial deep cleaning, and mechanized janitorial services for Grade-A properties.",
  }),
};

const cleaningFaqs = [
  {
    question: "What types of facilities do you provide corporate housekeeping for in Gurgaon?",
    answer: "We provide dedicated corporate housekeeping for Fortune 500 GCCs, tech parks, pharmaceutical cleanrooms, financial institutions, private hospitals, and multi-tenant commercial complexes across DLF Cyber City, Golf Course Road, and Udyog Vihar."
  },
  {
    question: "How do you prevent absenteeism downtime in janitorial shifts?",
    answer: "KD maintains a 15% dedicated float-crew reserve pool stationed at our Sector 31 Gurgaon hub. Any unexpected absence is immediately replaced with an orientation-trained substitute within 30 minutes."
  },
  {
    question: "What chemicals and machinery do you deploy?",
    answer: "We deploy Diversey and Buzil green-certified concentrates with Taski single-disc rotaries, ride-on battery scrubbers, and industrial HEPA vacuums for spotless, eco-friendly maintenance."
  },
  {
    question: "Do you offer integrated contracts combining housekeeping with security and MEP?",
    answer: "Yes, our Integrated Facility Management (IFM) packages unite housekeeping, 24/7 PASARA security, and MEP engineering under a single master service agreement with one consolidated invoice."
  }
];

export default function CleaningServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Corporate Housekeeping & Soft Services", url: "/services/cleaning" },
  ];

  const serviceSchema = {
    name: "Corporate Housekeeping & Cleaning Services",
    serviceType: "Commercial Cleaning and Janitorial Services",
    description: softCategory.description,
    url: `${SITE_URL}/services/cleaning`,
  };

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <JsonLd type="Service" service={serviceSchema} />
      <JsonLd type="FAQPage" faqs={cleaningFaqs} />

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
                Cleaning & Soft Services
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
                {softCategory.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {softCategory.headline}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {softCategory.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#sub-services"
                  className="px-6 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all"
                >
                  View Soft Services Scope
                </a>
                <a
                  href="#assessment-form"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 transition-colors shadow-md"
                >
                  Request Housekeeping Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Guide Callout for Internal Linking */}
        <section className="bg-slate-50 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600">
              📘 <strong>Knowledge Guide:</strong> Learn how Grade-A tech parks implement 30-minute washroom custodial loops and ATP meter tests.
            </span>
            <Link
              href="/insights/corporate-housekeeping-restroom-hygiene-benchmarks"
              className="text-brandblue-600 font-bold hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              Read Restroom Hygiene Benchmarks <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Sub-services list */}
        <section id="sub-services" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Service Directory"
              title="Housekeeping & Janitorial Sub-Services"
              subtitle="Explore our soft-service modules across Gurugram and Delhi NCR. Delivered by background-verified staff with standardized chemical dilution and mechanized tools."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {softCategory.subServices.map((sub) => (
                <div
                  key={sub.id}
                  id={sub.slug}
                  className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between scroll-mt-24"
                >
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-xs font-semibold text-brandblue-600 block mb-1">
                          Operational Module
                        </span>
                        <h2 className="text-xl font-bold font-heading text-navy-950">
                          {sub.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed font-normal">
                      {sub.whatItIs}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 mb-1.5">
                          Target Facilities
                        </h3>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {sub.whoItsFor}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xs font-semibold text-slate-500 mb-1.5">
                          Operational Benchmarks
                        </h3>
                        <ul className="space-y-1.5">
                          {sub.benefits.map((b, i) => (
                            <li key={i} className="text-xs text-slate-700 flex items-start gap-2">
                              <Check className="w-3.5 h-3.5 text-brandblue-600 flex-shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {sub.slaNote && (
                      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-brandblue-800 bg-brandblue-50/70 p-2.5 rounded-lg border border-brandblue-100">
                        <ShieldCheck className="w-4 h-4 text-brandblue-600 flex-shrink-0" />
                        <span>SLA Benchmark: {sub.slaNote}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cleaning FAQs Section */}
        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brandblue-50 text-brandblue-700 border border-brandblue-200 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Common Questions</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Corporate Housekeeping — FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {cleaningFaqs.map((faq, i) => (
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
              initialService="Housekeeping & Soft Services"
              headline="Request a Housekeeping & Soft Services Assessment"
              subheadline="Receive a customized square-footage manpower calculation and chemical consumption schedule within 2 hours."
            />
          </div>
        </section>
      </div>
    </>
  );
}
