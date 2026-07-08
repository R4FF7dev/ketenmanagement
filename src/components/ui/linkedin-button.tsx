import { Linkedin } from "lucide-react";
import { SITE } from "@/content/site";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "ghost" | "icon";

export function LinkedInButton({
  variant = "outline",
  label = "Volg ons op LinkedIn",
  className,
}: {
  variant?: Variant;
  label?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const styles: Record<Variant, string> = {
    solid: "rounded-md bg-[#0A66C2] px-4 py-2.5 text-sm text-white hover:bg-[#084d92]",
    outline:
      "rounded-md border border-hairline bg-white px-4 py-2.5 text-sm text-navy hover:border-navy hover:text-navy-deep",
    ghost: "text-sm text-white/85 hover:text-white",
    icon: "rounded-md border border-hairline bg-white p-2.5 text-navy hover:border-navy",
  };
  return (
    <a
      href={SITE.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(base, styles[variant], className)}
    >
      <Linkedin className="h-4 w-4" aria-hidden />
      {variant !== "icon" && <span>{label}</span>}
    </a>
  );
}
