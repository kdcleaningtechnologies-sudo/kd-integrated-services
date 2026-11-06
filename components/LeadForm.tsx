"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Sparkles,
  Phone,
  User,
  Mail,
  ArrowRight,
  CalendarDays,
  Clock,
  Settings,
  Building2,
  MapPin,
  Users,
  Maximize2,
  Layers,
  StickyNote,
  Send,
  Shield,
  Plane,
  Bug,
  ConciergeBell,
} from "lucide-react";
import { companyInfo } from "@/content/company";

interface LeadFormProps {
  initialCity?: string;
  initialService?: string;
  headline?: string;
  subheadline?: string;
  theme?: "light" | "dark";
  variant?: "default" | "survey";
}

const PROPERTY_TYPES = [
  "Corporate Office / IT Park",
  "Hospital & Healthcare Facility",
  "Industrial & Manufacturing Plant",
  "Commercial Mall & Retail Center",
  "Residential Community (RWA / AOA)",
  "School & Educational Campus",
  "Hotel & Hospitality",
  "Warehouse & Logistics Hub",
  "Other Commercial Property",
];

const CITIES = [
  "Gurgaon (Gurugram)",
  "Delhi (NCR)",
  "Noida & Greater Noida",
  "Faridabad",
  "Manesar & IMT",
  "Other NCR Location",
];

const AREA_RANGES = [
  "Under 10,000 sq.ft.",
  "10,000 – 25,000 sq.ft.",
  "25,000 – 50,000 sq.ft.",
  "50,000 – 100,000 sq.ft.",
  "100,000 – 250,000 sq.ft.",
  "250,000+ sq.ft. (Campus)",
];

const SERVICE_OPTIONS = [
  "Housekeeping & Soft Services",
  "Manned Security & Access Control",
  "Technical MEP & HVAC Maintenance",
  "Autonomous Façade & Drone Cleaning",
  "Marble Polishing & Floor Restoration",
  "Commercial Pest Management (IPM)",
  "Total Integrated Facility Management (IFM)",
];

const SURVEY_SERVICES = [
  { label: "Housekeeping", icon: Sparkles },
  { label: "Security", icon: Shield },
  { label: "High-Rise / Façade", icon: Building2 },
  { label: "Drone Cleaning", icon: Plane },
  { label: "Engineering AMC", icon: Settings },
  { label: "Pest Control", icon: Bug },
  { label: "Pantry & Stewarding", icon: ConciergeBell },
];

const STAFF_COUNT_OPTIONS = [
  "1 – 5 personnel",
  "6 – 15 personnel",
  "16 – 30 personnel",
  "31 – 50 personnel",
  "50+ personnel",
  "To be recommended after audit",
];

const SURVEY_CREW_OPTIONS = [
  "1-10 staff",
  "11-25 staff",
  "26-50 staff",
  "50+ staff",
  "Recommend after audit",
];

const NOTES_MAX = 300;

function FieldLabel({
  icon: Icon,
  children,
  required,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="flex items-center gap-1.5 text-xs font-bold text-navy-900 mb-1.5">
      <Icon className="w-3.5 h-3.5 text-slate-500" />
      <span>
        {children}
        {required ? <span className="text-red-500"> *</span> : null}
      </span>
    </label>
  );
}

