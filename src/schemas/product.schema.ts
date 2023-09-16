import { z } from "zod";

export const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(60),
  description: z.string().nullish(),
  stock: z.number().positive().default(1),
  price: z.number().positive().default(0),
});

export const productCreateSchema = productSchema.omit({
  id: true,
  createdAt: true,
  upddateAt: true,
  deleteAt: true,
});

export const productReturnSchema = productSchema.omit({ id: true });
export const productReadSchema = productSchema.array();
export const productUpdateSchema = productCreateSchema.partial();
