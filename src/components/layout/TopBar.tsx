import { Mail, Linkedin } from "lucide-react";
import { SITE } from "@/content/site";

export function TopBar() {
  return (
    <div className="hidden bg-navy-deep text-white/80 md:block">
      <div className="container-x flex h-9 items-center justify-between text-xs">
        <span className="tracking-wide">
          Ketenmanagement Interim &amp; Advies · Specialist ketensamenwerking
        </span>
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${SITE.email}`}
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {SITE.email}
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden />
            Volg ons op LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
