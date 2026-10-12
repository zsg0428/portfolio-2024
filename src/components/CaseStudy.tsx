import type { CaseStudy as CaseStudyData } from "@/content/site";
import { recallMeasures } from "@/content/site";
import { FlowDiagram, type FlowStep } from "./FlowDiagram";
import { MeasureChart } from "./MeasureChart";

const voiceFlow: FlowStep[] = [
  { name: "Student's browser or phone", detail: "Microphone with echo cancellation on", via: "WebRTC peer connection, audio both ways" },
  { name: "OpenAI Realtime", detail: "Wraps up at 5 minutes, stops at 10", via: "Tool call" },
  { name: "Addie API", guards: ["Guarded tool calls", "Extraction scoped to the session's purpose"], via: "Structured notes" },
  { name: "Notes on the student's profile", detail: "Feeds Addie's context in later conversations" },
];

const reportingFlow: FlowStep[] = [
  { name: "School admin asks a question", detail: "Plain English, inside the counselor app", via: "Agent writes SQL" },
  {
    name: "Guardrails",
    guards: ["Read only connection", "School taken from the signed in identity", "Table allowlist, no transcript content", "Test, demo and archived students left out"],
    via: "Query runs",
  },
  { name: "Production Postgres", via: "Rows and a plain English answer" },
  { name: "Answer and audit log entry", detail: "Every query recorded" },
];

function Figure({ kind }: { kind: CaseStudyData["figure"] }) {
  if (kind === "recall") {
    return (
      <MeasureChart
        groups={recallMeasures}
        caption="Recall test I wrote before building the agent: 70 questions, each with a fact planted in a synthetic student's record."
      />
    );
  }
  if (kind === "voice") {
    return <FlowDiagram steps={voiceFlow} caption="How a voice session runs. Simplified; no real student data." />;
  }
  return <FlowDiagram steps={reportingFlow} caption="Where the safety lives: in code around the model, not in the prompt." />;
}

export function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <article id={study.id} aria-labelledby={`${study.id}-title`} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
      <div className="max-w-[64ch]">
        <p className="text-sm text-ink-soft">{study.role}</p>
        <h3 id={`${study.id}-title`} className="mt-1 text-[clamp(1.6rem,3vw,2.25rem)] leading-tight font-bold tracking-[-0.02em]">
          {study.title}
        </h3>
        <p className="mt-3 text-xl leading-snug">{study.summary}</p>

        <h4 className="mt-8 font-semibold">The problem</h4>
        <p className="mt-2 leading-relaxed text-ink-soft">{study.problem}</p>

        <h4 className="mt-6 font-semibold">What I built</h4>
        <ul className="mt-2 space-y-2 leading-relaxed text-ink-soft">
          {study.approach.map((a) => (
            <li key={a} className="relative pl-5 before:absolute before:top-[0.6em] before:left-0.5 before:size-1.5 before:rounded-full before:bg-signal">
              {a}
            </li>
          ))}
        </ul>

        <h4 className="mt-6 font-semibold">Result</h4>
        <p className="mt-2 leading-relaxed">{study.result}</p>

        <p className="mt-6 text-sm text-ink-soft">Built with {study.stack.join(", ")}</p>
      </div>
      <div className="lg:pt-10">
        <Figure kind={study.figure} />
      </div>
    </article>
  );
}
