// Every fact on the site lives here. Numbers come from the resume and the Addie work report;
// do not add a figure that is not in one of them.

export const siteUrl = "https://dempsey-portfolio.vercel.app";

export const profile = {
  name: "Shengge (Dempsey) Zhang",
  shortName: "Dempsey Zhang",
  title: "Full Stack AI Product Engineer",
  location: "Toronto",
  email: "zsg258852@gmail.com",
  github: "https://github.com/zsg0428",
  linkedin: "https://www.linkedin.com/in/dempsey-zhang/",
  resume: "/Shengge_Zhang_Resume.pdf",
  headline: "I build AI products people actually use, from the database schema to the agent prompt to the deploy pipeline.",
  intro:
    "Since January 2025 I have been building Addie, an AI college counseling platform used by 2,000+ students at 20+ schools. I merged 560+ pull requests there and built AI features end to end: a voice agent students talk to, guided AI conversations checked by an LLM judge, and meeting transcription. I start from evals, so I can show when an agent is actually better and not just better in a demo.",
} as const;

export interface Measure {
  label: string;
  /** Shown next to the bar, already formatted. */
  display: string;
  /** 0 to 1, drives the bar length. */
  value: number;
  tone: "before" | "after" | "baseline";
}

export interface MeasureGroup {
  metric: string;
  note: string;
  rows: Measure[];
}

export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  summary: string;
  problem: string;
  approach: string[];
  result: string;
  stack: string[];
  figure: "recall" | "voice" | "meetings" | "conversations";
}

