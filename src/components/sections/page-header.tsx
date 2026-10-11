import Image from "next/image";

import type { Photo } from "@/content/photos";

/** Banner used at the top of inner pages. Carries the page's single <h1>. */
export function PageHeader({
  eyebrow,
  title,
  description,
  photo,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  photo: Photo;
}) {
  return (
    <section className="relative isolate flex min-h-[55vh] items-end overflow-hidden pt-20 text-white">
      <Image
        src={photo.src}
        alt=""
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        blurDataURL={photo.blurDataURL}
        className="-z-20 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/35 to-black/30" />
      <div className="mx-auto w-full max-w-7xl px-4 pt-16 pb-14 sm:px-6 lg:px-8">
        <p className="eyebrow text-brand-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl leading-tight font-medium sm:text-6xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{description}</p>}
      </div>
    </section>
  );
}
