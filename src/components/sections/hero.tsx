"use client";

import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { Photo } from "@/content/photos";
import { cn } from "@/lib/utils";

export function Hero({ photos }: { photos: Photo[] }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [plugins] = useState(() => [Fade(), Autoplay({ delay: 6000, stopOnInteraction: false })]);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section aria-label="Featured wedding photography" className="relative h-dvh min-h-[560px] overflow-hidden bg-brand-deep">
      <Carousel setApi={setApi} opts={{ loop: true, duration: 40 }} plugins={plugins} className="h-full">
        <CarouselContent className="ml-0 h-dvh min-h-[560px]">
          {photos.map((photo, i) => (
            <CarouselItem key={photo.slug} className="relative h-full pl-0">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "auto"}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={photo.blurDataURL}
                className={cn(
                  "object-cover transition-transform duration-[7000ms] ease-out",
                  current === i ? "scale-105" : "scale-100",
                )}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/60" />

      <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-white">
        <div className="max-w-3xl">
          <p className="mb-4 font-script text-3xl text-brand-soft sm:text-4xl">Creating timeless memories</p>
          <h1 className="text-5xl leading-[1.05] font-medium sm:text-6xl lg:text-7xl">
            Photography <span className="italic">in Sri Lanka</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            “{siteConfig.slogan}” — weddings, graduations, promotional shoots, baby &amp; family sessions and events,
            island-wide.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/portfolio"
              className={cn(
                buttonVariants({ size: "lg" }),
                "pointer-events-auto h-12 min-w-48 rounded-none bg-brand-light px-8 tracking-[0.2em] text-brand-deep uppercase hover:bg-brand-soft",
              )}
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "pointer-events-auto h-12 min-w-48 rounded-none border-white/70 bg-transparent px-8 tracking-[0.2em] text-white uppercase hover:bg-white hover:text-brand-deep",
              )}
            >
              Check Availability
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-6">
        <div className="flex gap-2" role="tablist" aria-label="Choose slide">
          {photos.map((photo, i) => (
            <button
              key={photo.slug}
              type="button"
              role="tab"
              aria-selected={current === i}
              aria-label={`Show slide ${i + 1}`}
              onClick={() => api?.scrollTo(i)}
              className={cn(
                "h-1 rounded-full bg-white/50 transition-all hover:bg-white",
                current === i ? "w-10 bg-white" : "w-5",
              )}
            />
          ))}
        </div>
        <a href="#about" className="flex flex-col items-center gap-1 text-[0.65rem] tracking-[0.3em] text-white/80 uppercase">
          Scroll Down
          <ChevronDownIcon className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