export const caseStudies: CaseStudy[] = [
  {
    id: "experiences",
    title: "Experiences: a voice agent students talk to",
    role: "Project lead, built end to end",
    summary:
      "Students start a short voice session to log a campus visit or a college fair. The agent stays on goal, wraps up on time and saves structured notes to their profile.",
    problem:
      "Voice sessions lived inside counselor assigned conversations. A session a student starts on their own could not leak into chat lists, reminders or counselor dashboards, and **speakerphone made the agent hear itself**.",
    approach: [
      "**Its own session type.** A purpose field picks the prompt and the extraction schema, and sessions live in their own table, so experiences stay out of reminder sweeps and conversation lists.",
      "**Paced by design.** The agent wraps up at 5 minutes and stops at 10, and prompts can be edited without a deploy.",
      "**Feeds matching for free.** Notes reach college matching as text on the student's card, so the matching engine needed no change.",
      "**Real WebRTC.** As owner of browser voice, I moved it from a WebSocket relay to a real peer connection so echo cancellation works.",
    ],
    result:
      "Speakerphone calls went from the agent answering itself to **clean turns**, verified on a real iPhone, and the WebRTC move removed {{about 345 backend lines}}.",
    stack: ["OpenAI Realtime API", "WebRTC", "Next.js", "FastAPI", "Postgres"],
    figure: "voice",
  },
  {
    id: "conversations",
    title: "Guided AI conversations, checked by an LLM judge",
    role: "Built the conversations, journeys and reminders; project lead for the evals",
    summary:
      "Counselors design conversations that Addie runs with students over web, SMS, WhatsApp and voice. {{13,000+}} have been assigned.",
    problem:
      "Counselors needed Addie to follow their plan with each student, step by step and on time. Later, users reported conversations that repeated themselves, never closed, or claimed things students never said, and **the only way to check was copying transcripts into other tools**.",
    approach: [
      "**Builder and journeys.** Structured and open questions, with journeys that unlock each conversation after the last one or on a set date.",
      "**Reminders with a kill switch.** SMS, WhatsApp and email, fanned out in background jobs, with a global pause and a per school kill switch.",
      "**LLM as a judge.** Every real conversation is scored for repetition, closure and made up claims, with the evidence quoted.",
      "**Calibrated before it runs.** Admins hand label conversations, rubrics are rewritten until the judge agrees within one point, and auto scoring turns on only after calibration passes.",
    ],
    result:
      "Instead of copy and paste spot checks, **every real conversation can be scored with evidence**, and admins work from a Needs Review queue.",
    stack: ["OpenAI", "Celery", "Twilio", "WhatsApp", "Resend", "Next.js", "Evals"],
    figure: "conversations",
  },
  {
    id: "rag-assistant",
    title: "A counselor assistant that finds the facts",
    role: "I build the retrieval side, in progress",
    summary:
      "Counselors ask about any student and get sourced answers from meetings, notes and files.",
    problem:
      "The current assistant answers from a fixed dump of the student's record, about 40k tokens a turn. The plan was an agent that fetches only what it needs. Before shipping it I built a 70 question recall test with facts planted in synthetic students. **The first retrieval design found almost none of them.**",
    approach: [
      "**Layered context.** Short records inline in the prompt, conversation digests, and originals fetched on demand.",
      "**Scoped tools.** A LangGraph agent with 9 retrieval tools. The server binds whose data a tool can read; the model never names a student.",
      "**Chosen by a harness.** The agent loop was picked by a live run of 3 designs, 12 scenarios and 3 samples each.",
      "**Every turn recorded.** Context and tool calls are stored with each answer, so the eval track can score it.",
    ],
    result:
      "The redesign lifted recall from {{3% to 43%}} of planted facts using {{a third of the tokens}}, and answers start in {{1.8 seconds}} instead of 5.3. It stays behind a flag while the next step closes the gap to the current assistant's 67%.",
    stack: ["LangGraph", "Python", "FastAPI", "SSE", "Postgres", "Evals"],
    figure: "recall",
  },
  {
    id: "meetings",
    title: "Meeting transcription counselors can trust",
    role: "Project lead, built end to end",
    summary:
      "Counselors record or upload an in person meeting and get a speaker labeled transcript and a summary that becomes part of the student's record.",
    problem:
      "Recording students has legal weight. Washington and California require **every person in the room to consent**, so the feature could not roll out to more schools without a consent flow built into it.",
    approach: [
      "**Vendor test first.** AssemblyAI transcribed 115 minutes of audio in 97 seconds at 99.4% accuracy, for about half the cost.",
      "**Consent before the microphone.** The counselor names who is in the room, reads a consent script, and every person's consent is recorded.",
      "**Background pipeline.** Diarization runs in a background job with retries; counselors label speakers, then an LLM writes the summary from the labeled transcript.",
      "**Part of the record.** Summaries flow into the student's notes and into the counselor chat's context.",
    ],
    result: "Live at {{5 schools}} with {{44 meetings}} transcribed so far, and full pipeline speaker accuracy of {{99.8%}}.",
    stack: ["AssemblyAI", "Celery", "FastAPI", "Next.js", "Prisma", "GCS"],
    figure: "meetings",
  },
];

export const recallMeasures: MeasureGroup[] = [
  {
    metric: "Planted facts found",
    note: "Same 70 questions, synthetic students, real model",
    rows: [
      { label: "Retrieval agent, first design", display: "3%", value: 0.03, tone: "before" },
      { label: "Retrieval agent, redesigned", display: "43%", value: 0.43, tone: "after" },
      { label: "Current assistant", display: "67%", value: 0.67, tone: "baseline" },
    ],
  },
  {
    metric: "Tokens per turn",
    note: "Lower is cheaper",
    rows: [
      { label: "Retrieval agent, first design", display: "18.6k", value: 18.6 / 39.6, tone: "before" },
      { label: "Retrieval agent, redesigned", display: "12.1k", value: 12.1 / 39.6, tone: "after" },
      { label: "Current assistant", display: "39.6k", value: 1, tone: "baseline" },
    ],
  },
];

export const alsoAtAddie = [
  {
    title: "Safer school reports",
    text: "School admins ask a reporting agent questions in plain English. Before it opened to them I found its **metrics only limit lived only in the prompt**, so I added a hard column guardrail that keeps transcripts out, school scope taken from the signed in admin, and an audit entry for every query.",
  },
  {
    title: "Deploys that tell the truth",
    text: "Found deploys **reporting success while running 3 day old code**. Rebuilt the pipeline with verification, real rollback and alerts, and cut the slowest CI build from {{13.7 to 6.6 minutes}}.",
  },
  {
    title: "Security and student privacy",
    text: "Fixed a **critical admin login bypass**, enforced school level data isolation (FERPA) with audit logs, and kept student PII out of error tracking.",
  },
];

