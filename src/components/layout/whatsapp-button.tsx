import { WhatsappIcon } from "@/components/icons";
import { whatsappUrl } from "@/config/site";

export function WhatsappButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-5 bottom-5 z-30 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-[#25D366]/40 focus-visible:outline-none"
    >
      <WhatsappIcon className="size-7" />
    </a>
  );
}
