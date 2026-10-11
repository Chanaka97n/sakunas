import { Aperture, Camera, Clock, Film, Heart, Images, MapPin, Sparkles } from "lucide-react";

export const highlights = [
  {
    icon: Heart,
    title: "Passion for Love Stories",
    description:
      "Every couple is different. We take time to know you so your photos feel like you — not a template.",
  },
  {
    icon: Camera,
    title: "Professional Equipment",
    description:
      "Full-frame cameras, fast prime lenses and lighting that performs in dim halls and bright Sri Lankan sun.",
  },
  {
    icon: Sparkles,
    title: "Artful Editing",
    description:
      "Hand-finished colour grading with warm, natural skin tones that will look just as good in thirty years.",
  },
] as const;

// TODO: update with your real numbers.
export const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "250+", label: "Couples photographed" },
  { value: "25", label: "Districts covered" },
] as const;

export const services = [
  {
    icon: Camera,
    title: "Wedding Day Coverage",
    description:
      "Complete storytelling from getting ready and the Poruwa ceremony to family portraits and the reception.",
    includes: ["Lead photographer + assistant", "Unlimited edited images", "Online gallery for sharing", "Premium wedding album"],
  },
  {
    icon: MapPin,
    title: "Pre-Shoot",
    description:
      "A relaxed, cinematic session at a location of your choice — ancient ruins, tea country, beaches or the city.",
    includes: ["Location planning help", "Up to 2 outfit changes", "Edited highlights gallery", "Social-media-ready crops"],
  },
  {
    icon: Sparkles,
    title: "Homecoming",
    description:
      "Evening glamour, candid celebration and styled couple portraits for your homecoming reception.",
    includes: ["Couple & family portraits", "Candid event coverage", "Unlimited edited images", "Online gallery"],
  },
  {
    icon: Film,
    title: "Cinematic Films",
    description: "Highlight films and full-length edits that let you relive the vows, the laughter and the music.",
    includes: ["3–5 minute highlight film", "Full ceremony edit", "Licensed music", "4K delivery"],
  },
] as const;

export const bookingSteps = [
  { icon: Clock, title: "Check your date", description: "Message us on WhatsApp or the contact form with your date and venue." },
  { icon: Heart, title: "Meet & plan", description: "We meet in person or online to understand your story, timeline and style." },
  { icon: Aperture, title: "Your day", description: "We capture everything quietly and naturally, so you can be present." },
  { icon: Images, title: "Delivery", description: "Receive a hand-edited online gallery, followed by your printed album." },
] as const;

// TODO: replace these sample reviews with real client testimonials before launch.
export const testimonials = [
  {
    quote:
      "From the pre-shoot to the homecoming, they made us feel completely at ease. Every photo tells a part of our story and we keep finding new favourites.",
    name: "Sample Couple",
    event: "Kandyan Wedding · Kandy",
  },
  {
    quote:
      "Calm, kind and incredibly talented. Our families still talk about how smoothly the whole day ran and how beautiful the album turned out.",
    name: "Sample Couple",
    event: "Wedding & Homecoming · Colombo",
  },
  {
    quote:
      "The temple pre-shoot was a dream. They knew exactly where the light would be and the photos look like a film.",
    name: "Sample Couple",
    event: "Pre-Shoot · Polonnaruwa",
  },
] as const;

export const faqs = [
  {
    question: "How far in advance should we book?",
    answer:
      "Most couples book 6–12 months ahead, especially for weekends and auspicious dates. Reach out as soon as you have a date — if we're free, we'll hold it for you.",
  },
  {
    question: "Do you travel outside Kandy?",
    answer:
      "Yes. We photograph weddings island-wide, from Colombo and Galle to Nuwara Eliya, Jaffna and Trincomalee, as well as destination weddings abroad.",
  },
  {
    question: "How do we confirm our booking?",
    answer:
      "A non-refundable advance payment and a signed agreement secure your date. The balance is settled on or before the wedding day.",
  },
  {
    question: "When will we receive our photos?",
    answer:
      "You'll get a sneak peek within a few days. The full hand-edited gallery is usually delivered within 2–3 weeks, and albums follow once you approve the design.",
  },
  {
    question: "Can we choose our pre-shoot location?",
    answer:
      "Absolutely. We can suggest locations that match your style and the season, and help with permits where required.",
  },
] as const;

// TODO: review these terms with your actual policies before launch.
export const terms = [
  "Dates are reserved only after the advance payment is received.",
  "The advance payment is non-refundable.",
  "Please finalise your selected package at least one week before the wedding day. Changes cannot be made after that.",
  "Editing takes approximately two to three weeks after the event.",
  "Please collect your photographs within three months of your wedding day.",
  "A limited selection of images may be shared on our social media channels at our discretion.",
  "Please arrange a meal and a table for the photography crew, separate from the DJ or band.",
] as const;
