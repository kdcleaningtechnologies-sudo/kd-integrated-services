import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, HelpCircle, ArrowRight, ChevronRight } from "lucide-react";
import { servicesData } from "@/content/services";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, socialMetadata } from "@/lib/seo";

const securityCategory = servicesData.find((s) => s.id === "security-services")!;

export const metadata: Metadata = {
  title: "Security & Guarding Services in Gurgaon & NCR",
  description:
    "PASARA-compliant manned security guarding, visitor gate control, electronic RFID night patrols, and emergency response teams across Gurgaon and Delhi NCR.",
  keywords: [
    "Security Services Gurgaon",
    "Security Guard Agency Gurgaon",
    "Security Services NCR",
    "Manned Guarding Services Gurugram",
    "Corporate Security Guarding Delhi NCR",
    "PASARA Compliant Security Agency",
    "Industrial Security Services Manesar",
  ],
  ...socialMetadata("/services/security", {
    title: "Security & Guarding Services in Gurgaon & NCR | KD Integrated Services",
    description: "PASARA-certified 24/7 manned security guards, RFID night patrolling, and digital gate management.",
  }),
};

const securityFaqs = [
  {
    question: "Are all KD security guards licensed under PASARA?",
    answer: "Yes, 100% of our security personnel operate under active state PASARA licenses across Haryana, Delhi, and Uttar Pradesh, with formal police verification and biometric onboarding."
  },
  {
    question: "How do you verify guards stay awake during night shifts?",
    answer: "We deploy electronic RFID night patrol verification wands. Guards must scan geo-tagged checkpoints throughout basements, stairwells, and perimeter fences on 60-minute intervals, producing cloud-synced audit logs."
  },
  {
    question: "What equipment do security teams arrive with?",
    answer: "Guards are equipped with crisp uniforms, metal detector wands, digital visitor log software, heavy-duty LED search torches, and two-way communication transceivers linked to the central control room."
  },
  {
    question: "Do you have a Quick Response Team (QRT) for emergencies?",
    answer: "Yes, our central Gurgaon hub maintains a mobile 24/7 Quick Response Team with an emergency response SLA under 15 minutes."
  }
];

export default function SecurityServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "24/7 PASARA Manned Security", url: "/services/security" },
  ];

  const serviceSchema = {
    name: "24/7 PASARA Manned Security & Guarding",
    serviceType: "Private Security Agency & Manned Guarding",
    description: securityCategory.description,
    url: `${SITE_URL}/services/security`,
  };

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <JsonLd type="Service" service={serviceSchema} />
      <JsonLd type="FAQPage" faqs={securityFaqs} />

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
                Security & Guarding Services
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
                {securityCategory.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {securityCategory.headline}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {securityCategory.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#sub-services"
                  className="px-6 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all"
                >
                  View Security Scope
                </a>
                <a
                  href="#assessment-form"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 transition-colors shadow-md"
                >
                  Request Security Risk Assessment
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Knowledge Link */}
        <section className="bg-slate-50 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600">
              🛡️ <strong>Compliance Checklist:</strong> Learn how to audit a security guard agency for Haryana & UP PASARA licensing and statutory PF/ESIC records.
            </span>
            <Link
              href="/insights/pasara-security-compliance-checklist-gurgaon"
              className="text-brandblue-600 font-bold hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              Read PASARA Security Checklist <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Sub-services list */}
        <section id="sub-services" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Security Operations"
              title="Comprehensive Guarding & Perimeter Protection"
              subtitle="Explore our security services across Gurugram and Delhi NCR. Every guard is 100% police-verified, background-screened, and trained under ex-servicemen supervision."
            />

            <div className="space-y-6">
              {securityCategory.subServices.map((sub) => (
                <div
                  key={sub.id}
                  id={sub.slug}
                  className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4">
                      <span className="text-xs font-semibold text-brandblue-600 block mb-1">
                        Security Pillar
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
                        <h3 className="font-bold text-navy-950">Target Facility Profiles:</h3>
                        <p className="text-slate-600 leading-relaxed">{sub.whoItsFor}</p>
                      </div>

                      <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80 text-xs space-y-1.5">
                        <h3 className="font-bold text-navy-950">Guarding Protocol:</h3>
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

        {/* Security FAQs Section */}
        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brandblue-50 text-brandblue-700 border border-brandblue-200 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Common Questions</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Manned Security Guarding — FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {securityFaqs.map((faq, i) => (
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
              initialService="Manned Security & Access Control"
              headline="Request a Security Risk & Guarding Assessment"
              subheadline="Our chief security officers will audit your building's access points, perimeter fences, and CCTV blind spots."
            />
          </div>
        </section>
      </div>
    </>
  );
}
