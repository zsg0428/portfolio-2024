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
    "Since January 2025 I have been building Addie, an AI college counseling platform used by 2,000+ students at 20+ schools. I merged 560+ pull requests there and led 11 projects end to end. I start from evals, so I can show when an agent is actually better and not just better in a demo.",
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
  figure: "recall" | "voice" | "reporting";
}

export const caseStudies: CaseStudy[] = [
  {
    id: "rag-assistant",
    title: "A counselor assistant that finds the facts",
    role: "Project lead, in progress",
    summary:
      "Counselors ask about any student and get sourced answers from meetings, notes and files.",
    problem:
      "The first assistant answered from a fixed dump of the student's record, about 40k tokens a turn. The plan was an agent that fetches only what it needs. Before shipping it I built a 70 question recall test with facts planted in synthetic students. The first retrieval design found almost none of them.",
    approach: [
      "Redesigned around layered context: short records inline in the prompt, conversation digests, originals fetched on demand.",
      "LangGraph agent with 9 retrieval tools. The server binds whose data a tool can read; the model never names a student.",
      "Picked the agent loop with a live harness: 3 designs, 12 scenarios, 3 samples each.",
      "Answers stream with their sources into a side panel, with hard limits on rounds, calls and time.",
    ],
    result:
      "The redesign lifted recall from 3% to 43% of planted facts using a third of the current assistant's tokens, and answers start in 1.8 seconds instead of 5.3. It stays behind a flag while the next step closes the gap to the current assistant's 67%.",
    stack: ["LangGraph", "Python", "FastAPI", "SSE", "Postgres", "Evals"],
    figure: "recall",
  },
  {
    id: "voice-agent",
    title: "A voice agent students talk to",
    role: "Project lead",
    summary:
      "Students talk to Addie to log college visits. The agent stays on goal, wraps up on time and saves structured notes to the student's profile.",
    problem:
      "On speakerphone the agent heard its own voice through the student's microphone and answered itself, so a short check in turned into fake student turns.",
    approach: [
      "Moved browser voice from a WebSocket relay to a real WebRTC peer connection, so the browser's echo cancellation works. That also removed about 345 backend lines.",
      "Purpose scoped sessions: the agent wraps up at 5 minutes and stops at 10, and its tool calls are guarded.",
      "Notes are extracted into structured fields that feed the student's profile.",
    ],
    result:
      "Speakerphone calls went from fake student turns to clean turns, verified on a real iPhone. I also recovered calls when an iOS alarm takes the microphone and stopped the 800 ms silence window from cutting students off.",
    stack: ["OpenAI Realtime API", "WebRTC", "Next.js", "FastAPI"],
    figure: "voice",
  },
  {
    id: "reporting-agent",
    title: "Plain English questions over production data",
    role: "Project lead",
    summary:
      "School admins ask questions in plain English and an agent writes and runs the SQL against production data.",
    problem:
      "An agent with database access in a school product has to be unable to leak another school's data or a student's transcript, whatever the question says.",
    approach: [
      "Read only access. The school comes from the signed in identity on the server, never from the prompt.",
      "SQL guardrails: a table allowlist, a hard block on transcript content, and test, demo and archived students excluded.",
      "Adversarial tests that try to reach transcripts and other schools' data.",
      "Every query is audited.",
    ],
    result:
      "Shipped to school admins inside the counselor app with every query scoped and audited.",
    stack: ["Text to SQL", "LangChain", "Postgres", "FastAPI", "Audit logging"],
    figure: "reporting",
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
    title: "Meeting transcription",
    text: "Counselors record meetings and get speaker labeled transcripts and summaries. I picked AssemblyAI after a vendor test (99.4% accuracy at half the cost) and built the all party consent flow that Washington and California law require. Live at 5 schools.",
  },
  {
    title: "Guided AI conversations",
    text: "Counselors design conversations Addie runs with students over web, SMS, WhatsApp and voice, 13,000+ assigned so far. I built the builder, multi step journeys, reminders, and an LLM as a judge scoring system calibrated against human labels.",
  },
  {
    title: "Deploys that tell the truth",
    text: "Found deploys reporting success while running 3 day old code. Rebuilt the pipeline with verification, real rollback and alerts, and cut the slowest CI build from 13.7 to 6.6 minutes.",
  },
  {
    title: "Security and student privacy",
    text: "Fixed a critical admin login bypass, enforced school level data isolation (FERPA) with audit logs, and kept student PII out of error tracking.",
  },
];

export const offerRing = {
  title: "OfferRing",
  tagline: "A job search copilot I build on my own time and use every day.",
  status: "Private deployment for my own job search; the source is not public yet.",
  summary:
    "My own job search tool: a browser side panel and a dashboard. It fills standard application fields, drafts open question answers grounded only in my own experience, remembers every answer I submit, warns me before I apply twice, and ranks new postings every day. It never submits an application.",
  points: [
    "Generated answers may only state facts from my fact bank. Numbers, employers and dates are checked in code, not trusted to the prompt.",
    "Work authorization, sponsorship and EEO questions are never decided by a model; they come only from stored answers.",
    "Job discovery uses public ATS APIs and official search APIs. No scraping, no automation on LinkedIn.",
  ],
  evals: [
    { metric: "Groundedness per claim", before: "82.2%", after: "95.5%" },
    { metric: "Relevance to the posting (1 to 5)", before: "3.87", after: "4.10" },
    { metric: "Form questions answered right", before: "40%", after: "100%" },
  ],
  evalNote:
    "The first answer eval failed three thresholds and showed why: drafts credited one fact's result to another. Fixing the prompt and the checks brought every threshold to pass. Form answers compare rules alone with rules plus the model, on 15 fictional questions, with zero wrong answers in both.",
  stack: ["WXT", "React", "Next.js", "Prisma", "Postgres", "Claude Haiku", "Evals"],
} as const;

export interface Demo {
  id: string;
  title: string;
  caption: string;
  /** Paths under /public, without extension; .mp4, .webm and .jpg (poster) must exist. */
  src: string;
}

// Recorded with a fictional applicant and a separate demo database; no real profile data.
export const offerRingDemos: Demo[] = [
  {
    id: "today",
    title: "Today",
    caption: "New postings from watched companies and Hacker News, filtered by my rules and scored 1 to 5 against my profile, with what is missing.",
    src: "/demos/offerring-today",
  },
  {
    id: "applications",
    title: "Applications",
    caption: "Every application with its status history. The extension records a submission when it sees the confirmation page.",
    src: "/demos/offerring-applications",
  },
  {
    id: "facts",
    title: "Facts",
    caption: "The fact bank drafted answers may cite. Numbers in an answer must appear in a fact it cites.",
    src: "/demos/offerring-facts",
  },
  {
    id: "companies",
    title: "Companies",
    caption: "Companies I watch. Their public job boards are checked twice a day, and new postings land on Today.",
    src: "/demos/offerring-companies",
  },
  {
    id: "profile",
    title: "Profile",
    caption: "The one profile every form is filled from. Work authorization and sponsorship come only from answers I set myself.",
    src: "/demos/offerring-profile",
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
    text: "AI college counseling platform for 2,000+ students and 70+ active counselors at 20+ schools. 560+ merged pull requests across a Python backend and three Next.js apps; project lead on 11 projects, 6 shipped. Top contributor to the repo from July to October 2026. Led the Turborepo monorepo migration and the student and counselor UI revamps.",
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
