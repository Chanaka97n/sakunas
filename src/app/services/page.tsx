import { CallToAction } from "@/components/sections/call-to-action";
import { Faq } from "@/components/sections/faq";
import { PageHeader } from "@/components/sections/page-header";
import { Services } from "@/components/sections/services";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, siteConfig } from "@/config/site";
import { getPhoto } from "@/content/photos";
import { services } from "@/content/site-content";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";

const description =
  "Wedding day coverage, pre-shoots, homecomings and cinematic wedding films across Sri Lanka. Tailored photography packages for every celebration.";

export const metadata = createMetadata({ title: "Wedding Photography Services & Packages", description, path: "/services" });

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Wedding photography services"
        description={description}
        photo={getPhoto("homecoming-floral-doors")}
      />
      <Services />
      <Faq />
      <CallToAction />
      <JsonLd
        data={[
          breadcrumbJsonLd([{ name: "Services", path: "/services" }]),
          ...services.map((s) => ({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.description,
            serviceType: "Wedding photography",
            areaServed: { "@type": "Country", name: "Sri Lanka" },
            provider: { "@id": `${siteConfig.url}/#business` },
            url: absoluteUrl("/services"),
          })),
        ]}
      />
    </>
  );
}
