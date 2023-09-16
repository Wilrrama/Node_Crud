import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/App.error";
import { productRepo } from "../repositories";

export const verifyProductName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  const product = await productRepo.findOneBy({
    name: name,
  });

  if (!name) return next();

  if (product) {
    throw new AppError("Product already exists", 409);
  }

  return next();
};
