"use client";

import Autoplay from "embla-carousel-autoplay";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { SectionHeading } from "@/components/sections/section-heading";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import type { Photo } from "@/content/photos";
import { testimonials } from "@/content/site-content";

export function Testimonials({ background }: { background: Photo }) {
  const [plugins] = useState(() => [Autoplay({ delay: 7000, stopOnInteraction: true })]);

  return (
    <section className="relative isolate overflow-hidden py-24 text-white sm:py-32">
      <Image
        src={background.src}
        alt=""
        fill
        sizes="100vw"
        placeholder="blur"
        blurDataURL={background.blurDataURL}
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-brand-deep/85" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What couples say"
          description="Real stories from couples who trusted us with their special day."
          className="[&_.eyebrow]:text-brand-accent [&_p]:text-brand-soft/80"
        />

        <Carousel opts={{ loop: true }} plugins={plugins} className="mt-12">
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i}>
                <figure className="mx-auto max-w-2xl text-center">
                  <QuoteIcon className="mx-auto size-10 text-brand-accent" aria-hidden="true" />
                  <blockquote className="mt-6 font-heading text-2xl leading-relaxed italic sm:text-3xl">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-8">
                    <span className="block text-sm tracking-[0.25em] uppercase">{t.name}</span>
                    <span className="mt-1 block text-xs text-brand-soft/70">{t.event}</span>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:flex" />
          <CarouselNext className="hidden border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
