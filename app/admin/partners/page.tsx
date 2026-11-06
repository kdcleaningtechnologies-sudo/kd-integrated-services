"use client";

import React, { useState, useEffect } from "react";
import {
  Handshake,
  Search,
  Filter,
  Phone,
  Mail,
  MessageCircle,
  Trash2,
  FileSpreadsheet,
  X,
  Save,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Partner } from "@/lib/adminStorage";

export default function AdminPartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const [internalNotes, setInternalNotes] = useState("");

  const fetchPartners = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/partners");
      if (res.ok) {
        const data = await res.json();
        setPartners(data.partners || []);
      }
    } catch (e) {
      console.error("Partners fetch error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPartners();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: Partner["status"]) => {
    try {
      const res = await fetch("/api/admin/partners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        const data = await res.json();
        setPartners((prev) => prev.map((p) => (p.id === id ? data.partner : p)));
        if (selectedPartner?.id === id) {
          setSelectedPartner(data.partner);
        }
      }
    } catch (e) {
      console.error("Status update error:", e);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedPartner) return;
    try {
      const res = await fetch("/api/admin/partners", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedPartner.id, internalNotes }),
      });

      if (res.ok) {
        const data = await res.json();
        setPartners((prev) => prev.map((p) => (p.id === selectedPartner.id ? data.partner : p)));
        setSelectedPartner(data.partner);
      }
    } catch (e) {
      console.error("Note save error:", e);
    }
  };

  const handleDeletePartner = async (id: string) => {
    if (!confirm("Are you sure you want to remove this channel partner record?")) return;
    try {
      const res = await fetch(`/api/admin/partners?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setPartners((prev) => prev.filter((p) => p.id !== id));
        if (selectedPartner?.id === id) setSelectedPartner(null);
      }
    } catch (e) {
      console.error("Delete partner error:", e);
    }
  };

  const exportCSV = () => {
    if (partners.length === 0) return;
    const headers = ["ID", "Date", "Status", "Name", "Company", "Phone", "Email", "Profile Type", "Notes"];
    const rows = partners.map((p) => [
      `"${p.id}"`,
      `"${new Date(p.createdAt).toLocaleDateString("en-IN")}"`,
      `"${p.status || "PENDING"}"`,
      `"${p.partnerName || ""}"`,
      `"${p.company || ""}"`,
      `"${p.phone || ""}"`,
      `"${p.email || ""}"`,
      `"${p.profileType || ""}"`,
      `"${(p.notes || "").replace(/"/g, '""')}"`,
    ]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `KD_Channel_Partners_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredPartners = partners.filter((p) => {
    const matchesSearch =
      !searchQuery ||
      p.partnerName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.phone?.includes(searchQuery) ||
      p.profileType?.toLowerCase().includes(searchQuery.toLowerCase());

    const partnerStatus = p.status || "PENDING";
    const matchesStatus = statusFilter === "ALL" || partnerStatus === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const getPartnerBadge = (status?: string) => {
    switch (status) {
      case "VERIFIED":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">ACTIVE PARTNER</span>;
      case "MOU_SENT":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-300">MOU SENT</span>;
      case "INACTIVE":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">INACTIVE</span>;
      case "PENDING":
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">PENDING REVIEW</span>;
    }
  };

  return (
    <div className="pb-16">
      <AdminHeader
        title="Channel Partners & Brokers"
        subtitle={`Managing ${partners.length} commercial real estate broker & IPC referral registrations.`}
        actions={
          <button
            onClick={exportCSV}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
          >
            <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
            <span>Export CSV</span>
          </button>
        }
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6 space-y-6">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search partner name, agency, phone, email, or profession..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-navy-900 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-xs font-semibold text-slate-600">Status:</span>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs font-medium text-slate-800 focus:outline-none focus:border-navy-900"
            >
              <option value="ALL">All Partners ({partners.length})</option>
              <option value="PENDING">Pending Review</option>
              <option value="MOU_SENT">MoU Sent</option>
              <option value="VERIFIED">Active Partner</option>
              <option value="INACTIVE">Inactive</option>
            </select>
          </div>
        </div>

        {/* Partners Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-xs text-slate-500">
              <div className="w-6 h-6 rounded-full border-2 border-brandgreen-500 border-t-transparent animate-spin mx-auto mb-2" />
              Loading partners...
            </div>
          ) : filteredPartners.length === 0 ? (
            <div className="p-16 text-center space-y-2">
              <Handshake className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-base font-bold text-slate-700">No channel partners found</p>
              <p className="text-xs text-slate-500">
                Brokers and IPC agents registered through /partner will appear here.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4 sm:px-6">Status</th>
                    <th className="py-3 px-4">Partner Name & Org</th>
                    <th className="py-3 px-4">Profile Type</th>
                    <th className="py-3 px-4">Phone & Email</th>
                    <th className="py-3 px-4">Joined Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredPartners.map((partner) => {
                    const cleanPhone = partner.phone?.replace(/\D/g, "") || "";
                    const whatsappDirectUrl = `https://wa.me/${cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone}?text=${encodeURIComponent(`Hello ${partner.partnerName}, regarding your KD Integrated Services Partner Registration...`)}`;

                    return (
                      <tr
                        key={partner.id}
                        className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                          selectedPartner?.id === partner.id ? "bg-brandgreen-50/40" : ""
                        }`}
                        onClick={() => {
                          setSelectedPartner(partner);
                          setInternalNotes(partner.internalNotes || "");
                        }}
                      >
                        <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                          {getPartnerBadge(partner.status)}
                        </td>
                        <td className="py-4 px-4 font-medium">
                          <span className="font-bold text-navy-950 text-sm block">
                            {partner.partnerName}
                          </span>
                          {partner.company ? (
                            <span className="text-xs text-slate-600 font-semibold">
                              {partner.company}
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 italic">Independent Consultant</span>
                          )}
                        </td>
                        <td className="py-4 px-4 font-semibold text-slate-700">
                          {partner.profileType}
                        </td>
                        <td className="py-4 px-4 space-y-0.5">
                          <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                            <Phone className="w-3 h-3 text-brandgreen-600" />
                            <span>{partner.phone}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span>{partner.email}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-slate-500 whitespace-nowrap text-[11px]">
                          {new Date(partner.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1.5">
                            <a
                              href={`tel:${partner.phone}`}
                              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                              title="Call Partner"
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href={whatsappDirectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                              title="WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>
                            <button
                              onClick={() => handleDeletePartner(partner.id)}
                              className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                              title="Remove Partner"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Partner Detail Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {getPartnerBadge(selectedPartner.status)}
                  <span className="text-[11px] text-slate-400 font-mono">
                    ID: {selectedPartner.id}
                  </span>
                </div>
                <h2 className="text-xl font-bold font-heading text-navy-950">
                  {selectedPartner.partnerName}
                </h2>
                <p className="text-xs font-semibold text-slate-600">
                  {selectedPartner.profileType} {selectedPartner.company ? `• ${selectedPartner.company}` : ""}
                </p>
              </div>
              <button
                onClick={() => setSelectedPartner(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Status Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                Partner MoU Status
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "PENDING", label: "Pending Review" },
                  { key: "MOU_SENT", label: "Commission MoU Sent" },
                  { key: "VERIFIED", label: "Verified Active Partner" },
                  { key: "INACTIVE", label: "Inactive" },
                ].map((st) => (
                  <button
                    key={st.key}
                    onClick={() => handleUpdateStatus(selectedPartner.id, st.key as Partner["status"])}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      (selectedPartner.status || "PENDING") === st.key
                        ? "bg-navy-950 text-white shadow-md"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Partner Notes & Commission */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                Internal Commission & MoU Notes
              </label>
              <textarea
                rows={3}
                value={internalNotes}
                onChange={(e) => setInternalNotes(e.target.value)}
                placeholder="Record agreed commission terms (e.g. 5% first year AMC), verified GSTIN, or direct point of contact..."
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-navy-900"
              />
              <button
                onClick={handleSaveNotes}
                className="px-4 py-2 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Notes</span>
              </button>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${selectedPartner.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href={`tel:${selectedPartner.phone}`}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call</span>
                </a>
              </div>

              <button
                onClick={() => handleDeletePartner(selectedPartner.id)}
                className="text-xs font-semibold text-rose-600 hover:underline"
              >
                Delete Partner
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
