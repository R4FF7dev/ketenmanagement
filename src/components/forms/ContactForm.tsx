import { useState } from "react";
import { z } from "zod";
import { SITE } from "@/content/site";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  bedrijf: z.string().trim().min(1, "Vul uw bedrijf in").max(120),
  naam: z.string().trim().min(1, "Vul uw naam in").max(120),
  functie: z.string().trim().min(1, "Vul uw functie in").max(120),
  email: z.string().trim().email("Ongeldig e-mailadres").max(200),
  telefoon: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+0-9 ()\-./]*$/, "Ongeldig telefoonnummer")
    .optional()
    .or(z.literal("")),
  interesse: z.string().trim().min(1, "Maak een keuze"),
  bericht: z.string().trim().min(1, "Vul een korte vraag of toelichting in").max(2000),
});

const INTERESSE_OPTIONS = [
  "Nader kennis willen maken (wij nemen contact met u op)",
  "Gebruik willen maken van de interne keten maturity meting (KMM)",
  "Gebruik willen maken van de externe keten maturity meting (KSI)",
  "Gebruik willen maken van de RGS maturity meting (RMM)",
  "Gebruik willen maken van de Kr8 van Zacht meting (KVZ)",
];

type FormState = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormState, string>>;

const fieldClass =
  "mt-2 w-full rounded-md border border-hairline bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-slate-soft/60 focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/15";
const labelClass = "text-xs font-semibold uppercase tracking-[0.16em] text-navy-deep";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const body = `Bedrijf: ${v.bedrijf}\nNaam: ${v.naam}\nFunctie: ${v.functie}\nE-mail: ${v.email}\nTelefoon: ${v.telefoon ?? ""}\nIk zou graag: ${v.interesse}\n\n${v.bericht}`;
    const href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Kennismaking — ${v.bedrijf}`,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-lg border border-hairline bg-surface p-8 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-orange" aria-hidden />
        <h3 className="mt-4 font-display text-xl font-semibold text-navy-deep">
          Bedankt voor uw bericht
        </h3>
        <p className="mt-2 text-sm text-slate-soft">
          Uw e-mailclient is geopend. Verzend de e-mail om uw kennismaking te bevestigen. U ontvangt
          zo spoedig mogelijk reactie.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="bedrijf" className={labelClass}>
          Bedrijf
        </label>
        <input
          id="bedrijf"
          name="bedrijf"
          type="text"
          className={fieldClass}
          autoComplete="organization"
        />
        {errors.bedrijf && <p className="mt-1 text-xs text-destructive">{errors.bedrijf}</p>}
      </div>
      <div>
        <label htmlFor="naam" className={labelClass}>
          Naam
        </label>
        <input id="naam" name="naam" type="text" className={fieldClass} autoComplete="name" />
        {errors.naam && <p className="mt-1 text-xs text-destructive">{errors.naam}</p>}
      </div>
      <div>
        <label htmlFor="functie" className={labelClass}>
          Functie
        </label>
        <input
          id="functie"
          name="functie"
          type="text"
          className={fieldClass}
          autoComplete="organization-title"
        />
        {errors.functie && <p className="mt-1 text-xs text-destructive">{errors.functie}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          E-mail
        </label>
        <input id="email" name="email" type="email" className={fieldClass} autoComplete="email" />
        {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="telefoon" className={labelClass}>
          Telefoonnummer
        </label>
        <input id="telefoon" name="telefoon" type="tel" className={fieldClass} autoComplete="tel" />
        {errors.telefoon && <p className="mt-1 text-xs text-destructive">{errors.telefoon}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="interesse" className={labelClass}>
          Ik zou graag:
        </label>
        <select id="interesse" name="interesse" defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Maak een keuze
          </option>
          {INTERESSE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.interesse && <p className="mt-1 text-xs text-destructive">{errors.interesse}</p>}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="bericht" className={labelClass}>
          Waar wilt u meer over weten?
        </label>
        <textarea id="bericht" name="bericht" rows={5} className={fieldClass} />
        {errors.bericht && <p className="mt-1 text-xs text-destructive">{errors.bericht}</p>}
      </div>
      <div className="sm:col-span-2 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-slate-soft">
          Bij verzending opent uw e-mailclient met uw bericht.
        </p>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-orange px-6 py-3 text-sm font-semibold text-white hover:bg-orange/90"
        >
          Versturen
          <Send className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </form>
  );
}
