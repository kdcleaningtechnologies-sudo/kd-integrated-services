import React from "react";
import Image from "next/image";

interface BrandLogoProps {
  variant?: "facilities" | "integrated" | "cleaning" | "icon-only" | "full-cleaning";
  theme?: "light" | "dark" | "auto";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "integrated",
  theme = "auto",
  size = "md",
  className = "",
  showTagline = true,
}) => {
  const isDark = theme === "dark";

  // Height mappings based on size
  const heightClasses = {
    sm: "h-8 sm:h-9 max-w-[150px]",
    md: "h-10 sm:h-11 max-w-[185px] sm:max-w-[205px]",
    lg: "h-13 sm:h-14 max-w-[240px] sm:max-w-[270px]",
    xl: "h-18 sm:h-20 max-w-[320px] sm:max-w-[360px]",
  };

  const iconHeightClasses = {
    sm: "h-8 w-auto",
    md: "h-10 sm:h-11 w-auto",
    lg: "h-13 sm:h-14 w-auto",
    xl: "h-18 sm:h-20 w-auto",
  };

  // 1. Icon-only variant (KD Monogram with high-rises and wave)
  if (variant === "icon-only") {
    const iconSrc = isDark
      ? "/images/kd-icon-dark.png"
      : "/images/kd-icon-transparent.png";

    return (
      <div className={`inline-flex items-center flex-shrink-0 ${className}`}>
        <Image
          src={iconSrc}
          alt="KD Integrated Services"
          width={305}
          height={220}
          style={{ width: "auto" }}
          className={`${iconHeightClasses[size]} object-contain drop-shadow-sm`}
          priority
        />
      </div>
    );
  }

  // 2. Integrated / Primary Variant (Official KD Integrated Services logo)
  if (variant === "facilities" || variant === "integrated") {
    let logoSrc: string;
    const imgWidth = 914;
    let imgHeight = 220;

    if (showTagline) {
      logoSrc = isDark ? "/images/kd-facilities-logo-dark.png" : "/images/kd-facilities-logo.png";
    } else {
      logoSrc = isDark ? "/images/kd-facilities-logo-compact-dark.png" : "/images/kd-facilities-logo-compact.png";
      imgHeight = 164;
    }

    return (
      <div className={`inline-flex items-center flex-shrink-0 ${className} select-none`}>
        <Image
          src={logoSrc}
          alt="KD Integrated Services"
          width={imgWidth}
          height={imgHeight}
          style={{ width: "auto" }}
          className={`${heightClasses[size]} object-contain transition-all`}
          priority
        />
      </div>
    );
  }

  // 3. Engineering & Specialized Technology Variant
  const iconSrc = isDark
    ? "/images/kd-icon-dark.png"
    : "/images/kd-icon-transparent.png";

  const textSizes = {
    sm: {
      primary: "text-sm",
      secondary: "text-[11px]",
      tagline: "text-[8px] tracking-[0.18em]",
    },
    md: {
      primary: "text-base sm:text-lg",
      secondary: "text-xs sm:text-sm",
      tagline: "text-[9px] sm:text-[10px] tracking-[0.2em]",
    },
    lg: {
      primary: "text-xl sm:text-2xl",
      secondary: "text-base sm:text-lg",
      tagline: "text-xs tracking-[0.22em]",
    },
    xl: {
      primary: "text-2xl sm:text-3xl",
      secondary: "text-lg sm:text-xl",
      tagline: "text-xs sm:text-sm tracking-[0.24em]",
    },
  };

  const currentTextSize = textSizes[size];
  const secondaryColorClass = isDark ? "text-slate-100" : "text-slate-900";

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3 ${className} select-none`}>
      <Image
        src={iconSrc}
        alt="KD Integrated Services"
        width={305}
        height={220}
        className={`${iconHeightClasses[size]} object-contain drop-shadow-sm`}
        priority
      />

      {/* Vertical subtle divider line matching official branding */}
      <div className={`h-8 sm:h-10 w-[1px] ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />

      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5 leading-none font-heading font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-[#0066FF] via-[#0099FF] to-[#00D2B4] bg-clip-text text-transparent uppercase">
            INTEGRATED
          </span>
          <span className={`${secondaryColorClass} uppercase font-bold tracking-wider ${currentTextSize.secondary}`}>
            SERVICES
          </span>
        </div>

        {/* Gradient Underline Bar */}
        <div className="h-[2px] w-full bg-gradient-to-r from-[#0066FF] via-[#00C2FF] to-[#00D2B4] my-1 rounded-full opacity-90" />

        {showTagline && (
          <span className={`font-semibold uppercase ${isDark ? "text-cyan-300" : "text-[#00A3FF]"} ${currentTextSize.tagline} font-sans leading-none`}>
            SMART SOLUTIONS <span className="text-[#00D2B4]">|</span> SPARKLING RESULTS <span className="text-[#00D2B4]">|</span> TRUSTED CARE
          </span>
        )}
      </div>
    </div>
  );
};
