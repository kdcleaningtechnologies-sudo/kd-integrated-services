-- ==============================================================================
-- KD Integrated Services — Supabase PostgreSQL Schema
-- Run this script in the Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- ==============================================================================

-- Enable UUID extension if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. LEADS TABLE (Client Facility Assessment Inquiries)
CREATE TABLE IF NOT EXISTS public.leads (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    status TEXT NOT NULL DEFAULT 'NEW' CHECK (status IN ('NEW', 'CONTACTED', 'ASSESSMENT_SCHEDULED', 'PROPOSAL_SENT', 'WON', 'LOST', 'ARCHIVED')),
    name TEXT NOT NULL,
    company TEXT,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    property_type TEXT NOT NULL,
    city TEXT NOT NULL,
    approx_area TEXT,
    required_services TEXT[] NOT NULL DEFAULT '{}',
    staff_required TEXT,
    message TEXT,
    source_url TEXT,
    internal_notes TEXT,
    assigned_to TEXT,
    last_contacted_at TIMESTAMPTZ,
    user_agent TEXT,
    ip TEXT
);

CREATE INDEX IF NOT EXISTS idx_leads_created_at ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_status ON public.leads (status);
CREATE INDEX IF NOT EXISTS idx_leads_city ON public.leads (city);
CREATE INDEX IF NOT EXISTS idx_leads_email ON public.leads (email);

-- 2. PARTNERS TABLE (Channel Partner / Broker Registrations)
CREATE TABLE IF NOT EXISTS public.partners (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    type TEXT NOT NULL DEFAULT 'CHANNEL_PARTNER',
    partner_name TEXT NOT NULL,
    company TEXT,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    city TEXT,
    profile_type TEXT NOT NULL,
    notes TEXT,
    status TEXT NOT NULL DEFAULT 'PENDING' CHECK (status IN ('PENDING', 'MOU_SENT', 'VERIFIED', 'INACTIVE')),
    internal_notes TEXT
);

CREATE INDEX IF NOT EXISTS idx_partners_created_at ON public.partners (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_partners_status ON public.partners (status);

-- 3. CANDIDATES TABLE (Career / Job Applications)
CREATE TABLE IF NOT EXISTS public.candidates (
    id TEXT PRIMARY KEY,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL,
    experience TEXT,
    current_location TEXT,
    notes TEXT,
    status TEXT NOT NULL DEFAULT 'APPLIED' CHECK (status IN ('APPLIED', 'REVIEWING', 'INTERVIEW_SCHEDULED', 'OFFERED', 'HIRED', 'REJECTED'))
);

CREATE INDEX IF NOT EXISTS idx_candidates_created_at ON public.candidates (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_candidates_role ON public.candidates (role);

-- 4. CONTENT OVERRIDES TABLE (Live Website Content & CMS Customization)
CREATE TABLE IF NOT EXISTS public.content_overrides (
    key TEXT PRIMARY KEY DEFAULT 'main',
    content JSONB NOT NULL DEFAULT '{}'::jsonb,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.candidates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_overrides ENABLE ROW LEVEL SECURITY;

-- Allow public web visitors to insert new assessment requests
CREATE POLICY "Public insert leads"
    ON public.leads
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow public web visitors to insert channel partner registrations
CREATE POLICY "Public insert partners"
    ON public.partners
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow public web visitors to submit career applications
CREATE POLICY "Public insert candidates"
    ON public.candidates
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow service_role key full CRUD privileges on all tables (used by Next.js backend API & Admin)
CREATE POLICY "Service role full access leads"
    ON public.leads
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Service role full access partners"
    ON public.partners
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Service role full access candidates"
    ON public.candidates
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);

CREATE POLICY "Service role full access content_overrides"
    ON public.content_overrides
    FOR ALL
    TO service_role
    USING (true)
    WITH CHECK (true);