export const offerRing = {
  title: "OfferRing",
  tagline: "A job search copilot I build on my own time and use every day.",
  status: "Private deployment for my own job search; the source is not public yet.",
  summary: "A browser side panel and a dashboard for my own job search. **It never submits an application.**",
  features: [
    { title: "Autofill", text: "Fills standard fields on Greenhouse, Lever, Ashby, Workday and more, live field by field." },
    { title: "Grounded drafts", text: "Drafts open question answers only from my fact bank, with numbers, employers and dates checked in code." },
    { title: "Ringo", text: "An agentic RAG assistant over my postings, sent answers and facts, with every source cited." },
    { title: "Answer memory", text: "Remembers every answer I submit and reuses it when the same question comes back." },
    { title: "Duplicate warning", text: "Warns me before I apply to the same posting twice." },
    { title: "Daily ranking", text: "Scores new postings from companies I watch and public job feeds from 1 to 5 against my profile." },
  ],
  points: [
    "**Hybrid retrieval.** Ringo searches by meaning and by words (pgvector embeddings and Postgres full text, merged by reciprocal rank fusion) and uses structured tools for dates, counts and statuses. The agent picks the tool and rewrites its query when a search misses.",
    "**Sensitive answers stay mine.** Work authorization, sponsorship and EEO questions are never decided by a model; they come only from stored answers.",
    "**No scraping.** Job discovery uses public ATS APIs and official search APIs, and nothing is automated on LinkedIn.",
  ],
  evals: [
    { metric: "Groundedness per claim", before: "82.2%", after: "95.5%" },
    { metric: "Relevance to the posting (1 to 5)", before: "3.87", after: "4.10" },
    { metric: "Form questions answered right", before: "40%", after: "100%" },
  ],
  evalNote:
    "The first answer eval failed three thresholds and showed why: drafts credited one fact's result to another. Fixing the prompt and the checks brought every threshold to pass. Form answers compare rules alone with rules plus the model, on 15 fictional questions, with zero wrong answers in both. Ringo's eval answers 22 of 22 questions with the right facts and citations, including paraphrases and a Chinese question over English text, at under a tenth of a cent each.",
  stack: ["WXT", "React", "Next.js", "Prisma", "Postgres", "pgvector", "Voyage embeddings", "Claude Haiku", "Evals"],
} as const;

export interface Demo {
  id: string;
  title: string;
  caption: string;
  /** Paths under /public, without extension; .mp4, .webm and .jpg (poster) must exist. */
  src: string;
  width: number;
  height: number;
}

// Recorded with a fictional applicant and a separate demo database; no real profile data.
export const offerRingDemos: Demo[] = [
  {
    id: "autofill",
    title: "Autofill",
    caption: "One click fills a real Greenhouse application, live field by field. Work authorization and sponsorship come only from stored answers, and questions it cannot answer truthfully are left for me. It never submits.",
    src: "/demos/offerring-autofill",
    width: 1280,
    height: 684,
  },
  {
    id: "ringo",
    title: "Ringo",
    caption: "Questions about my own search, answered by an agent. It searches by meaning and by words, tries other words when a search misses, checks records like an application's status, and cites every source.",
    src: "/demos/offerring-ringo",
    width: 1200,
    height: 854,
  },
  {
    id: "today",
    title: "Today",
    caption: "New postings from watched companies and Hacker News, filtered by my rules and scored 1 to 5 against my profile, with what is missing.",
    src: "/demos/offerring-today",
    width: 1200,
    height: 854,
  },
  {
    id: "applications",
    title: "Applications",
    caption: "Every application with its status history. The extension records a submission when it sees the confirmation page.",
    src: "/demos/offerring-applications",
    width: 1200,
    height: 854,
  },
  {
    id: "facts",
    title: "Facts",
    caption: "The fact bank drafted answers may cite. Numbers in an answer must appear in a fact it cites.",
    src: "/demos/offerring-facts",
    width: 1200,
    height: 854,
  },
  {
    id: "companies",
    title: "Companies",
    caption: "Companies I watch. Their public job boards are checked twice a day, and new postings land on Today.",
    src: "/demos/offerring-companies",
    width: 1200,
    height: 854,
  },
  {
    id: "profile",
    title: "Profile",
    caption: "The one profile every form is filled from. Work authorization and sponsorship come only from answers I set myself.",
    src: "/demos/offerring-profile",
    width: 1200,
    height: 854,
  },
];

