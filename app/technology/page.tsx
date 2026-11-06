import React from "react";
import type { Metadata } from "next";
import {
  Cpu,
  Plane,
  Droplets,
  Fingerprint,
  QrCode,
  Smartphone,
  LifeBuoy,
  Microscope,
  Tag,
  Check,
  ExternalLink,
} from "lucide-react";
import { technologyData } from "@/content/technology";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { BrandLogo } from "@/components/BrandLogo";
import { JsonLd } from "@/components/JsonLd";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Facility Technology & Robotics",
  description:
    "Explore KD Integrated Services: autonomous drone façade washing, water-fed pure water systems, QR inspection loops, and biometric attendance across Gurugram, Delhi, and Noida.",
  keywords: [
    "Drone Facade Cleaning India",
    "Water-Fed Pole Cleaning Gurgaon",
    "QR Based Facility Inspection",
    "KD Integrated Services",
    "Digital Facility Management Gurgaon",
  ],
  ...socialMetadata("/technology", {
    title: "Facility Technology & Robotics | KD Integrated Services",
    description:
      "Explore KD Integrated Services: autonomous drone façade washing, water-fed pure water systems, QR inspection loops, and biometric attendance across Gurugram, Delhi, and Noida.",
  }),
};

const getTechIcon = (iconName: string) => {
  const props = { className: "w-5 h-5 text-brandgreen-600" };
  switch (iconName) {
    case "Plane":
      return <Plane {...props} />;
    case "Droplets":
      return <Droplets {...props} />;
    case "Fingerprint":
      return <Fingerprint {...props} />;
    case "QrCode":
      return <QrCode {...props} />;
    case "Smartphone":
      return <Smartphone {...props} />;
    case "LifeBuoy":
      return <LifeBuoy {...props} />;
    case "Microscope":
      return <Microscope {...props} />;
    case "Tag":
      return <Tag {...props} />;
    default:
      return <Cpu {...props} />;
  }
};

