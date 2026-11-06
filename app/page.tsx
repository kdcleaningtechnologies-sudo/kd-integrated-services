import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Users,
  ShieldCheck,
  Cpu,
  TrendingUp,
  Building2,
  Sparkles,
  Home,
  Plane,
  Wrench,
  Bug,
  ArrowRight,
  Droplets,
  QrCode,
  MapPin,
  LayoutDashboard,
  Check,
  Leaf,
  UserCheck,
  Radio,
  Headphones,
  Layers,
  ClipboardCheck,
} from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { LeadForm } from "@/components/LeadForm";
import { ClientsShowcase } from "@/components/ClientsShowcase";
import HeroSlideshow from "@/components/HeroSlideshow";

const SERVICES_CARDS = [
  {
    id: "integrated-facility-management",
    title: "Integrated Facility Management",
    desc: "Single-window management of soft & hard services.",
    href: "/facility-management",
    icon: Building2,
    image: "/images/services/service-ifm.jpg",
    alt: "KD Integrated Services operations team for integrated facility management",
  },
  {
    id: "commercial-cleaning",
    title: "Commercial Cleaning",
    desc: "Mechanized deep cleaning for offices, malls & IT parks.",
    href: "/services/cleaning",
    icon: Sparkles,
    image: "/images/services/service-commercial-cleaning.jpg",
    alt: "Mechanized ride-on floor scrubber commercial cleaning operations",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    desc: "Uniformed staff working to daily SOP checklists.",
    href: "/services/cleaning#corporate-housekeeping",
    icon: Home,
    image: "/images/services/service-housekeeping.jpg",
    alt: "Hospitality and corporate housekeeping professional cleaning desk",
  },
  {
    id: "security",
    title: "Security",
    desc: "PSARA-licensed, police-verified guards & supervisors.",
    href: "/services/security",
    icon: ShieldCheck,
    image: "/images/services/service-security.jpg",
    alt: "Uniformed security guard standing on duty for commercial perimeter safety",
  },
  {
    id: "high-rise-cleaning",
    title: "High-Rise Cleaning",
    desc: "Rope access & water-fed glass & façade care.",
    href: "/services/specialised#facade-cleaning",
    icon: Building2,
    image: "/images/services/service-highrise.jpg",
    alt: "Skyscraper glass curtain wall high-rise facade cleaning technician",
  },
  {
    id: "drone-cleaning",
    title: "Drone Cleaning",
    desc: "Autonomous façade washing with zero cradle risk.",
    href: "/technology",
    icon: Plane,
    image: "/images/services/service-drone.jpg",
    alt: "Autonomous façade drone cleaning commercial building exterior",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    desc: "Preventive AMCs for HVAC, electrical, plumbing & STP.",
    href: "/services/technical",
    icon: Wrench,
    image: "/images/services/service-maintenance.jpg",
    alt: "MEP electrical engineering maintenance technician inspecting panel",
  },
  {
    id: "pest-control",
    title: "Pest Control",
    desc: "Odorless, eco-safe treatments & green care.",
    href: "/services/pest-control",
    icon: Bug,
    image: "/images/services/service-pest.jpg",
    alt: "Commercial kitchen and facility hygiene environment for pest control services",
  },
];

const INDUSTRY_CARDS = [
  {
    id: "corporate",
    title: "Corporate",
    href: "/industries#corporate-offices",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    alt: "Corporate offices and IT parks",
  },
  {
    id: "residential",
    title: "Residential / RWA",
    href: "/industries#residential-societies",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80",
    alt: "Residential gated societies and condominium towers",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    href: "/industries#hospitals-healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
    alt: "Hospitals and healthcare clinical infrastructure",
  },
  {
    id: "industrial",
    title: "Industrial",
    href: "/industries#manufacturing-industrial",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    alt: "Manufacturing plants and industrial logistics warehouses",
  },
  {
    id: "hospitality",
    title: "Hospitality",
    href: "/industries#hospitality-hotels",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80",
    alt: "Luxury hotels, banquets, and hospitality clubs",
  },
  {
    id: "retail",
    title: "Retail",
    href: "/industries#retail-malls",
    image: "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=600&q=80",
    alt: "Retail shopping malls and flagship showrooms",
  },
  {
    id: "education",
    title: "Education",
    href: "/industries#educational-campuses",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    alt: "Educational institutions, universities, and schools",
  },
];

