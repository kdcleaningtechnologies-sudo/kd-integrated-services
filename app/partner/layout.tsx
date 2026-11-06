import type { Metadata } from "next";
import React from "react";
import { JsonLd } from "@/components/JsonLd";
import { socialMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Commercial Broker & Channel Partner Program",
  description:
    "Partner with KD Integrated Services: Earn recurring monthly referral commissions on corporate Annual Maintenance Contracts (AMCs) across Gurgaon, Delhi NCR, and Noida.",
  keywords: [
    "Facility Management Referral Partner",
    "Commercial Real Estate Broker Partnership Gurgaon",
    "Property Consultant AMC Referral Commission",
    "Corporate Channel Partner Program NCR",
  ],
  ...socialMetadata("/partner", {
    title: "Commercial Broker & Channel Partner Program | KD Integrated Services",
    description: "Monetize your commercial client relationships with predictable recurring revenue on corporate facility contracts.",
  }),
};

export default function PartnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Channel Partner Program", url: "/partner" },
  ];

  return (
    <>
      <JsonLd type="BreadcrumbList" breadcrumbs={breadcrumbs} />
      {children}
    </>
  );
}
