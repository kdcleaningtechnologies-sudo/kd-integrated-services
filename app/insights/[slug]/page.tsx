import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  Calendar,
  User,
  ChevronRight,
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from "lucide-react";
import { insightsArticles, InsightArticle } from "@/content/insights";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, absoluteUrl } from "@/lib/seo";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return insightsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = insightsArticles.find((a) => a.slug === params.slug);
  if (!article) return {};

  const pageUrl = absoluteUrl(`/insights/${article.slug}`);

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.keywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      url: pageUrl,
      type: "article",
      locale: "en_IN",
      publishedTime: article.publishedDate,
      modifiedTime: article.modifiedDate,
      authors: [article.author],
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: `${article.title} - KD Integrated Services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [article.featuredImage],
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article: InsightArticle | undefined = insightsArticles.find(
    (a) => a.slug === params.slug
  );

  if (!article) {
    notFound();
  }

  const pageUrl = absoluteUrl(`/insights/${article.slug}`);

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Insights", url: "/insights" },
    { name: article.title, url: `/insights/${article.slug}` },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <JsonLd
        type="Article"
        article={{
          headline: article.title,
          description: article.seoDescription,
          url: pageUrl,
          datePublished: article.publishedDate,
          dateModified: article.modifiedDate,
          authorName: article.author,
          image: `${SITE_URL}${article.featuredImage}`,
        }}
      />

      <div className="bg-white">
        {/* Breadcrumbs Bar */}
        <nav aria-label="Breadcrumb" className="bg-slate-100/80 border-b border-slate-200/80 py-2.5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center gap-2 text-xs text-slate-600 truncate">
              <li>
                <Link href="/" className="hover:text-brandblue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li>
                <Link href="/insights" className="hover:text-brandblue-600 transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="font-semibold text-navy-950 truncate" aria-current="page">
                {article.title}
              </li>
            </ol>
          </div>
        </nav>

        {/* Article Header */}
        <header className="bg-hero-gradient text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brandblue-500/20 text-brandcyan-300 border border-brandcyan-400/30">
                {article.category}
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-brandcyan-400" />
                <span>{article.readTime}</span>
              </span>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-brandcyan-400" />
                <span>Updated: {new Date(article.modifiedDate).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            {/* Author Byline */}
            <div className="pt-2 flex items-center gap-3 text-xs text-slate-300 border-t border-navy-800">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brandblue-500 to-brandcyan-400 flex items-center justify-center text-white font-bold">
                <User className="w-4 h-4" />
              </div>
              <div>
                <strong className="text-white block">{article.author}</strong>
                <span className="text-slate-400">{article.authorRole}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sidebar: Table of Contents & Internal Quick Links */}
            <aside className="lg:col-span-4 order-2 lg:order-1 space-y-6">
              {/* Table of Contents */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sticky top-24 space-y-3 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-navy-950 pb-2 border-b border-slate-200">
                  Table of Contents
                </h3>
                <nav className="space-y-1.5 text-xs">
                  {article.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="block py-1 text-slate-600 hover:text-brandblue-600 transition-colors"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                {/* Related Services Internal Links */}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-950 block">
                    Related Operational Scope
                  </span>
                  <div className="space-y-1.5">
                    {article.relatedServices.map((service, idx) => (
                      <Link
                        key={idx}
                        href={service.href}
                        className="p-2 rounded-lg bg-white border border-slate-200 hover:border-brandblue-400 text-xs font-semibold text-slate-800 hover:text-brandblue-600 flex items-center justify-between group transition-all"
                      >
                        <span>{service.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-brandblue-600 transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Regional Dispatch Hubs */}
                <div className="pt-4 border-t border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-navy-950 block">
                    Regional Facility Hubs
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {article.relatedCities.map((city, idx) => (
                      <Link
                        key={idx}
                        href={city.href}
                        className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs text-slate-700 hover:text-brandblue-600 hover:border-brandblue-300 transition-colors flex items-center gap-1"
                      >
                        <MapPin className="w-3 h-3 text-brandcyan-600" />
                        <span>{city.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Article Body */}
            <article className="lg:col-span-8 order-1 lg:order-2 space-y-10">
              {article.content.map((sec) => (
                <section key={sec.sectionId} id={sec.sectionId} className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy-950 border-b border-slate-100 pb-2">
                    {sec.heading}
                  </h2>

                  <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <ul className="space-y-2 pt-1 pl-2">
                      {sec.bulletPoints.map((bp, bpIdx) => (
                        <li key={bpIdx} className="text-sm text-slate-700 flex items-start gap-2.5">
                          <span className="w-2 h-2 rounded-full bg-brandblue-600 mt-2 flex-shrink-0" />
                          <span>{bp}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.callout && (
                    <div className="my-5 p-5 rounded-2xl bg-gradient-to-r from-brandblue-50/80 via-white to-brandcyan-50/60 border border-brandblue-200/80 space-y-1.5 shadow-sm">
                      <div className="flex items-center gap-2 font-bold text-navy-950 text-xs sm:text-sm">
                        <Sparkles className="w-4 h-4 text-brandblue-600" />
                        <span>{sec.callout.title}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {sec.callout.text}
                      </p>
                    </div>
                  )}
                </section>
              ))}

              {/* Share and Back Links */}
              <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/insights"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brandblue-600 hover:text-brandblue-700 transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to all Facility Insights</span>
                </Link>

                <div className="text-xs text-slate-500">
                  Published by <strong className="text-navy-950">KD Integrated Services</strong>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* Lead Assessment Intake Section */}
        <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadForm
              headline="Schedule an Engineering Site Audit"
              subheadline="Put your facility on an auditable single-SLA operational contract across Gurugram, Delhi NCR, and international hubs."
            />
          </div>
        </section>
      </div>
    </>
  );
}
