import React from "react";
import type { Metadata } from "next";
import {
  ShieldCheck,
  Users,
  Cpu,
  Clock,
  ExternalLink,
} from "lucide-react";
import { companyInfo } from "@/content/company";
import { SectionHeading } from "@/components/SectionHeading";
import { LeadForm } from "@/components/LeadForm";
import { JsonLd } from "@/components/JsonLd";
import { ClientsShowcase } from "@/components/ClientsShowcase";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us — IFM Company in Gurgaon & Delhi",
  description:
    "Learn about KD Integrated Services, our leadership, PASARA & statutory compliance, and our specialized technology arm KD Integrated Services across Gurugram, Manesar, Noida, and Delhi NCR.",
  keywords: [
    "About KD Integrated Services",
    "Facility Management Company Gurgaon",
    "Facility Management Company Delhi",
    "Corporate Housekeeping Agency NCR",
    "PASARA Compliance Haryana",
    "KD Integrated Services Technology Arm",
  ],
  ...socialMetadata("/about", {
    title: "About KD Integrated Services | IFM Company in Gurgaon & Delhi",
    description:
      "Institutional-grade housekeeping, PASARA security, and MEP engineering with digital SLA proof. Offices in Gurgaon Sector 31 and Sarita Vihar, New Delhi.",
  }),
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
  ];

  return (
    <div className="bg-white">
      <JsonLd type="Organization" />
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {/* Hero Banner */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-brandgreen-400 block mb-2">
              Company Overview & Operational Rigor
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              Transforming Facility Management into a Strategic Corporate Advantage
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              KD Integrated Services was founded to bridge the critical gap between unorganized manpower contractors and overpriced global conglomerates. We provide institutional-grade soft, security, and MEP engineering services with modern digital accountability across Gurugram, Manesar, Noida, Faridabad, and Delhi NCR.
            </p>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <SectionHeading
                align="left"
                badge="The KD Difference"
                title="Outcome-Driven SLAs, Not Just Empty Manpower Headcounts"
                subtitle="In the traditional facility business, vendors bill for warm bodies regardless of whether your floors are scrubbed or your HVAC filters are washed. We flipped the model."
              />

              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                <p>
                  Every engagement with KD Integrated Services is bound by an objective Service Level Agreement (SLA). We deploy biometric facial attendance to eliminate ghost workers, install QR checkpoints across all restrooms to verify actual cleaning sweeps, and provide facility heads with automated 7 PM photo handover reports.
                </p>
                <p>
                  Through our specialized equipment arm,{" "}
                  <a
                    href={companyInfo.technologyArmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-950 hover:text-brandgreen-600 font-bold underline decoration-slate-300 hover:decoration-brandgreen-500 transition-colors inline-flex items-center gap-1"
                  >
                    <strong>{companyInfo.technologyArm}</strong>
                    <ExternalLink className="w-3.5 h-3.5 text-brandgreen-600" />
                  </a>
                  , we deploy autonomous façade cleaning drones, pure-water reverse osmosis filtration systems up to 65 ft, and ride-on sweepers that double workforce productivity while improving on-site safety.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-slate-50 border border-slate-300">
                  <span className="text-2xl font-bold font-heading text-brandgreen-600 block">
                    15% Float
                  </span>
                  <span className="text-xs text-slate-600">
                    Dedicated backup reserve ensuring zero absentee posts.
                  </span>
                </div>
                <div className="p-4 bg-slate-50 border border-slate-300">
                  <span className="text-2xl font-bold font-heading text-brandgreen-600 block">
                    Zero Lock-In
                  </span>
                  <span className="text-xs text-slate-600">
                    Flexible month-to-month and quarterly performance retainers.
                  </span>
                </div>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 bg-white border border-slate-300 space-y-2">
                <div className="w-10 h-10 bg-navy-50 border border-slate-200 flex items-center justify-center text-navy-900">
                  <ShieldCheck className="w-5 h-5 text-brandgreen-600" />
                </div>
                <h3 className="text-base font-bold font-heading text-navy-950">
                  100% Statutory Rigor
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Total adherence to EPFO, ESIC, PASARA, and Factory Acts. Monthly challan receipts submitted with every invoice.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-300 space-y-2">
                <div className="w-10 h-10 bg-navy-50 border border-slate-200 flex items-center justify-center text-navy-900">
                  <Cpu className="w-5 h-5 text-brandgreen-600" />
                </div>
                <h3 className="text-base font-bold font-heading text-navy-950">
                  Technology-First
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time QR checkpoint audits, mobile helpdesks, and robotic façade washing through{" "}
                  <a
                    href={companyInfo.technologyArmUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-950 hover:text-brandgreen-600 font-semibold underline decoration-slate-300 hover:decoration-brandgreen-500 transition-colors inline-flex items-center gap-0.5"
                  >
                    KD Integrated Services
                    <ExternalLink className="w-2.5 h-2.5 text-brandgreen-600" />
                  </a>.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-300 space-y-2">
                <div className="w-10 h-10 bg-navy-50 border border-slate-200 flex items-center justify-center text-navy-900">
                  <Users className="w-5 h-5 text-brandgreen-600" />
                </div>
                <h3 className="text-base font-bold font-heading text-navy-950">
                  People Welfare
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Prompt, transparent wage disbursement, medical insurance, and continuous career path upskilling.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-300 space-y-2">
                <div className="w-10 h-10 bg-navy-50 border border-slate-200 flex items-center justify-center text-navy-900">
                  <Clock className="w-5 h-5 text-brandgreen-600" />
                </div>
                <h3 className="text-base font-bold font-heading text-navy-950">
                  24/7 Rapid Escalation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Sub-15 minute emergency callback from our centralized operations control room for critical facility alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Esteemed Clients */}
      <ClientsShowcase />

      {/* Corporate Empanelment & Procurement Section */}
      <section id="compliance" className="py-14 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Enterprise Procurement Ready"
            title="Corporate Empanelment & Statutory Compliance"
            subtitle="Large enterprises, hospital networks, and PSU organizations require pre-registered, fully compliant facility vendors across Delhi NCR. We provide full audit transparency from day one."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div className="p-5 bg-white border border-slate-300 space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 block">
                Tax & Commercial
              </span>
              <h4 className="text-base font-bold font-heading text-navy-950">
                GST Compliance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active GSTIN with zero compliance defaults. Timely GSTR-1 and GSTR-3B filings ensure 100% uninterrupted input tax credit (ITC) for your accounts team.
              </p>
              <div className="pt-2 text-xs font-semibold text-brandgreen-700">
                GST: {companyInfo.compliance.gst}
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-300 space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 block">
                Employee Welfare
              </span>
              <h4 className="text-base font-bold font-heading text-navy-950">
                EPFO & ESIC Remittance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every on-site team member is registered under Employees&apos; Provident Fund and ESIC medical coverage. Monthly bank transaction challans provided with bills.
              </p>
              <div className="pt-2 text-xs font-semibold text-brandgreen-700">
                100% on-time statutory deposit record
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-300 space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 block">
                Security Regulation
              </span>
              <h4 className="text-base font-bold font-heading text-navy-950">
                PASARA Guarding Framework
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our manned guarding operations adhere to the Private Security Agencies (Regulation) Act, ensuring verified police background checks and certified guard curriculum.
              </p>
              <div className="pt-2 text-xs font-semibold text-brandgreen-700">
                {companyInfo.compliance.pasaraStatus}
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-300 space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 block">
                Risk Mitigation
              </span>
              <h4 className="text-base font-bold font-heading text-navy-950">
                Comprehensive Liability Insurance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Shields your enterprise from unexpected damages. Our third-party public liability insurance safeguards physical assets, premises, and visitors.
              </p>
              <div className="pt-2 text-xs font-semibold text-brandgreen-700">
                {companyInfo.compliance.insurance}
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-300 space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 block">
                Labor Regulation
              </span>
              <h4 className="text-base font-bold font-heading text-navy-950">
                Contract Labour Registration
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Registered under the Contract Labour (Regulation and Abolition) Act with active licenses across Haryana (Gurgaon) and Delhi NCR.
              </p>
              <div className="pt-2 text-xs font-semibold text-brandgreen-700">
                {companyInfo.compliance.laborLicense}
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-300 space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 block">
                Quality Systems
              </span>
              <h4 className="text-base font-bold font-heading text-navy-950">
                Standard Operating Procedures
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standardized operational checklists for chemical dilution, machine upkeep, color-coded cloth usage, and emergency fire evacuation drills.
              </p>
              <div className="pt-2 text-xs font-semibold text-brandgreen-700">
                Standardized corporate audit manuals
              </div>
            </div>
          </div>

          <div className="p-6 bg-navy-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-navy-800">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold font-heading text-white">
                Require Vendor Registration Documentation for Your RFP?
              </h4>
              <p className="text-xs text-slate-300">
                Our commercial bidding desk provides vendor registration forms, audited balance sheets, and compliance dossiers within 4 hours.
              </p>
            </div>
            <a
              href="#assessment-form"
              className="px-5 py-3 bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs whitespace-nowrap transition-colors"
            >
              Request Compliance Packet
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA / Lead Form */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LeadForm
            headline="Partner with KD Integrated Services"
            subheadline="Let's discuss how our integrated facility framework can elevate your property while optimizing operating costs."
          />
        </div>
      </section>
    </div>
  );
}
