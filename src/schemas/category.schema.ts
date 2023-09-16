// Importa a biblioteca 'zod'.
import { z } from "zod";

export const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

export const categoryCreateSchema = categorySchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

export const categoryReturnSchema = categorySchema.omit({ id: true });
export const categoryReadSchema = categorySchema.array();
export const categoryUpdateSchema = categoryCreateSchema.partial();
