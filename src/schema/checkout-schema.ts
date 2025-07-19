import { z } from "zod";

export const checkoutSchema = z.object({
  cardName: z.string().min(1, "Cardholder is required"),
  cardNumber: z
    .string()
    .min(16, "Card number must be at least 16 digits")
    .max(19, "Card number can't exceed 19 digits")
    .regex(/^\d{16,19}$/, "Invalid card number format"),
  expire: z
    .string()
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Expire format must be MM/YY"),

  cvv: z
    .string()
    .min(3, "CVV must be 3 digits")
    .max(4, "CVV can't be more than 4 digits")
    .regex(/^\d{3,4}$/, "Invalid CVV format"),
});

export type CheckoutSchemaTypes = z.infer<typeof checkoutSchema>;
