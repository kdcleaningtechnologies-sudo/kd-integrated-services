"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  Handshake,
  Building,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
  Calendar,
  FileSpreadsheet,
  ArrowUpRight,
  Cpu,
} from "lucide-react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { Lead, Partner } from "@/lib/adminStorage";

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [leadsRes, partnersRes] = await Promise.all([
        fetch("/api/admin/leads"),
        fetch("/api/admin/partners"),
      ]);

      if (leadsRes.ok) {
        const leadsData = await leadsRes.json();
        setLeads(leadsData.leads || []);
      }
      if (partnersRes.ok) {
        const partnersData = await partnersRes.json();
        setPartners(partnersData.partners || []);
      }
    } catch (e) {
      console.error("Dashboard fetch error:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Compute metrics
  const totalLeads = leads.length;
  const newLeads = leads.filter((l) => l.status === "NEW").length;
  const scheduledLeads = leads.filter((l) => l.status === "ASSESSMENT_SCHEDULED").length;
  const wonLeads = leads.filter((l) => l.status === "WON").length;
  const totalPartners = partners.length;
  const pendingPartners = partners.filter((p) => p.status === "PENDING" || !p.status).length;

  const exportCSV = () => {
    if (leads.length === 0) {
      alert("No leads available to export.");
      return;
    }

    const headers = [
      "ID",
      "Date",
      "Status",
      "Name",
      "Company",
      "Phone",
      "Email",
      "City",
      "Property Type",
      "Approx Area",
      "Services",
      "Staff Required",
      "Message",
    ];

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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "NEW":
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">NEW INQUIRY</span>;
      case "ASSESSMENT_SCHEDULED":
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">ASSESSMENT SET</span>;
      case "CONTACTED":
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-300">CONTACTED</span>;
      case "WON":
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800 border border-purple-300">CONTRACT WON</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-300">{status}</span>;
    }
  };

  return (
    <div className="pb-16">
      <AdminHeader
        title="Executive Overview"
        subtitle="Real-time facility leads, partner inquiries, and operational performance metrics."
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

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 space-y-8">
        {/* KPI Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Total Assessment Leads
              </span>
              <div className="w-9 h-9 rounded-xl bg-navy-50 flex items-center justify-center text-navy-900">
                <Users className="w-4 h-4 text-brandgreen-600" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-heading text-navy-950">
                {loading ? "..." : totalLeads}
              </span>
              {newLeads > 0 && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  +{newLeads} pending review
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              From Corporate, Industrial & Hospital properties
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Assessments Scheduled
              </span>
              <div className="w-9 h-9 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-heading text-amber-900">
                {loading ? "..." : scheduledLeads}
              </span>
              <span className="text-xs font-medium text-slate-500">site audits</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Physical property walkthroughs in progress
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Converted Retainers
              </span>
              <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-purple-700">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-heading text-purple-900">
                {loading ? "..." : wonLeads}
              </span>
              <span className="text-xs font-medium text-slate-500">active AMCs</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Retainer clients on single SLA framework
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Channel Partners
              </span>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                <Handshake className="w-4 h-4" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-heading text-navy-950">
                {loading ? "..." : totalPartners}
              </span>
              {pendingPartners > 0 && (
                <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                  {pendingPartners} MoU pending
                </span>
              )}
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Brokers, IPCs & Facility Consultancies
            </p>
          </div>
        </div>

        {/* Quick Management Short-Cuts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Link
            href="/admin/leads"
            className="p-5 rounded-2xl bg-gradient-to-br from-navy-950 to-navy-900 text-white border border-navy-800 shadow-md hover:border-brandgreen-500/50 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-navy-800 flex items-center justify-center text-brandgreen-400">
                <Users className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brandgreen-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="text-base font-bold font-heading text-white">
              Manage Facility Leads
            </h3>
            <p className="text-xs text-slate-300 mt-1">
              Review property details, assign operational managers, and initiate WhatsApp follow-ups.
            </p>
          </Link>

          <Link
            href="/admin/company"
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-navy-900 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-navy-950">
                <Building className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-navy-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="text-base font-bold font-heading text-navy-950">
              Company & Statutory Settings
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Update phone numbers, GST/EPFO/ESIC credentials, address, and KD Integrated Services links.
            </p>
          </Link>

          <Link
            href="/admin/technology"
            className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-brandgreen-600 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-brandgreen-700">
                <Cpu className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-brandgreen-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <h3 className="text-base font-bold font-heading text-navy-950">
              Robotics & Equipment Fleet
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Configure pure-water poles, façade drones, QR audit tags, and Equipment-as-a-Service retainers.
            </p>
          </Link>
        </div>

        {/* Recent Inquiries Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold font-heading text-navy-950">
                Recent Facility Inquiries & Assessments
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Latest submissions from the website assessment form.
              </p>
            </div>
            <Link
              href="/admin/leads"
              className="text-xs font-bold text-navy-950 hover:text-brandgreen-700 transition-colors inline-flex items-center gap-1 self-start sm:self-center"
            >
              <span>View All ({leads.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {loading ? (
            <div className="p-12 text-center text-xs text-slate-500">
              Loading recent inquiries...
            </div>
          ) : leads.length === 0 ? (
            <div className="p-12 text-center space-y-2">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
              <p className="text-sm font-semibold text-slate-700">No Inquiries Found</p>
              <p className="text-xs text-slate-500">
                Inquiries submitted on the website will appear here in real time.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <th className="py-3 px-4 sm:px-6">Status</th>
                    <th className="py-3 px-4">Client / Company</th>
                    <th className="py-3 px-4">Property & City</th>
                    <th className="py-3 px-4">Services Requested</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4 text-right">Quick Contact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {leads.slice(0, 6).map((lead) => {
                    const cleanPhone = lead.phone.replace(/\D/g, "");
                    const whatsappDirectUrl = `https://wa.me/${cleanPhone.length === 10 ? `91${cleanPhone}` : cleanPhone}?text=${encodeURIComponent(`Hello ${lead.name}, regarding your facility inquiry for KD Integrated Services...`)}`;

                    return (
                      <tr key={lead.id} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3.5 px-4 sm:px-6 whitespace-nowrap">
                          {getStatusBadge(lead.status)}
                        </td>
                        <td className="py-3.5 px-4 font-medium">
                          <span className="font-bold text-navy-950 block">{lead.name}</span>
                          {lead.company && (
                            <span className="text-[11px] text-slate-500">{lead.company}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-slate-800 font-semibold block">{lead.propertyType}</span>
                          <span className="text-[11px] text-slate-500">
                            {lead.city} {lead.approxArea ? `• ${lead.approxArea}` : ""}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs truncate text-slate-600">
                          {(lead.requiredServices || []).join(", ") || "Integrated Assessment"}
                        </td>
                        <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">
                          {new Date(lead.createdAt).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <a
                              href={`tel:${lead.phone}`}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                              title={`Call ${lead.phone}`}
                            >
                              <Phone className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href={whatsappDirectUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-colors"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                            </a>
                            <a
                              href={`mailto:${lead.email}`}
                              className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
                              title={`Email ${lead.email}`}
                            >
                              <Mail className="w-3.5 h-3.5" />
                            </a>
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
    </div>
  );
}
