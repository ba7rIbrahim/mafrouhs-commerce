import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().nonempty("name is required"),
  email: z.email("email doesn't matches").nonempty("email is required"),
  message: z.string().nonempty("message is required"),
});

export type ContactSchemaType = z.infer<typeof ContactSchema>;