const TECHNOLOGY_FEATURES = [
  {
    id: "drones",
    title: "Cleaning Drones",
    desc: "High-rise & difficult access areas with zero cradle fall hazard",
    icon: Plane,
    image: "/images/technology/tech-drones.jpg",
  },
  {
    id: "water-fed",
    title: "Water-fed Systems",
    desc: "Streak-free glass & façade cleaning using 100% pure RO water",
    icon: Droplets,
    image: "/images/technology/tech-waterfed.jpg",
  },
  {
    id: "inspections",
    title: "Digital Inspections",
    desc: "QR-based & mobile reporting with real-time incident logging",
    icon: QrCode,
    image: "/images/technology/tech-inspections.jpg",
  },
  {
    id: "workforce",
    title: "Workforce Monitoring",
    desc: "Attendance, biometric verification & GPS field patrol tracking",
    icon: ShieldCheck,
    image: "/images/technology/tech-workforce.jpg",
  },
  {
    id: "dashboard",
    title: "Client Dashboard",
    desc: "Real-time SLA reports, audit logs & instant service visibility",
    icon: LayoutDashboard,
    image: "/images/technology/tech-dashboard.jpg",
  },
  {
    id: "equipment",
    title: "Advanced Equipment",
    desc: "Modern, eco-friendly and high-efficiency cleaning machines",
    icon: Sparkles,
    image: "/images/technology/tech-equipment.jpg",
  },
];

const HERO_PILLS = [
  { label: "Trained & Verified Workforce", icon: UserCheck },
  { label: "Advanced Cleaning Technology", icon: Sparkles },
  { label: "Real-time Service Monitoring", icon: Radio },
  { label: "Safe, Compliant & Eco-friendly", icon: Leaf },
];

const CASE_STUDIES = [
  {
    id: "corporate-office",
    title: "Integrated Housekeeping & Cleaning",
    category: "Corporate Office",
    desc: "Mechanized floor care, washroom hygiene and pantry services under one SOP-driven contract.",
    image: "/images/case-studies/case-corporate.jpg",
    href: "/projects#corporate",
  },
  {
    id: "residential-society",
    title: "RWA Facility Management",
    category: "Residential Society",
    desc: "Security, common-area upkeep, landscaping and engineering AMCs for a gated township.",
    image: "/images/case-studies/case-residential.jpg",
    href: "/projects#residential",
  },
  {
    id: "hospital",
    title: "Housekeeping + GDA + Security",
    category: "Hospital",
    desc: "Infection-control housekeeping, trained General Duty Assistants and 24/7 security cover.",
    image: "/images/case-studies/case-hospital.jpg",
    href: "/projects#healthcare",
  },
];

const COVERAGE_CITIES = ["Gurgaon", "Delhi", "Noida", "Faridabad", "Manesar"];

