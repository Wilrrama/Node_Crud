import User from "../entities/User.entity";
import {
  IUserCreate,
  IUserRead,
  IUserUpdate,
} from "../interfaces/user.interface";
import { userRepo } from "../repositories";

export const createUserService = async (
  payload: IUserCreate
): Promise<User> => {
  const user: User = await userRepo.save(payload);
  return user;
};

export const getUsersService = async (): Promise<IUserRead> => {
  const user: IUserRead = await userRepo.find();
  return user;
};

export const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.remove(user);
};

export const updateUserService = async (
  user: User,
  payload: IUserUpdate
): Promise<User> => {
  return await userRepo.save({ ...user, ...payload });
};
