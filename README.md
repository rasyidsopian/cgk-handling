CGK Handling v22

This build applies the requested incentive rules and adds cross-device realtime synchronization support via Supabase.

IMPORTANT: GitHub Pages is static and cannot persist shared cross-device state by itself. To enable realtime across all devices, configure sync-config.js with a Supabase project and run the SQL below. Without configuration, the app safely falls back to local browser storage and shows LOCAL in the sync indicator.

1) Create a Supabase project and obtain the project URL + anon/public key.
2) Edit sync-config.js and fill url + anonKey.
3) In Supabase SQL editor, create the shared state table:

create table public.cgk_handling_state (
  id text primary key,
  state jsonb not null,
  updated_at timestamptz not null default now(),
  updated_by text
);

alter table public.cgk_handling_state enable row level security;

create policy "cgk handling read" on public.cgk_handling_state
for select using (true);

create policy "cgk handling insert" on public.cgk_handling_state
for insert with check (true);

create policy "cgk handling update" on public.cgk_handling_state
for update using (true) with check (true);

4) Enable Realtime for cgk_handling_state in the Supabase dashboard, or add the table to the supabase_realtime publication if your project setup requires it.
5) Upload the contents of this folder to the root of the GitHub Pages repository.

REALTIME MODEL
- Add/edit/delete schedule, attendance, received incentive, and operator notes are synchronized through one shared row.
- Updates are last-write-wins by updated_at.
- The source flight dataset remains baked into the app and is never overwritten.

INCENTIVE RULES (Nov 2026+)
- 1 departure/day = Rp150.000
- 2 departures/day = Rp200.000
- 1 arrival/day = Rp75.000
- 2 arrivals/day = Rp75.000
- 1 departure + 1 arrival/day = Rp200.000
- Undefined combinations with 3+ events are marked PERLU VERIFIKASI and not assigned an invented amount.

Pre-November 2026 keeps the legacy Rp50.000 per attendance rule.
