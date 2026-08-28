import { Mail } from "lucide-react";
import { SITE } from "@/content/site";

export function TopBar() {
  return (
    <div className="hidden bg-navy-deep text-white md:block">
      <div className="container-x flex h-9 items-center justify-between text-xs">
        <span className="tracking-wide">
          Ketensamenwerking Interim &amp; Advies · Specialist in ketensamenwerking
        </span>
        <div className="flex items-center gap-5">
          <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" aria-hidden />
            {SITE.email}
          </a>
        </div>
      </div>
    </div>
  );
}
