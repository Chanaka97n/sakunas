import photoMeta from "./photo-meta.json";

/**
 * Portfolio categories come from the sub-folders of public/WEBSITE
 * (indexed by `npm run photos`). Listed slugs appear first, in this order,
 * with their description; any new folder is added after them automatically.
 */
const categoryDetails: Record<string, { description: string }> = {
  wedding: {
    description:
      "Elegant, emotional wedding coverage — Kandyan and Western ceremonies, pre-shoots and homecomings across Sri Lanka.",
  },
  graduation: {
    description: "Graduation portraits and couple shoots that celebrate your achievement on campus and beyond.",
  },
  promotion: {
    description:
      "Creative fashion, model and portfolio shoots at beaches, gardens and heritage locations around the island.",
  },
  baby: {
    description:
      "Birthday, first-year and family sessions full of colour, laughter and little moments you'll treasure.",
  },
  event: {
    description:
      "Corporate events, seminars, launches, award ceremonies and press conferences covered with discretion.",
  },
};

type PhotoSlug = keyof typeof photoMeta;
const allMeta = Object.values(photoMeta);

export type CategorySlug = string;

export const categories = [...new Set(allMeta.map((m) => m.category))]
  .sort((a, b) => rank(a) - rank(b))
  .map((slug) => {
    const title = slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    return {
      slug,
      title,
      description:
        categoryDetails[slug]?.description ?? `${title} photography by Sakuna Wickramasinghe across Sri Lanka.`,
    };
  });

function rank(slug: string) {
  const i = Object.keys(categoryDetails).indexOf(slug);
  return i === -1 ? Infinity : i;
}

/** Descriptive alt text and featured picks; every other photo gets a category-based alt. */
const details: Partial<Record<PhotoSlug, { alt: string; featured?: boolean }>> = {
  "wedding-01": { alt: "Bride in a gold gown holding red roses in front of a round moon window", featured: true },
  "wedding-09": { alt: "Couple in traditional white and coral attire embracing beside a sandstone pillar" },
  "wedding-11": { alt: "Couple reflected in still water in front of an ancient brick temple", featured: true },
  "wedding-15": { alt: "Groom in a tuxedo and bride with a red bouquet in a bright room with a vintage lamp" },
  "wedding-16": { alt: "Bride standing in the open French doors of a white colonial villa" },
  "wedding-19": { alt: "Kandyan groom and bride with a white bouquet on a leafy hotel balcony", featured: true },
  "wedding-21": { alt: "Couple in white traditional attire in front of a wooden chalet with lanterns" },
  "wedding-30": { alt: "Bride and groom walking through a white arched doorway with a pastel bouquet" },
  "wedding-36": { alt: "Bride and groom on a colonial hotel terrace framed by white pillars and palms" },
  "wedding-37": { alt: "Couple on a glass walkway with their reflections repeating on both sides", featured: true },
  "wedding-40": { alt: "Couple framed by white doors decorated with red floral wreaths" },
  "graduation-03": { alt: "Graduate couple in gowns walking hand in hand past a white colonial building", featured: true },
  "graduation-07": { alt: "Graduate couple in black gowns sharing a moment beside arched windows", featured: true },
  "graduation-11": { alt: "Graduate in a teal saree and gown smiling in front of a university hall" },
  "promotion-17": { alt: "Model in a flowing white dress walking along the shoreline", featured: true },
  "promotion-28": { alt: "Model in a black saree walking on a golden beach at sunset", featured: true },
  "promotion-47": { alt: "Woman in a floral dress reading a book under a tree beside a lake" },
  "baby-22": { alt: "Parents holding their baby with letters spelling ONE for a first birthday shoot", featured: true },
  "baby-24": { alt: "Family picnic on a garden lawn with a toddler in a straw hat", featured: true },
  "baby-35": { alt: "Parents smiling with their little girl in a tropical garden" },
  "event-11": { alt: "Live acoustic music performance on stage at a corporate celebration", featured: true },
  "event-17": { alt: "Speaker addressing a packed auditorium at a seminar", featured: true },
  "event-28": { alt: "Award being presented at a product launch event" },
};

const categoryBySlug = Object.fromEntries(categories.map((c) => [c.slug, c]));

export type Photo = {
  slug: PhotoSlug;
  category: CategorySlug;
  alt: string;
  featured?: boolean;
  src: string;
  width: number;
  height: number;
  blurDataURL: string;
};

export const photos: Photo[] = (Object.keys(photoMeta) as PhotoSlug[]).map((slug) => {
  const { category, ...meta } = photoMeta[slug];
  const number = Number(slug.slice(slug.lastIndexOf("-") + 1));
  return {
    slug,
    category,
    alt: `${categoryBySlug[category].title} photography in Sri Lanka by Sakuna Wickramasinghe — photo ${number}`,
    ...details[slug],
    ...meta,
  };
});

/** Wide shots used in the full-screen hero slider, in display order. */
export const heroSlugs = ["wedding-11", "promotion-17", "wedding-37", "baby-24", "wedding-15"] as const;

export function getPhoto(slug: PhotoSlug) {
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
