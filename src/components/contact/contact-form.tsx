"use client";

import { SendIcon } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { whatsappUrl } from "@/config/site";
import { categories } from "@/content/photos";

const eventTypes = [...categories.map((c) => c.title), "Wedding Film", "Other"];

/**
 * There's no backend yet, so the enquiry is sent as a pre-filled WhatsApp message.
 * Swap `handleSubmit` for a server action or form service when one is available.
 */
export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const line = (label: string, key: string) => {
      const value = String(data.get(key) ?? "").trim();
      return value ? `${label}: ${value}` : null;
    };

    const message = [
      "Hi! I'd like to enquire about wedding photography.",
      "",
      line("Name", "name"),
      line("Phone", "phone"),
      line("Email", "email"),
      line("Event", "event"),
      line("Date", "date"),
      line("Venue", "venue"),
      "",
      String(data.get("message") ?? "").trim(),
    ]
      .filter((l) => l !== null)
      .join("\n");

    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field id="name" label="Your names" className="sm:col-span-2">
        <Input id="name" name="name" required autoComplete="name" placeholder="e.g. Nadeesha & Ruwan" className="h-11 rounded-none bg-card" />
      </Field>
      <Field id="phone" label="Phone / WhatsApp">
        <Input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+94 7X XXX XXXX" className="h-11 rounded-none bg-card" />
      </Field>
      <Field id="email" label="Email">
        <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="h-11 rounded-none bg-card" />
      </Field>
      <Field id="event" label="Event type">
        <select
          id="event"
          name="event"
          defaultValue={eventTypes[0]}
          className="h-11 w-full border border-input bg-card px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {eventTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </Field>
      <Field id="date" label="Event date">
        <Input id="date" name="date" type="date" className="h-11 rounded-none bg-card" />
      </Field>
      <Field id="venue" label="Venue / location" className="sm:col-span-2">
        <Input id="venue" name="venue" placeholder="Hotel or city" className="h-11 rounded-none bg-card" />
      </Field>
      <Field id="message" label="Tell us about your day" className="sm:col-span-2">
        <Textarea id="message" name="message" rows={5} placeholder="Guest count, the style you love, anything else…" className="rounded-none bg-card" />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="h-12 w-full rounded-none tracking-[0.2em] uppercase sm:w-auto sm:px-10">
          <SendIcon className="size-4" />
          Send Enquiry
        </Button>
        <p role="status" className="mt-3 text-sm text-muted-foreground">
          {sent
            ? "WhatsApp opened in a new tab — just press send. We usually reply within 24 hours."
            : "Your enquiry opens in WhatsApp so we can reply quickly."}
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  className,
  children,
}: {
  id: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 text-xs tracking-[0.2em] text-muted-foreground uppercase">
        {label}
      </Label>
      {children}
    </div>
  );
}
