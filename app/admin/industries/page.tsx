"use client";

import React, { useState, useEffect } from "react";
import {
  Building2,
  Briefcase,
  HeartPulse,
  Factory,
  Hotel,
  ShoppingBag,
  GraduationCap,
  Save,
  CheckCircle2,
  Plus,
  Trash2,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { industriesData as initialIndustries, Industry } from "@/content/industries";

export default function AdminIndustriesPage() {
  const [industries, setIndustries] = useState<Industry[]>(initialIndustries);
  const [activeTab, setActiveTab] = useState<string>(initialIndustries[0].id);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const fetchIndustries = async () => {
      try {
        const res = await fetch("/api/admin/content?section=industries");
        if (res.ok) {
          const data = await res.json();
          if (data.industries && Array.isArray(data.industries)) {
            setIndustries(data.industries);
          }
        }
      } catch (e) {
        console.error("Fetch industries error:", e);
      }
    };
    fetchIndustries();
  }, []);

  const currentIndex = industries.findIndex((i) => i.id === activeTab);
  const currentIndustry = industries[currentIndex] || industries[0];

  const handleUpdateField = <K extends keyof Industry>(field: K, value: Industry[K]) => {
    const updated = [...industries];
    updated[currentIndex] = { ...updated[currentIndex], [field]: value };
    setIndustries(updated);
  };

  const handleUpdatePainPoint = (pIndex: number, val: string) => {
    const updated = [...industries];
    const points = [...updated[currentIndex].painPoints];
    points[pIndex] = val;
    updated[currentIndex].painPoints = points;
    setIndustries(updated);
  };

  const handleAddPainPoint = () => {
    const updated = [...industries];
    updated[currentIndex].painPoints = [
      ...updated[currentIndex].painPoints,
      "New operational pain point or compliance risk.",
    ];
    setIndustries(updated);
  };

  const handleDeletePainPoint = (pIndex: number) => {
    const updated = [...industries];
    updated[currentIndex].painPoints = updated[currentIndex].painPoints.filter((_, idx) => idx !== pIndex);
    setIndustries(updated);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setSavedSuccess(false);

      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ industries }),
      });

      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
      }
    } catch (e) {
      console.error("Save industries error:", e);
    } finally {
      setSaving(false);
    }
  };

  const getIndustryIcon = (id: string) => {
    switch (id) {
      case "corporate-offices":
        return <Briefcase className="w-4 h-4" />;
      case "hospitals-healthcare":
        return <HeartPulse className="w-4 h-4" />;
      case "residential-societies":
        return <Building2 className="w-4 h-4" />;
      case "manufacturing-industrial":
        return <Factory className="w-4 h-4" />;
      case "hospitality-hotels":
        return <Hotel className="w-4 h-4" />;
      case "retail-malls":
        return <ShoppingBag className="w-4 h-4" />;
      case "educational-campuses":
        return <GraduationCap className="w-4 h-4" />;
      default:
        return <Building2 className="w-4 h-4" />;
    }
  };

  return (
    <div className="pb-20">
      <AdminHeader
        title="Industries & Verticals"
        subtitle="Manage the 7 sector frameworks, specialized client pain points, KD tailored solutions, and SLA guarantees."
        actions={
          <div className="flex items-center gap-2">
            <a
              href="/industries"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              <span>Preview Live</span>
            </a>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{saving ? "Saving..." : "Save Industries"}</span>
            </button>
          </div>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
        {savedSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-sm animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>All industry verticals, solutions, and SLA commitments saved successfully!</span>
          </div>
        )}

        {/* Industry Vertical Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
          {industries.map((ind) => {
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-navy-950 text-white shadow-md border border-navy-800"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <span className={isActive ? "text-brandcyan-400" : "text-slate-400"}>
                  {getIndustryIcon(ind.id)}
                </span>
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Editor Card */}
        {currentIndustry && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-brandcyan-400 flex items-center justify-center">
                  {getIndustryIcon(currentIndustry.id)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy-950">{currentIndustry.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">Anchor: #{currentIndustry.slug}</p>
                </div>
              </div>
              <a
                href={`/industries#${currentIndustry.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brandblue-600 hover:text-brandblue-700 font-semibold flex items-center gap-1"
              >
                <span>View on Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Core Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Industry Title
                </label>
                <input
                  type="text"
                  value={currentIndustry.name}
                  onChange={(e) => handleUpdateField("name", e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandblue-500 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  SLA Commitment Highlight
                </label>
                <input
                  type="text"
                  value={currentIndustry.slaHighlight}
                  onChange={(e) => handleUpdateField("slaHighlight", e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandblue-500 font-medium"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Value Headline
                </label>
                <input
                  type="text"
                  value={currentIndustry.headline}
                  onChange={(e) => handleUpdateField("headline", e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandblue-500 font-medium"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Core Industry Problem Statement
                </label>
                <textarea
                  rows={2}
                  value={currentIndustry.shortProblem}
                  onChange={(e) => handleUpdateField("shortProblem", e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandblue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  KD Integrated Solution Framework
                </label>
                <textarea
                  rows={3}
                  value={currentIndustry.kdSolution}
                  onChange={(e) => handleUpdateField("kdSolution", e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandblue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Sector Impact Quote
                </label>
                <input
                  type="text"
                  value={currentIndustry.quote}
                  onChange={(e) => handleUpdateField("quote", e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandblue-500 italic"
                />
              </div>
            </div>

            {/* Pain Points Section */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Client Pain Points & Operational Risks ({currentIndustry.painPoints?.length || 0})
                  </h4>
                  <p className="text-[11px] text-slate-400">
                    Key friction points that lead clients in this vertical to switch to KD Integrated Services.
                  </p>
                </div>
                <button
                  onClick={handleAddPainPoint}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add Point</span>
                </button>
              </div>

              <div className="space-y-2">
                {currentIndustry.painPoints?.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-2">
                    <span className="text-slate-400 font-mono text-[11px] w-5 text-right flex-shrink-0">
                      #{pIdx + 1}
                    </span>
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => handleUpdatePainPoint(pIdx, e.target.value)}
                      className="flex-1 px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brandblue-500"
                    />
                    <button
                      onClick={() => handleDeletePainPoint(pIdx)}
                      title="Delete point"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Services Tags */}
            <div className="pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Mapped Service Modules
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentIndustry.recommendedServices?.map((srv, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200"
                  >
                    <span>{srv.name}</span>
                    <a
                      href={srv.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-brandblue-600"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
