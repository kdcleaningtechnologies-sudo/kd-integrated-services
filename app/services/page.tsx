import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { servicesData } from "@/content/services";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Facility Management Services in Gurgaon & Delhi NCR",
  description:
    "Browse KD Integrated Services: housekeeping, PASARA security, MEP maintenance, pest control, drone façade cleaning, and specialised treatments across Gurugram and Delhi NCR.",
  keywords: [
    "Facility Management Services Gurgaon",
    "Facility Management Services Gurugram",
    "Housekeeping Services Gurgaon",
    "Pest Control Services Gurugram",
    "Security Services NCR",
    "Technical Facility Services Gurgaon",
  ],
  ...socialMetadata("/services", {
    title: "Facility Management Services in Gurgaon & Delhi NCR | KD Integrated Services",
    description:
      "One vendor for housekeeping, security, MEP, pest control, and specialised facility services across Gurugram and Delhi NCR.",
  }),
};

export default function ServicesDirectoryPage({
  searchParams,
}: {
  searchParams?: { q?: string };
}) {
  const query = (searchParams?.q || "").trim().toLowerCase();
  const filtered = query
    ? servicesData.filter((category) => {
        const haystack = [
          category.title,
          category.menuTitle,
          category.description,
          ...category.subServices.map((s) => `${s.title} ${s.shortDescription}`),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      })
    : servicesData;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />

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
              <li className="font-semibold text-navy-950" aria-current="page">
                Services
              </li>
            </ol>
          </div>
        </nav>

        <section className="bg-hero-gradient text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brandblue-500/20 text-brandcyan-300 border border-brandcyan-400/30 mb-3">
                Service Directory
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Facility Management Services in Gurgaon & Delhi NCR
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Housekeeping, PASARA security, MEP maintenance, pest control, drone façade cleaning, and specialised treatments — under one SLA across Gurugram, New Delhi, Noida, Faridabad, and Manesar.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/facility-management"
                  className="px-6 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all inline-flex items-center gap-1.5"
                >
                  Compare IFM Packages <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href="#assessment-form"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 transition-colors shadow-md"
                >
                  Request a Facility Audit
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="All Divisions"
              title={query ? `Results for “${searchParams?.q}”` : "Choose a Service Division"}
              subtitle="Open any card for scope, SLAs, and an AMC quote. Pest control, cleaning, security, technical MEP, and specialised robotics are all available as standalone or bundled contracts."
            />

            {filtered.length === 0 ? (
              <p className="text-sm text-slate-600">
                No matching services.{" "}
                <Link href="/services" className="text-brandblue-600 font-semibold hover:underline">
                  View the full directory
                </Link>
                .
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filtered.map((category) => (
                  <ServiceCard key={category.id} category={category} />
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="assessment-form" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm
              headline="Request a Facility Services Assessment"
              subheadline="Tell us which divisions you need. We will send a site audit plan and AMC quote, usually within 2 business hours."
            />
          </div>
        </section>
      </div>
    </>
  );
}
