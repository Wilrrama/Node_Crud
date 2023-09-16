import User from "../entities/User.entity";
import {
  IUserCreate,
  IUserRead,
  IUserUpdate,
} from "../interfaces/user.interface";
import { userRepo } from "../repositories";
import { AppError } from "../errors/App.error";

export const createUserService = async (payload: IUserCreate) => {
  const user: User = await userRepo.save(payload);
  return user;
};

export const getUsersService = async (): Promise<IUserRead> => {
  const user: IUserRead = await userRepo.find();
  return user;
};

// export const retrieveUserService = async (userId: number): Promise<User> => {
//   const user: User | null = await userRepo.findOneBy({ id: userId });

//   if (!user) throw new AppError("User not found", 404);

//   return user;
// };

export const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.remove(user);
};

export const updateUserService = async (
  user: User,
  payload: IUserUpdate
): Promise<User> => {
  return await userRepo.save({ ...user, ...payload });
};
