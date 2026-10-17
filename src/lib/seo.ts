import type { Metadata } from "next";

import { absoluteUrl, siteConfig } from "@/config/site";

type PageSeo = {
  title?: string;
  description?: string;
  path?: string;
  image?: { src: string; alt: string; width?: number; height?: number };
  noIndex?: boolean;
};

const defaultImage = {
  src: "/og-image.jpg",
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
  width: 1200,
  height: 630,
};

/** Builds per-page metadata with canonical URL, Open Graph and Twitter cards. */
export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  image = defaultImage,
  noIndex = false,
}: PageSeo = {}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    title: title ?? { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [{ url: image.src, alt: image.alt, width: image.width, height: image.height }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.src],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}

const businessId = `${siteConfig.url}/#business`;

export function businessJsonLd() {
  const { contact, social } = siteConfig;
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    image: absoluteUrl("/og-image.jpg"),
    logo: absoluteUrl("/icon.svg"),
    telephone: contact.phone,
    email: contact.email,
    priceRange: "$$",
    foundingDate: siteConfig.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street || undefined,
      addressLocality: contact.address.locality,
      addressRegion: contact.address.region,
      addressCountry: contact.address.country,
    },
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    sameAs: Object.values(social),
    knowsAbout: ["Wedding photography", "Graduation photography", "Promotional photography", "Baby and family photography", "Event photography"],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": businessId },
    inLanguage: "en",
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function galleryJsonLd({
  name,
  description,
  path,
  images,
}: {
  name: string;
  description: string;
  path: string;
  images: { src: string; alt: string; width: number; height: number }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name,
    description,
    url: absoluteUrl(path),
    author: { "@id": businessId },
    image: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(img.src),
      description: img.alt,
      width: img.width,
      height: img.height,
      creator: { "@id": businessId },
      copyrightHolder: { "@id": businessId },
    })),
  };
}
