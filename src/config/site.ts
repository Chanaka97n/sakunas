/**
 * Single source of truth for brand, contact and SEO details.
 * Update the placeholders marked TODO before going live.
 */
export const siteConfig = {
  name: "The Wedded Gallery",
  shortName: "Wedded Gallery",
  tagline: "Wedding Photography in Sri Lanka",
  description:
    "The Wedded Gallery is a Sri Lankan wedding photographer capturing Kandyan weddings, pre-shoots, engagements and homecomings with timeless, story-driven imagery.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  locale: "en_LK",
  keywords: [
    "wedding photographer Sri Lanka",
    "Kandyan wedding photography",
    "pre-shoot photography Sri Lanka",
    "wedding photography Kandy",
    "engagement photoshoot",
    "homecoming photography",
    "Sri Lankan wedding photographer",
  ],
  founded: "2020",
  contact: {
    // TODO: replace with real contact details
    phone: "+94 77 000 0000",
    whatsapp: "94770000000",
    email: "hello@theweddedgallery.lk",
    address: {
      street: "",
      locality: "Kandy",
      region: "Central Province",
      country: "LK",
      display: "Kandy, Sri Lanka · Available island-wide",
    },
    hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  },
  social: {
    // TODO: replace with real profile links
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
  whatsappMessage: "Hi! I'd like to check availability for our wedding photography.",
} as const;

export const mainNav = [
  { title: "Home", href: "/" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "About", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
] as const;

export function whatsappUrl(message: string = siteConfig.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function absoluteUrl(path = "/") {
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