export default function TechnologyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Technology & Robotics", url: "/technology" },
  ];

  return (
    <div className="bg-white">
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {/* Hero Banner */}
      <section className="bg-hero-gradient text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/20 via-brandcyan-500/15 to-transparent text-brandcyan-300 border border-brandcyan-400/30 mb-3">
              <a
                href={technologyData.techArmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline inline-flex items-center gap-1 font-bold"
                title="Explore KD Integrated Services Technology"
              >
                {technologyData.techArmName} Engineering Division
                <ExternalLink className="w-3 h-3 text-brandcyan-400" />
              </a>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              Smarter Operations Through Robotics, Pure-Water Systems & IoT
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              We do not treat technology as a marketing buzzword. Through our specialized engineering division —{" "}
              <a
                href={technologyData.techArmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-brandcyan-300 underline decoration-slate-600 hover:decoration-brandcyan-400 font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <strong>{technologyData.techArmName}</strong>
                <ExternalLink className="w-3 h-3 text-brandcyan-400" />
              </a>{" "}
              — we develop and deploy autonomous façade cleaning drones, ground-operated pure water reverse-osmosis systems, and auditable digital inspection workflows across Gurugram and Delhi NCR.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#capabilities"
                className="px-5 py-3 rounded-xl btn-brand-primary font-bold text-xs shadow-md hover:shadow-lg"
              >
                Explore 8 Tech Capabilities
              </a>
              <a
                href="#add-on-services"
                className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-white font-medium text-xs border border-slate-700/80 transition-colors"
              >
                Equipment-as-a-Service Add-Ons
              </a>
              <a
                href={technologyData.techArmUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-navy-900/90 hover:bg-navy-800 text-brandcyan-300 hover:text-white font-semibold text-xs border border-brandcyan-500/40 inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Visit kdcleaningtechnologies.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Arm Deep Dive */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-sm inline-block mb-1">
                <BrandLogo variant="cleaning" size="lg" theme="light" />
              </div>

              <SectionHeading
                align="left"
                badge="Engineering & Robotics Division"
                title={`Introducing ${technologyData.techArmName}`}
                subtitle="The specialized innovation arm powering every KD Integrated Services site deployment."
              />

              <p className="text-sm text-slate-700 leading-relaxed">
                {technologyData.techArmDescription}
              </p>

              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Human Scaffolding Risk:</strong> Drone façade washing eliminates high-risk cradle accidents on exterior glass up to 120 meters.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Zero Chemical Runoff:</strong> Deionized pure water (000 PPM) leaves streak-free glass without toxic detergent drain contamination.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-brandcyan-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ghost-Worker Prevention:</strong> Geo-fenced facial biometric kiosks ensure clients never pay for absent shifts.</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={technologyData.techArmUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl btn-brand-primary text-xs font-bold shadow-md hover:shadow-lg"
                >
                  <span>Explore KD Integrated Services Technology</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 bg-navy-950 text-white space-y-5 border border-navy-800">
                <div className="flex items-center justify-between pb-4 border-b border-navy-800">
                  <div>
                    <span className="text-xs font-semibold text-brandgreen-400 block">
                      Autonomous Hardware
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white">
                      The KD Façade Drone Fleet
                    </h3>
                  </div>
                  <div className="w-10 h-10 bg-navy-900 border border-navy-800 flex items-center justify-center text-brandgreen-400">
                    <Plane className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Engineered with carbon fiber frames, high-pressure variable spray nozzles, and continuous tethered pure-water delivery lines from ground filtration stations.
                </p>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3.5 bg-navy-900 border border-navy-800">
                    <span className="text-2xl font-bold text-brandgreen-400 font-heading block">
                      120 m
                    </span>
                    <span className="text-xs text-slate-400">Vertical flight ceiling reach</span>
                  </div>
                  <div className="p-3.5 bg-navy-900 border border-navy-800">
                    <span className="text-2xl font-bold text-brandgreen-400 font-heading block">
                      60% Faster
                    </span>
                    <span className="text-xs text-slate-400">Turnaround vs cradle ropes</span>
                  </div>
                </div>

                <a
                  href="#assessment-form"
                  className="w-full py-3 px-4 bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs text-center block transition-colors"
                >
                  Schedule Drone Demonstration
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Tech Capabilities Deep Dive */}
      <section id="capabilities" className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Infrastructure"
            title="8 Core Technology Capabilities"
            subtitle="Explore the technologies embedded across our soft services, hard FM, and specialized treatments."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {technologyData.capabilities.map((cap) => (
              <div
                key={cap.id}
                className="p-5 bg-white border border-slate-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-navy-50 border border-slate-200 flex items-center justify-center">
                      {getTechIcon(cap.iconName)}
                    </div>
                    {cap.isAddOnService && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 bg-brandgreen-50 text-brandgreen-800 border border-brandgreen-200">
                        Add-On Ready
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold font-heading text-navy-950 mb-1">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-brandgreen-700 font-medium mb-2">
                    {cap.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-700">
                  <span className="text-slate-500 block text-xs font-semibold mb-1">
                    Operational Benefit:
                  </span>
                  {cap.businessImpact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment-as-a-Service Standalone Add-Ons */}
      <section id="add-on-services" className="py-14 sm:py-20 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            theme="dark"
            badge="Equipment-as-a-Service"
            title="Bolt Specialized Technology Onto Your Existing Contract"
            subtitle="Already satisfied with your existing manpower vendor? You do not have to switch your entire housekeeping contract to benefit from KD's specialized equipment fleet."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-navy-900 border border-navy-800 space-y-3">
              <div className="w-10 h-10 bg-navy-800 flex items-center justify-center text-brandgreen-400">
                <Plane className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                Drone Façade Cleaning Retainer
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Add autonomous drone washing as a quarterly or bi-annual service. We provide DGCA permissions, tethered pure water, and zero scaffolding risk.
              </p>
              <a
                href="#assessment-form"
                className="inline-block text-xs font-semibold text-brandgreen-400 hover:text-brandgreen-300 pt-2"
              >
                Add Drone Cleaning to Existing Contract
              </a>
            </div>

            <div className="p-6 bg-navy-900 border border-navy-800 space-y-3">
              <div className="w-10 h-10 bg-navy-800 flex items-center justify-center text-brandgreen-400">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                Water-Fed Pure Water Retainer
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Keep low-rise windows, showroom glazing, and atrium glass clean up to 65 ft with zero ladders and 100% demineralized pure water.
              </p>
              <a
                href="#assessment-form"
                className="inline-block text-xs font-semibold text-brandgreen-400 hover:text-brandgreen-300 pt-2"
              >
                Add Water-Fed Pure Water Upkeep
              </a>
            </div>

            <div className="p-6 bg-navy-900 border border-navy-800 space-y-3">
              <div className="w-10 h-10 bg-navy-800 flex items-center justify-center text-brandgreen-400">
                <QrCode className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">
                QR Inspection Portal Retrofit
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Equip your building with tamper-proof QR audit tags for restrooms and guard beats, linked to custom client dashboards.
              </p>
              <a
                href="#assessment-form"
                className="inline-block text-xs font-semibold text-brandgreen-400 hover:text-brandgreen-300 pt-2"
              >
                Retrofit QR Custodial Audits
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Lead Form */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            initialService="Autonomous Façade & Drone Cleaning"
            headline="Request a Technology Deployment Consultation"
            subheadline="Discover how drone cleaning and pure-water systems can enhance your facility's presentation while lowering risk."
          />
        </div>
      </section>
    </div>
  );
}
