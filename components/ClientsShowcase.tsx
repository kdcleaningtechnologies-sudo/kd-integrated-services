import React from "react";
import { Handshake } from "lucide-react";
import { clientsData } from "@/content/clients";

interface ClientsShowcaseProps {
  className?: string;
}

const PARTNER_ORDER = [
  "sudeva-football-club",
  "essentia",
  "ozone-pharmaceuticals",
  "aviss-hospital",
  "sarvodaya-hospital",
  "transcomm",
];

export const ClientsShowcase: React.FC<ClientsShowcaseProps> = ({ className = "" }) => {
  const ordered = PARTNER_ORDER.map((id) => clientsData.find((c) => c.id === id)).filter(
    (c): c is NonNullable<typeof c> => Boolean(c)
  );
  const marqueeItems = [...ordered, ...ordered];

  return (
    <section className={`relative bg-white ${className}`} aria-label="Key client partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch overflow-hidden rounded-full bg-[#071426] border border-navy-800">
          <div className="relative z-10 hidden sm:flex shrink-0 items-center gap-2 px-5 lg:px-8 bg-[#071426] border-r border-white/10">
            <Handshake className="w-4 h-4 text-brandcyan-400" />
            <span className="text-[10px] lg:text-xs font-extrabold uppercase tracking-[0.22em] text-white whitespace-nowrap">
              KEY CLIENT PARTNERS
            </span>
          </div>

          <div className="relative flex-1 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#071426] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#071426] to-transparent z-10" />

            <div className="flex w-max animate-client-marquee">
              {marqueeItems.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex items-center px-5 sm:px-8 py-4"
                  aria-hidden={index >= ordered.length}
                >
                  <span className="text-sm sm:text-base font-extrabold tracking-wide uppercase text-white whitespace-nowrap drop-shadow-[0_0_12px_rgba(0,210,180,0.25)]">
                    {client.name}
                  </span>
                  <span className="ml-5 sm:ml-8 h-1.5 w-1.5 rounded-full bg-brandcyan-400 shadow-[0_0_10px_rgba(0,210,180,0.9)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
