export interface FlowStep {
  name: string;
  detail?: string;
  /** Label on the connector leading to the next step. */
  via?: string;
  /** Checks that sit on this step, drawn as a guard rail beside it. */
  guards?: string[];
}

export function FlowDiagram({ steps, caption }: { steps: FlowStep[]; caption: string }) {
  return (
    <figure className="rounded-[3px] border border-rule bg-paper-raised p-5 sm:p-6">
      <ol className="relative">
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          return (
            <li key={step.name} className="relative">
              <div
                className={`rounded-[3px] border px-4 py-3 ${
                  step.guards ? "border-signal bg-signal-soft/60" : "border-rule bg-paper"
                }`}
              >
                <p className="font-semibold">{step.name}</p>
                {step.detail && <p className="text-sm text-ink-soft">{step.detail}</p>}
                {step.guards && (
                  <ul className="mt-2 space-y-1 text-sm">
                    {step.guards.map((g) => (
                      <li key={g} className="flex gap-2">
                        <svg aria-hidden viewBox="0 0 16 16" className="mt-0.5 size-4 shrink-0 text-signal">
                          <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {!last && (
                <div className="flex items-stretch gap-3 py-1 pl-6" aria-hidden={!step.via}>
                  <svg viewBox="0 0 12 40" className="h-10 w-3 shrink-0 text-baseline-bar" aria-hidden>
                    <path d="M6 0v34M1.5 29L6 35l4.5-6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {step.via && <span className="self-center text-sm text-ink-soft">{step.via}</span>}
                </div>
              )}
            </li>
          );
        })}
      </ol>
      <figcaption className="mt-5 border-t border-rule pt-4 text-sm leading-relaxed text-ink-soft">{caption}</figcaption>
    </figure>
  );
}
