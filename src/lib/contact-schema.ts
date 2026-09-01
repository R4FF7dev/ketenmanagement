import { z } from "zod";

export const contactSchema = z.object({
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

export type ContactFormData = z.infer<typeof contactSchema>;
