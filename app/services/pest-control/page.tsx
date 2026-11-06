import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Check,
  ShieldCheck,
  HelpCircle,
  ArrowRight,
  ChevronRight,
  Bug,
  Rat,
  Wind,
  TreePine,
  BedDouble,
  Bird,
  CloudFog,
  Sparkles,
  Leaf,
  ClipboardCheck,
  HardHat,
  Layers,
  Briefcase,
  HeartPulse,
  Hotel,
  Warehouse,
  GraduationCap,
  Home,
} from "lucide-react";
import { servicesData } from "@/content/services";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, socialMetadata } from "@/lib/seo";

const pestCategory = servicesData.find((s) => s.id === "pest-control-services")!;

const subIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Bug,
  Rat,
  Wind,
  TreePine,
  BedDouble,
  Bird,
  CloudFog,
  Sparkles,
};

export const metadata: Metadata = {
  title: "Pest Control Services in Gurugram & Delhi NCR",
  description:
    "Professional pest control services in Gurugram and Delhi NCR. IPM programmes for corporate offices, hospitals, hospitality, F&B, warehouses, and residential societies—bundled with facility management AMCs.",
  keywords: [
    "pest control services Gurugram",
    "pest control services Gurgaon",
    "commercial pest control Gurgaon",
    "pest control company Delhi NCR",
    "rodent control Gurugram",
    "termite control Gurgaon",
    "integrated pest management Gurgaon",
    "hospital pest control Delhi NCR",
    "residential society pest control Gurugram",
  ],
  ...socialMetadata("/services/pest-control", {
    title: "Pest Control Services in Gurugram & Delhi NCR | KD Integrated Services",
    description:
      "Integrated pest management for corporate, retail, hospital, industrial, and residential facilities across Gurugram and Delhi NCR. Eco-friendly chemicals, digital AMC reporting, one vendor.",
  }),
};

const pestFaqs = [
  {
    question: "Is your pest control safe for occupied offices, hospitals, and food areas in Gurugram?",
    answer:
      "Yes. We follow an Integrated Pest Management (IPM) method using government-approved, low-odour gel baits and micro-encapsulated sprays suitable for occupied floors, hospital non-critical areas, and FSSAI-aligned kitchens. Technicians wear PPE and isolate treatment zones only when a product label requires it.",
  },
  {
    question: "Do you offer an annual pest control AMC or only one-time treatments?",
    answer:
      "Both. Most corporate, hospital, warehouse, and society clients run a scheduled AMC with monthly or fortnightly visits, digital job reports, and free callback visits if pest activity returns between cycles. One-time termite, bed bug, fumigation, and bird-proofing jobs are quoted after a site audit.",
  },
  {
    question: "Can pest control be bundled with housekeeping, security, and MEP under one vendor?",
    answer:
      "Yes. Pest control sits inside our specialised facility stack. You can hold a single SLA covering housekeeping, PASARA security, technical MEP, and pest AMC—one invoice, one operations manager, and one digital reporting loop across Gurugram and Delhi NCR.",
  },
  {
    question: "How quickly can you attend a pest outbreak at a Gurgaon or Delhi site?",
    answer:
      "From our Sector 31 Gurugram hub and Sarita Vihar Delhi office we target same-business-day response for critical rodent or cockroach outbreaks on AMC sites, and typically 24–48 hours for a first audit and treatment plan on a new facility.",
  },
];

const whyChoose = [
  {
    icon: Layers,
    title: "Integrated Pest Management (IPM)",
    text: "Inspection first, then baiting, proofing, and monitoring—not blanket spraying. Activity is tracked so treatments stay targeted and auditable.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly, government-approved chemicals",
    text: "Labelled, approved formulations (including food-area compatible gel baits) applied at specified dilution. Occupied floors stay operational.",
  },
  {
    icon: ClipboardCheck,
    title: "Scheduled AMC visits with digital reporting",
    text: "Calendarised rounds, QR or mobile job sheets, bait-station maps, and trend notes you can file for HACCP, ISO, or RWA audits.",
  },
  {
    icon: HardHat,
    title: "Certified technicians with PPE",
    text: "Uniformed, trained applicators with PPE, chemical handling discipline, and discreet access protocols for offices, hospitals, and hotels.",
  },
  {
    icon: ShieldCheck,
    title: "One vendor with your other facility services",
    text: "Bundle pest AMC with housekeeping, security, and MEP so Gurugram and NCR sites have a single contract owner and one SLA.",
  },
];

