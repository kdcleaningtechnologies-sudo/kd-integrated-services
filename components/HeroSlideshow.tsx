"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Plane,
  Sparkles,
  Wrench,
  Coffee,
  Trees,
  Building2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  objectPosition?: string;
  badgeLabel: string;
  badgeIcon: React.ElementType;
  badgeBorder: string;
  badgeTextColor: string;
  accentBg: string;
  title: string;
  subtitle: string;
  pillTag: string;
  tagSub: string;
}

const SLIDES: HeroSlide[] = [
  {
    id: "drone-facade",
    image: "/images/hero-slides/slide-drone.jpg",
    alt: "KD Integrated Services technician piloting an autonomous façade cleaning drone on a glass commercial tower",
    objectPosition: "object-center",
    badgeLabel: "Façade Drone Active",
    badgeIcon: Plane,
    badgeBorder: "border-brandcyan-500/50",
    badgeTextColor: "text-brandcyan-300",
    accentBg: "from-brandblue-600 to-brandcyan-400",
    title: "Autonomous Façade Drone Cleaning",
    subtitle: "Zero Cradle Risk • High-Rise Access",
    pillTag: "Safer Heights • Water-Fed",
    tagSub: "Live Operations",
  },
  {
    id: "high-rise-facade",
    image: "/images/hero-slides/slide-highrise.jpg",
    alt: "KD Integrated Services rope-access technician cleaning high-rise glass façade",
    objectPosition: "object-center",
    badgeLabel: "Rope Access Live",
    badgeIcon: Building2,
    badgeBorder: "border-sky-400/50",
    badgeTextColor: "text-sky-300",
    accentBg: "from-sky-600 to-brandcyan-400",
    title: "High-Rise Glass & Façade Care",
    subtitle: "Rope Access • Streak-Free Finish",
    pillTag: "Cleaner Spaces • Safer Access",
    tagSub: "Water-Fed Poles",
  },
  {
    id: "integrated-facilities",
    image: "/images/hero-slides/slide-facility.png",
    alt: "KD Integrated Services operations team with tablet supervisor, housekeeping staff, and security officer at modern corporate campus",
    objectPosition: "object-[78%_center]",
    badgeLabel: "Façade Drone Active",
    badgeIcon: Plane,
    badgeBorder: "border-brandcyan-500/50",
    badgeTextColor: "text-brandcyan-300",
    accentBg: "from-brandblue-600 to-brandcyan-400",
    title: "Supervised On-Site Teams",
    subtitle: "100% Police-Verified & Uniformed",
    pillTag: "Cleaner Spaces • Safer Spaces",
    tagSub: "Better Living",
  },
  {
    id: "mechanized-cleaning",
    image: "/images/hero-slides/slide-cleaning.jpg",
    alt: "KD Integrated Services ride-on mechanized floor scrubber team with digital audit tablets",
    objectPosition: "object-center",
    badgeLabel: "Ride-On Mechanization",
    badgeIcon: Sparkles,
    badgeBorder: "border-emerald-500/50",
    badgeTextColor: "text-emerald-300",
    accentBg: "from-emerald-600 to-teal-400",
    title: "Mechanized Floor Care & Audits",
    subtitle: "German Scrubbers • Digital SOP Tracking",
    pillTag: "100% Audit Compliance",
    tagSub: "Zero Smears",
  },
  {
    id: "preventive-mep",
    image: "/images/hero-slides/slide-maintenance.jpg",
    alt: "KD Integrated Services MEP engineer in safety gear conducting chiller maintenance with digital telemetry",
    objectPosition: "object-center",
    badgeLabel: "24/7 MEP & Chiller Telemetry",
    badgeIcon: Wrench,
    badgeBorder: "border-amber-500/50",
    badgeTextColor: "text-amber-300",
    accentBg: "from-amber-600 to-orange-400",
    title: "Preventive Engineering AMCs",
    subtitle: "HVAC • Substation • Water Treatment",
    pillTag: "99.98% System Uptime",
    tagSub: "Sensor Alerts",
  },
  {
    id: "corporate-hospitality",
    image: "/images/hero-slides/slide-hospitality.jpg",
    alt: "KD Integrated Services corporate pantry and hospitality steward serving executive conference meeting",
    objectPosition: "object-center",
    badgeLabel: "Executive Guest Etiquette",
    badgeIcon: Coffee,
    badgeBorder: "border-indigo-400/50",
    badgeTextColor: "text-indigo-300",
    accentBg: "from-indigo-600 to-brandblue-500",
    title: "Pantry & Stewarding Services",
    subtitle: "HACCP Hygiene • Five-Star Table Service",
    pillTag: "FAHU Climate Monitored",
    tagSub: "Silent Executive Service",
  },
  {
    id: "horticulture-pest",
    image: "/images/hero-slides/slide-pestcontrol.jpg",
    alt: "KD Integrated Services certified pest control and landscaping groundskeeping technicians",
    objectPosition: "object-center",
    badgeLabel: "Certified IPM & Horticulture",
    badgeIcon: Trees,
    badgeBorder: "border-teal-500/50",
    badgeTextColor: "text-teal-300",
    accentBg: "from-teal-600 to-emerald-400",
    title: "Green Care & Pest Elimination",
    subtitle: "Odorless Chemicals • Manicured Lawns",
    pillTag: "Eco-Friendly Solutions",
    tagSub: "Government Certified",
  },
];

