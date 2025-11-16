'use client';

import { useMemo, useState } from 'react';
import { CheckIcon, SparklesIcon } from '@heroicons/react/24/solid';

type PackingItem = {
  id: number;
  name: string;
  category: string;
  essential?: boolean;
};

type PackingChecklistProps = {
  items: PackingItem[];
};

export function PackingChecklist({ items }: PackingChecklistProps) {
  const [packedIds, setPackedIds] = useState<Set<number>>(() => new Set());
  const [showEssentialOnly, setShowEssentialOnly] = useState(false);

  const groupedItems = useMemo(() => {
    const result = new Map<string, PackingItem[]>();
    for (const item of items) {
      if (showEssentialOnly && !item.essential) continue;
      const categoryItems = result.get(item.category) ?? [];
      categoryItems.push(item);
      result.set(item.category, categoryItems);
    }
    return Array.from(result.entries());
  }, [items, showEssentialOnly]);

  const packedCount = packedIds.size;
  const totalCount = showEssentialOnly
    ? items.filter((item) => item.essential).length
    : items.length;
  const completion = totalCount === 0 ? 0 : Math.round((packedCount / totalCount) * 100);

  const togglePacked = (id: number) => {
    setPackedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Packing Status
          </p>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Checklist
          </h3>
        </div>
        <button
          onClick={() => setShowEssentialOnly((prev) => !prev)}
          className="inline-flex items-center gap-1 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white shadow-sm transition hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600"
        >
          <SparklesIcon className="h-3.5 w-3.5" />
          {showEssentialOnly ? 'All Items' : 'Essential Only'}
        </button>
      </div>

      <div className="mt-6 space-y-5">
        <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
          <span>{packedCount} packed</span>
          <span>{completion}% ready</span>
        </div>
        <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${completion}%` }}
          />
        </div>
      </div>

      <div className="mt-6 space-y-6">
        {groupedItems.map(([category, categoryItems]) => (
          <div key={category}>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              {category}
            </h4>
            <ul className="mt-2 space-y-2">
              {categoryItems.map((item) => {
                const isPacked = packedIds.has(item.id);
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => togglePacked(item.id)}
                      className="group flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-left transition hover:-translate-y-[1px] hover:border-emerald-400 hover:bg-white hover:shadow dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-emerald-500/60 dark:hover:bg-slate-800"
                    >
                      <div>
                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          Tap to mark {isPacked ? 'unpacked' : 'packed'}
                        </p>
                      </div>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs font-semibold transition ${
                          isPacked
                            ? 'border-transparent bg-emerald-500 text-white'
                            : 'border-slate-300 bg-white text-slate-400 group-hover:border-emerald-300 group-hover:text-emerald-500 dark:border-slate-600 dark:bg-slate-900 dark:group-hover:border-emerald-500/70'
                        }`}
                      >
                        {isPacked ? <CheckIcon className="h-4 w-4" /> : item.essential ? '★' : ''}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

