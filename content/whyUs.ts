export interface WhyUsPoint {
  id: string;
  title: string;
  tagline: string;
  description: string;
  slaFeature: string;
  iconName: string;
}

export const whyUsData = {
  sectionBadge: "The KD Standard",
  headline: "Why Leading Enterprises Choose KD Integrated Services",
  subheadline: "Most vendors sell unvetted headcount. We deliver guaranteed operational outcomes backed by digital accountability, strict statutory compliance, and trained personnel.",
  points: [
    {
      id: "trained-workforce",
      title: "Trained & Verified Workforce",
      tagline: "100% police-verified and hospitality-groomed.",
      description: "Rigorous 40-hour pre-deployment curriculum covering chemical dilution, color-coded microfiber hygiene, and corporate etiquette.",
      slaFeature: "Zero unverified personnel policy; 15% dedicated float-crew reserve pool.",
      iconName: "GraduationCap",
    },
    {
      id: "technology-enabled",
      title: "Technology-Enabled Operations",
      tagline: "IoT, QR inspection, and real-time oversight.",
      description: "Digital attendance with geo-fencing, QR restroom beat checklists, and automated ticket escalation eliminate operational guesswork.",
      slaFeature: "Transparent cloud dashboards accessible to your facility committee.",
      iconName: "Cpu",
    },
    {
      id: "24-7-support",
      title: "24/7 Operational Support",
      tagline: "Round-the-clock helpdesk and rapid response.",
      description: "A centralized operational control desk ready to handle after-hours plumbing bursts, electrical switchovers, or emergency spill mobilizations.",
      slaFeature: "Guaranteed 15-minute emergency callback and rapid dispatch.",
      iconName: "Clock",
    },
    {
      id: "dedicated-supervisors",
      title: "Dedicated On-Site Supervisors",
      tagline: "Active floor leadership, not remote managers.",
      description: "Empowered site managers on the ground overseeing shift attendance, consumable inventories, safety gear, and daily client handovers.",
      slaFeature: "Mandatory daily photographic 7 PM closing handover reports.",
      iconName: "UserCheck",
    },
    {
      id: "safety-compliance",
      title: "Safety First & 100% Statutory Compliance",
      tagline: "Total protection against statutory liability.",
      description: "Full compliance with EPFO, ESIC, minimum wages, PASARA, and Factory Acts, backed by ₹5 Cr comprehensive third-party liability insurance.",
      slaFeature: "Zero compliance liability for your board with monthly PF/ESIC challans attached to invoices.",
      iconName: "ShieldCheck",
    },
    {
      id: "transparent-management",
      title: "Transparent, SLA-Driven Management",
      tagline: "Clear pricing, measurable KPIs, no hidden markups.",
      description: "Performance-linked service agreements with defined uptime KPIs, monthly consumable reconciliation, and flexible month-to-month contracts.",
      slaFeature: "Outcome-driven SLAs with penalty-backed performance guarantees.",
      iconName: "BarChart3",
    },
  ] as WhyUsPoint[],
};
