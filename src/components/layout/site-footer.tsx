import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/icons";
import { Logo } from "@/components/layout/logo";
import { Separator } from "@/components/ui/separator";
import { mainNav, siteConfig } from "@/config/site";
import { categories } from "@/content/photos";

const socials = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "YouTube", href: siteConfig.social.youtube, icon: YoutubeIcon },
];

export function SiteFooter() {
  const { contact } = siteConfig;

  return (
    <footer className="bg-brand-deep text-brand-soft">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-5">
          <Logo className="text-brand-light" />
          <p className="max-w-xs text-sm leading-relaxed text-brand-soft/75">
            Capturing your forever moments with passion and artistry — across Sri Lanka and beyond.
          </p>
          <ul className="flex gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-brand-soft/25 transition-colors hover:border-brand-accent hover:bg-brand-accent hover:text-brand-deep"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <FooterColumn title="Quick Links">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="transition-colors hover:text-brand-light">
                {item.title}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/terms" className="transition-colors hover:text-brand-light">
              Terms &amp; Conditions
            </Link>
          </li>
        </FooterColumn>

        <FooterColumn title="Portfolio">
          {categories.map((category) => (
            <li key={category.slug}>
              <Link href={`/portfolio/${category.slug}`} className="transition-colors hover:text-brand-light">
                {category.title}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <li className="flex gap-3">
            <PhoneIcon className="mt-0.5 size-4 shrink-0 text-brand-accent" />
            <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-brand-light">
              {contact.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <MailIcon className="mt-0.5 size-4 shrink-0 text-brand-accent" />
            <a href={`mailto:${contact.email}`} className="break-all hover:text-brand-light">
              {contact.email}
            </a>
          </li>
          <li className="flex gap-3">
            <MapPinIcon className="mt-0.5 size-4 shrink-0 text-brand-accent" />
            <span>{contact.address.display}</span>
          </li>
        </FooterColumn>
      </div>

      <Separator className="bg-brand-soft/15" />
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-brand-soft/60 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>All photographs are the property of {siteConfig.name}.</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-5 font-sans text-xs font-medium tracking-[0.3em] text-brand-accent uppercase">{title}</h2>
      <ul className="space-y-3 text-sm text-brand-soft/80">{children}</ul>
    </div>
  );
}
