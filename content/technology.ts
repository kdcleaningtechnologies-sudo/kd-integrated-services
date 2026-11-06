export interface TechCapability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  businessImpact: string;
  isAddOnService: boolean;
  addOnDetails?: string;
  iconName: string;
}

export const technologyData = {
  headline: "Technology-Powered Facility Management",
  subheadline: "We don't just supply manpower. Through our specialized engineering division — KD Integrated Services — we deploy IoT sensors, autonomous robotics, pure-water systems, and real-time operational software that elevate facility hygiene beyond conventional manual contractor limits.",
  techArmName: "KD Integrated Services — Tech & Robotics",
  techArmUrl: "/technology",
  techArmDescription: "KD Integrated Services deploys cutting-edge pure-water filtration systems, high-altitude façade wash drones, and digital inspection IoT software, giving our clients access to enterprise-grade tools without heavy capital expense.",
  capabilities: [
    {
      id: "drone-facade",
      title: "Autonomous Drone Façade Cleaning",
      tagline: "High-altitude exterior envelope wash with zero human fall hazard.",
      description: "Proprietary tethered drones equipped with specialized high-pressure spray nozzles and demineralized pure water wash architectural glass, ACP, and granite envelopes up to 120 meters.",
      businessImpact: "Cuts façade maintenance cycle duration by 60% while completely eliminating the liability and safety hazards of suspended cradles.",
      isAddOnService: true,
      addOnDetails: "Available as an on-demand quarterly or bi-annual add-on to any existing facility contract.",
      iconName: "Plane",
    },
    {
      id: "water-fed-poles",
      title: "Water-Fed Pure-Water Telescopic Poles",
      tagline: "Zero chemical runoff and streak-free exterior glass wash up to 65 ft.",
      description: "4-stage reverse osmosis and deionization filtration technology produces 100% pure demineralized water (000 PPM), delivered through ultralight carbon-fiber poles directly from ground level.",
      businessImpact: "Eliminates ladders, chemical streaks, and toxic runoff, saving up to 70% water compared to conventional hose pressure washes.",
      isAddOnService: true,
      addOnDetails: "Can be contracted on a monthly retainer for continuous glass facade upkeep.",
      iconName: "Droplets",
    },
    {
      id: "digital-attendance",
      title: "Geo-Fenced Biometric & Digital Attendance",
      tagline: "Verifiable headcount transparency with automated ghost-worker prevention.",
      description: "Every on-site team member checks in via facial recognition biometric kiosks and mobile GPS geo-fenced coordinates with facial liveness validation.",
      businessImpact: "Guarantees 100% billing accuracy. Clients only pay for verified boots on the ground, backed by automated real-time shift reconciliation.",
      isAddOnService: false,
      iconName: "Fingerprint",
    },
    {
      id: "qr-inspection",
      title: "QR-Based Live Restroom & Beat Inspections",
      tagline: "Real-time custodial audit trails with instant supervisor notification.",
      description: "Custom tamper-proof QR tags installed across all key facility touchpoints (restrooms, pantries, stairwells, fire exits). Staff scan when servicing; supervisors scan when auditing.",
      businessImpact: "Transforms passive cleaning into an auditable digital service loop. Tenants can scan the same QR code to register an instant 2-minute cleaning request.",
      isAddOnService: true,
      addOnDetails: "Can be retrofitted into any building with custom branded client portals.",
      iconName: "QrCode",
    },
    {
      id: "supervisor-reporting",
      title: "Mobile Supervisor Real-Time Reporting",
      tagline: "Photographic daily handover reports delivered to facility heads by 7 PM.",
      description: "Our on-site facility supervisors conduct standardized 50-point mobile walkthrough audits with mandatory before/after photo uploads and checklist verifications.",
      businessImpact: "Eliminates surprise defects and ensures facility directors have objective photographic proof of daily upkeep without walking 500,000 sq.ft. themselves.",
      isAddOnService: false,
      iconName: "Smartphone",
    },
    {
      id: "ticket-management",
      title: "Automated Helpdesk & Ticket Management",
      tagline: "SLA-tracked response times from ticket generation to client sign-off.",
      description: "Tenants and building occupants log maintenance requests via WhatsApp bot, email, or a lightweight web portal. Tickets are automatically dispatched to the nearest technician.",
      businessImpact: "Tracks mean-time-to-resolution (MTTR) with automated escalations to senior management if critical tickets breach 30-minute response windows.",
      isAddOnService: false,
      iconName: "LifeBuoy",
    },
    {
      id: "cleaning-audits",
      title: "ATP Bioluminescence Hygiene Audits",
      tagline: "Scientific swab testing proving clinical cleanliness on surfaces.",
      description: "Using medical-grade ATP bioluminescence luminometers, our quality managers swab high-touch surfaces (door handles, elevator buttons, cafeteria counters) to measure cellular cleanliness.",
      businessImpact: "Provides unassailable scientific proof of disinfection effectiveness for board audits, corporate ESG reports, and NABH hospital accreditations.",
      isAddOnService: true,
      addOnDetails: "Quarterly scientific audit packages available for healthcare and corporate offices.",
      iconName: "Microscope",
    },
    {
      id: "equipment-tracking",
      title: "IoT & RFID Asset Maintenance Tracking",
      tagline: "Preventive upkeep tracking for expensive machinery and scrubbers.",
      description: "Industrial ride-on scrubbers, DG sets, chillers, and single-disc rotaries are tagged with digital QR/RFID maintenance passports that log operating hours, filter changes, and service history.",
      businessImpact: "Extends machinery lifespan by 35%, avoids premature breakdowns, and ensures equipment is always performing at peak manufacturer specifications.",
      isAddOnService: false,
      iconName: "Tag",
    },
  ] as TechCapability[],
};
