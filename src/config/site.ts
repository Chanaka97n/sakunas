/**
 * Single source of truth for brand, contact and SEO details.
 * Update the placeholders marked TODO before going live.
 */
export const siteConfig = {
  name: "Sakuna Wickramasinghe Photography",
  shortName: "Sakuna Wickramasinghe",
  tagline: "Photography in Sri Lanka",
  slogan: "We are here to make your precious day a forever memory",
  description:
    "Sakuna Wickramasinghe Photography is a Kelaniya-based photographer capturing weddings, graduations, promotional shoots, baby & family sessions and events across Sri Lanka.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sakunawickramasinghe.lk").replace(/\/$/, ""),
  locale: "en_LK",
  keywords: [
    "wedding photographer Sri Lanka",
    "wedding photographer Kelaniya",
    "graduation photoshoot Sri Lanka",
    "promotional photoshoot Sri Lanka",
    "baby photoshoot Sri Lanka",
    "family photography Sri Lanka",
    "event photographer Colombo",
    "Sakuna Wickramasinghe",
  ],
  founded: "2020",
  contact: {
    phone: "+94 70 245 4584",
    whatsapp: "94702454584",
    email: "sakunawickey@gmail.com",
    address: {
      street: "",
      locality: "Kelaniya",
      region: "Western Province",
      country: "LK",
      display: "Kelaniya, Sri Lanka · Available island-wide",
    },
    hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  },
  social: {
    // TODO: replace with real profile links
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
  },
  whatsappMessage: "Hi! I'd like to check availability for a photoshoot.",
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
