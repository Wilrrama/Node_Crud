// Importa as interfaces NextFunction, Request e Response do Express.
import { NextFunction, Request, Response } from "express";

// Importa o tipo ZodTypeAny da biblioteca 'zod'.
import { ZodTypeAny } from "zod";

// Define um middleware de validação de corpo que aceita um esquema 'schema' como parâmetro.
export const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    // Valida o corpo da requisição (req.body) com o esquema 'schema'.
    // Se os dados não atenderem ao esquema, uma exceção será lançada.

    req.body = schema.parse(req.body); // Atualiza o corpo da requisição para conter os dados validados.

    // Chama a próxima função de middleware ou rota na cadeia de middleware.
    return next();
  };
