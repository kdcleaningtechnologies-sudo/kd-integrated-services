"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Search,
  Filter,
  Phone,
  Mail,
  MessageCircle,
  FileSpreadsheet,
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  MapPin,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Lead } from "@/lib/adminStorage";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [cityFilter, setCityFilter] = useState("ALL");

  // Selected lead for detail modal
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [editingNotes, setEditingNotes] = useState(false);
  const [noteContent, setNoteContent] = useState("");
  const [updatingStatus, setUpdatingStatus] = useState(false);

  // New Lead Modal state
  const [createModalOpen, setCreateModalOpen] = useState(false);
  const [newLeadData, setNewLeadData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    city: "Gurgaon",
    propertyType: "Commercial Office",
    approxArea: "",
    staffRequired: "",
    message: "",
    requiredServices: ["Integrated Facility Management"],
    internalNotes: "",
  });

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/leads");
      if (res.ok) {
        const data = await res.json();
        setLeads(data.leads || []);
      }
    } catch (e) {
      console.error("Leads fetch error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleUpdateStatus = async (id: string, newStatus: Lead["status"]) => {
    try {
      setUpdatingStatus(true);
      const res = await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        const data = await res.json();
        setLeads((prev) => prev.map((l) => (l.id === id ? data.lead : l)));
        if (selectedLead?.id === id) {
          setSelectedLead(data.lead);
        }
      }
    } catch (e) {
      console.error("Status update error:", e);
    } finally {
      setUpdatingStatus(false);
    }
  };

  const handleSaveNotes = async () => {
    if (!selectedLead) return;
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: selectedLead.id, internalNotes: noteContent }),
      });

      if (res.ok) {
        const data = await res.json();
        setLeads((prev) => prev.map((l) => (l.id === selectedLead.id ? data.lead : l)));
        setSelectedLead(data.lead);
        setEditingNotes(false);
      }
    } catch (e) {
      console.error("Note update error:", e);
    }
  };

  const handleDeleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this lead?")) return;
    try {
      const res = await fetch(`/api/admin/leads?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (selectedLead?.id === id) setSelectedLead(null);
      }
    } catch (e) {
      console.error("Delete error:", e);
    }
  };

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newLeadData),
      });

      if (res.ok) {
        const data = await res.json();
        setLeads((prev) => [data.lead, ...prev]);
        setCreateModalOpen(false);
        setNewLeadData({
          name: "",
          company: "",
          phone: "",
          email: "",
          city: "Gurgaon",
          propertyType: "Commercial Office",
          approxArea: "",
          staffRequired: "",
          message: "",
          requiredServices: ["Integrated Facility Management"],
          internalNotes: "",
        });
      }
    } catch (e) {
      console.error("Create lead error:", e);
    }
  };

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ["ID", "Date", "Status", "Name", "Company", "Phone", "Email", "City", "Property Type", "Approx Area", "Services", "Staff Required", "Notes", "Message"];
    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${new Date(l.createdAt).toLocaleDateString("en-IN")}"`,
      `"${l.status}"`,
      `"${l.name || ""}"`,
      `"${l.company || ""}"`,
      `"${l.phone || ""}"`,
      `"${l.email || ""}"`,
      `"${l.city || ""}"`,
      `"${l.propertyType || ""}"`,
      `"${l.approxArea || ""}"`,
      `"${(l.requiredServices || []).join("; ")}"`,
      `"${l.staffRequired || ""}"`,
      `"${(l.internalNotes || "").replace(/"/g, '""')}"`,
      `"${(l.message || "").replace(/"/g, '""')}"`,
    ]);
    const csvContent = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `KD_Leads_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filter logic
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      !searchQuery ||
      lead.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.phone?.includes(searchQuery) ||
      lead.propertyType?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.message?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "ALL" || lead.status === statusFilter;
    const matchesCity = cityFilter === "ALL" || lead.city?.toLowerCase() === cityFilter.toLowerCase();

    return matchesSearch && matchesStatus && matchesCity;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "NEW":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">NEW</span>;
      case "ASSESSMENT_SCHEDULED":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-300">ASSESSMENT SET</span>;
      case "CONTACTED":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-300">CONTACTED</span>;
      case "PROPOSAL_SENT":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-300">QUOTE SENT</span>;
      case "WON":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-800 border border-purple-300">WON (AMC)</span>;
      case "LOST":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300">LOST</span>;
      case "ARCHIVED":
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-700">ARCHIVED</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  return (
    <div className="pb-16">
      <AdminHeader
        title="Facility Leads & Inquiries"
        subtitle={`Managing ${leads.length} incoming corporate and commercial facility assessment requests.`}
        actions={
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCreateModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-brandgreen-500 hover:bg-brandgreen-600 text-navy-950 text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Lead</span>
            </button>
            <button
              onClick={exportCSV}
              className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
            >
              <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
              <span>Export CSV</span>
            </button>
          </div>
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
              placeholder="Search by client name, company, phone, email, or property type..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-navy-900 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            {/* Status Filter */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
              <Filter className="w-3.5 h-3.5 text-slate-400" />
              <span>Status:</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs font-medium text-slate-800 focus:outline-none focus:border-navy-900"
              >
                <option value="ALL">All Statuses ({leads.length})</option>
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="ASSESSMENT_SCHEDULED">Assessment Scheduled</option>
                <option value="PROPOSAL_SENT">Proposal Sent</option>
                <option value="WON">Won (AMC)</option>
                <option value="LOST">Lost</option>
                <option value="ARCHIVED">Archived</option>
              </select>
            </div>

            {/* City Filter */}
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>City:</span>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-xl py-2 px-3 text-xs font-medium text-slate-800 focus:outline-none focus:border-navy-900"
              >
                <option value="ALL">All Cities</option>
                <option value="Gurgaon">Gurgaon / Gurugram</option>
                <option value="Delhi">Delhi</option>
                <option value="Noida">Noida</option>
                <option value="Greater Noida">Greater Noida</option>
                <option value="Faridabad">Faridabad</option>
                <option value="Manesar">Manesar</option>
              </select>
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          {loading ? (
            <div className="p-16 text-center text-xs text-slate-500">
              <div className="w-6 h-6 rounded-full border-2 border-brandgreen-500 border-t-transparent animate-spin mx-auto mb-2" />
              Loading facility leads...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-16 text-center space-y-2">
              <Users className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-base font-bold text-slate-700">No matching leads found</p>
              <p className="text-xs text-slate-500">
                Try adjusting your search criteria or filter options.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4 sm:px-6">Status</th>
                    <th className="py-3 px-4">Client Name & Org</th>
                    <th className="py-3 px-4">Contact Details</th>
                    <th className="py-3 px-4">Property & Scope</th>
                    <th className="py-3 px-4">Created Date</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredLeads.map((lead) => {
                    const cleanPhone = lead.phone.replace(/\D/g, "");
                    const whatsappDirectUrl = `https://wa.me/${cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone}?text=${encodeURIComponent(`Hello ${lead.name}, regarding your KD Integrated Services assessment inquiry...`)}`;

                    return (
                      <tr
                        key={lead.id}
                        className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                          selectedLead?.id === lead.id ? "bg-brandgreen-50/40" : ""
                        }`}
                        onClick={() => {
                          setSelectedLead(lead);
                          setNoteContent(lead.internalNotes || "");
                        }}
                      >
                        <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                          {getStatusBadge(lead.status)}
                        </td>
                        <td className="py-4 px-4 font-medium">
                          <span className="font-bold text-navy-950 text-sm block">
                            {lead.name}
                          </span>
                          {lead.company ? (
                            <span className="text-xs text-slate-600 font-semibold">
                              {lead.company}
                            </span>
                          ) : (
                            <span className="text-[11px] text-slate-400 italic">Individual Client</span>
                          )}
                        </td>
                        <td className="py-4 px-4 space-y-0.5">
                          <div className="flex items-center gap-1.5 text-slate-700 font-semibold">
                            <Phone className="w-3 h-3 text-brandgreen-600" />
                            <span>{lead.phone}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-500 text-[11px]">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <span>{lead.email}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="font-bold text-slate-800 block">
                            {lead.propertyType}
                          </span>
                          <span className="text-[11px] text-slate-500 block">
                            {lead.city} {lead.approxArea ? `• ${lead.approxArea}` : ""}
                          </span>
                          <span className="text-[11px] text-brandgreen-800 block truncate max-w-xs mt-0.5">
                            {(lead.requiredServices || []).join(", ")}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-500 whitespace-nowrap text-[11px]">
                          {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1.5">
                            <a
                              href={`tel:${lead.phone}`}
                              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                              title="Call"
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
                              onClick={() => {
                                setSelectedLead(lead);
                                setNoteContent(lead.internalNotes || "");
                              }}
                              className="p-2 rounded-lg bg-navy-50 hover:bg-navy-100 text-navy-900 transition-colors"
                              title="View & Edit Lead"
                            >
                              <Edit className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className="p-2 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-600 transition-colors"
                              title="Delete Lead"
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

      {/* Detail & Action Modal Drawer */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {getStatusBadge(selectedLead.status)}
                  <span className="text-[11px] text-slate-400 font-mono">
                    ID: {selectedLead.id}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold font-heading text-navy-950">
                  {selectedLead.name}
                </h2>
                {selectedLead.company && (
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">
                    {selectedLead.company}
                  </p>
                )}
              </div>
              <button
                onClick={() => setSelectedLead(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Change Status Fast Buttons */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider">
                Update Pipeline Status
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  { key: "NEW", label: "New" },
                  { key: "CONTACTED", label: "Contacted" },
                  { key: "ASSESSMENT_SCHEDULED", label: "Assessment Scheduled" },
                  { key: "PROPOSAL_SENT", label: "Proposal Sent" },
                  { key: "WON", label: "Won (AMC Retainer)" },
                  { key: "LOST", label: "Lost" },
                  { key: "ARCHIVED", label: "Archive" },
                ].map((st) => (
                  <button
                    key={st.key}
                    disabled={updatingStatus}
                    onClick={() => handleUpdateStatus(selectedLead.id, st.key as Lead["status"])}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedLead.status === st.key
                        ? "bg-navy-950 text-white shadow-md"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact & Property Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
              <div>
                <span className="text-slate-500 block mb-0.5 font-medium">Direct Phone:</span>
                <a href={`tel:${selectedLead.phone}`} className="font-bold text-navy-950 hover:underline flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-brandgreen-600" />
                  <span>{selectedLead.phone}</span>
                </a>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5 font-medium">Email Address:</span>
                <a href={`mailto:${selectedLead.email}`} className="font-bold text-navy-950 hover:underline flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-brandgreen-600" />
                  <span>{selectedLead.email}</span>
                </a>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5 font-medium">Property Type & City:</span>
                <span className="font-bold text-navy-950">
                  {selectedLead.propertyType} • {selectedLead.city}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block mb-0.5 font-medium">Approx Area & Headcount:</span>
                <span className="font-bold text-navy-950">
                  {selectedLead.approxArea || "Area not specified"} {selectedLead.staffRequired ? `(${selectedLead.staffRequired} staff)` : ""}
                </span>
              </div>
            </div>

            {/* Requested Services */}
            <div>
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
                Requested Services
              </span>
              <div className="flex flex-wrap gap-1.5">
                {(selectedLead.requiredServices || []).map((srv, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-semibold"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Message */}
            {selectedLead.message && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="text-slate-500 block mb-1 font-bold">Client Message / Notes:</span>
                <p className="text-slate-700 whitespace-pre-wrap leading-relaxed">
                  {selectedLead.message}
                </p>
              </div>
            )}

            {/* Internal Admin Notes */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-navy-950 uppercase tracking-wider">
                  Internal Operations Notes
                </span>
                {!editingNotes ? (
                  <button
                    onClick={() => setEditingNotes(true)}
                    className="text-xs font-semibold text-brandgreen-700 hover:underline"
                  >
                    Edit Notes
                  </button>
                ) : (
                  <button
                    onClick={handleSaveNotes}
                    className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    <Save className="w-3.5 h-3.5" /> Save
                  </button>
                )}
              </div>

              {editingNotes ? (
                <textarea
                  rows={3}
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  placeholder="Add internal notes about callback, quotation status, supervisor assigned, or pricing..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-800 focus:outline-none focus:border-navy-900"
                />
              ) : (
                <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100 italic">
                  {selectedLead.internalNotes || "No internal notes added yet. Click 'Edit Notes' to record follow-up details."}
                </p>
              )}
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <a
                  href={`https://wa.me/${selectedLead.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp</span>
                </a>
                <a
                  href={`tel:${selectedLead.phone}`}
                  className="px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Client</span>
                </a>
              </div>

              <button
                onClick={() => handleDeleteLead(selectedLead.id)}
                className="px-3.5 py-2 rounded-xl text-rose-600 hover:bg-rose-50 text-xs font-semibold"
              >
                Delete Lead
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manual Create Lead Modal */}
      {createModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <h2 className="text-xl font-bold font-heading text-navy-950">
                Add Offline / Inbound Lead
              </h2>
              <button
                onClick={() => setCreateModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateLead} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newLeadData.name}
                    onChange={(e) => setNewLeadData({ ...newLeadData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    value={newLeadData.company}
                    onChange={(e) => setNewLeadData({ ...newLeadData, company: e.target.value })}
                    placeholder="e.g. DLF Horizon Towers"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={newLeadData.phone}
                    onChange={(e) => setNewLeadData({ ...newLeadData, phone: e.target.value })}
                    placeholder="e.g. +91 98100 12345"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={newLeadData.email}
                    onChange={(e) => setNewLeadData({ ...newLeadData, email: e.target.value })}
                    placeholder="rajesh@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">City</label>
                  <select
                    value={newLeadData.city}
                    onChange={(e) => setNewLeadData({ ...newLeadData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
                  >
                    <option value="Gurgaon">Gurgaon / Gurugram</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Noida">Noida</option>
                    <option value="Greater Noida">Greater Noida</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="Manesar">Manesar</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Property Type</label>
                  <select
                    value={newLeadData.propertyType}
                    onChange={(e) => setNewLeadData({ ...newLeadData, propertyType: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
                  >
                    <option value="Commercial Office">Commercial Office / Tech Park</option>
                    <option value="Industrial / Manufacturing">Industrial Plant / Manufacturing</option>
                    <option value="Hospital / Healthcare">Hospital / Healthcare</option>
                    <option value="Retail Mall">Retail Mall / High Street</option>
                    <option value="Residential Society">Residential Society / High-Rise</option>
                    <option value="Data Center / Logistics">Data Center / Logistics Hub</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Scope & Requirements
                </label>
                <textarea
                  rows={3}
                  value={newLeadData.message}
                  onChange={(e) => setNewLeadData({ ...newLeadData, message: e.target.value })}
                  placeholder="Specific services requested, area sq ft, shifting timeline..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 focus:border-navy-900 focus:outline-none"
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setCreateModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-900 text-white font-bold shadow-md cursor-pointer"
                >
                  Save Lead Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