const industriesServed = [
  { name: "Corporate Offices", href: "/industries#corporate-offices", icon: Briefcase },
  { name: "Hospitals", href: "/industries#hospitals-healthcare", icon: HeartPulse },
  { name: "Hospitality", href: "/industries#hospitality-hotels", icon: Hotel },
  { name: "F&B / Warehouses", href: "/industries#manufacturing-industrial", icon: Warehouse },
  { name: "Education", href: "/industries#educational-campuses", icon: GraduationCap },
  { name: "Residential Societies", href: "/industries#residential-societies", icon: Home },
];

export default function PestControlServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Pest Control Services", url: "/services/pest-control" },
  ];

  const serviceSchema = {
    name: "Pest Control Services",
    serviceType: "Commercial Integrated Pest Management and Pest Control",
    description: pestCategory.description,
    url: `${SITE_URL}/services/pest-control`,
  };

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <JsonLd type="Service" service={serviceSchema} />
      <JsonLd type="FAQPage" faqs={pestFaqs} />

      <div className="bg-white">
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
                Pest Control Services
              </li>
            </ol>
          </div>
        </nav>

        <section className="bg-hero-gradient text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brandblue-500/20 text-brandcyan-300 border border-brandcyan-400/30 mb-3">
                {pestCategory.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {pestCategory.headline}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {pestCategory.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#sub-services"
                  className="px-6 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all"
                >
                  View Pest Control Scope
                </a>
                <a
                  href="#assessment-form"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 transition-colors shadow-md"
                >
                  Request a Pest Control Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600">
              Part of our <strong>specialised facility stack</strong> — the same vendor as drone façade, marble restoration, housekeeping, security, and MEP.
            </span>
            <Link
              href="/services/specialised"
              className="text-brandblue-600 font-bold hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              View specialised services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        <section id="sub-services" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Service Directory"
              title="Pest Control Sub-Services"
              subtitle="Commercial modules delivered by certified technicians across Gurugram, New Delhi, Noida, Faridabad, and Manesar. Each programme can run standalone or on a combined AMC."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pestCategory.subServices.map((sub) => {
                const Icon = subIcons[sub.iconName] || Bug;
                return (
                  <div
                    key={sub.id}
                    id={sub.slug}
                    className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between scroll-mt-24"
                  >
                    <div>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-50 to-emerald-50 border border-slate-200 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-brandgreen-600" />
                        </div>
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
                        {sub.shortDescription}
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
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Why KD"
              title="Why Choose KD Integrated Services for Pest Control"
              subtitle="The same operational rigor we apply to housekeeping, PASARA security, and MEP—applied to pest AMC across Gurugram and Delhi NCR."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-50 to-emerald-50 border border-slate-200 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-brandgreen-600" />
                    </div>
                    <h3 className="text-base font-bold font-heading text-navy-950 mb-2">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Sectors"
              title="Industries We Serve"
              subtitle="Pest programmes sized for corporate, clinical, hospitality, logistics, campus, and residential environments."
            />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {industriesServed.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group p-4 bg-white border border-slate-200 rounded-2xl text-center hover:border-brandcyan-400 hover:shadow-md transition-all"
                  >
                    <div className="w-10 h-10 mx-auto rounded-xl bg-slate-50 group-hover:bg-brandblue-50 border border-slate-200 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-brandgreen-600" />
                    </div>
                    <h3 className="text-xs font-bold text-navy-950 group-hover:text-brandblue-600 leading-snug">
                      {item.name}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brandblue-50 text-brandblue-700 border border-brandblue-200 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Common Questions</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Pest Control Services — FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {pestFaqs.map((faq, i) => (
                <div
                  key={i}
                  className="p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2"
                >
                  <h3 className="text-sm sm:text-base font-bold text-navy-950 flex items-start gap-2">
                    <span className="text-brandblue-600 font-extrabold">Q.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 bg-navy-950 text-white border-t border-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading">Ready to lock in a pest AMC?</h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Site audit in Gurugram or Delhi NCR, then a transparent treatment calendar.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#assessment-form"
                className="px-6 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all"
              >
                Request a Pest Control Audit
              </a>
              <a
                href="#assessment-form"
                className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 transition-colors"
              >
                Get an AMC Quote
              </a>
            </div>
          </div>
        </section>

        <section id="assessment-form" className="py-16 sm:py-24 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm
              initialService="Commercial Pest Management (IPM)"
              headline="Request a Pest Control Audit"
              subheadline="Tell us your site type and city. We will send an IPM plan, visit calendar, and AMC quote—usually within 2 business hours."
            />
          </div>
        </section>
      </div>
    </>
  );
}
