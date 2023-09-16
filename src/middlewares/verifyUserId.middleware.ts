import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { productRepo } from "../repositories";
import Product from "../entities/Product.entity";

export const verifyProductId = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const foundProduct: Product | null = await productRepo.findOneBy({
    id: Number(req.params.productId),
  });

  if (!foundProduct) throw new AppError("Product not found.", 404);

  res.locals = { ...res.locals, foundProduct };

  return next();
};
