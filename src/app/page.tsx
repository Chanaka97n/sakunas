import { AboutIntro } from "@/components/sections/about-intro";
import { CallToAction } from "@/components/sections/call-to-action";
import { Faq } from "@/components/sections/faq";
import { FeaturedWork } from "@/components/sections/featured-work";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { getPhoto, heroPhotos } from "@/content/photos";

export default function HomePage() {
  return (
    <>
      <Hero photos={heroPhotos} />
      <AboutIntro />
      <FeaturedWork />
      <Services />
      <Testimonials background={getPhoto("wedding-37")} />
      <Faq />
      <CallToAction />
    </>
  );
}
