import { CurrencyDollarIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

type BudgetCategory = {
  name: string;
  planned: number;
  spent: number;
};

type BudgetTrackerProps = {
  totalPlanned: number;
  totalSpent: number;
  categories: BudgetCategory[];
};

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function BudgetTracker({ totalPlanned, totalSpent, categories }: BudgetTrackerProps) {
  const remaining = totalPlanned - totalSpent;
  const percentUsed = Math.min(100, Math.round((totalSpent / totalPlanned) * 100));

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-center gap-3">
        <div className="rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 text-white shadow">
          <CurrencyDollarIcon className="h-7 w-7" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Trip Budget
          </p>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            {currencyFormatter.format(totalPlanned)} planned
          </h3>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>Spent so far</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            {currencyFormatter.format(totalSpent)}
          </span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all"
            style={{ width: `${percentUsed}%` }}
          />
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {remaining > 0
            ? `${currencyFormatter.format(remaining)} remaining`
            : `Over budget by ${currencyFormatter.format(Math.abs(remaining))}`}
        </p>
      </div>

      <div className="mt-7 space-y-4">
        {categories.map((category) => {
          const usage = Math.min(100, Math.round((category.spent / category.planned) * 100));
          return (
            <div key={category.name} className="rounded-2xl border border-slate-200/60 p-4 dark:border-slate-700/70">
              <div className="flex items-center justify-between text-sm font-semibold text-slate-800 dark:text-slate-200">
                <span className="flex items-center gap-2">
                  <PaperAirplaneIcon className="h-4 w-4 text-emerald-500" />
                  {category.name}
                </span>
                <span>{currencyFormatter.format(category.spent)}</span>
              </div>
              <div className="mt-2 h-1.5 rounded-full bg-slate-100 dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all"
                  style={{ width: `${usage}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Planned {currencyFormatter.format(category.planned)} · {usage}% used
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
