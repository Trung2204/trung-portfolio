"use server";

import { z } from "zod";
import { formSchema } from "./schema";
import { Resend } from "resend";
import { EmailTemplate } from "@/components/ui/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>) => {
  try {
    const { error } = await resend.emails.send({
      from: `Trung Doan <${process.env.RESEND_FROM_EMAIL}>`,
      to: [emailFormData.email],
      subject: "Welcome",
      react: EmailTemplate({
        firstName: emailFormData.firstName,
        message: emailFormData.message,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Error sending email:", error);
      throw new Error("Error sending email");
    }
  } catch (e) {
    throw e;
  }
};
