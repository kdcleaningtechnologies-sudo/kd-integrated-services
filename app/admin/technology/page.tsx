"use client";

import React, { useState, useEffect } from "react";
import {
  Cpu,
  Save,
  CheckCircle2,
  Plus,
  Trash2,
  Edit,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { technologyData as initialTechData, TechCapability } from "@/content/technology";

export default function AdminTechnologyPage() {
  const [techData, setTechData] = useState(initialTechData);
  const [capabilities, setCapabilities] = useState<TechCapability[]>(initialTechData.capabilities);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await fetch("/api/admin/content?section=technology");
        if (res.ok) {
          const data = await res.json();
          if (data.technology) {
            setTechData(data.technology);
            setCapabilities(data.technology.capabilities || initialTechData.capabilities);
          }
        }
      } catch (e) {
        console.error("Fetch technology error:", e);
      }
    };
    fetchTech();
  }, []);

  const handleSaveAll = async () => {
    try {
      setSaving(true);
      setSavedSuccess(false);

      const payload = {
        technology: {
          ...techData,
          capabilities,
        },
      };

      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
      }
    } catch (e) {
      console.error("Save tech error:", e);
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateCapability = (index: number, updates: Partial<TechCapability>) => {
    const updated = [...capabilities];
    updated[index] = { ...updated[index], ...updates };
    setCapabilities(updated);
  };

  const handleAddCapability = () => {
    const newCap: TechCapability = {
      id: `tech-${Date.now()}`,
      title: "New Robotics / IoT Capability",
      tagline: "Short operational differentiator tagline",
      description: "Detailed hardware / software specifications and workflow deployment description.",
      businessImpact: "Measurable SLA impact and client cost/safety improvement.",
      isAddOnService: true,
      addOnDetails: "Available as standalone Equipment-as-a-Service retainer.",
      iconName: "Cpu",
    };
    setCapabilities([...capabilities, newCap]);
    setEditingIndex(capabilities.length);
  };

  const handleDeleteCapability = (index: number) => {
    if (!confirm("Are you sure you want to delete this technology capability?")) return;
    setCapabilities(capabilities.filter((_, i) => i !== index));
  };

  return (
    <div className="pb-20">
      <AdminHeader
        title="Robotics & Technology Fleet"
        subtitle="Manage the 8 core technologies and KD Integrated Services specialized equipment division."
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddCapability}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Capability</span>
            </button>
            <button
              onClick={handleSaveAll}
              disabled={saving}
              className="px-5 py-2 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{saving ? "Saving..." : "Save Changes"}</span>
            </button>
          </div>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 space-y-8">
        {savedSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-sm animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Technology capabilities and fleet data saved successfully!</span>
          </div>
        )}

        {/* Section 1: KD Integrated Services Division Info */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-brandgreen-600" />
              <h2 className="text-base font-bold font-heading text-navy-950">
                Technology Arm Overview
              </h2>
            </div>
            <a
              href={techData.techArmUrl || "https://kdcleaningtechnologies.com/"}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-brandgreen-700 hover:underline flex items-center gap-1"
            >
              <span>{techData.techArmUrl || "https://kdcleaningtechnologies.com/"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Technology Arm Name
              </label>
              <input
                type="text"
                value={techData.techArmName}
                onChange={(e) => setTechData({ ...techData, techArmName: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Website Portal URL
              </label>
              <input
                type="url"
                value={techData.techArmUrl || "https://kdcleaningtechnologies.com/"}
                onChange={(e) => setTechData({ ...techData, techArmUrl: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-navy-900 focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">
                Division Summary Description
              </label>
              <textarea
                rows={3}
                value={techData.techArmDescription}
                onChange={(e) => setTechData({ ...techData, techArmDescription: e.target.value })}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:border-navy-900 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Section 2: 8 Capabilities Fleet Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold font-heading text-navy-950">
              Fleet Capabilities & Standalone EaaS ({capabilities.length})
            </h2>
            <span className="text-xs text-slate-500">
              Click &apos;Edit Details&apos; on any hardware or system to update copy.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap, idx) => {
              const isEditing = editingIndex === idx;

              return (
                <div
                  key={cap.id || idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-navy-50 border border-slate-200 flex items-center justify-center text-brandgreen-600 font-bold text-xs">
                          {idx + 1}
                        </div>
                        <div>
                          {isEditing ? (
                            <input
                              type="text"
                              value={cap.title}
                              onChange={(e) => handleUpdateCapability(idx, { title: e.target.value })}
                              className="font-bold text-navy-950 text-sm bg-slate-50 border border-slate-300 rounded p-1 w-full"
                            />
                          ) : (
                            <h3 className="font-bold text-navy-950 text-base">{cap.title}</h3>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setEditingIndex(isEditing ? null : idx)}
                          className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100"
                          title="Toggle Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeleteCapability(idx)}
                          className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {isEditing ? (
                      <div className="space-y-3 pt-2 text-xs">
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Tagline</label>
                          <input
                            type="text"
                            value={cap.tagline}
                            onChange={(e) => handleUpdateCapability(idx, { tagline: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Description</label>
                          <textarea
                            rows={3}
                            value={cap.description}
                            onChange={(e) => handleUpdateCapability(idx, { description: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                        <div>
                          <label className="block font-semibold text-slate-600 mb-1">Business Impact / SLA Metric</label>
                          <input
                            type="text"
                            value={cap.businessImpact}
                            onChange={(e) => handleUpdateCapability(idx, { businessImpact: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                          />
                        </div>
                        <div className="flex items-center gap-2 pt-1">
                          <input
                            type="checkbox"
                            id={`addon-${idx}`}
                            checked={cap.isAddOnService}
                            onChange={(e) => handleUpdateCapability(idx, { isAddOnService: e.target.checked })}
                            className="rounded text-brandgreen-600"
                          />
                          <label htmlFor={`addon-${idx}`} className="font-semibold text-slate-700">
                            Available as Standalone Add-On (EaaS)
                          </label>
                        </div>
                      </div>
                    ) : (
                      <>
                        <p className="text-xs font-semibold text-brandgreen-700">{cap.tagline}</p>
                        <p className="text-xs text-slate-600 leading-relaxed">{cap.description}</p>
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                          <span className="font-bold text-slate-700 block mb-0.5">SLA Impact:</span>
                          <span className="text-slate-600">{cap.businessImpact}</span>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px] font-mono">ID: {cap.id}</span>
                    {cap.isAddOnService && (
                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-[10px] font-bold">
                        Add-On Ready
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            onClick={handleSaveAll}
            disabled={saving}
            className="px-8 py-3.5 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>{saving ? "Saving Changes..." : "Save Technology Fleet Data"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
