"use client";

import { useRef, useState } from "react";
import type { Demo } from "@/content/site";

// One clip at a time behind tabs: every page is one click away, and only the visible clip loads.
export function DemoTabs({ demos }: { demos: Demo[] }) {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const demo = demos[active];
  if (!demo) return null;

  const select = (index: number) => {
    const next = (index + demos.length) % demos.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="OfferRing pages"
        className="-mx-4 flex gap-1 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") select(active + 1);
          else if (event.key === "ArrowLeft") select(active - 1);
          else if (event.key === "Home") select(0);
          else if (event.key === "End") select(demos.length - 1);
          else return;
          event.preventDefault();
        }}
      >
        {demos.map((d, i) => (
          <button
            key={d.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`demo-tab-${d.id}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls="demo-panel"
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              i === active ? "bg-ink text-paper" : "text-ink-soft hover:bg-rule/60 hover:text-ink"
            }`}
          >
            {d.title}
          </button>
        ))}
      </div>

      <div id="demo-panel" role="tabpanel" aria-labelledby={`demo-tab-${demo.id}`} className="mt-4">
        <video
          key={demo.id}
          className="h-auto w-full rounded-[3px] border border-rule bg-paper-raised"
          width={1200}
          height={854}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={`${demo.src}.jpg`}
          aria-label={`${demo.title}: ${demo.caption}`}
        >
          <source src={`${demo.src}.webm`} type="video/webm" />
          <source src={`${demo.src}.mp4`} type="video/mp4" />
        </video>
        <p className="mt-3 max-w-[64ch] leading-relaxed text-ink-soft">
          <span className="font-semibold text-ink">{demo.title}.</span> {demo.caption}
        </p>
      </div>
    </div>
  );
}