const SLIDE_DURATION = 4500; // ms per slide

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 40) {
      prevSlide();
    } else if (deltaX < -40) {
      nextSlide();
    }
    setTouchStartX(null);
    setIsPaused(false);
  };

  const current = SLIDES[currentSlide];

  return (
    <div
      className="relative h-[300px] sm:h-[380px] md:h-[440px] lg:h-full lg:min-h-[520px] xl:min-h-[560px] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden border border-navy-600/80 bg-navy-950 shadow-[0_0_80px_rgba(0,200,232,0.12)] group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="KD Integrated Services Hero Showcase Slideshow"
    >
      <div className="relative h-full w-full bg-navy-950 overflow-hidden">
        {/* Slides Images Stack with Cross-Fade */}
        {SLIDES.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 pointer-events-none z-0"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`object-cover ${slide.objectPosition || "object-center"}`}
              />
            </div>
          );
        })}

        {/* Ambient Top & Bottom Contrast Gradients for Glass Badges */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy-950/85 via-navy-950/35 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-transparent z-20 pointer-events-none" />

        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-30 flex items-center gap-2 bg-navy-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <span className="text-[10px] sm:text-xs font-semibold text-white">Live across Delhi NCR</span>
        </div>

        {/* Previous / Next Arrow Controls: Subtly visible on mobile, reveal on hover on desktop */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous Slide"
          className="absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-navy-950/80 hover:bg-navy-900 border border-navy-700/80 text-white flex items-center justify-center opacity-70 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95"
        >
          <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-200" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next Slide"
          className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-navy-950/80 hover:bg-navy-900 border border-navy-700/80 text-white flex items-center justify-center opacity-70 hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 shadow-xl hover:scale-110 active:scale-95"
        >
          <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-200" />
        </button>

        {/* Bottom Feature Card Overlay with Smooth Content Transition */}
        <div
          key={`info-${current.id}`}
          className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-4 right-2.5 sm:right-4 z-30 flex items-center justify-between gap-2 p-2.5 sm:p-3.5 rounded-xl bg-navy-950/90 backdrop-blur-md border border-navy-700/80 shadow-2xl transition-all duration-500 animate-fadeIn"
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <div
              className={`w-7 h-7 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-tr ${current.accentBg} flex items-center justify-center shrink-0 shadow-md transition-colors duration-500`}
            >
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-[11px] sm:text-sm font-bold text-white leading-tight truncate">
                {current.title}
              </p>
              <p className="text-[9px] sm:text-xs text-slate-300 font-mono truncate">
                {current.subtitle}
              </p>
            </div>
          </div>

          {/* Floating Pill Tag matching original aesthetics */}
          <div className="text-right hidden sm:block shrink-0 pl-2">
            <span className="text-[10px] sm:text-[11px] text-brandcyan-400 font-semibold tracking-wide block">
              {current.pillTag}
            </span>
            <span className="text-[9px] text-slate-400 font-mono">
              {current.tagSub}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