export default function HomePage() {
  return (
    <>
      <JsonLd />

      <section className="relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 text-white pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none opacity-40" />
        <div className="absolute inset-0 bg-telemetry-grid pointer-events-none opacity-20" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-brandcyan-400 uppercase">
                <span>FACILITY MANAGEMENT</span>
                <span className="text-slate-600">|</span>
                <span>CLEANING</span>
                <span className="text-slate-600">|</span>
                <span>SECURITY</span>
                <span className="text-slate-600">|</span>
                <span>MAINTENANCE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Technology-Driven{" "}
                <span className="text-gradient-brand">Facility Management</span>{" "}
                <span className="relative inline-block pb-4">
                  for Modern India
                  <svg
                    className="pointer-events-none absolute left-0 right-0 -bottom-1 h-4 w-full"
                    viewBox="0 0 220 16"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path d="M4 4 C 60 15, 160 15, 216 3" stroke="#00D6B5" strokeWidth="3.2" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                KD Integrated Services provides end-to-end facility management, housekeeping, cleaning, security and technical maintenance solutions for commercial, residential, industrial and institutional properties across Gurgaon and Delhi NCR.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {HERO_PILLS.map((pill) => {
                  const Icon = pill.icon;
                  return (
                    <div
                      key={pill.label}
                      className="flex items-center gap-3 rounded-2xl border border-navy-600/80 bg-navy-900/70 px-4 py-3"
                    >
                      <Icon className="w-4 h-4 text-brandcyan-400 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-100">{pill.label}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="#site-survey"
                  className="px-6 py-3 rounded-full btn-brand-primary text-xs sm:text-sm font-bold shadow-lg shadow-brandblue-500/25 hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  <span>Request a Free Site Survey</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#services"
                  className="px-6 py-3 rounded-full border border-slate-600 bg-navy-900/80 hover:bg-navy-800 text-xs sm:text-sm font-semibold text-slate-200 transition-colors"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[520px]">
              <HeroSlideshow />
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-8 sm:-mt-12 z-20 px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-200/60 flex items-center justify-center flex-shrink-0 text-brandblue-600">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">People</h4>
                <p className="text-xs text-slate-500 leading-snug">Trained & supervised workforce</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-200/60 flex items-center justify-center flex-shrink-0 text-brandcyan-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">Process</h4>
                <p className="text-xs text-slate-500 leading-snug">Standardised SOP-driven operations</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-200/60 flex items-center justify-center flex-shrink-0 text-brandblue-600">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">Technology</h4>
                <p className="text-xs text-slate-500 leading-snug">Digital monitoring & modern equipment</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 pt-3 sm:pt-0 sm:px-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-200/60 flex items-center justify-center flex-shrink-0 text-emerald-600">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy-950">Performance</h4>
                <p className="text-xs text-slate-500 leading-snug">Measurable service delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClientsShowcase className="mt-2" />

      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10">
            <div className="space-y-1 max-w-md">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brandblue-600">
                OUR SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Comprehensive Facility Management Solutions
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 max-w-xl">
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                From housekeeping and pest control to security, maintenance and technology-enabled operations, we provide end-to-end facility management services under one trusted partner.
              </p>
              <Link
                href="/services"
                className="text-xs font-bold text-brandblue-600 hover:text-brandblue-700 inline-flex items-center gap-1 whitespace-nowrap transition-colors"
              >
                <span>View All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES_CARDS.map((srv) => {
              const Icon = srv.icon;
              return (
                <Link
                  key={srv.id}
                  href={srv.href}
                  className="group bg-white rounded-2xl border border-slate-200/90 p-2.5 hover:border-brandcyan-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative">
                    <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-slate-100">
                      <Image
                        src={srv.image}
                        alt={srv.alt}
                        fill
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/95 shadow-sm flex items-center justify-center">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-brandcyan-500 group-hover:translate-x-0.5 transition-all" />
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-3 w-9 h-9 rounded-xl bg-gradient-to-br from-[#00C8E8] to-[#00D6B5] flex items-center justify-center text-white shadow-lg shadow-brandcyan-500/30">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="px-2 pt-7 pb-2">
                    <h3 className="text-sm font-bold text-navy-950 group-hover:text-brandblue-600 transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mt-1">{srv.desc}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="industries" className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brandblue-600">
                INDUSTRIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Serving Diverse Industries
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-2xl pt-1">
                We understand the <strong className="text-slate-700">unique requirements</strong> of every industry. Our tailored solutions ensure safety, hygiene and operational efficiency across all sectors.
              </p>
            </div>
            <Link
              href="/industries"
              className="text-xs font-bold text-brandblue-600 hover:text-brandblue-700 inline-flex items-center gap-1 whitespace-nowrap transition-colors"
            >
              <span>View All Industries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 pt-4">
            {INDUSTRY_CARDS.map((ind) => (
              <Link
                key={ind.id}
                href={ind.href}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-brandcyan-400 hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={ind.image}
                    alt={ind.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 15vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 flex items-center justify-between text-xs font-bold text-navy-950 group-hover:text-brandblue-600 transition-colors">
                  <span className="truncate">{ind.title}</span>
                  <ArrowRight className="w-3 h-3 text-slate-300 group-hover:text-brandcyan-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="technology" className="py-20 bg-[#071426] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-telemetry-grid opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brandcyan-500/30 bg-navy-900/70 text-[10px] font-extrabold uppercase tracking-wider text-brandcyan-400">
                OUR TECHNOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Smarter Tools.
                <br />
                Greater Control.
                <br />
                <span className="relative inline-block pb-2">
                  Better Outcomes.
                  <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#087BFF] to-[#00D6B5]" />
                </span>
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                We leverage modern technology and advanced equipment to deliver efficient, transparent and high-quality facility management services.
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-navy-600 bg-navy-900/80 px-4 py-2.5 text-xs text-slate-200">
                <Sparkles className="w-3.5 h-3.5 text-brandcyan-400" />
                <span>Powered by KD Cleaning Technologies — our in-house technology arm.</span>
              </div>
              <div>
                <Link
                  href="/technology"
                  className="px-5 py-2.5 rounded-full btn-brand-primary text-xs font-bold inline-flex items-center gap-2 shadow-lg shadow-brandblue-500/25 hover:shadow-xl transition-all"
                >
                  <span>Explore Our Technology</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TECHNOLOGY_FEATURES.map((tech) => {
                const Icon = tech.icon;
                return (
                  <Link
                    key={tech.id}
                    href="/technology"
                    className="group rounded-2xl overflow-hidden bg-navy-900/80 border border-navy-700/70 hover:border-brandcyan-400/70 transition-all"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={tech.image}
                        alt={tech.title}
                        fill
                        quality={90}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 18vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-navy-950/85 border border-white/10 flex items-center justify-center text-brandcyan-400">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-navy-950/85 border border-white/10 flex items-center justify-center text-white group-hover:text-brandcyan-400">
                        <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="p-3.5">
                      <h4 className="text-sm font-bold text-white mb-1">{tech.title}</h4>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{tech.desc}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-extrabold uppercase tracking-wider text-brandblue-600">
                WHY KD INTEGRATED SERVICES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight leading-tight">
                Your Trusted FM Partner in Delhi NCR
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed">
                Compliance-first operations, technology-backed supervision and contracts that put you in control — so your facility runs without surprises.
              </p>
              <div className="space-y-3 pt-1">
                {[
                  "PSARA-licensed security with EPFO/ESIC-compliant payroll",
                  "Flexible monthly AMCs — no long-term lock-in",
                  "Dedicated site supervisors with digital daily reporting",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm font-medium text-navy-900">
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center">
                  <Headphones className="w-5 h-5 text-slate-400 mx-auto mb-2" />
                  <p className="text-2xl sm:text-3xl font-extrabold text-navy-950">24/7</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Facility Support</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center">
                  <Layers className="w-5 h-5 text-slate-400 mx-auto mb-2" />
                  <p className="text-2xl sm:text-3xl font-extrabold text-navy-950">9+</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Integrated Solutions</p>
                </div>
                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 text-center">
                  <ClipboardCheck className="w-5 h-5 text-slate-400 mx-auto mb-2" />
                  <p className="text-2xl sm:text-3xl font-extrabold text-navy-950">100%</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">SOP Driven Operations</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl bg-[#071426] px-6 py-7 min-h-[190px]">
                <div className="relative z-10 max-w-[58%]">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-brandcyan-400 mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>COVERAGE</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white mb-4">Across Delhi NCR</h3>
                  <div className="flex flex-wrap gap-2">
                    {COVERAGE_CITIES.map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 rounded-full bg-navy-800/90 border border-navy-600 text-xs font-semibold text-slate-200"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pointer-events-none absolute right-[-20px] top-1/2 -translate-y-1/2 w-56 h-56" aria-hidden="true">
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-8 rounded-full border border-white/10" />
                  <div className="absolute inset-16 rounded-full border border-white/15" />
                  <div className="absolute inset-24 rounded-full border border-brandcyan-400/30" />
                  <span className="absolute right-16 top-1/2 -translate-y-1/2 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8">
            <div className="space-y-2">
              <span className="inline-flex px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                CASE STUDIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                Proven on the ground
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs font-bold text-navy-800 hover:text-brandblue-700 inline-flex items-center gap-1 whitespace-nowrap transition-colors px-4 py-2 rounded-full border border-slate-200 bg-white"
            >
              <span>View all case studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={cs.image}
                    alt={cs.title}
                    fill
                    quality={90}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 text-[11px] font-bold text-navy-900 shadow-sm">
                    <Building2 className="w-3 h-3 text-slate-500" />
                    {cs.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-bold text-navy-950">{cs.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed mt-2 flex-1">{cs.desc}</p>
                  <Link
                    href={cs.href}
                    className="text-sm font-bold text-brandblue-600 hover:text-brandblue-700 inline-flex items-center gap-1 pt-4"
                  >
                    <span>Read case study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="site-survey" className="relative py-16 sm:py-24 bg-[#071426] overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow opacity-70 pointer-events-none" />
        <div className="absolute -left-24 top-10 w-72 h-72 rounded-full bg-brandcyan-400/15 blur-3xl pointer-events-none" />
        <div className="absolute -right-16 bottom-0 w-96 h-96 rounded-full bg-brandblue-500/15 blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <LeadForm variant="survey" />
        </div>
      </section>
    </>
  );
}
