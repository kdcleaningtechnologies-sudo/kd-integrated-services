import type { Metadata } from "next";

const envUrl = (process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/$/, "");

export const SITE_URL =
  envUrl && !/localhost|127\.0\.0\.1/i.test(envUrl)
    ? envUrl
    : "https://kdfmservices.com";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const defaultOgImage = {
  url: `${SITE_URL}/images/kd-hero-staff.png`,
  width: 1200,
  height: 630,
  alt: "KD Integrated Services operations team for integrated facility management in Gurgaon and Delhi NCR",
};

export function socialMetadata(
  path: string,
  opts: { title: string; description: string }
): Pick<Metadata, "alternates" | "openGraph" | "twitter"> {
  const url = absoluteUrl(path);
  return {
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      type: "website",
      locale: "en_IN",
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [defaultOgImage.url],
    },
  };
}
