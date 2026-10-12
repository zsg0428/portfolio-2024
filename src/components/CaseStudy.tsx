import type { CaseStudy as CaseStudyData } from "@/content/site";
import { recallMeasures } from "@/content/site";
import { FlowDiagram, type FlowStep } from "./FlowDiagram";
import { MeasureChart } from "./MeasureChart";
import { Rich } from "./Rich";

const voiceFlow: FlowStep[] = [
  { name: "Student's browser or phone", detail: "Microphone with echo cancellation on", via: "WebRTC peer connection, audio both ways" },
  { name: "OpenAI Realtime", detail: "Wraps up at 5 minutes, stops at 10", via: "Tool call" },
  { name: "Addie API", guards: ["Guarded tool calls", "Extraction scoped to the session's purpose"], via: "Structured notes" },
  { name: "Notes on the student's profile", detail: "Feeds Addie's context in later conversations" },
];

const meetingsFlow: FlowStep[] = [
  { name: "Counselor starts a meeting", detail: "Records in the browser or uploads a file", via: "Before the microphone opens" },
  {
    name: "Consent",
    guards: ["Everyone in the room is named", "Consent script read aloud", "Each person's consent recorded with the notice version"],
    via: "Audio to a private bucket",
  },
  { name: "Background transcription", detail: "AssemblyAI diarization, retried on failure", via: "Counselor labels the speakers" },
  { name: "Summary from the labeled transcript", detail: "Saved to the student's notes and the counselor chat's context" },
];

const conversationsFlow: FlowStep[] = [
  { name: "Counselor designs a journey", detail: "Conversations with structured and open questions", via: "Each step unlocks after the last, or on a date" },
  { name: "Addie runs the conversation", detail: "Web, SMS, WhatsApp or voice", via: "Student goes quiet" },
  { name: "Reminders", detail: "SMS, WhatsApp and email, with a global pause and per school kill switch", via: "Conversation ends" },
  {
    name: "LLM judge",
    guards: ["Scores repetition, closure and made up claims", "Quotes its evidence", "Calibrated against admin labels before auto scoring"],
  },
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
  if (kind === "conversations") {
    return <FlowDiagram steps={conversationsFlow} caption="A conversation from plan to score. Simplified; no real student data." />;
  }
  return <FlowDiagram steps={meetingsFlow} caption="How a meeting becomes part of the record. Simplified; no real student data." />;
}

export function CaseStudy({ study }: { study: CaseStudyData }) {
  return (
    <article id={study.id} aria-labelledby={`${study.id}-title`} className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
      <div className="max-w-[64ch]">
        <p className="inline-block rounded-full bg-signal-soft px-3 py-1 text-xs font-medium text-signal">{study.role}</p>
        <h3 id={`${study.id}-title`} className="mt-3 text-[clamp(1.6rem,3vw,2.25rem)] leading-tight font-bold tracking-[-0.02em]">
          {study.title}
        </h3>
        <p className="mt-3 text-xl leading-snug text-ink">
          <Rich text={study.summary} />
        </p>

        <h4 className="mt-8 text-sm font-semibold text-signal">The problem</h4>
        <p className="mt-2 leading-relaxed text-ink-soft">
          <Rich text={study.problem} />
        </p>

        <h4 className="mt-6 text-sm font-semibold text-signal">What I built</h4>
        <ul className="mt-2 space-y-3 leading-relaxed text-ink-soft">
          {study.approach.map((a) => (
            <li key={a} className="relative pl-5 before:absolute before:top-[0.6em] before:left-0.5 before:size-1.5 before:rounded-full before:bg-signal">
              <Rich text={a} />
            </li>
          ))}
        </ul>

        <div className="mt-8 border-l-2 border-signal pl-5">
          <h4 className="text-sm font-semibold text-signal">Result</h4>
          <p className="mt-1 text-lg leading-relaxed text-ink">
            <Rich text={study.result} />
          </p>
        </div>

        <p className="mt-6 text-sm text-ink-soft">Built with {study.stack.join(", ")}</p>
      </div>
      <div className="lg:pt-10">
        <Figure kind={study.figure} />
      </div>
    </article>
  );
}
