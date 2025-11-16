import Image from 'next/image';
import { ArrowUpRightIcon, MapPinIcon } from '@heroicons/react/24/outline';

type Trip = {
  destination: string;
  dates: string;
  image: string;
  focus: string;
  weather: string;
  status: 'Confirmed' | 'Researching' | 'Planning';
};

type UpcomingTripsProps = {
  trips: Trip[];
};

const statusStyles: Record<Trip['status'], string> = {
  Confirmed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200',
  Researching: 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200',
  Planning: 'bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-200',
};

export function UpcomingTrips({ trips }: UpcomingTripsProps) {
  return (
    <section className="space-y-4">
      <header className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Upcoming Trips
          </p>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Travel queue</h2>
        </div>
        <button className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-700 dark:text-slate-300 dark:hover:border-slate-500">
          Explore ideas
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </button>
      </header>
      <div className="grid gap-4">
        {trips.map((trip) => (
          <article
            key={trip.destination}
            className="flex gap-4 rounded-3xl border border-slate-200 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
          >
            <div className="relative h-28 w-28 overflow-hidden rounded-2xl">
              <Image src={trip.image} alt={trip.destination} fill className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p
                  className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles[trip.status]}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {trip.status}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                  {trip.destination}
                </h3>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <MapPinIcon className="h-4 w-4 text-emerald-500" />
                  {trip.focus}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>{trip.dates}</span>
                <span>{trip.weather}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

