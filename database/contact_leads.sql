create table if not exists public.contact_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  phone text not null,
  email text not null,
  service_address text not null,
  city text not null,
  service_needed text not null,
  preferred_contact text not null,
  message text not null default '',
  consent boolean not null check (consent is true)
);

alter table public.contact_leads enable row level security;