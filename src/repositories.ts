import { AppDataSource } from "./data-source";
import User from "./entities/User.entity";
import { IUserRepo } from "./interfaces/user.interface";

export const userRepo: IUserRepo = AppDataSource.getRepository(User);
