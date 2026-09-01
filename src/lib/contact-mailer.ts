import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { contactSchema } from "./contact-schema";

export const sendContactEmail = createServerFn({ method: "POST" })
  .validator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev",
      to: process.env.CONTACT_TO_EMAIL ?? "m.noordhuis@ketensamenwerking.nl",
      replyTo: data.email,
      subject: `Kennismaking — ${data.bedrijf}`,
      text: [
        `Bedrijf: ${data.bedrijf}`,
        `Naam: ${data.naam}`,
        `Functie: ${data.functie}`,
        `E-mail: ${data.email}`,
        `Telefoon: ${data.telefoon ?? ""}`,
        `Ik zou graag: ${data.interesse}`,
        "",
        data.bericht,
      ].join("\n"),
    });

    if (error) {
      throw new Error(error.message);
    }

    return { ok: true as const };
  });
