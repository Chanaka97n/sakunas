import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { WhatsappIcon } from "@/components/icons";
import { PageHeader } from "@/components/sections/page-header";
import { JsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig, whatsappUrl } from "@/config/site";
import { getPhoto } from "@/content/photos";
import { breadcrumbJsonLd, createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

const description =
  "Check availability for your wedding, graduation, photoshoot or event. Contact Sakuna Wickramasinghe Photography by WhatsApp, phone or email — we reply within 24 hours.";

/** The enquiry form is hidden for now — set to true to show it again. */
const showEnquiryForm = false;

export const metadata = createMetadata({ title: "Contact & Book", description, path: "/contact" });

export default function ContactPage() {
  const { contact } = siteConfig;
  const details = [
    { icon: PhoneIcon, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { icon: MailIcon, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPinIcon, label: "Location", value: contact.address.display },
    { icon: ClockIcon, label: "Hours", value: contact.hours },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's talk about your day"
        description="We'd love to hear your story. Call, email or message us on WhatsApp and we'll check our availability for your date."
        photo={getPhoto("wedding-40")}
      />

      <section className="py-20 sm:py-28">
        <div
          className={cn(
            "mx-auto grid gap-12 px-4 sm:px-6 lg:px-8",
            showEnquiryForm ? "max-w-7xl lg:grid-cols-[1fr_1.4fr]" : "max-w-2xl",
          )}
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-medium">Contact information</h2>
              <p className="mt-3 text-muted-foreground">
                We typically respond to all enquiries within 24 hours. For urgent requests, please call directly.
              </p>
            </div>
            <ul className="space-y-3">
              {details.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <Card className="rounded-none py-4 shadow-none ring-1 ring-border">
                    <CardContent className="flex items-center gap-4 px-5">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-soft text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">{label}</p>
                        {href ? (
                          <a href={href} className="break-words hover:text-primary">
                            {value}
                          </a>
                        ) : (
                          <p>{value}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ul>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full rounded-none bg-[#25D366] tracking-[0.15em] text-white uppercase hover:bg-[#1ebe5b]",
              )}
            >
              <WhatsappIcon className="size-5" />
              Chat on WhatsApp
            </a>
          </div>

          {showEnquiryForm && (
            <div className="bg-secondary p-6 sm:p-10">
              <h2 className="text-3xl font-medium">Send an enquiry</h2>
              <p className="mt-2 mb-8 text-sm text-muted-foreground">Fields marked as required help us check your date quickly.</p>
              <ContactForm />
            </div>
          )}
        </div>
      </section>
      <JsonLd data={breadcrumbJsonLd([{ name: "Contact", path: "/contact" }])} />
    </>
  );
}
