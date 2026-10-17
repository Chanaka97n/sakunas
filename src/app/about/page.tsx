import { AboutIntro } from "@/components/sections/about-intro";
import { CallToAction } from "@/components/sections/call-to-action";
import { PageHeader } from "@/components/sections/page-header";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Testimonials } from "@/components/sections/testimonials";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { getPhoto } from "@/content/photos";
import { bookingSteps } from "@/content/site-content";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const description = `Meet ${siteConfig.name} — a Kelaniya-based photography studio known for calm, story-driven coverage of weddings, graduations, family sessions and events.`;

export const metadata = createMetadata({ title: "About Us", description, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Passionate about love stories"
        description={description}
        photo={getPhoto("wedding-21")}
      />
      <AboutIntro showLink={false} />

      <section className="bg-secondary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="From first hello to final album"
              description="A simple, stress-free process designed around you."
            />
          </Reveal>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {bookingSteps.map(({ icon: Icon, title, description }, i) => (
              <li key={title}>
                <Reveal delay={i * 100} className="text-center">
                  <span className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-brand-accent text-primary">
                    <Icon className="size-6" />
                    <span className="absolute -top-1 -right-1 flex size-6 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                      {i + 1}
                    </span>
                  </span>
                  <h3 className="mt-6 font-heading text-2xl font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonials background={getPhoto("wedding-36")} />
      <CallToAction />
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
    </>
  );
}
