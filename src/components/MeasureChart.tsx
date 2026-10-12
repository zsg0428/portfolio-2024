import type { Measure, MeasureGroup } from "@/content/site";

const toneClass: Record<Measure["tone"], string> = {
  before: "bg-muted-bar",
  after: "bg-signal",
  baseline: "bg-baseline-bar",
};

export function MeasureChart({ groups, caption }: { groups: MeasureGroup[]; caption: string }) {
  return (
    <figure className="rounded-[3px] border border-rule bg-paper-raised p-5 sm:p-6">
      {groups.map((group, gi) => (
        <div key={group.metric} className={gi > 0 ? "mt-8" : undefined}>
          <p className="font-semibold">{group.metric}</p>
          <p className="text-sm text-ink-soft">{group.note}</p>
          <dl className="mt-4 space-y-3">
            {group.rows.map((row, i) => (
              <div key={row.label}>
                <dt className={`text-sm ${row.tone === "after" ? "font-semibold text-ink" : "text-ink-soft"}`}>{row.label}</dt>
                <dd className="mt-1 flex items-center gap-3">
                  <span className="relative h-3 flex-1 bg-rule/50">
                    <span
                      aria-hidden
                      className={`bar absolute inset-y-0 left-0 ${toneClass[row.tone]}`}
                      style={{ width: `${Math.max(row.value * 100, 1.5)}%`, animationDelay: `${gi * 150 + i * 120}ms` }}
                    />
                  </span>
                  <span className={`w-14 text-right tabular-nums ${row.tone === "after" ? "font-bold text-signal" : ""}`}>
                    {row.display}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
      <figcaption className="mt-6 border-t border-rule pt-4 text-sm leading-relaxed text-ink-soft">{caption}</figcaption>
    </figure>
  );
}