export const otherProjects = [
  {
    title: "TabTidy",
    text: "Chrome extension to search, group, save and restore tabs. Published on the Chrome Web Store.",
    links: [
      { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/tabtidy/pbpjieknnfkglcgddgojldkhgichidnh" },
      { label: "Source", href: "https://github.com/zsg0428/tab-tidy" },
    ],
  },
  {
    title: "The Wild Oasis",
    text: "Cabin booking site with Google sign in and a date range picker. Next.js, NextAuth, Supabase.",
    links: [
      { label: "Live", href: "https://the-wild-oasis-dempsey.vercel.app/" },
      { label: "Source", href: "https://github.com/zsg0428/the-wild-oasis-project" },
    ],
  },
  {
    title: "Forkify",
    text: "Recipe search with saved favourites, in plain JavaScript.",
    links: [
      { label: "Live", href: "https://forkify-dempsey.netlify.app/" },
      { label: "Source", href: "https://github.com/zsg0428/forkify-project-dempsey" },
    ],
  },
];

export interface Role {
  company: string;
  companyUrl?: string;
  title: string;
  period: string;
  place: string;
  text: string;
}

export const experience: Role[] = [
  {
    company: "Addie",
    companyUrl: "https://getaddie.com",
    title: "Full Stack Developer (AI Product)",
    period: "Jan 2025 to now",
    place: "Remote, Toronto",
    text: "AI college counseling platform for 2,000+ students and 70+ active counselors at 20+ schools. 560+ merged pull requests across a Python backend and three Next.js apps. Project lead for meeting transcription, Experiences, the conversation quality eval system, the student and counselor UI revamps and the Turborepo monorepo migration. Top contributor to the repo from July to October 2026.",
  },
  {
    company: "Vosyn.ai",
    title: "Full Stack Engineer Intern",
    period: "Sep 2024 to Jan 2025",
    place: "Remote, Toronto",
    text: "Led the homepage in React. Built Redux search filtering (25% faster) and moved search results to Next.js server rendering, cutting page load time by 30%.",
  },
  {
    company: "Before engineering",
    title: "Tech recruiter",
    period: "Four years",
    place: "",
    text: "Hired engineers for Huawei's IC Lab and for clients like ByteDance and Amazon. It taught me to start from what people actually need.",
  },
];

export const education = [
  { school: "University of Toronto", degree: "Master of Industrial Relations and Human Resources", period: "2018 to 2020" },
  { school: "University of British Columbia", degree: "Bachelor of Management", period: "2014 to 2018" },
];

export const skills = [
  {
    group: "AI and LLM",
    items: ["Agents and tool calling", "LangGraph", "LangChain", "OpenAI Realtime", "WebRTC voice", "Text to SQL", "RAG with Qdrant", "Evals and LLM as a judge", "Guardrails", "Tracing"],
  },
  { group: "Front end", items: ["TypeScript", "React", "Next.js App Router", "Server Actions", "Tailwind CSS", "shadcn/ui", "Radix UI", "Redux"] },
  { group: "Back end", items: ["Python", "FastAPI", "Celery", "Redis", "Node.js", "Twilio", "REST"] },
  { group: "Data and infra", items: ["PostgreSQL", "Prisma", "Qdrant", "Docker Swarm", "GitHub Actions", "Turborepo", "GCP", "Sentry", "Vercel"] },
  { group: "Testing", items: ["Jest", "React Testing Library", "Pytest", "Playwright"] },
  { group: "How I work", items: ["Claude Code", "Coding agent skills for the team", "Feature flags", "Evals before launch"] },
];
