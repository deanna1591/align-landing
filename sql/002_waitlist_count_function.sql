-- Run this AFTER 001_waitlist.sql
-- Allows anonymous users to count rows (but not see emails)
-- This powers the "247+ on the waitlist" counter on the landing page

create or replace function public.waitlist_count()
returns integer
language sql
security definer
set search_path = public
as $$
  select count(*)::integer from public.waitlist;
$$;

-- Grant execute permission to anonymous users
grant execute on function public.waitlist_count() to anon;
grant execute on function public.waitlist_count() to authenticated;
