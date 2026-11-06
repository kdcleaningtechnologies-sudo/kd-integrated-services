export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[]
}

export const careersData = {
  badge: "Join KD Integrated Services",
  headline: "Build Your Career with India's Modern Facility Management Team",
  subheadline: "We are expanding rapidly across Gurgaon, Delhi, Noida, and Manesar. We provide fair wages, full statutory benefits (PF, ESIC, insurance), continuous skill certifications, and clear leadership growth paths.",
  culturePoints: [
    { title: "100% On-Time Wages & Full PF/ESIC", desc: "We adhere strictly to statutory welfare laws with prompt monthly disbursements and complete medical coverage." },
    { title: "Professional Skill Certification", desc: "Regular training on mechanized scrubbing, BMS software, and safety protocols to elevate your career." },
    { title: "Merit-Based Growth", desc: "Over 60% of our site supervisors and operations managers were promoted from internal ground crews." },
  ],
  openings: [
    {
      id: "facility-manager-gurgaon",
      title: "Senior Facility Operations Manager",
      department: "Operations (IFM)",
      location: "Gurgaon (Cyber City / Golf Course Rd)",
      type: "Full-Time",
      experience: "6–10 Years",
      description: "Lead end-to-end soft and technical facility operations for a 400,000 sq.ft. commercial tech park.",
      requirements: [
        "Prior experience leading large-scale IFM sites in Grade-A commercial properties",
        "Strong knowledge of MEP maintenance, BMS consoles, and vendor management",
        "Excellent client presentation and executive stakeholder management skills",
      ],
    },
    {
      id: "hvac-executive-noida",
      title: "HVAC & Electrical Technical Executive",
      department: "Hard Services (Engineering)",
      location: "Noida Sector 62",
      type: "Full-Time",
      experience: "3–6 Years",
      description: "Manage chiller plants, HT/LT substations, and automated DG backup synchronization.",
      requirements: [
        "Diploma or B.Tech in Electrical / Mechanical Engineering",
        "Valid Electrical Supervisor License / Wireman certification preferred",
        "Experience in chiller maintenance, power factor correction, and thermography",
      ],
    },
    {
      id: "housekeeping-supervisor-delhi",
      title: "Housekeeping & Soft Services Supervisor",
      department: "Soft Services",
      location: "South Delhi / Aerocity",
      type: "Full-Time",
      experience: "2–5 Years",
      description: "Oversee daily cleaning rosters, mechanized scrubbers, and QR-based restroom audits.",
      requirements: [
        "Hands-on familiarity with industrial single-disc rotaries, walk-behind scrubbers, and chemicals",
        "Ability to lead a team of 25+ janitorial personnel and conduct daily morning briefings",
        "Basic smartphone literacy for mobile audit reporting",
      ],
    },
    {
      id: "bms-executive-manesar",
      title: "Business Development Manager — AMC & IFM",
      department: "Corporate Sales",
      location: "Gurgaon / Manesar Hub",
      type: "Full-Time",
      experience: "3–7 Years",
      description: "Drive Annual Maintenance Contract (AMC) corporate procurement sales and vendor empanelment.",
      requirements: [
        "Proven B2B sales track record in facility management, commercial cleaning, or corporate services",
        "Existing network with corporate admin heads, CRE directors, and industrial procurement managers",
        "Skill in preparing technical commercial RFP/bid submissions",
      ],
    },
  ] as JobOpening[],
};
