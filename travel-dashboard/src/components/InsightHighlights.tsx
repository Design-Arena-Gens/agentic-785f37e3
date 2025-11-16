import { BoltIcon, GlobeAsiaAustraliaIcon, WifiIcon } from '@heroicons/react/24/outline';

type Insight = {
  title: string;
  description: string;
  metric: string;
  accent: string;
  icon: 'bolt' | 'globe' | 'wifi';
};

type InsightHighlightsProps = {
  insights: Insight[];
};

const iconMap = {
  bolt: BoltIcon,
  globe: GlobeAsiaAustraliaIcon,
  wifi: WifiIcon,
};

export function InsightHighlights({ insights }: InsightHighlightsProps) {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {insights.map((insight) => {
        const Icon = iconMap[insight.icon];
        return (
          <article
            key={insight.title}
            className="group rounded-3xl border border-slate-200 bg-white/70 p-5 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-sm ${insight.accent}`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {insight.title}
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              {insight.metric}
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {insight.description}
            </p>
          </article>
        );
      })}
    </section>
  );
}

