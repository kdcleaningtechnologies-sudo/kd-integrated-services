import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ExternalLink, HelpCircle, ArrowRight, ChevronRight } from "lucide-react";
import { servicesData } from "@/content/services";
import { companyInfo } from "@/content/company";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { SITE_URL, socialMetadata } from "@/lib/seo";

const specialisedCategory = servicesData.find((s) => s.id === "specialised-services")!;

export const metadata: Metadata = {
  title: "Specialised Cleaning & Drone Façade Washing in Gurgaon",
  description:
    "Autonomous drone façade cleaning, Italian marble floor crystallization, integrated pest management, and IAQ disinfection across Gurgaon, Noida, and Delhi NCR.",
  keywords: [
    "Specialised Cleaning Services Gurgaon",
    "Drone Facade Cleaning Gurgaon",
    "Autonomous Drone Cleaning India",
    "Marble Polishing Services Gurgaon",
    "Pest Control Services Gurgaon",
    "Commercial Disinfection Services Delhi NCR",
  ],
  ...socialMetadata("/services/specialised", {
    title: "Specialised Cleaning & Drone Façade Washing in Gurgaon | KD Integrated Services",
    description: "High-tech façade cleaning drones, diamond marble polishing, and commercial pest management.",
  }),
};

const specialisedFaqs = [
  {
    question: "Up to what height can your autonomous cleaning drones wash façades?",
    answer: "Our industrial cleaning quadcopters operate comfortably up to 120 meters (approximately 35-40 commercial stories) using ground-supplied high-pressure fluid delivery tethers."
  },
  {
    question: "Why does pure water façade cleaning not leave streaks or water spots?",
    answer: "Our mobile rigs purify groundwater through multi-stage reverse-osmosis and deionization down to 000 PPM (Parts Per Million). Without dissolved minerals, the water dries completely spot-free without squeegees."
  },
  {
    question: "What chemical processes do you use for marble floor crystallization?",
    answer: "We use Klindex diamond resin discs (grit 400 to 3000) followed by thermo-chemical fluorosilicate crystallization to achieve a mirror-finish gloss reading above 85 on the digital glossmeter."
  },
  {
    question: "Is your pest management safe for food and cafeteria zones?",
    answer: "Yes. Commercial pest control is a dedicated specialised module with its own AMC. We use Bayer/Syngenta food-grade gel baits and odorless micro-encapsulated sprays aligned with HACCP and FSSAI. See our Pest Control Services page for full scope.",
  }
];

export default function SpecialisedServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Specialised Services & Drone Robotics", url: "/services/specialised" },
  ];

  const serviceSchema = {
    name: "Specialised Facility Services & Autonomous Drone Façade Washing",
    serviceType: "Specialized High-Rise Exterior & Floor Restoration Services",
    description: specialisedCategory.description,
    url: `${SITE_URL}/services/specialised`,
  };

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      <JsonLd type="Service" service={serviceSchema} />
      <JsonLd type="FAQPage" faqs={specialisedFaqs} />

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
                Specialised Services
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
                {specialisedCategory.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {specialisedCategory.headline}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                {specialisedCategory.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#sub-services"
                  className="px-6 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all"
                >
                  View Specialised Treatments
                </a>
                <Link
                  href="/technology"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-semibold text-xs border border-slate-700/80 hover:border-brandcyan-400/40 transition-colors shadow-md"
                >
                  KD Integrated Services Fleet
                </Link>
                <a
                  href={companyInfo.technologyArmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-brandcyan-300 hover:text-white font-semibold text-xs border border-brandcyan-500/40 inline-flex items-center gap-1.5 transition-colors shadow-md"
                >
                  <span>kdcleaningtechnologies.com</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Knowledge Link */}
        <section className="bg-slate-50 border-b border-slate-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-slate-600">
              🚁 <strong>Comparative Study:</strong> Discover how autonomous façade cleaning drones eliminate 100% of human fall liabilities while cutting cleaning turnaround by 70%.
            </span>
            <Link
              href="/insights/autonomous-drone-facade-cleaning-vs-traditional-scaffolding"
              className="text-brandblue-600 font-bold hover:underline flex items-center gap-1 whitespace-nowrap"
            >
              Read Drones vs Scaffolding Analysis <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </section>

        {/* Sub-services directory */}
        <section id="sub-services" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Engineering Scope"
              title="Specialised Treatments & Technological Capabilities"
              subtitle="Explore our advanced surface and high-access operations across Gurugram and Delhi NCR. Executed by certified façade pilots, stone restoration chemists, and pest management technicians."
            />

            <div className="space-y-6">
              {specialisedCategory.subServices.map((sub) => (
                <div
                  key={sub.id}
                  id={sub.slug}
                  className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4">
                      <span className="text-xs font-semibold text-brandblue-600 block mb-1">
                        Advanced Capability
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
                        <h3 className="font-bold text-navy-950">Recommended For:</h3>
                        <p className="text-slate-600 leading-relaxed">{sub.whoItsFor}</p>
                      </div>

                      <div className="p-4 bg-slate-50/80 rounded-xl border border-slate-200/80 text-xs space-y-1.5">
                        <h3 className="font-bold text-navy-950">Engineering Protocols:</h3>
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

              <div
                id="integrated-pest-management"
                className="p-6 sm:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-all scroll-mt-24"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-brandblue-600 block mb-1">
                      Specialised Module
                    </span>
                    <h2 className="text-xl font-bold font-heading text-navy-950 mb-2">
                      Commercial Pest Control & IPM
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                      Rodent, termite, mosquito, bed bug, bird deterrent, fumigation, and disinfection programmes now have a dedicated service page with full AMC scope for Gurugram and Delhi NCR.
                    </p>
                  </div>
                  <Link
                    href="/services/pest-control"
                    className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                  >
                    View Pest Control Services <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialised FAQs Section */}
        <section className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-brandblue-50 text-brandblue-700 border border-brandblue-200 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Common Questions</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-navy-950">
                Specialised Services & Robotics — FAQs
              </h2>
            </div>

            <div className="space-y-4">
              {specialisedFaqs.map((faq, i) => (
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
              initialService="Autonomous Façade & Drone Cleaning"
              headline="Request a Specialized Service or Drone Survey"
              subheadline="Our robotic façade engineers and stone restoration specialists will conduct an on-site feasibility evaluation."
            />
          </div>
        </section>
      </div>
    </>
  );
}
