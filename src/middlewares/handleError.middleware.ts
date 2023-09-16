// Importa as interfaces NextFunction, Request e Response do Express.
import { NextFunction, Request, Response } from "express";

// Importa o tipo ZodError da biblioteca 'zod'.
import { ZodError } from "zod";

// Importa a classe AppError que você definiu para erros personalizados.
import { AppError } from "../errors/App.error";

// Define uma função middleware de tratamento de erros.
export const handleError = (
  error: unknown, // O erro a ser tratado (pode ser de qualquer tipo).
  req: Request, // O objeto de solicitação HTTP.
  res: Response, // O objeto de resposta HTTP.
  next: NextFunction // A próxima função de middleware na cadeia (não usada neste caso).
): Response => {
  // Verifica se o erro é uma instância da classe AppError (um erro personalizado).
  if (error instanceof AppError) {
    // Se for um erro personalizado, envia uma resposta com o status e mensagem do erro.
    return res.status(error.status).json({ message: error.message });
  }

  // Verifica se o erro é uma instância do tipo ZodError (um erro de validação Zod).
  if (error instanceof ZodError) {
    // Se for um erro de validação Zod, envia uma resposta com status 400 (Bad Request)
    // e uma lista de erros de validação (fieldErrors).
    return res.status(400).json(error.flatten().fieldErrors);
  }

  // Se o erro não for nenhum dos tipos acima, trata como um erro interno do servidor.
  console.error(error); // Registra o erro no console para fins de depuração.

  // Retorna uma resposta com status 500 (Internal Server Error) e uma mensagem de erro genérica.
  return res.status(500).json({ message: "Internal server error" });
};
