import Image from "next/image";
import { profile } from "@/content/site";
import portrait from "@/assets/dempsey.jpg";

export function Hero() {
  return (
    <section id="top" className="mx-auto grid max-w-6xl gap-10 px-4 pt-14 pb-20 sm:px-6 md:grid-cols-[1fr_auto] md:items-end md:pt-24">
      <div className="settle max-w-3xl">
        <p className="text-lg text-ink-soft">
          {profile.title}, {profile.location}
        </p>
        <h1 className="mt-3 text-[clamp(3rem,9vw,6.5rem)] leading-[0.92] font-bold tracking-[-0.035em]">
          Dempsey
          <br />
          Zhang
        </h1>
        <p className="mt-8 max-w-[34ch] text-[clamp(1.35rem,2.6vw,1.9rem)] leading-snug font-medium tracking-tight">
          {profile.headline}
        </p>
        <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-ink-soft">{profile.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={profile.resume}
            className="rounded-full bg-ink px-5 py-2.5 font-medium text-paper hover:bg-signal"
          >
            Download resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full border border-ink px-5 py-2.5 font-medium hover:bg-ink hover:text-paper"
          >
            Email me
          </a>
          <span className="flex gap-4 pl-2">
            <a className="link" href={profile.github}>
              GitHub
            </a>
            <a className="link" href={profile.linkedin}>
              LinkedIn
            </a>
          </span>
        </div>
      </div>
      <figure className="settle mx-auto w-56 [animation-delay:120ms] sm:w-64 md:mx-0 md:w-72">
        <Image
          src={portrait}
          alt="Portrait of Dempsey Zhang"
          priority
          placeholder="blur"
          sizes="(min-width: 768px) 288px, 256px"
          className="aspect-[4/5] w-full rounded-[2px] object-cover object-top"
        />
      </figure>
    </section>
  );
}
