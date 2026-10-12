import { offerRing, offerRingDemos } from "@/content/site";
import { DemoTabs } from "./DemoTabs";

export function OfferRing() {
  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
        <div className="max-w-[64ch]">
          <p className="text-xl leading-snug">{offerRing.summary}</p>
          <ul className="mt-6 space-y-2 leading-relaxed text-ink-soft">
            {offerRing.points.map((p) => (
              <li key={p} className="relative pl-5 before:absolute before:top-[0.6em] before:left-0.5 before:size-1.5 before:rounded-full before:bg-signal">
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-soft">Built with {offerRing.stack.join(", ")}</p>
          <a href={offerRing.url} className="link mt-4 inline-block font-medium">
            Open OfferRing
          </a>
        </div>

        <figure className="self-start rounded-[3px] border border-rule bg-paper-raised p-5 sm:p-6">
          <table className="w-full text-left">
            <caption className="text-left">
              <span className="block font-semibold">Answer quality, first eval run and now</span>
              <span className="block text-sm text-ink-soft">Fictional postings and questions, scored in code and by a calibrated judge</span>
            </caption>
            <thead>
              <tr className="text-sm text-ink-soft">
                <th scope="col" className="pt-4 pb-2 font-normal">Metric</th>
                <th scope="col" className="pt-4 pb-2 text-right font-normal">First</th>
                <th scope="col" className="pt-4 pb-2 text-right font-normal">Now</th>
              </tr>
            </thead>
            <tbody>
              {offerRing.evals.map((e) => (
                <tr key={e.metric} className="border-t border-rule">
                  <th scope="row" className="py-3 pr-3 font-normal">{e.metric}</th>
                  <td className="py-3 text-right text-ink-soft tabular-nums">{e.before}</td>
                  <td className="py-3 pl-4 text-right font-bold text-signal tabular-nums">{e.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <figcaption className="mt-4 border-t border-rule pt-4 text-sm leading-relaxed text-ink-soft">{offerRing.evalNote}</figcaption>
        </figure>
      </div>

      {offerRingDemos.length > 0 && (
        <div className="mt-14 max-w-4xl">
          <p className="mb-4 text-sm text-ink-soft">The dashboard, recorded with a fictional applicant and demo data.</p>
          <DemoTabs demos={offerRingDemos} />
        </div>
      )}
    </div>
  );
}
