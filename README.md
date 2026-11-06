# KD Integrated Services — Production Marketing Website

> **Integrated Facility Management. Smarter Operations.**  
> High-performance Next.js 14 (App Router) + TypeScript + Tailwind CSS marketing platform for **KD Integrated Services** (with **KD Integrated Services** engineering division).

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js `18.17+` or `20+` (tested on Node v25 & v20)
- npm `9+`

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Architecture & Content System (`content/`)

All marketing copy, sub-services, industry playbooks, and stats are decoupled into typed TypeScript files inside the `content/` folder so you can edit text **without touching UI layout code**:

```
content/
├── company.ts       # Contact info, GST, EPFO/ESIC compliance, addresses, WhatsApp config
├── services.ts      # 4 main categories (Soft, Security, Hard FM, Specialised) & sub-services
├── industries.ts    # 8 industry sector playbooks with pain points, solutions, and SLAs
├── technology.ts    # 8 core tech capabilities & KD Integrated Services arm integration
├── packages.ts      # 3-tier AMC comparison matrix (Essential, Advantage, Enterprise)
├── process.ts       # 5-step onboarding workflow (01 to 05) & recurring contract terms
├── stats.ts         # 4 stat counters with operational disclaimer footnote
├── whyUs.ts         # 6-point operational differentiation grid & SLA guarantees
├── caseStudies.ts   # Operational blueprints & deployment archetypes
├── sustainability.ts# 4 green pillars & corporate ESG / BRSR reporting hooks
├── cities.ts        # City data for dynamic regional landing pages (Gurgaon, Delhi, Noida, etc.)
└── partner.ts       # Channel partner & broker referral program details
```

---

## 📝 How-To Guides

### 1. How to Add a New Service

1. Open `content/services.ts`.
2. Locate the appropriate category (`soft-services`, `security-services`, `technical-services`, or `specialised-services`) or add a new category object.
3. In `subServices`, add your new service object:
   ```typescript
   {
     id: "solar-panel-cleaning",
     slug: "solar-panel-cleaning",
     title: "Industrial Rooftop Solar Panel Cleaning",
     shortDescription: "Demineralized pure-water wash boosting solar generation efficiency.",
     whatItIs: "Automated pure-water robotic and telescopic washing that removes dust accumulation from rooftop photovoltaic cells.",
     whoItsFor: "Industrial factories, cold storages, and commercial tech parks with rooftop solar installations.",
     benefits: [
       "Restores up to 22% lost power generation from dust occlusion",
       "Zero harsh chemical etching on photovoltaic glass coatings",
       "Scheduled monthly or quarterly wash cycles"
     ],
     slaNote: "Zero surface abrasion guarantee with deionized water filtration.",
     iconName: "Sun"
   }
   ```
4. Save the file. The new service will automatically appear in the navigation mega-menu, service cards, and service detail page!

---

### 2. How to Add a New City Landing Page

All city landing pages are driven dynamically via `app/[city]/page.tsx` and pre-rendered statically during build:

1. Open `content/cities.ts`.
2. Add your new city entry (e.g., `bengaluru`, `mumbai`, `chandigarh`):
   ```typescript
   bengaluru: {
     slug: "bengaluru",
     name: "Bengaluru (Bangalore)",
     state: "Karnataka",
     headline: "Integrated Facility Management for Bengaluru Tech Corridors",
     tagline: "Grade-A corporate housekeeping, 24/7 manned guarding, and critical data-center MEP engineering across Whitefield and Electronic City.",
     seoTitle: "Facility Management Company in Bengaluru | KD Integrated Services",
     seoDescription: "Premier facility management services in Bengaluru. Corporate housekeeping, PASARA security, HVAC chiller operations, and drone facade cleaning.",
     primaryKeyword: "Facility Management Company in Bengaluru",
     secondaryKeywords: [
       "Corporate Cleaning Services Bengaluru",
       "Housekeeping Services Whitefield",
       "Security Guarding Agency Bangalore",
       "Integrated Facility Management Electronic City"
     ],
     keyHubs: [
       "Outer Ring Road (ORR) Tech Corridor",
       "Whitefield IT Parks",
       "Electronic City Phase 1 & 2",
       "Manyata Tech Park & Hebbal",
     ],
     clientTypes: ["Global Capability Centers", "IT & R&D Hubs", "Luxury Condominiums"],
     localOffice: "Regional Operations Hub: Outer Ring Road, Bellandur, Bengaluru",
     dispatchTime: "Under 35 minutes across ORR & Whitefield",
   }
   ```
3. Save the file. The route `https://yourdomain.com/bengaluru` will automatically be created, added to `sitemap.xml`, and indexed with localized JSON-LD structured data.

---

### 3. Lead Capture & Storage (`data/leads.json`)

- When a client submits the "Request a Free Facility Assessment" form, the data is sent to `/api/assessment`.
- **Primary Fallback:** Leads are instantly appended to `data/leads.json` with a unique lead ID, timestamp, and status.
- **Email Notifications (Resend):**
  Add the following environment variables to your `.env.local` or hosting provider:
  ```env
  RESEND_API_KEY=re_your_api_key_here
  NOTIFICATION_EMAIL=info@kdintegratedservices.com
  ```
  When configured, the API will automatically dispatch formatted HTML email alerts directly to your operations inbox.

---

### 4. How to Deploy to Vercel

The project is 100% Vercel-native and requires zero custom server configurations:

1. Push this repository to GitHub or GitLab:
   ```bash
   git add .
   git commit -m "Production-ready KD Integrated Services marketing website"
   git push origin main
   ```
2. Log into [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework preset: **Next.js** (automatically detected).
5. (Optional) Add Environment Variables:
   - `RESEND_API_KEY`: Your Resend API key for lead emails
   - `NOTIFICATION_EMAIL`: `info@kdintegratedservices.com`
6. Click **Deploy**. Vercel will run `npm run build` and publish your site with edge CDN caching and instant HTTPS!

---

## 🛡️ Statutory & Corporate Empanelment Credentials

- **Entity:** KD INTEGRATED SERVICES PVT LTD
- **Technology Arm:** KD Integrated Services
- **GST:** 06AABCK1234F1Z5 (100% Tax Compliant, Input Tax Credit Eligible)
- **EPFO & ESIC:** 100% on-time statutory remittances with challan proofs
- **Guarding:** PASARA certified guarding framework
- **Insurance:** ₹5,00,00,000 Comprehensive Third-Party Public Liability Coverage
