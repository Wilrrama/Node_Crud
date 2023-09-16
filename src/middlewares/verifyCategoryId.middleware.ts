import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../repositories";
import { AppError } from "../errors/App.error";
import Category from "../entities/Category.entity";

export const verifyCategoryId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundCategory: Category | null = await categoryRepo.findOneBy({
    id: Number(req.params.categoryId),
  });

  if (!foundCategory) throw new AppError("Categoy not found.", 404);

  res.locals = { ...res.locals, foundCategory };

  return next();
};
