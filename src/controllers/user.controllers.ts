import { Request, Response } from "express";
import User from "../entities/User.entity";
import { userServices } from "../services";

const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = await userServices.createUserService(req.body);
  return res.status(201).json(user);
};

export default { createUserController };
