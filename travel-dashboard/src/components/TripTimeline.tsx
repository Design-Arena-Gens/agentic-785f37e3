import { CalendarDaysIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export type TimelineEntry = {
  time: string;
  title: string;
  description: string;
  icon?: 'calendar' | 'clock' | 'map';
};

type TripTimelineProps = {
  entries: TimelineEntry[];
};

const iconMap = {
  calendar: CalendarDaysIcon,
  clock: ClockIcon,
  map: MapPinIcon,
};

export function TripTimeline({ entries }: TripTimelineProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white/90 via-white/60 to-white/20 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-900/40">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Day Planner
          </p>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Tokyo Adventure
          </h3>
        </div>
        <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-500 dark:border-slate-700 dark:text-slate-400">
          4 days
        </span>
      </header>
      <ul className="mt-6 space-y-4">
        {entries.map((entry, index) => {
          const Icon = iconMap[entry.icon ?? 'map'];
          return (
            <li key={`${entry.time}-${index}`} className="flex gap-4">
              <div className="relative flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm ring-4 ring-slate-900/10 dark:bg-slate-700 dark:ring-slate-600/30">
                  <Icon className="h-5 w-5" />
                </div>
                {index !== entries.length - 1 && (
                  <span className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-slate-200 via-slate-200/60 to-transparent dark:from-slate-700 dark:via-slate-700/60" />
                )}
              </div>
              <div className="flex-1 rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/70 dark:hover:border-slate-500">
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  <span>{entry.time}</span>
                </div>
                <h4 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                  {entry.title}
                </h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {entry.description}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