export const LeadForm: React.FC<LeadFormProps> = ({
  initialCity = "",
  initialService = "",
  headline = "Request a Free Facility Assessment",
  subheadline = "Get an audit report, custom manpower deployment plan, and transparent quote within 2 business hours.",
  theme = "light",
  variant = "default",
}) => {
  const isSurvey = variant === "survey";
  const serviceChoices = isSurvey ? SURVEY_SERVICES.map((s) => s.label) : SERVICE_OPTIONS;
  const crewChoices = isSurvey ? SURVEY_CREW_OPTIONS : STAFF_COUNT_OPTIONS;

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    propertyType: PROPERTY_TYPES[0],
    city: initialCity ? (CITIES.find((c) => c.toLowerCase().includes(initialCity.toLowerCase())) || initialCity) : CITIES[0],
    approxArea: isSurvey ? "" : AREA_RANGES[1],
    requiredServices: initialService ? [initialService] : [serviceChoices[0]],
    staffRequired: crewChoices[0],
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successLeadId, setSuccessLeadId] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const toggleService = (service: string) => {
    setFormData((prev) => {
      const exists = prev.requiredServices.includes(service);
      if (exists) {
        if (prev.requiredServices.length === 1) return prev;
        return {
          ...prev,
          requiredServices: prev.requiredServices.filter((s) => s !== service),
        };
      }
      return {
        ...prev,
        requiredServices: [...prev.requiredServices, service],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          approxArea: formData.approxArea || "To be confirmed on survey",
          sourceUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit assessment request.");
      }

      setSuccessLeadId(data.leadId || "KD-CONFIRMED");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please call us directly.";
      setErrorMessage(message);
    } finally {
      setLoading(false);
    }
  };

  const isDark = theme === "dark";

  const resetForm = () => {
    setSuccessLeadId(null);
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      propertyType: PROPERTY_TYPES[0],
      city: CITIES[0],
      approxArea: isSurvey ? "" : AREA_RANGES[1],
      requiredServices: [serviceChoices[0]],
      staffRequired: crewChoices[0],
      message: "",
    });
  };

  if (successLeadId) {
    return (
      <div
        className={`p-8 md:p-12 rounded-3xl border text-center shadow-2xl transition-all ${
          isSurvey || isDark ? "bg-white border-slate-200 text-navy-950" : "bg-white border-slate-200 text-navy-950"
        }`}
      >
        <div className="w-16 h-16 bg-gradient-to-br from-[#0066FF] via-[#0099FF] to-[#00D2B4] rounded-full flex items-center justify-center mx-auto mb-5 shadow-lg shadow-brandblue-500/30">
          <CheckCircle2 className="w-9 h-9 text-white" />
        </div>
        <span className="inline-block px-3.5 py-1 bg-gradient-to-r from-brandblue-500/10 to-brandcyan-500/10 text-brandblue-600 text-xs font-semibold rounded-full border border-brandcyan-500/20 mb-2">
          Request Confirmed #{successLeadId}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold font-heading mb-3">Your Free Facility Audit is Scheduled</h3>
        <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base leading-relaxed font-normal">
          Thank you, <strong>{formData.name}</strong>. Our senior facility solutions director for{" "}
          <strong>{formData.city}</strong> will contact you within <strong>2 business hours</strong> to finalize your on-site walkthrough.
        </p>
        <button
          onClick={resetForm}
          className="text-xs font-semibold text-brandblue-600 hover:text-brandblue-700 underline underline-offset-4"
        >
          Submit another property assessment
        </button>
      </div>
    );
  }

  const inputClasses = isSurvey
    ? "w-full px-4 py-3 rounded-full border-0 bg-slate-100 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brandblue-500/25 text-sm transition-all"
    : isDark
    ? "w-full px-4 py-3 rounded-xl border border-navy-700 bg-navy-950 text-white placeholder-slate-400 focus:outline-none focus:border-brandcyan-400 focus:ring-2 focus:ring-brandcyan-400/20 text-xs sm:text-sm transition-all"
    : "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-slate-50 focus:bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brandblue-500 focus:ring-4 focus:ring-brandblue-500/10 text-xs sm:text-sm transition-all shadow-sm";

  const selectClasses = isSurvey
    ? "w-full px-4 py-3 rounded-full border-0 bg-slate-100 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brandblue-500/25 transition-all cursor-pointer"
    : isDark
    ? "w-full px-4 py-3 rounded-xl border border-navy-700 bg-navy-950 text-white text-xs sm:text-sm focus:outline-none focus:border-brandcyan-400 focus:ring-2 focus:ring-brandcyan-400/20 transition-all cursor-pointer"
    : "w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/80 hover:bg-slate-50 focus:bg-white text-slate-900 text-xs sm:text-sm focus:outline-none focus:border-brandblue-500 focus:ring-4 focus:ring-brandblue-500/10 transition-all shadow-sm cursor-pointer";

  const labelClasses = isDark
    ? "block text-xs font-semibold text-slate-200 mb-1.5"
    : "block text-xs font-semibold text-slate-800 mb-1.5";

  if (isSurvey) {
    return (
      <div id="assessment-form" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        <aside className="lg:col-span-5 relative text-white flex flex-col h-full min-h-[640px] overflow-hidden">
          <div className="absolute inset-y-0 right-0 w-[62%] pointer-events-none hidden sm:block">
            <div className="relative h-full w-full">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Modern glass commercial facility"
                fill
                sizes="40vw"
                className="object-cover object-[70%_center] rounded-3xl opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#071426] via-[#071426]/70 to-transparent rounded-3xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071426] via-[#071426]/20 to-[#071426]/40 rounded-3xl" />
            </div>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between gap-8">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brandcyan-400/50 bg-[#071426]/60 text-[10px] font-extrabold uppercase tracking-wider text-brandcyan-400 mb-5">
              <CalendarDays className="w-3.5 h-3.5" />
              FREE SITE SURVEY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight leading-[1.15]">
              Schedule Your Free{" "}
              <span className="relative inline-block text-brandcyan-400 pb-2">
                Facility Survey
                <svg
                  className="pointer-events-none absolute left-0 right-0 -bottom-0.5 h-3 w-full"
                  viewBox="0 0 240 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M4 8 C 70 16, 170 0, 236 7" stroke="#00D6B5" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed max-w-sm">
              Our site experts visit your property, assess requirements and share a transparent manpower & cost proposal.
            </p>
            <div className="mt-7 space-y-4 max-w-sm">
              {[
                { icon: Clock, text: "On-site assessment within 48 hours" },
                { icon: Settings, text: "Custom SOP & staffing plan" },
                { icon: ShieldCheck, text: "No obligation, no lock-in" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.text} className="flex items-center gap-3 text-sm text-slate-100">
                    <span className="w-10 h-10 rounded-xl bg-[#0B1930] border border-brandcyan-500/25 flex items-center justify-center text-brandcyan-400 shrink-0">
                      <Icon className="w-4 h-4" />
                    </span>
                    <span className="font-medium leading-snug">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative z-10 rounded-2xl bg-[#0B1930]/90 border border-white/10 p-4 sm:p-5 space-y-3.5 w-full mt-auto backdrop-blur-sm">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-3 hover:text-brandcyan-300 transition-colors">
              <span className="w-9 h-9 rounded-lg bg-[#071426] border border-brandcyan-500/20 flex items-center justify-center text-brandcyan-400 shrink-0">
                <Phone className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] text-slate-400">Call Us</p>
                <p className="text-sm font-bold text-white">{companyInfo.phoneIndia.replace(" (India)", "")}</p>
              </div>
            </a>
            <a href={`tel:${companyInfo.marketingHead.phone}`} className="flex items-center gap-3 hover:text-brandcyan-300 transition-colors">
              <span className="w-9 h-9 rounded-lg bg-[#071426] border border-brandcyan-500/20 flex items-center justify-center text-brandcyan-400 shrink-0">
                <User className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] text-slate-400">Marketing Head – {companyInfo.marketingHead.name}</p>
                <p className="text-sm font-bold text-white">{companyInfo.marketingHead.displayPhone}</p>
              </div>
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-3 hover:text-brandcyan-300 transition-colors">
              <span className="w-9 h-9 rounded-lg bg-[#071426] border border-brandcyan-500/20 flex items-center justify-center text-brandcyan-400 shrink-0">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <p className="text-[11px] text-slate-400">Email</p>
                <p className="text-sm font-bold text-white break-all">{companyInfo.email}</p>
              </div>
            </a>
          </div>
          </div>
        </aside>

        <div className="lg:col-span-7 bg-white rounded-[1.75rem] p-6 sm:p-8 shadow-2xl shadow-black/20 h-full flex flex-col">
          {errorMessage && (
            <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
              <div>
                <p className="font-semibold">Submission Error</p>
                <p>{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-4 min-h-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel icon={User} required>
                  Full Name
                </FieldLabel>
                <input
                  type="text"
                  required
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel icon={Building2} required>
                  Company / Society
                </FieldLabel>
                <input
                  type="text"
                  required
                  placeholder="Company / Society name"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel icon={Phone} required>
                  Phone
                </FieldLabel>
                <input
                  type="tel"
                  required
                  placeholder="+91 98XXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel icon={Mail} required>
                  Email
                </FieldLabel>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel icon={Building2} required>
                  Property Type
                </FieldLabel>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className={selectClasses}
                >
                  {PROPERTY_TYPES.map((pt) => (
                    <option key={pt} value={pt}>
                      {pt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <FieldLabel icon={MapPin} required>
                  City
                </FieldLabel>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className={selectClasses}
                >
                  {CITIES.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel icon={Maximize2}>Area (sq ft)</FieldLabel>
                <input
                  type="text"
                  placeholder="e.g. 50,000"
                  value={formData.approxArea}
                  onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                  className={inputClasses}
                />
              </div>
              <div>
                <FieldLabel icon={Users}>Crew Size</FieldLabel>
                <select
                  value={formData.staffRequired}
                  onChange={(e) => setFormData({ ...formData, staffRequired: e.target.value })}
                  className={selectClasses}
                >
                  {SURVEY_CREW_OPTIONS.map((sc) => (
                    <option key={sc} value={sc}>
                      {sc}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <FieldLabel icon={Layers} required>
                Services Required
              </FieldLabel>
              <div className="flex flex-wrap gap-2">
                {SURVEY_SERVICES.map((srv) => {
                  const Icon = srv.icon;
                  const selected = formData.requiredServices.includes(srv.label);
                  return (
                    <button
                      type="button"
                      key={srv.label}
                      onClick={() => toggleService(srv.label)}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold border transition-all ${
                        selected
                          ? "bg-[#087BFF] text-white border-transparent shadow-md shadow-brandblue-500/20"
                          : "bg-white text-slate-600 border-slate-200 hover:border-brandblue-300"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{srv.label}</span>
                      {selected ? <CheckCircle2 className="w-3.5 h-3.5" /> : null}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex-1 flex flex-col min-h-[120px]">
              <FieldLabel icon={StickyNote}>Notes</FieldLabel>
              <div className="relative flex-1">
                <textarea
                  rows={3}
                  maxLength={NOTES_MAX}
                  placeholder="Shift timings, current challenges, start date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full h-full min-h-[120px] px-4 py-3 rounded-2xl border-0 bg-slate-100 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brandblue-500/25 text-sm transition-all resize-none"
                />
                <span className="absolute bottom-2.5 right-3 text-[10px] text-slate-400">
                  {formData.message.length} / {NOTES_MAX}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-1 mt-auto">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 px-6 py-3.5 rounded-full btn-brand-primary text-sm font-bold inline-flex items-center justify-center gap-2 disabled:opacity-75 shadow-lg shadow-brandblue-500/25"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Request Free Site Assessment</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
              <div className="hidden sm:block w-px h-10 bg-slate-200 shrink-0" />
              <p className="text-xs font-semibold text-navy-900 inline-flex items-center gap-2 shrink-0">
                <ShieldCheck className="w-5 h-5 text-slate-500" />
                Flexible & Custom Contracts
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      id="assessment-form"
      className={`rounded-3xl border p-6 sm:p-8 md:p-10 shadow-2xl transition-all ${
        isDark
          ? "bg-navy-900/95 border-navy-800 text-white"
          : "bg-white border-slate-200 text-navy-950 shadow-xl shadow-slate-200/50"
      }`}
    >
      <div className="mb-6 text-left pb-4 border-b border-slate-100">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/10 to-brandcyan-500/10 text-brandblue-700 border border-brandcyan-300 mb-3 shadow-sm">
          <ShieldCheck className="w-3.5 h-3.5 text-brandcyan-600" />
          <span>Operational Facility Assessment (Zero Obligation)</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold font-heading leading-tight tracking-tight text-navy-950">
          {headline}
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">{subheadline}</p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs sm:text-sm flex items-start gap-2.5">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600 mt-0.5" />
          <div>
            <p className="font-semibold">Submission Error</p>
            <p>{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vikram Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Company or Facility Name</label>
            <input
              type="text"
              placeholder="e.g. Acme Tech Park, Sector 44"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>
              Direct Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              required
              placeholder="+91 87966 82266"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>
              Official Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="vikram@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>Property Type</label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className={selectClasses}
            >
              {PROPERTY_TYPES.map((pt) => (
                <option key={pt} value={pt} className="text-slate-900 bg-white">
                  {pt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses}>Location / City</label>
            <select
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
              className={selectClasses}
            >
              {CITIES.map((c) => (
                <option key={c} value={c} className="text-slate-900 bg-white">
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClasses}>Approximate Built-up Area</label>
            <select
              value={formData.approxArea}
              onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
              className={selectClasses}
            >
              {AREA_RANGES.map((ar) => (
                <option key={ar} value={ar} className="text-slate-900 bg-white">
                  {ar}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={labelClasses}>Estimated Crew Requirement</label>
            <select
              value={formData.staffRequired}
              onChange={(e) => setFormData({ ...formData, staffRequired: e.target.value })}
              className={selectClasses}
            >
              {STAFF_COUNT_OPTIONS.map((sc) => (
                <option key={sc} value={sc} className="text-slate-900 bg-white">
                  {sc}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className={labelClasses}>
            Required Operational Services (Select all that apply) <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap gap-2.5 pt-1">
            {SERVICE_OPTIONS.map((srv) => {
              const selected = formData.requiredServices.includes(srv);
              return (
                <button
                  type="button"
                  key={srv}
                  onClick={() => toggleService(srv)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border text-left flex items-center gap-2 transition-all ${
                    selected
                      ? "bg-gradient-to-r from-[#0066FF] to-[#0091FF] text-white border-transparent shadow-md shadow-brandblue-500/25 scale-[1.01]"
                      : isDark
                      ? "bg-navy-900/80 text-slate-300 border-navy-700 hover:border-brandcyan-400"
                      : "bg-slate-100/90 text-slate-700 border-slate-200 hover:bg-brandblue-50/70 hover:border-brandblue-300 hover:text-brandblue-800"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${selected ? "bg-brandcyan-300 animate-pulse" : "bg-slate-400"}`} />
                  <span>{srv}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className={labelClasses}>Operational Notes or Current Vendor Pain Points (Optional)</label>
          <textarea
            rows={2}
            placeholder="e.g. Need audit for 2 chiller plants, high cleaner absenteeism during morning shifts..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={inputClasses}
          />
        </div>

        <p className="text-xs text-slate-500">
          Flexible monthly, quarterly, or annual contracts across Gurugram, Delhi NCR, Noida, Faridabad, and Manesar. No long-term lock-in required.
        </p>
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 px-6 rounded-2xl btn-brand-primary text-sm font-extrabold flex items-center justify-center gap-2.5 disabled:opacity-75 disabled:cursor-not-allowed group shadow-xl hover:shadow-2xl shadow-brandblue-500/25"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Processing Assessment Request...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              <span>Request Free Site Assessment</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
};
