import photoMeta from "./photo-meta.json";

export const categories = [
  {
    slug: "weddings",
    title: "Wedding Day",
    description:
      "Elegant, emotional wedding day coverage across Sri Lanka's finest hotels and venues — from the first look to the last dance.",
  },
  {
    slug: "kandyan-weddings",
    title: "Kandyan Weddings",
    description:
      "Traditional Kandyan wedding photography celebrating the rituals, attire and heritage of a Sri Lankan Poruwa ceremony.",
  },
  {
    slug: "pre-shoots",
    title: "Pre-Shoots",
    description:
      "Cinematic pre-wedding shoots at ancient temples, misty hills and hidden locations around the island.",
  },
  {
    slug: "engagements",
    title: "Engagements",
    description:
      "Relaxed, playful engagement sessions that capture your chemistry before the big day.",
  },
  {
    slug: "homecomings",
    title: "Homecomings",
    description:
      "Glamorous homecoming photography with bold colour, couture gowns and candid celebration.",
  },
] as const;

export type CategorySlug = (typeof categories)[number]["slug"];

type PhotoEntry = {
  slug: keyof typeof photoMeta;
  category: CategorySlug;
  alt: string;
  featured?: boolean;
};

const entries: PhotoEntry[] = [
  // Wedding day
  { slug: "wedding-hotel-terrace", category: "weddings", alt: "Bride and groom dancing on a colonial hotel terrace framed by white pillars and palms", featured: true },
  { slug: "wedding-candid-laughter", category: "weddings", alt: "Bride laughing as the groom leans in to kiss her cheek" },
  { slug: "wedding-arch-walk", category: "weddings", alt: "Bride and groom walking through a white arched doorway with a pastel bouquet", featured: true },
  { slug: "wedding-close-up-romance", category: "weddings", alt: "Groom touching the bride's face as she smiles, wearing floral hair jewellery" },
  { slug: "wedding-glass-bridge-reflections", category: "weddings", alt: "Couple on a glass walkway with their reflections repeating on both sides" },
  { slug: "wedding-white-arch-portrait", category: "weddings", alt: "Bride and groom framed by a white arch and tropical plants" },
  { slug: "wedding-lawn-bouquet", category: "weddings", alt: "Bride and groom smiling on a lawn holding a white rose bouquet" },
  { slug: "wedding-garden-stroll", category: "weddings", alt: "Bride and groom strolling hand in hand through a misty hill-country garden" },
  { slug: "wedding-bride-ivy-wall", category: "weddings", alt: "Bride holding a white bouquet beside an ivy-covered wall" },
  { slug: "wedding-intimate-portrait", category: "weddings", alt: "Groom smiling at the bride as she holds a pastel bouquet" },
  { slug: "wedding-wooden-chalet", category: "weddings", alt: "Bride and groom in white standing before a wooden chalet with lanterns" },
  { slug: "wedding-bride-garden-portrait", category: "weddings", alt: "Bride in a white Kandyan saree adjusting her headpiece in a garden" },
  { slug: "wedding-colonial-veranda-embrace", category: "weddings", alt: "Groom embracing the bride on a white colonial veranda" },

  // Kandyan
  { slug: "kandyan-wedding-couple-portrait", category: "kandyan-weddings", alt: "Kandyan bride and groom gazing at each other in traditional wedding attire", featured: true },
  { slug: "kandyan-wedding-rooftop-kiss", category: "kandyan-weddings", alt: "Groom in Kandyan attire kissing the bride's forehead on a garden rooftop" },
  { slug: "kandyan-wedding-garden-balcony", category: "kandyan-weddings", alt: "Kandyan bride and groom on a leafy hotel balcony holding a white bouquet" },
  { slug: "kandyan-wedding-doorway", category: "kandyan-weddings", alt: "Bride and groom framed by an ornate wooden doorway on their wedding day" },
  { slug: "kandyan-wedding-spiral-stairs", category: "kandyan-weddings", alt: "Kandyan couple on a spiral staircase surrounded by trees" },
  { slug: "kandyan-wedding-black-and-white", category: "kandyan-weddings", alt: "Black and white portrait of a Kandyan bride and groom on a misty terrace" },

  // Pre-shoots
  { slug: "pre-shoot-temple-reflection", category: "pre-shoots", alt: "Couple reflected in still water in front of an ancient temple surrounded by greenery", featured: true },
  { slug: "pre-shoot-temple-doorway", category: "pre-shoots", alt: "Couple in traditional white attire sitting together in a sandstone temple doorway" },
  { slug: "pre-shoot-ancient-temple-forehead-touch", category: "pre-shoots", alt: "Couple touching foreheads in front of an ancient stone temple" },
  { slug: "pre-shoot-temple-pillar-embrace", category: "pre-shoots", alt: "Bride in a white and coral saree laughing with the groom beside a sandstone pillar" },

  // Engagements
  { slug: "engagement-dip-pose", category: "engagements", alt: "Man dipping his partner in a red dress against a golden wall", featured: true },
  { slug: "engagement-playful-embrace", category: "engagements", alt: "Man hugging his laughing fiancée in a red dress from behind" },
  { slug: "engagement-walk-red-dress", category: "engagements", alt: "Couple walking along a modern pathway, the bride in a red gown" },
  { slug: "engagement-red-gown-portrait", category: "engagements", alt: "Smiling woman in a red dress holding a red rose bouquet" },
  { slug: "engagement-close-up", category: "engagements", alt: "Close-up of a couple holding a red and white rose bouquet" },

  // Homecomings
  { slug: "homecoming-arched-door-portrait", category: "homecomings", alt: "Bride behind an arched glass door while the groom in a navy suit looks up", featured: true },
  { slug: "homecoming-doorway-embrace", category: "homecomings", alt: "Groom embracing the bride in a doorway with brass handles", featured: true },
  { slug: "homecoming-lamp-lit-room", category: "homecomings", alt: "Groom in a tuxedo and bride with a red bouquet in a bright room with a vintage lamp" },
  { slug: "homecoming-moon-window", category: "homecomings", alt: "Bride in a golden gown standing in a round moon window framed by palm leaves" },
  { slug: "homecoming-bride-glass-door", category: "homecomings", alt: "Bride in an embellished gold gown behind an arched glass door" },
  { slug: "homecoming-arched-doorway-kiss", category: "homecomings", alt: "Couple sharing a moment in a white arched doorway framed by palm leaves" },
  { slug: "homecoming-yellow-art-wall", category: "homecomings", alt: "Bride with a red bouquet and groom in navy beside bold yellow artwork" },
  { slug: "homecoming-balcony-kiss", category: "homecomings", alt: "Couple kissing on a white balcony while holding a red rose bouquet" },
  { slug: "homecoming-floral-doors", category: "homecomings", alt: "Couple framed by white doors decorated with red floral wreaths" },
  { slug: "homecoming-bride-armchair", category: "homecomings", alt: "Bride seated in a wicker chair holding a red rose bouquet" },
  { slug: "homecoming-garden-walk", category: "homecomings", alt: "Couple walking hand in hand, the groom in a dark suit and the bride in a blush lehenga" },
  { slug: "homecoming-french-doors", category: "homecomings", alt: "Bride standing in the open French doors of a white colonial villa" },
  { slug: "homecoming-black-and-white", category: "homecomings", alt: "Black and white portrait of the groom holding the bride close" },
];

export type Photo = PhotoEntry & {
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export const photos: Photo[] = entries.map((entry) => ({
  ...entry,
  src: `/images/gallery/${entry.slug}.jpg`,
  ...photoMeta[entry.slug],
}));

/** Wide shots used in the full-screen hero slider, in display order. */
export const heroSlugs = [
  "wedding-hotel-terrace",
  "pre-shoot-temple-reflection",
  "wedding-candid-laughter",
  "homecoming-lamp-lit-room",
  "pre-shoot-temple-doorway",
] as const;

export function getPhoto(slug: (typeof entries)[number]["slug"]) {
  const photo = photos.find((p) => p.slug === slug);
  if (!photo) throw new Error(`Unknown photo: ${slug}`);
  return photo;
}

export const heroPhotos = heroSlugs.map(getPhoto);
export const featuredPhotos = photos.filter((p) => p.featured);

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getPhotosByCategory(slug: CategorySlug) {
  return photos.filter((p) => p.category === slug);
}
