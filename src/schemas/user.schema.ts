// Importa a biblioteca 'zod'.
import { z } from "zod";

// Define um esquema para um usuário.
export const userSchema = z.object({
  id: z.number().positive(), // Define o campo 'id' como um número positivo.
  name: z.string().max(150), // Define o campo 'name' como uma string com no máximo 150 caracteres.
  email: z.string().max(100).email(), // Define o campo 'email' como uma string com no máximo 100 caracteres e que deve ser um email válido.
  password: z.string().max(150), // Define o campo 'password' como uma string com no máximo 150 caracteres.
  admin: z.boolean().default(false), // Define o campo 'admin' como um valor booleano com um valor padrão de 'false'.
  createdAt: z.string(), // Define o campo 'createdAt' como uma string.
  updatedAt: z.string(), // Define o campo 'updatedAt' como uma string.
  deletedAt: z.string().nullable(), // Define o campo 'deletedAt' como uma string que pode ser nula (nullable).
});

// Define um esquema para criar um usuário, omitindo os campos que não podem ser definidos ao criar.
export const userCreateSchema = userSchema.omit({
  id: true, // Omitir o campo 'id'.
  createdAt: true, // Omitir o campo 'createdAt'.
  updatedAt: true, // Omitir o campo 'updatedAt'.
  deletedAt: true, // Omitir o campo 'deletedAt'.
});

// Define um esquema para retornar um usuário, omitindo o campo 'password'.
export const userReturnSchema = userSchema.omit({ password: true });

// Define um esquema para atualizar um usuário, permitindo campos parciais.
export const userUpdateSchema = userCreateSchema.partial();

// Define um esquema para ler uma lista de usuários.
export const userReadSchema = userReturnSchema.array();
