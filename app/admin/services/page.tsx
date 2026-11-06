"use client";

import React, { useState, useEffect } from "react";
import {
  Sparkles,
  Shield,
  Wrench,
  Rocket,
  Bug,
  Save,
  CheckCircle2,
  Plus,
  Trash2,
  Edit,
  RefreshCw,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { servicesData as initialServicesData, ServiceCategory, SubService } from "@/content/services";

export default function AdminServicesPage() {
  const [categories, setCategories] = useState<ServiceCategory[]>(initialServicesData);
  const [activeTab, setActiveTab] = useState<string>(initialServicesData[0].id);
  const [saving, setSaving] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [editingSubId, setEditingSubId] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/admin/content?section=services");
        if (res.ok) {
          const data = await res.json();
          if (data.services) {
            setCategories(data.services);
          }
        }
      } catch (e) {
        console.error("Fetch services error:", e);
      }
    };
    fetchServices();
  }, []);

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];
  const currentCatIndex = categories.findIndex((c) => c.id === activeTab);

  const handleUpdateCategoryField = <K extends keyof ServiceCategory>(field: K, value: ServiceCategory[K]) => {
    const updated = [...categories];
    updated[currentCatIndex] = { ...updated[currentCatIndex], [field]: value };
    setCategories(updated);
  };

  const handleUpdateSubService = (subIndex: number, updates: Partial<SubService>) => {
    const updated = [...categories];
    const subServices = [...updated[currentCatIndex].subServices];
    subServices[subIndex] = { ...subServices[subIndex], ...updates };
    updated[currentCatIndex].subServices = subServices;
    setCategories(updated);
  };

  const handleAddSubService = () => {
    const newSub: SubService = {
      id: `sub-${Date.now()}`,
      slug: `new-service-${Date.now()}`,
      title: "New Sub-Service Offering",
      shortDescription: "Short client-facing overview of the scope.",
      whatItIs: "Detailed breakdown of the scope of work and protocol execution.",
      whoItsFor: "Corporate offices, industrial facilities, and Grade-A commercial properties.",
      benefits: [
        "100% SLA binding compliance with zero ghost workers",
        "Mechanized equipment deployment backed by KD Integrated Services",
        "Full statutory compliance and verified staffing roster",
      ],
      slaNote: "Guaranteed SLA uptime / quality score",
      iconName: "Sparkles",
    };
    const updated = [...categories];
    updated[currentCatIndex].subServices = [...updated[currentCatIndex].subServices, newSub];
    setCategories(updated);
    setEditingSubId(newSub.id);
  };

  const handleDeleteSubService = (subId: string) => {
    if (!confirm("Are you sure you want to delete this sub-service?")) return;
    const updated = [...categories];
    updated[currentCatIndex].subServices = updated[currentCatIndex].subServices.filter((s) => s.id !== subId);
    setCategories(updated);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setSavedSuccess(false);

      const res = await fetch("/api/admin/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ services: categories }),
      });

      if (res.ok) {
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 4000);
      }
    } catch (e) {
      console.error("Save services error:", e);
    } finally {
      setSaving(false);
    }
  };

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "soft-services":
        return <Sparkles className="w-4 h-4" />;
      case "security-services":
        return <Shield className="w-4 h-4" />;
      case "technical-services":
        return <Wrench className="w-4 h-4" />;
      case "specialised-services":
        return <Rocket className="w-4 h-4" />;
      case "pest-control-services":
        return <Bug className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <div className="pb-20">
      <AdminHeader
        title="Services & Operational Scope"
        subtitle="Manage the 5 core facility divisions, sub-services, scope, benefits, and SLAs."
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddSubService}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Sub-Service</span>
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-5 py-2 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-bold text-xs shadow-md inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>{saving ? "Saving..." : "Save Services"}</span>
            </button>
          </div>
        }
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
        {savedSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-sm animate-fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>All service categories, sub-services, and SLAs updated successfully!</span>
          </div>
        )}

        {/* Division Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200 custom-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-navy-950 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.menuTitle}</span>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeTab === cat.id ? "bg-brandgreen-400 text-navy-950 font-bold" : "bg-slate-100 text-slate-500"}`}>
                {cat.subServices.length}
              </span>
            </button>
          ))}
        </div>

        {/* Active Division Meta */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Division Title</label>
              <input
                type="text"
                value={currentCategory.title}
                onChange={(e) => handleUpdateCategoryField("title", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none font-bold"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Badge Tag</label>
              <input
                type="text"
                value={currentCategory.badge}
                onChange={(e) => handleUpdateCategoryField("badge", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">Headline</label>
              <input
                type="text"
                value={currentCategory.headline}
                onChange={(e) => handleUpdateCategoryField("headline", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block font-semibold text-slate-700 mb-1">Description</label>
              <textarea
                rows={2}
                value={currentCategory.description}
                onChange={(e) => handleUpdateCategoryField("description", e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Sub-Services List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-bold font-heading text-navy-950">
              Sub-Services under {currentCategory.menuTitle} ({currentCategory.subServices.length})
            </h2>
          </div>

          <div className="space-y-4">
            {currentCategory.subServices.map((sub, sIdx) => {
              const isEditing = editingSubId === sub.id;

              return (
                <div
                  key={sub.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4"
                >
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                    <div>
                      {isEditing ? (
                        <input
                          type="text"
                          value={sub.title}
                          onChange={(e) => handleUpdateSubService(sIdx, { title: e.target.value })}
                          className="font-bold text-navy-950 text-base bg-slate-50 border border-slate-300 rounded p-1.5"
                        />
                      ) : (
                        <h3 className="font-bold text-navy-950 text-base">{sub.title}</h3>
                      )}
                      <p className="text-xs text-slate-500 mt-0.5">{sub.shortDescription}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setEditingSubId(isEditing ? null : sub.id)}
                        className="p-1.5 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1"
                      >
                        <Edit className="w-3.5 h-3.5" />
                        <span>{isEditing ? "Done" : "Edit"}</span>
                      </button>
                      <button
                        onClick={() => handleDeleteSubService(sub.id)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                        title="Delete Sub-service"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {isEditing ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                      <div className="sm:col-span-2">
                        <label className="block font-semibold text-slate-700 mb-1">Short Description</label>
                        <input
                          type="text"
                          value={sub.shortDescription}
                          onChange={(e) => handleUpdateSubService(sIdx, { shortDescription: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block font-semibold text-slate-700 mb-1">Scope of Work (What it is)</label>
                        <textarea
                          rows={2}
                          value={sub.whatItIs}
                          onChange={(e) => handleUpdateSubService(sIdx, { whatItIs: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block font-semibold text-slate-700 mb-1">Who It&apos;s For</label>
                        <input
                          type="text"
                          value={sub.whoItsFor}
                          onChange={(e) => handleUpdateSubService(sIdx, { whoItsFor: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block font-semibold text-slate-700 mb-1">SLA Benchmark Note</label>
                        <input
                          type="text"
                          value={sub.slaNote || ""}
                          onChange={(e) => handleUpdateSubService(sIdx, { slaNote: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
                      <div>
                        <span className="font-bold text-slate-700 block mb-0.5">Scope:</span>
                        <p>{sub.whatItIs}</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 block mb-0.5">Who It&apos;s For:</span>
                        <p>{sub.whoItsFor}</p>
                      </div>
                      <div>
                        <span className="font-bold text-slate-700 block mb-0.5">SLA Commitment:</span>
                        <p className="font-semibold text-brandgreen-800">{sub.slaNote || "100% SLA binding"}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-8 py-3.5 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 font-extrabold text-sm shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer disabled:opacity-50"
          >
            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            <span>{saving ? "Saving Changes..." : "Save All Services & Scope"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
