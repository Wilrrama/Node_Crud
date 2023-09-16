import { Request, Response, NextFunction } from "express";
import { categoryRepo } from "../repositories";
import { AppError } from "../errors/App.error";

export const verifyCategoryName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { name } = req.body;

  const category = await categoryRepo.findOneBy({
    name: name,
  });

  if (!name) return next();

  if (category) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};
