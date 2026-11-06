"use client";

import React, { useState, useEffect } from "react";
import {
  MapPin,
  CheckCircle2,
  Send,
  Loader2,
  Briefcase,
} from "lucide-react";
import { careersData as defaultCareersData } from "@/content/careers";
import { SectionHeading } from "@/components/SectionHeading";

export default function CareersPage() {
  const [careers, setCareers] = useState(defaultCareersData);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    position: "General Operations Application",
    experience: "1–3 Years",
    location: "Gurgaon",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("/api/content?section=careers", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data?.careers) {
          setCareers(data.careers);
        }
      })
      .catch((err) => console.error("Could not fetch dynamic careers content:", err));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          role: formData.position,
          experience: formData.experience,
          currentLocation: formData.location,
          notes: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      console.error("Careers submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  const openingsList = Array.isArray(careers.openings) ? careers.openings : [];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-hero-gradient text-white py-14 sm:py-20 border-b border-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-500/20 via-brandcyan-500/15 to-transparent text-brandcyan-300 border border-brandcyan-400/30 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-brandblue-500 to-brandcyan-400 animate-pulse" />
              {careers.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              {careers.headline}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {careers.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Welfare & Culture Highlights */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(careers.culturePoints || defaultCareersData.culturePoints).map((pt, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-brandcyan-400/80 transition-all space-y-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brandblue-50 to-brandcyan-50 border border-brandcyan-100 flex items-center justify-center text-brandblue-600 mb-1">
                  <CheckCircle2 className="w-5 h-5 text-brandcyan-600" />
                </div>
                <h3 className="text-base font-bold font-heading text-navy-950">
                  {pt.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Open Opportunities"
            title="Current Job Openings Across Delhi NCR"
            subtitle="Explore our active vacancies or submit a general application to join our talent database."
          />

          {openingsList.length > 0 ? (
            <div className="space-y-4 max-w-4xl mx-auto mb-14">
              {openingsList.map((job) => (
                <div
                  key={job.id}
                  className="p-6 sm:p-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-brandcyan-400 hover:-translate-y-0.5 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-brandblue-50 text-brandblue-700 font-semibold border border-brandblue-200">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {job.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        Exp: {job.experience}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold font-heading text-navy-950">
                      {job.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-brandcyan-600" />
                      <span>{job.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {job.description}
                    </p>
                  </div>

                  <a
                    href="#apply-form"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        position: job.title,
                        location: job.location,
                      }));
                    }}
                    className="px-5 py-2.5 rounded-xl btn-brand-primary text-xs font-semibold whitespace-nowrap self-start sm:self-center shadow-md hover:shadow-lg"
                  >
                    Apply for Role
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 px-6 max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl mb-14 space-y-3 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brandblue-50 border border-brandblue-100 text-brandblue-600 flex items-center justify-center mx-auto">
                <Briefcase className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-navy-950 font-heading">
                No Active Vacancies Currently Listed
              </h4>
              <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
                There are currently no active job postings. You can submit a direct application below to be added to our recruitment database for upcoming openings.
              </p>
            </div>
          )}

          {/* General Application Form */}
          <div id="apply-form" className="max-w-2xl mx-auto bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-8 scroll-mt-28 shadow-xl">
            <div className="text-center mb-6">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-brandblue-50 to-brandcyan-50 text-brandblue-700 border border-brandcyan-200 mb-2">
                Direct Candidate Application
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                Join the KD Operations Team
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Looking for supervisory, technical, or facility management roles? Submit your details below or email your CV directly to{" "}
                <a href="mailto:info@kdintegratedservices.com" className="text-brandblue-600 font-bold hover:underline">
                  info@kdintegratedservices.com
                </a>
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-white rounded-2xl border border-brandcyan-300 text-center space-y-3 shadow-md">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0066FF] to-[#00D2B4] flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-navy-950">Application Received</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our HR recruitment team will review your application and contact you on <strong>{formData.phone}</strong> if your profile matches open requirements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brandcyan-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brandcyan-500/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ramesh@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brandcyan-500/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Desired Position *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brandcyan-500/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Summary of Prior Experience & Certifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Mention previous companies, total years in facility management, DG/chiller experience, or certifications..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brandcyan-500/50"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl btn-brand-primary font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Submit Job Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
