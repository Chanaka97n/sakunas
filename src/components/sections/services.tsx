import { CheckIcon } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/content/site-content";

export function Services() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Photography for every chapter"
            description="From your first pre-shoot to the final homecoming dance, choose the coverage that fits your celebration. Every package is tailored — tell us about your day and we'll build it together."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description, includes }, i) => (
            <Reveal key={title} delay={i * 100} className="h-full">
              <Card className="h-full rounded-none border-0 bg-card py-8 shadow-none ring-1 ring-border transition-shadow hover:shadow-xl hover:shadow-brand-deep/5">
                <CardHeader className="px-6">
                  <span className="mb-4 flex size-12 items-center justify-center rounded-full bg-brand-soft text-primary">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="font-heading text-2xl font-medium">
                    <h3>{title}</h3>
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{description}</CardDescription>
                </CardHeader>
                <CardContent className="px-6">
                  <ul className="space-y-2 border-t border-border pt-5 text-sm">
                    {includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
