import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/App.error";
import { userRepo } from "../repositories";

export const verifyUserEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const user = await userRepo.findOneBy({
    email: email,
  });

  if (!email) return next();

  if (user) {
    throw new AppError("Email already exists", 409);
  }

  return next();
};
