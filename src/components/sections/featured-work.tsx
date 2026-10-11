import Link from "next/link";

import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Reveal } from "@/components/sections/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { buttonVariants } from "@/components/ui/button";
import { featuredPhotos } from "@/content/photos";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  return (
    <section className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Moments we've had the honour to capture"
            description="A collection of cherished moments from Kandyan weddings, temple pre-shoots, engagements and homecomings across Sri Lanka."
          />
        </Reveal>
        <div className="mt-14">
          <GalleryGrid photos={featuredPhotos} />
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-none px-10 tracking-[0.2em] uppercase")}
          >
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
