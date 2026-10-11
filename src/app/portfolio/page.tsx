import { CategoryNav } from "@/components/gallery/category-nav";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { CallToAction } from "@/components/sections/call-to-action";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { getPhoto, photos } from "@/content/photos";
import { breadcrumbJsonLd, createMetadata, galleryJsonLd } from "@/lib/seo";

const title = "Wedding Photography Portfolio";
const description =
  "Browse our wedding photography portfolio — Kandyan weddings, temple pre-shoots, engagements and homecomings photographed across Sri Lanka.";

export const metadata = createMetadata({ title, description, path: "/portfolio" });

export default function PortfolioPage() {
  return (
    <>
      <PageHeader eyebrow="Portfolio" title={title} description={description} photo={getPhoto("wedding-glass-bridge-reflections")} />
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CategoryNav />
          <div className="mt-10">
            <GalleryGrid photos={photos} priorityCount={3} />
          </div>
        </div>
      </section>
      <CallToAction />
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Portfolio", path: "/portfolio" }]),
          galleryJsonLd({ name: title, description, path: "/portfolio", images: photos }),
        ]}
      />
    </>
  );
}
