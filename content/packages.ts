export interface TierPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  targetFacility: string;
  summary: string;
  includedServices: string[];
  techFeatures: string[];
  slaGuarantees: string[];
  contractType: string;
}

export const packagesData = {
  sectionBadge: "Flexible Retainers",
  headline: "Transparent Service Tiers Aligned with Your Facility Scale",
  subheadline: "Choose an established operating model or let our engineers craft a hybrid Annual Maintenance Contract (AMC). No long-term lock-in required to start.",
  tiers: [
    {
      id: "essential",
      name: "Essential Soft Services",
      badge: "Base Hygiene",
      isPopular: false,
      targetFacility: "Mid-sized offices, retail stores, clinics, and branch hubs up to 25,000 sq.ft.",
      summary: "Reliable daily housekeeping, mechanized deep cleaning, pantry support, and waste handling with dedicated supervisory oversight.",
      includedServices: [
        "Daily multi-shift housekeeping & janitorial staff",
        "Color-coded microfiber dusting & sanitization",
        "Pantry coordination & beverage stewardship",
        "Scheduled weekend mechanized floor scrubbing",
        "Standard solid waste segregation",
      ],
      techFeatures: [
        "Facial biometric digital attendance check-in",
        "Daily mobile supervisor handover reports",
        "Standard digital ticketing helpdesk",
      ],
      slaGuarantees: [
        "100% staff shift fill rate with float reserves",
        "4-hour response time for non-emergency callouts",
      ],
      contractType: "Monthly Retainer / Flexible AMC",
    },
    {
      id: "advantage",
      name: "Advantage Integrated (Soft + Security)",
      badge: "Most Popular",
      isPopular: true,
      targetFacility: "Corporate offices, manufacturing plots, residential societies & schools (25,000 – 100,000 sq.ft.)",
      summary: "Combines comprehensive soft services with PASARA-compliant manned guarding, visitor gate control, and periodic stone/pest care.",
      includedServices: [
        "Everything in Essential Soft Services",
        "24/7 PASARA-certified uniformed security guards",
        "Digital visitor & material inward/outward gate management",
        "Electronic RFID night patrol verification",
        "Quarterly commercial integrated pest management (IPM)",
        "Bi-annual window and internal glass cleaning",
      ],
      techFeatures: [
        "Live QR-code restroom and patrol audit tags",
        "Automated WhatsApp & web ticket escalation engine",
        "Cloud-synced visitor logbook with instant host SMS",
      ],
      slaGuarantees: [
        "30-minute restroom cleanliness turnaround loops",
        "Zero-unstaffed post guarantee with automated penalty",
        "Quarterly compliance audit and PF/ESIC dossiers",
      ],
      contractType: "Quarterly or Annual AMC (No lock-in)",
    },
    {
      id: "enterprise",
      name: "Enterprise Total IFM + Technology",
      badge: "Full IFM Suite",
      isPopular: false,
      targetFacility: "Grade-A tech parks, hospitals, luxury hotels, large campuses (100,000+ sq.ft.)",
      summary: "Complete single-vendor facility management covering Soft Services, 24/7 Security, Hard MEP Engineering, BMS console, and autonomous drone wash.",
      includedServices: [
        "Everything in Advantage Integrated Suite",
        "Dedicated MEP technical team (HVAC, DG sets, HT/LT, Plumbing, STP)",
        "Building Management System (BMS) desk monitoring",
        "Autonomous drone façade cleaning access (KD Integrated Services)",
        "Hospital-grade ATP swab hygiene verification audits",
        "Water-fed pure water exterior wash up to 65 ft",
      ],
      techFeatures: [
        "IoT & RFID asset tracking with vibration/thermal analytics",
        "Comprehensive automated energy and utility reduction monitoring",
        "Dedicated client portal with executive ESG sustainability reports",
      ],
      slaGuarantees: [
        "Sub-15 minute response time on critical engineering alerts",
        "99.8% DG power backup and chiller uptime SLA",
        "Quarterly executive joint audit with senior KD directors",
      ],
      contractType: "Comprehensive Annual Performance Contract",
    },
  ] as TierPackage[],
};
