"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Handshake,
  Building,
  Building2,
  Sparkles,
  Cpu,
  Briefcase,
  FolderGit2,
  ShieldAlert,
  ExternalLink,
  LogOut,
  ChevronRight,
  X,
} from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";

interface AdminSidebarProps {
  mobileOpen?: boolean;
  setMobileOpen?: (open: boolean) => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  mobileOpen = false,
  setMobileOpen,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const [unreadLeads, setUnreadLeads] = useState<number>(0);
  const [pendingPartners, setPendingPartners] = useState<number>(0);

  useEffect(() => {
    // Fetch quick counts for badges
    const fetchCounts = async () => {
      try {
        const [leadsRes, partnersRes] = await Promise.all([
          fetch("/api/admin/leads?status=NEW"),
          fetch("/api/admin/partners?status=PENDING"),
        ]);
        if (leadsRes.ok) {
          const leadsData = await leadsRes.json();
          setUnreadLeads(leadsData.count || 0);
        }
        if (partnersRes.ok) {
          const partnersData = await partnersRes.json();
          setPendingPartners(partnersData.count || 0);
        }
      } catch {}
    };
    fetchCounts();
    const interval = setInterval(fetchCounts, 30000); // 30s poll
    return () => clearInterval(interval);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/admin/auth/logout", { method: "POST" });
      router.push("/admin/login");
      router.refresh();
    } catch {
      router.push("/admin/login");
    }
  };

  const navItems = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Leads & Inquiries",
      href: "/admin/leads",
      icon: Users,
      badge: unreadLeads > 0 ? `${unreadLeads} new` : undefined,
      badgeColor: "bg-emerald-500 text-navy-950 font-bold",
    },
    {
      name: "Channel Partners",
      href: "/admin/partners",
      icon: Handshake,
      badge: pendingPartners > 0 ? `${pendingPartners} new` : undefined,
      badgeColor: "bg-amber-400 text-navy-950 font-bold",
    },
    {
      name: "Company & Compliance",
      href: "/admin/company",
      icon: Building,
    },
    {
      name: "Services & Scope",
      href: "/admin/services",
      icon: Sparkles,
    },
    {
      name: "Industries & Verticals",
      href: "/admin/industries",
      icon: Building2,
    },
    {
      name: "Robotics & Tech Fleet",
      href: "/admin/technology",
      icon: Cpu,
    },
    {
      name: "Careers & Hiring",
      href: "/admin/careers",
      icon: Briefcase,
    },
    {
      name: "Projects & Case Studies",
      href: "/admin/projects",
      icon: FolderGit2,
    },
    {
      name: "Security & Passwords",
      href: "/admin/security",
      icon: ShieldAlert,
    },
  ];

  const content = (
    <div className="flex flex-col h-full bg-navy-950 text-slate-300 border-r border-navy-900 select-none">
      {/* Brand Header */}
      <div className="h-20 flex items-center justify-between px-5 border-b border-navy-900 bg-navy-950/90">
        <Link href="/admin/dashboard" className="flex items-center group">
          <BrandLogo variant="facilities" size="sm" theme="dark" showTagline={false} />
        </Link>
        {setMobileOpen && (
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-navy-900"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto custom-scrollbar">
        <div className="px-3 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Main Navigation
        </div>
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen && setMobileOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-150 group ${
                isActive
                  ? "bg-brandgreen-500 text-navy-950 shadow-md font-bold shadow-brandgreen-500/20"
                  : "text-slate-300 hover:bg-navy-900 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? "text-navy-950" : "text-slate-400 group-hover:text-brandgreen-400"
                  }`}
                />
                <span>{item.name}</span>
              </div>
              {item.badge ? (
                <span className={`text-[10px] px-2 py-0.5 rounded-full ${item.badgeColor}`}>
                  {item.badge}
                </span>
              ) : (
                <ChevronRight
                  className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity ${
                    isActive ? "opacity-100 text-navy-950" : "text-slate-500"
                  }`}
                />
              )}
            </Link>
          );
        })}

        <div className="pt-6 px-3 pb-2 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
          Quick Portals
        </div>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs text-slate-400 hover:bg-navy-900 hover:text-brandgreen-400 transition-colors"
        >
          <div className="flex items-center gap-3">
            <ExternalLink className="w-4 h-4 text-slate-500" />
            <span>Public Website</span>
          </div>
          <span className="text-[10px] text-slate-500">Live ↗</span>
        </a>
        <Link
          href="/technology"
          className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs text-slate-400 hover:bg-navy-900 hover:text-brandgreen-400 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Cpu className="w-4 h-4 text-slate-500" />
            <span>Tech Division</span>
          </div>
          <span className="text-[10px] text-slate-500">Live ↗</span>
        </Link>
      </div>

      {/* User Session Footer */}
      <div className="p-4 border-t border-navy-900 bg-navy-950/80">
        <div className="flex items-center justify-between p-2 rounded-xl bg-navy-900/60 border border-navy-800">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-brandgreen-400 font-bold text-xs">
              OD
            </div>
            <div className="truncate">
              <p className="text-xs font-bold text-white truncate">Operations Director</p>
              <p className="text-[10px] text-brandgreen-400 font-mono truncate">Super Admin</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            title="Sign Out"
            className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-navy-800 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-72 h-screen sticky top-0 flex-shrink-0 z-30">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-navy-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileOpen && setMobileOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] h-full shadow-2xl z-10 animate-fade-in">
            {content}
          </div>
        </div>
      )}
    </>
  );
};
