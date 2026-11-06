export interface CityFaq {
  question: string;
  answer: string;
}

export interface CityData {
  slug: string;
  name: string;
  state: string;
  headline: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  keyHubs: string[];
  clientTypes: string[];
  localOffice: string;
  dispatchTime: string;
  localContext: string;
  faqs: CityFaq[];
}

export const citiesData: Record<string, CityData> = {
  gurgaon: {
    slug: "gurgaon",
    name: "Gurgaon (Gurugram)",
    state: "Haryana",
    headline: "Premier Facility Management Services in Gurgaon & Cyber City",
    tagline: "High-performance corporate housekeeping, hard MEP engineering, and PASARA security for Grade-A tech parks, GCCs, and luxury high-rises across Gurugram.",
    seoTitle: "Facility Management Company in Gurgaon | Cyber City & Golf Course Road",
    seoDescription: "Leading Integrated Facility Management company in Gurgaon. Corporate housekeeping, 24/7 PASARA security, HVAC/MEP maintenance, and facade cleaning in DLF Cyber City & Golf Course Rd.",
    primaryKeyword: "Facility Management Company in Gurgaon",
    secondaryKeywords: [
      "Facility Management Services in Gurugram",
      "Corporate Cleaning Services Gurgaon",
      "Housekeeping Services Gurgaon",
      "Security Services Gurgaon",
      "Integrated Facility Management Gurgaon",
      "Corporate Housekeeping Gurugram",
    ],
    keyHubs: [
      "DLF Cyber City & Cyber Hub",
      "Golf Course Road & Golf Course Extension",
      "Sohna Road Commercial Belt",
      "Udyog Vihar Phases I–V",
      "MG Road & Sector 44 Institutional Area",
      "Sector 31 & Cyber Park Vicinity",
    ],
    clientTypes: ["Fortune 500 Global Capability Centers", "FinTech & SaaS Headquarters", "Grade-A Commercial Campuses", "Multi-Speciality Hospitals"],
    localOffice: "Headquarters: 521, Sector 31, Gurgaon, Haryana — 122001",
    dispatchTime: "Under 25 minutes anywhere in Gurgaon & Manesar toll belt",
    localContext: "Gurugram represents India's foremost corporate epicenter, hosting over 500 Fortune 500 GCCs and Grade-A tech campuses along Cyber City, Golf Course Road, and Udyog Vihar. Operating in this corridor demands zero-tolerance SLA adherence: 30-minute washroom hygiene cycles, certified statutory compliance (100% EPFO/ESIC on-time challans), and round-the-clock MEP engineering to guarantee zero HVAC chiller downtime during sweltering summers.",
    faqs: [
      {
        question: "What facility management services does KD provide in Gurgaon?",
        answer: "KD Integrated Services delivers end-to-end Integrated Facility Management (IFM) across Gurugram, including corporate housekeeping, mechanized deep scrubbing, PASARA-licensed 24/7 security guarding, MEP maintenance (HVAC, DG sets, HT/LT electrical), autonomous drone façade cleaning, and commercial pest control."
      },
      {
        question: "How quickly can KD deploy housekeeping and technical crews in Gurgaon?",
        answer: "From our Sector 31 operations hub, we maintain a dedicated 15% standby float crew. For new corporate contracts in Cyber City, Golf Course Road, or Udyog Vihar, deployment typically takes 48 to 72 hours following the initial site audit."
      },
      {
        question: "Are your security guards PASARA certified in Haryana?",
        answer: "Yes, 100% of our security personnel in Gurgaon operate under full Haryana PASARA licensing, with comprehensive local police verification, biometric onboarding, and background checks."
      },
      {
        question: "Do you offer flexible retainer contracts without long lock-ins?",
        answer: "Yes, we provide flexible monthly, quarterly, and annual AMC models with transparent 30-day performance-linked exit clauses."
      }
    ]
  },
  delhi: {
    slug: "delhi",
    name: "Delhi (National Capital Region)",
    state: "Delhi",
    headline: "Enterprise Facility Management & Cleaning Services in Delhi NCR",
    tagline: "Corporate housekeeping, government empanelment compliance, and technical facility operations for Delhi's premier commercial districts.",
    seoTitle: "Integrated Facility Management in Delhi | Sarita Vihar Office",
    seoDescription: "Facility management company in Delhi with an office at C-134, Sarita Vihar, New Delhi 110076. Corporate cleaning, hospital housekeeping, PASARA security, and MEP maintenance across NCR.",
    primaryKeyword: "Integrated Facility Management Delhi",
    secondaryKeywords: [
      "Corporate Cleaning Services Delhi",
      "Hospital Housekeeping Services Delhi",
      "Commercial Cleaning Company Delhi",
      "Security Guarding Services Delhi",
      "Housekeeping Services Aerocity Delhi",
      "Facility Management Sarita Vihar",
    ],
    keyHubs: [
      "Connaught Place & Barakhamba Road",
      "Aerocity & Hospitality District",
      "Nehru Place & Okhla Industrial Area",
      "Bhikaji Cama Place & Jasola District Centre",
      "Netaji Subhash Place (NSP)",
      "Saket District Centre",
    ],
    clientTypes: ["Corporate Headquarters", "Embassies & Consulates", "Private Hospitals & Clinics", "Retail Malls & Luxury Showrooms"],
    localOffice: "Delhi Office: C-134, Sarita Vihar, New Delhi — 110076",
    dispatchTime: "Under 40 minutes across Central & South Delhi",
    localContext: "Delhi's commercial footprint ranges from heritage institutional centers in Connaught Place to high-footfall hospitality hubs in Aerocity and dense business parks in Okhla. Managing facilities in Delhi requires specialized protocols for strict green cleaning compliance, dust suppression, and high-security access verification tailored for consulates, healthcare institutions, and corporate headquarters.",
    faqs: [
      {
        question: "Do you cater to high-security premises and consulates in Delhi?",
        answer: "Yes, our security guards and supervisory personnel undergo rigorous Delhi Police verification, intelligence background screening, and specialized visitor protocol training suitable for diplomatic missions, embassies, and corporate headquarters."
      },
      {
        question: "What eco-friendly chemicals do you use in Delhi offices?",
        answer: "We exclusively utilize Diversey / Buzil certified green chemicals and zero-VOC consumables, aligning with Delhi-NCR environmental mandates and LEED/GRIHA building standards."
      },
      {
        question: "Can KD handle multi-facility corporate estates across Delhi and Gurgaon?",
        answer: "Yes, our unified single-SLA framework allows multinational enterprises to manage multiple buildings across Delhi and Gurugram under one consolidated monthly billing invoice and single account director."
      }
    ]
  },
  noida: {
    slug: "noida",
    name: "Noida & Greater Noida",
    state: "Uttar Pradesh",
    headline: "Grade-A Facility Management for Noida Expressway & IT Parks",
    tagline: "Mechanized industrial cleaning, IT park housekeeping, and substation electrical maintenance across Gautam Buddha Nagar.",
    seoTitle: "Facility Management Services in Noida & Greater Noida",
    seoDescription: "Comprehensive facility management services in Noida & Greater Noida. Corporate housekeeping, industrial cleaning, and round-the-clock security guarding in Sector 62 & Expressway.",
    primaryKeyword: "Facility Management Services in Noida",
    secondaryKeywords: [
      "Housekeeping Services Noida Sector 62",
      "Industrial Cleaning Services Greater Noida",
      "Corporate Housekeeping Noida Expressway",
      "Security Guard Agency Noida",
      "Facility Management Company Noida",
    ],
    keyHubs: [
      "Noida-Greater Noida Expressway IT Corridor",
      "Sector 62 & Sector 63 Tech Corridors",
      "Sector 125–135 Corporate Campuses",
      "Ecotech & Kasna Industrial Clusters (Greater Noida)",
      "Sector 18 Commercial Hub",
    ],
    clientTypes: ["BPO & IT Tech Campuses", "Electronics Manufacturing Units", "Educational Universities", "Gated High-Rise Townships"],
    localOffice: "Expressway Operational Base: Sector 132, Noida, Uttar Pradesh",
    dispatchTime: "Under 30 minutes across Noida Expressway & Sector 62",
    localContext: "Noida and Greater Noida feature sprawling horizontal IT parks, electronics manufacturing zones in Ecotech, and high-density corporate towers along the Noida Expressway. The scale of these campuses requires heavy mechanized ride-on sweepers, scrubbers, automated turnstile access maintenance, and licensed electrical engineers for 33kV/11kV substations.",
    faqs: [
      {
        question: "Do you support large-scale 24/7 BPO operations along Noida Expressway?",
        answer: "Yes, we specialize in multi-shift round-the-clock facility operations, providing continuous day-and-night janitorial crews, cafeteria sanitation, and security escort coordination for 24/7 IT/BPO environments."
      },
      {
        question: "Can you provide HT/LT substation maintenance in Greater Noida factories?",
        answer: "Yes, our hard engineering division deploys certified electrical supervisors holding valid UP electrical licenses for transformer upkeep, capacitor bank optimization, and DG synchronization."
      },
      {
        question: "Do you service commercial properties in Greater Noida and Yamuna Expressway?",
        answer: "Yes, our operational fleet covers Sector 62, Sector 132, Knowledge Park, and Ecotech manufacturing belts in Greater Noida."
      }
    ]
  },
  faridabad: {
    slug: "faridabad",
    name: "Faridabad",
    state: "Haryana",
    headline: "Industrial Facility Management & Heavy-Duty Cleaning in Faridabad",
    tagline: "Specialized factory floor scrubbers, engineering MEP upkeep, and 24/7 industrial perimeter security for Faridabad's manufacturing hub.",
    seoTitle: "Industrial Cleaning & Facility Management in Faridabad",
    seoDescription: "Industrial cleaning, technical maintenance, and facility management services in Faridabad. Heavy engineering plants, warehouses, and commercial spaces on Mathura Road.",
    primaryKeyword: "Industrial Cleaning Services Faridabad",
    secondaryKeywords: [
      "Facility Management Company Faridabad",
      "Factory Housekeeping Faridabad",
      "Commercial Security Services Faridabad",
      "MEP Technical Services Faridabad",
      "Industrial Floor Scrubbing Faridabad",
    ],
    keyHubs: [
      "Mathura Road Industrial Corridor",
      "Sector 24, 25 & 58 Manufacturing Belts",
      "NHPC Chowk & Badarpur Border Commercial Zone",
      "Neharpar & Greater Faridabad Commercial Sectors",
      "Ballabhgarh Engineering Cluster",
    ],
    clientTypes: ["Auto-Ancillary Manufacturers", "Heavy Engineering Units", "Cold Storage & Warehouses", "Commercial Showrooms & Offices"],
    localOffice: "Industrial Field Base: Mathura Road, Sector 28, Faridabad, Haryana",
    dispatchTime: "Under 35 minutes across industrial zones",
    localContext: "Faridabad is one of North India's oldest and densest industrial corridors, home to auto-component manufacturers, metal fabricators, and large warehousing zones along Mathura Road. Managing industrial sites here demands robust degreasing, oil-resistant epoxy floor care, industrial vacuuming, and factory perimeter protection under strict safety guidelines.",
    faqs: [
      {
        question: "How do you handle oil and chemical spills in Faridabad manufacturing plants?",
        answer: "We deploy industrial ride-on scrubbers equipped with heavy-duty alkaline degreasers and absorbent spill kits designed specifically for machine shop floors, stamping units, and warehouse aisles."
      },
      {
        question: "Are your industrial cleaners trained in manufacturing shop-floor safety (PPE)?",
        answer: "Yes, all KD staff deployed to industrial plants in Faridabad are equipped with ISI-marked steel-toe safety shoes, high-visibility reflective vests, safety goggles, and ear protection, with daily toolbox safety briefings."
      },
      {
        question: "Do you provide round-the-clock gatekeeping for factory material dispatch?",
        answer: "Yes, our security personnel are trained in inward/outward material challan logging, weighbridge coordination, and digital visitor gate pass systems."
      }
    ]
  },
  manesar: {
    slug: "manesar",
    name: "Manesar & IMT",
    state: "Haryana",
    headline: "Manufacturing & Industrial Facility Management in IMT Manesar",
    tagline: "Heavy-duty ride-on scrubbing, factory safety compliance, licensed electrical HT/LT substations, and industrial gate security.",
    seoTitle: "Industrial Facility Management in IMT Manesar",
    seoDescription: "Industrial facility management company in IMT Manesar. Plant housekeeping, PASARA security, STP/WTP management, and DG set operations across Phases 1 to 5.",
    primaryKeyword: "Industrial Cleaning Services Manesar",
    secondaryKeywords: [
      "Facility Management Company Manesar",
      "IMT Manesar Housekeeping Services",
      "Factory Security Services Manesar",
      "Technical Facility Management Manesar",
      "Warehouse Cleaning Manesar NH48",
    ],
    keyHubs: [
      "IMT Manesar Phases 1 to 5",
      "Delhi-Jaipur Expressway (NH-48) Logistics Hub",
      "Panchgaon Industrial Cluster",
      "Automotive & Component Manufacturing Zones",
      "KMP Expressway Junction Logistics Parks",
    ],
    clientTypes: ["Automobile Assembly Plants", "Pharmaceutical Cleanrooms", "Logistics & Fulfillment Centers", "Export Garment Units"],
    localOffice: "IMT Dispatch Center: Sector 3, IMT Manesar, Haryana",
    dispatchTime: "Under 20 minutes across all IMT Phases",
    localContext: "IMT Manesar represents an ultra-modern manufacturing corridor housing multinational automobile OEMs, pharmaceutical cleanrooms, and automated logistics centers along NH-48. Facilities here require rigorous cleanroom sanitization, high-bay warehouse dust extraction, continuous DG plant monitoring, and synchronized shift security.",
    faqs: [
      {
        question: "Can KD manage pharmaceutical cleanroom housekeeping in IMT Manesar?",
        answer: "Yes, our soft services division includes cleanroom certified teams trained in ISO Class 7 and Class 8 disinfection protocols, sterile mopping techniques, and cGMP compliance documentation."
      },
      {
        question: "How do you manage large logistics fulfillment centers along NH-48?",
        answer: "We utilize industrial battery-powered ride-on scrubbers and sweepers capable of cleaning up to 50,000 sq.ft. per hour without disrupting forklift traffic, combined with 24/7 perimeter patrolling."
      },
      {
        question: "What is the dispatch speed for emergency MEP support in IMT Manesar?",
        answer: "With our dedicated dispatch base in Sector 3 IMT Manesar, our technical teams can respond to DG sync failures, electrical trips, or plumbing leaks within 20 minutes."
      }
    ]
  },
};
