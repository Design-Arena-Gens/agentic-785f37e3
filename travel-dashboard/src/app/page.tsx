import {
  ArrowTrendingUpIcon,
  BellAlertIcon,
  CalendarDaysIcon,
  MapIcon,
  SunIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

import { BudgetTracker } from '@/components/BudgetTracker';
import { InsightHighlights } from '@/components/InsightHighlights';
import { PackingChecklist } from '@/components/PackingChecklist';
import { TripTimeline } from '@/components/TripTimeline';
import { UpcomingTrips } from '@/components/UpcomingTrips';

const upcomingTrips = [
  {
    destination: 'Tokyo, Japan',
    dates: 'Apr 4 – Apr 10, 2025',
    image:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=400&h=400',
    focus: 'Cherry blossom immersion & neighborhood food crawl',
    weather: '18°C · Clear skies',
    status: 'Confirmed' as const,
  },
  {
    destination: 'Lisbon, Portugal',
    dates: 'Jun 14 – Jun 22, 2025',
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&q=80&w=400&h=400',
    focus: 'Artisanal cafés & coastline day trips',
    weather: '21°C · Ocean breeze',
    status: 'Planning' as const,
  },
  {
    destination: 'Seoul, South Korea',
    dates: 'Oct 3 – Oct 11, 2025',
    image:
      'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&q=80&w=400&h=400',
    focus: 'K-creative scene & street food marathon',
    weather: 'Forecast pending',
    status: 'Researching' as const,
  },
];

const timelineEntries = [
  {
    time: 'Day 1 · Arrival',
    title: 'Check into boutique stay & sunset at Shibuya Sky',
    description: 'Grab the Suica transit pass, explore Shinjuku Omoide Yokocho for late bites.',
    icon: 'map' as const,
  },
  {
    time: 'Day 2 · Culture',
    title: 'Tsukiji market breakfast + teamLab Planets immersion',
    description: 'Reserve counter at Sushi Dai and wander through Ginza flagship concept stores.',
    icon: 'calendar' as const,
  },
  {
    time: 'Day 3 · Nature',
    title: 'Mt. Takao sunrise hike & onsen wind-down',
    description: 'Pack light layers, book rotenburo spa slot, capture golden-hour photos.',
    icon: 'clock' as const,
  },
  {
    time: 'Day 4 · Exploration',
    title: 'Neighborhood crawl across Shimokitazawa & Nakameguro',
    description: 'Vintage finds, independent vinyl shops, and canal-side coffee tasting.',
    icon: 'map' as const,
  },
];

const budget = {
  totalPlanned: 6200,
  totalSpent: 3985,
  categories: [
    { name: 'Flights + Rail', planned: 1800, spent: 1620 },
    { name: 'Stays & Onsen', planned: 2200, spent: 1460 },
    { name: 'Dining Experiences', planned: 1200, spent: 590 },
    { name: 'Experiences + Passes', planned: 1000, spent: 315 },
  ],
};

const insights = [
  {
    title: 'Flight Watch',
    metric: '$87 fare drop',
    description: 'Haneda ↔ JFK fares dipped after midnight alerts — lock before Friday.',
    accent: 'from-rose-500 to-amber-400',
    icon: 'bolt' as const,
  },
  {
    title: 'Local Vibes',
    metric: 'Golden Week peak',
    description: 'High foot traffic expected; book ramen omakase two weeks earlier.',
    accent: 'from-sky-500 to-emerald-400',
    icon: 'globe' as const,
  },
  {
    title: 'Remote Ready',
    metric: '5G strength: 92%',
    description: 'Cafés in Meguro and Daikanyama flagged with top Wi-Fi speeds.',
    accent: 'from-indigo-500 to-purple-500',
    icon: 'wifi' as const,
  },
];

const packingItems = [
  { id: 1, name: 'Universal travel adapter', category: 'Essentials', essential: true },
  { id: 2, name: 'JR Pass & Suica reload', category: 'Essentials', essential: true },
  { id: 3, name: 'Mirrorless camera kit', category: 'Gear', essential: true },
  { id: 4, name: 'Lightweight rain jacket', category: 'Wardrobe', essential: true },
  { id: 5, name: 'Onsen etiquette kit', category: 'Wardrobe' },
  { id: 6, name: 'Reusable chopsticks + bottle', category: 'Sustainability' },
  { id: 7, name: 'Noise-canceling headphones', category: 'Gear' },
  { id: 8, name: 'Wellness pouch + supplements', category: 'Health' },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-sky-200/60 via-white/10 to-transparent blur-3xl" />
      <main className="relative mx-auto max-w-6xl px-6 py-10 lg:px-12 lg:py-14">
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <aside className="space-y-6 rounded-[32px] border border-slate-200/60 bg-white/70 p-6 shadow-md backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-400">
                Voyager Studio
              </span>
              <BellAlertIcon className="h-5 w-5 text-slate-400" />
            </div>
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 p-[2px] shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-indigo-500 shadow-inner dark:bg-slate-950">
                  <UserCircleIcon className="h-8 w-8" />
                </div>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Alex Morgan
                </h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Multi-stop East Asia immersion · Solo traveler
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-indigo-500/80 via-sky-500/80 to-emerald-400/70 p-5 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                Featured Journey
              </p>
              <h2 className="mt-3 text-2xl font-semibold">Tokyo Bloom Season</h2>
              <p className="mt-2 text-sm text-white/80">
                4-day urban discovery focused on spring festivals, pop-up dining, and design studios.
              </p>
              <div className="mt-5 flex items-center justify-between text-sm font-semibold">
                <span className="inline-flex items-center gap-1">
                  <CalendarDaysIcon className="h-4 w-4" />
                  Apr 4 – Apr 10
                </span>
                <span className="inline-flex items-center gap-1">
                  <SunIcon className="h-4 w-4" />
                  18°C · Clear evenings
                </span>
              </div>
              <div className="mt-6 h-[160px] w-full overflow-hidden rounded-3xl border border-white/40">
                <Image
                  src="https://images.unsplash.com/photo-1526481280695-3c46917c92a8?auto=format&fit=crop&q=80&w=600&h=320"
                  alt="Tokyo skyline"
                  width={600}
                  height={320}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Travel Metrics
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Countdown</span>
                  <span className="text-lg font-semibold text-slate-900 dark:text-white">12 days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-500 dark:text-slate-400">Planning Status</span>
                  <span className="text-sm font-semibold text-emerald-500">On track</span>
                </div>
                <div>
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>Progress</span>
                    <span>68%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400" style={{ width: '68%' }} />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="rounded-[32px] border border-slate-200/60 bg-white/80 p-6 shadow-md backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
              <header className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Dashboard
                  </p>
                  <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                    Your curated travel planning canvas
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Track itineraries, budgets, and essentials — designed for design-led explorers.
                  </p>
                </div>
                <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-600 shadow-sm dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300">
                  <MapIcon className="h-5 w-5 text-emerald-500" />
                  Next stop: Nikko Scenic Rail · 2h 40m
                </div>
              </header>

              <div className="mt-6 space-y-6">
                <InsightHighlights insights={insights} />
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <TripTimeline entries={timelineEntries} />
              <BudgetTracker
                totalPlanned={budget.totalPlanned}
                totalSpent={budget.totalSpent}
                categories={budget.categories}
              />
            </div>

            <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
              <UpcomingTrips trips={upcomingTrips} />
              <PackingChecklist items={packingItems} />
            </div>

            <div className="rounded-[32px] border border-dashed border-slate-300 bg-white/60 p-6 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900/60">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Need more inspiration?
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Sync your calendar, import loyalty programs, and unlock guided city playbooks tailored
                to your curiosity.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600">
                <ArrowTrendingUpIcon className="h-4 w-4" />
                Activate Pro travel lab
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
