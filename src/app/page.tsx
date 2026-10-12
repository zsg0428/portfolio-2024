import { CaseStudy } from "@/components/CaseStudy";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { OfferRing } from "@/components/OfferRing";
import { Rich } from "@/components/Rich";
import { Section } from "@/components/Section";
import { alsoAtAddie, caseStudies, education, experience, otherProjects, profile, skills } from "@/content/site";

export default function Home() {
  return (
    <>
      <a href="#work" className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-30 focus:bg-paper focus:px-3 focus:py-2">
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />

        <Section
          id="work"
          title="Selected work at Addie"
          lede="Four AI features I built at Addie, an AI college counseling platform. Each had a way to fail that a demo would not show, so I measured or guarded against it first."
        >
          <div className="space-y-24">
            {caseStudies.map((study) => (
              <CaseStudy key={study.id} study={study} />
            ))}
          </div>

          <h3 className="mt-24 text-2xl font-bold tracking-tight">Also at Addie</h3>
          <div className="mt-6 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {alsoAtAddie.map((item) => (
              <div key={item.title} className="max-w-[60ch]">
                <h4 className="font-semibold text-ink">{item.title}</h4>
                <p className="mt-1 leading-relaxed text-ink-soft">
                  <Rich text={item.text} />
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <OfferRing />

          <h3 className="mt-24 text-2xl font-bold tracking-tight">More projects</h3>
          <ul className="mt-6 max-w-4xl">
            {otherProjects.map((p) => (
              <li key={p.title} className="grid gap-1 border-t border-rule py-5 first:border-t-0 first:pt-0 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <h4 className="font-semibold">{p.title}</h4>
                <div>
                  <p className="leading-relaxed text-ink-soft">{p.text}</p>
                  <p className="mt-2 flex gap-5 text-sm">
                    {p.links.map((l) => (
                      <a key={l.href} className="link" href={l.href}>
                        {l.label}
                      </a>
                    ))}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="experience" title="Experience">
          <ol className="max-w-4xl">
            {experience.map((role) => (
              <li key={role.company} className="grid gap-2 border-t border-rule py-6 first:border-t-0 first:pt-0 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <p className="text-ink-soft tabular-nums">{role.period}</p>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {role.companyUrl ? (
                      <a className="link" href={role.companyUrl}>
                        {role.company}
                      </a>
                    ) : (
                      role.company
                    )}
                  </h3>
                  <p className="text-ink-soft">
                    {role.title}
                    {role.place && `, ${role.place}`}
                  </p>
                  <p className="mt-3 max-w-[64ch] leading-relaxed">{role.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h3 className="mt-16 text-2xl font-bold tracking-tight">Education</h3>
          <ul className="mt-4 max-w-4xl">
            {education.map((e) => (
              <li key={e.school} className="grid gap-1 py-2 sm:grid-cols-[12rem_1fr] sm:gap-8">
                <p className="text-ink-soft tabular-nums">{e.period}</p>
                <p>
                  <span className="font-semibold">{e.school}</span>
                  <span className="text-ink-soft">, {e.degree}</span>
                </p>
              </li>
            ))}
          </ul>
        </Section>

        <Section id="skills" title="Skills">
          <dl className="grid max-w-5xl gap-x-12 gap-y-6 md:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group}>
                <dt className="font-semibold">{s.group}</dt>
                <dd className="mt-1 leading-relaxed text-ink-soft">{s.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="contact" title="Get in touch">
          <p className="max-w-[40ch] text-xl leading-snug">
            I am glad to talk about AI products, evals, or a role you are hiring for.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="link mt-6 inline-block text-[clamp(1.4rem,4vw,2.5rem)] font-bold tracking-tight break-all"
          >
            {profile.email}
          </a>
          <p className="mt-6 flex flex-wrap gap-6">
            <a className="link" href={profile.linkedin}>
              LinkedIn
            </a>
            <a className="link" href={profile.github}>
              GitHub
            </a>
            <a className="link" href={profile.resume}>
              Resume (PDF)
            </a>
          </p>
        </Section>
      </main>
      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-4 py-8 text-sm text-ink-soft sm:px-6">
          <p>{profile.name}, {profile.location}</p>
          <a className="link" href="https://github.com/zsg0428/portfolio-2024">
            Source for this site
          </a>
        </div>
      </footer>
    </>
  );
}
