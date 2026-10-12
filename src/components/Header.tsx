import { profile } from "@/content/site";

const sections = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="font-semibold tracking-tight">
          {profile.shortName}
        </a>
        <nav aria-label="Sections" className="flex items-center gap-4 text-sm sm:gap-6">
          {sections.map((s) => (
            <a key={s.href} href={s.href} className="hidden text-ink-soft hover:text-ink sm:inline">
              {s.label}
            </a>
          ))}
          <a
            href={profile.resume}
            className="rounded-full border border-ink px-3.5 py-1.5 font-medium hover:bg-ink hover:text-paper"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
