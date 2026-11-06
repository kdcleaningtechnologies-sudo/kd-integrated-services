"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Send,
  Loader2,
} from "lucide-react";
import { partnerData } from "@/content/partner";
import { SectionHeading } from "@/components/SectionHeading";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    partnerName: "",
    company: "",
    phone: "",
    email: "",
    profileType: partnerData.eligibleProfiles[0],
    city: "Gurgaon",
    potentialClientDetails: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-navy-950 text-white py-14 sm:py-20 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-brandgreen-400 block mb-2">
              {partnerData.badge}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white tracking-tight leading-tight">
              {partnerData.headline}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {partnerData.subheadline}
            </p>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partner Advantage"
            title="Why Commercial Brokers & Consultants Partner with KD"
            subtitle="Turn your commercial real-estate client relationships into predictable recurring referral revenue streams."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {partnerData.benefits.map((b, i) => (
              <div
                key={i}
                className="p-5 bg-white border border-slate-300 space-y-2.5"
              >
                <div className="w-10 h-10 bg-navy-50 border border-slate-200 flex items-center justify-center text-brandgreen-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-heading text-navy-950">
                  {b.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Registration Form */}
          <div className="max-w-2xl mx-auto p-6 sm:p-8 bg-slate-50 border border-slate-300">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold text-brandgreen-700 block mb-1">
                Channel Partner Registration
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                Register as a Referral Partner
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Enter your details below to receive our formal partner MoU and commercial commission tier sheet, or reach our alliances desk directly at{" "}
                <a href="mailto:info@kdintegratedservices.com" className="text-brandgreen-700 font-bold hover:underline">
                  info@kdintegratedservices.com
                </a>.
              </p>
            </div>

            {success ? (
              <div className="p-6 bg-white border border-brandgreen-400 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-brandgreen-600 mx-auto" />
                <h4 className="text-lg font-bold text-navy-950">Partner Registration Received</h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.partnerName}</strong>. Our Head of Strategic Partnerships will contact you on <strong>{formData.phone}</strong> with the partner agreement and commission schedule.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Kapoor"
                      value={formData.partnerName}
                      onChange={(e) => setFormData({ ...formData, partnerName: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Brokerage / Firm Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kapoor Commercial Advisory"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@kapoorcre.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Professional Background *
                  </label>
                  <select
                    value={formData.profileType}
                    onChange={(e) => setFormData({ ...formData, profileType: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                  >
                    {partnerData.eligibleProfiles.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Upcoming Facility Lead / Property Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="If you have an active client requirement (e.g. 50,000 sq.ft. office in Cyber City needing 20 housekeeping staff), share details here..."
                    value={formData.potentialClientDetails}
                    onChange={(e) => setFormData({ ...formData, potentialClientDetails: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-300 bg-white text-xs text-slate-900 focus:outline-none focus:border-navy-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Registering Partner...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Register as Channel Partner
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
