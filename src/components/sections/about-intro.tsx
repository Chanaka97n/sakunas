import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { getPhoto } from "@/content/photos";
import { highlights, stats } from "@/content/site-content";
import { cn } from "@/lib/utils";

export function AboutIntro({ showLink = true }: { showLink?: boolean }) {
  const main = getPhoto("wedding-30");
  const inset = getPhoto("wedding-09");

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-4/5 overflow-hidden">
            <Image
              src={main.src}
              alt={main.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              placeholder="blur"
              blurDataURL={main.blurDataURL}
              className="object-cover"
            />
          </div>
          <div className="absolute right-0 -bottom-10 aspect-[4/3] w-3/5 overflow-hidden border-8 border-background shadow-xl">
            <Image
              src={inset.src}
              alt={inset.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 60vw"
              placeholder="blur"
              blurDataURL={inset.blurDataURL}
              className="object-cover"
            />
          </div>
          <div className="absolute top-8 -left-4 -z-10 h-full w-4/5 border border-brand-accent/60 sm:-left-6" aria-hidden="true" />
        </Reveal>

        <Reveal delay={150}>
          <SectionHeading
            align="left"
            eyebrow="About Us"
            title="Telling love stories, one frame at a time"
            description="We are a Sri Lankan wedding photography studio blending photojournalistic storytelling with artistic, editorial composition. Our approach is calm and unobtrusive, so every precious moment is preserved with elegance and authenticity."
          />

          <ul className="mt-10 space-y-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-y border-border py-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-4xl font-medium text-primary">{stat.value}</dd>
                <dd className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">{stat.label}</dd>
              </div>
            ))}
          </dl>

          {showLink && (
            <Link
              href="/about"
              className={cn(buttonVariants({ variant: "outline" }), "mt-10 h-12 rounded-none px-8 tracking-[0.2em] uppercase")}
            >
              Our Story
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
