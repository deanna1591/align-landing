-- Run this in your Supabase SQL editor
-- Creates the waitlist table for landing page email signups

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  source text default 'landing',
  notes text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.waitlist enable row level security;

-- Allow anonymous inserts (anyone can sign up)
create policy "Anyone can insert"
  on public.waitlist
  for insert
  to anon
  with check (true);

-- Only authenticated admin can read (you, when logged in to Supabase dashboard)
create policy "Only admins can read"
  on public.waitlist
  for select
  to authenticated
  using (false);

-- Index for faster lookups by email
create index if not exists waitlist_email_idx on public.waitlist(email);
create index if not exists waitlist_created_at_idx on public.waitlist(created_at desc);
