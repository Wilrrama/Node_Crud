import { Request, Response } from "express";
import User from "../entities/User.entity";
import {
  createUserService,
  deleteUserService,
  getUsersService,
  updateUserService,
} from "../services/user.services";
import { IUserRead } from "../interfaces/user.interface";

export const createUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const user: User = await createUserService(req.body);
  return res.status(201).json(user);
};

export const getUsersController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const users: IUserRead = await getUsersService();
  return res.status(200).json(users);
};

export const retrieveUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  // const userId: number = Number(req.params.userId);
  // const user: User = await retrieveUserService(userId);
  return res.status(200).json(res.locals.foundUser);
};

export const deleteUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteUserService(res.locals.foundUser);
  return res.status(204).json();
};

export const updateUserController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundUser } = res.locals;
  const { body } = req;

  const user: User = await updateUserService(foundUser, body);

  return res.status(200).json(user);
};
