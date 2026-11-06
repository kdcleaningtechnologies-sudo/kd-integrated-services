import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BookOpen,
  Clock,
  ArrowRight,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Building2,
  Cpu,
} from "lucide-react";
import { insightsArticles } from "@/content/insights";
import { SectionHeading } from "@/components/SectionHeading";
import { JsonLd } from "@/components/JsonLd";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Facility Management Insights & B2B Knowledge Hub",
  description:
    "Expert articles on Integrated Facility Management (IFM), PASARA security compliance, corporate housekeeping SLAs, and MEP maintenance for commercial properties in Gurgaon and Delhi NCR.",
  keywords: [
    "Facility Management Insights",
    "Corporate IFM Guide Delhi NCR",
    "PASARA Compliance Gurgaon",
    "Corporate Housekeeping Benchmarks",
    "Commercial MEP Maintenance Checklist",
    "Drone Facade Cleaning India",
  ],
  ...socialMetadata("/insights", {
    title: "Facility Management Insights & Knowledge Hub | KD Integrated Services",
    description:
      "Expert operational guides, SLA benchmarks, and compliance checklists for corporate facility directors and administration heads in Delhi NCR.",
  }),
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Facility Strategy":
      return <Building2 className="w-4 h-4 text-brandblue-600" />;
    case "Security & Risk":
      return <ShieldCheck className="w-4 h-4 text-brandcyan-600" />;
    case "Soft Services":
      return <Sparkles className="w-4 h-4 text-brandblue-600" />;
    case "Innovation & Robotics":
      return <Cpu className="w-4 h-4 text-brandcyan-600" />;
    default:
      return <BookOpen className="w-4 h-4 text-brandblue-600" />;
  }
};

export default function InsightsHubPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Facility Insights", url: "/insights" },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />

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
                Insights & Knowledge Hub
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-hero-gradient text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/20 to-brandcyan-500/20 text-brandcyan-300 border border-brandcyan-400/30 mb-3">
                <BookOpen className="w-3.5 h-3.5 text-brandcyan-400" />
                <span>B2B Operations & Strategy Library</span>
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Commercial Facility Management Insights & Compliance Guides
              </h1>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Actionable operational intelligence for corporate facility managers, CRE directors, and admin leaders across Gurugram, Delhi NCR, and beyond. Explore statutory compliance checklists, SLA benchmarks, and engineering best practices.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Published Whitepapers & Articles"
              title="Operational Guides for Corporate Decision-Makers"
              subtitle="Deep dives into single-SLA vendor consolidation, statutory labor welfare compliance, hygiene loops, and robotics."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insightsArticles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brandblue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Header Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-navy-950">
                      <Image
                        src={article.featuredImage}
                        alt={`${article.title} - KD Integrated Services guide`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-navy-950/80 backdrop-blur-md text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5">
                        {getCategoryIcon(article.category)}
                        <span>{article.category}</span>
                      </div>
                    </div>

                    <div className="p-6 space-y-3">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{article.readTime}</span>
                        <span>•</span>
                        <span>{new Date(article.publishedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      </div>

                      <h2 className="text-lg font-bold font-heading text-navy-950 group-hover:text-brandblue-600 transition-colors line-clamp-2">
                        <Link href={`/insights/${article.slug}`}>
                          {article.title}
                        </Link>
                      </h2>

                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {article.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-slate-500">
                      By {article.author}
                    </span>
                    <Link
                      href={`/insights/${article.slug}`}
                      className="text-xs font-bold text-brandblue-600 group-hover:text-brandcyan-600 flex items-center gap-1 transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links to Core Services */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
              Need Tailored Facility Support for Your Commercial Campus?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
              Schedule a comprehensive on-site facility audit across Gurugram, Delhi, Noida, Faridabad, or Manesar with zero commercial obligation.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl btn-brand-primary text-xs font-bold shadow-md hover:shadow-lg transition-all"
              >
                Request Free Facility Assessment
              </Link>
              <Link
                href="/facility-management"
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-navy-950 font-bold text-xs border border-slate-300 transition-colors"
              >
                Explore IFM AMC Packages
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
