import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryNav } from "@/components/gallery/category-nav";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { CallToAction } from "@/components/sections/call-to-action";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { categories, getCategory, getPhotosByCategory } from "@/content/photos";
import { breadcrumbJsonLd, createMetadata, galleryJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = getCategory((await params).category);
  if (!category) return {};
  const [cover] = getPhotosByCategory(category.slug);
  return createMetadata({
    title: `${category.title} Photography in Sri Lanka`,
    description: category.description,
    path: `/portfolio/${category.slug}`,
    image: { src: cover.src, alt: cover.alt, width: cover.width, height: cover.height },
  });
}

export default async function CategoryPage({ params }: Props) {
  const category = getCategory((await params).category);
  if (!category) notFound();

  const categoryPhotos = getPhotosByCategory(category.slug);
  const path = `/portfolio/${category.slug}`;

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={`${category.title} Photography`}
        description={category.description}
        photo={categoryPhotos[0]}
      />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CategoryNav active={category.slug} />
          <div className="mt-10">
            <GalleryGrid photos={categoryPhotos} priorityCount={3} />
          </div>
        </div>
      </section>
      <CallToAction />
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Portfolio", path: "/portfolio" },
            { name: category.title, path },
          ]),
          galleryJsonLd({ name: `${category.title} Photography`, description: category.description, path, images: categoryPhotos }),
        ]}
      />
    </>
  );
}
