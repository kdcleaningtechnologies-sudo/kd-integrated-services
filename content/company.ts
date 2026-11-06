export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  technologyArm: string;
  technologyArmUrl: string;
  phone: string;
  displayPhone: string;
  phoneIndia: string;
  email: string;
  salesEmail: string;
  supportEmail: string;
  whatsappNumber: string;
  whatsappMessage: string;
  address: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  delhiAddress: {
    street: string;
    locality: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  netherlandsAddress: {
    street: string;
    locality: string;
    city: string;
    pincode: string;
    country: string;
  };
  compliance: {
    gst: string;
    epfo: string;
    esic: string;
    laborLicense: string;
    pasaraStatus: string;
    insurance: string;
  };
  serviceAreas: string[];
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  marketingHead: {
    name: string;
    designation: string;
    phone: string;
    displayPhone: string;
    whatsappNumber: string;
  };
}

export const companyInfo: CompanyInfo = {
  name: "KD Integrated Services",
  legalName: "KD INTEGRATED SERVICES PVT LTD",
  tagline: "Smart Solutions | Sparkling Results | Trusted Care",
  heroHeadline: "Smart Solutions. Sparkling Results. Trusted Care.",
  heroSubheadline: "From people to technology, we manage the essential services that keep your facility safe, clean, efficient, and operational across Gurgaon, Delhi NCR, and International Hubs.",
  technologyArm: "KD Cleaning Technologies",
  technologyArmUrl: "https://kdcleaningtechnologies.com/",
  phone: "+918796682266",
  displayPhone: "+91 8796682266 (India)",
  phoneIndia: "+91 8796682266 (India)",
  email: "info@kdintegratedservices.com",
  salesEmail: "info@kdintegratedservices.com",
  supportEmail: "info@kdintegratedservices.com",
  whatsappNumber: "918796682266",
  whatsappMessage: "Hello KD Integrated Services team, I would like to request a facility assessment for our property.",
  address: {
    street: "521, Sector 31",
    locality: "Sector 31",
    city: "Gurgaon",
    state: "Haryana",
    pincode: "122001",
    country: "India",
  },
  delhiAddress: {
    street: "C-134, Sarita Vihar",
    locality: "Sarita Vihar",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110076",
    country: "India",
  },
  netherlandsAddress: {
    street: "Kwikstraat 3, bedrijventerrein Oostervaart",
    locality: "Oostervaart",
    city: "Lelystad",
    pincode: "8211 AM",
    country: "Netherlands",
  },
  compliance: {
    gst: "06AABCK1234F1Z5 (100% Tax Compliant)",
    epfo: "Active & 100% On-Time EPFO Remittance",
    esic: "Complete ESIC Medical Coverage for Staff",
    laborLicense: "Central & Haryana State Contract Labour Act Registered",
    pasaraStatus: "PASARA Compliant Guarding Framework",
    insurance: "₹5,00,00,000 Comprehensive Third-Party Liability Coverage",
  },
  serviceAreas: [
    "Gurgaon (Gurugram)",
    "Delhi (NCR)",
    "Noida & Greater Noida",
    "Faridabad",
    "Manesar & IMT",
  ],
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61594423779329",
    instagram: "https://www.instagram.com/kdfacilitiesmanagementservices/",
    linkedin: "https://www.linkedin.com/in/kd-facilities-management-services-b6586b438/",
  },
  marketingHead: {
    name: "Mr. Vinod Singh",
    designation: "Marketing Head",
    phone: "+918800883467",
    displayPhone: "+91 8800883467",
    whatsappNumber: "918800883467",
  },
};

