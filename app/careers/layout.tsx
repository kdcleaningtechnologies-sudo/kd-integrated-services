import type { Metadata } from "next";
import React from "react";
import { JsonLd } from "@/components/JsonLd";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers & Facility Jobs in Gurgaon & Delhi NCR",
  description:
    "Explore facility management job openings: Senior Facility Operations Managers, HVAC technicians, housekeeping supervisors, and corporate sales across Gurugram, Delhi, and Noida.",
  keywords: [
    "Facility Management Jobs Gurgaon",
    "Housekeeping Supervisor Jobs Gurugram",
    "HVAC Technician Vacancies Noida",
    "Facility Operations Manager Jobs",
    "KD Integrated Services Careers",
  ],
  ...socialMetadata("/careers", {
    title: "Careers & Facility Jobs in Gurgaon & Delhi NCR | KD Integrated Services",
    description: "Join India's leading facility management team. 100% on-time wages, PF, ESIC, and certified leadership growth paths.",
  }),
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
}
