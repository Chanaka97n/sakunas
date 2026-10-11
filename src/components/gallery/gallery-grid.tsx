"use client";

import { ChevronLeftIcon, ChevronRightIcon, ExpandIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useState } from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { categories, type Photo } from "@/content/photos";

const categoryTitle = Object.fromEntries(categories.map((c) => [c.slug, c.title]));

export function GalleryGrid({ photos, priorityCount = 0 }: { photos: Photo[]; priorityCount?: number }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;
  const photo = open ? photos[index] : null;

  const step = useCallback(
    (delta: number) => setIndex((i) => (i === null ? i : (i + delta + photos.length) % photos.length)),
    [photos.length],
  );

  return (
    <>
      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {photos.map((p, i) => (
          <li key={p.slug} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setIndex(i)}
              className="group relative block w-full overflow-hidden bg-brand-soft focus-visible:ring-4 focus-visible:ring-ring focus-visible:outline-none"
              aria-label={`Open photo: ${p.alt}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                priority={i < priorityCount}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                placeholder="blur"
                blurDataURL={p.blurDataURL}
                className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 text-left text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="text-xs tracking-[0.25em] uppercase">{categoryTitle[p.category]}</span>
                <ExpandIcon className="size-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={open} onOpenChange={(next) => !next && setIndex(null)}>
        <DialogContent
          className="flex h-dvh max-h-dvh w-screen max-w-none items-center justify-center rounded-none border-0 bg-black/95 p-0 text-white ring-0 sm:max-w-none [&>[data-slot=dialog-close]]:top-4 [&>[data-slot=dialog-close]]:right-4 [&>[data-slot=dialog-close]]:text-white [&>[data-slot=dialog-close]]:hover:bg-white/10"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") step(1);
            if (e.key === "ArrowLeft") step(-1);
          }}
        >
          {photo && (
            <>
              <DialogTitle className="sr-only">{categoryTitle[photo.category]}</DialogTitle>
              <DialogDescription className="sr-only">{photo.alt}</DialogDescription>
              <div className="relative h-[85dvh] w-[92vw]">
                <Image
                  key={photo.slug}
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="92vw"
                  placeholder="blur"
                  blurDataURL={photo.blurDataURL}
                  className="object-contain"
                />
              </div>
              <Button
                variant="ghost"
                size="icon-lg"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute top-1/2 left-2 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white sm:left-6"
              >
                <ChevronLeftIcon className="size-7" />
              </Button>
              <Button
                variant="ghost"
                size="icon-lg"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute top-1/2 right-2 -translate-y-1/2 text-white hover:bg-white/10 hover:text-white sm:right-6"
              >
                <ChevronRightIcon className="size-7" />
              </Button>
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] text-white/70 uppercase">
                {index! + 1} / {photos.length}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
