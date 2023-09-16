import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/User.entity";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schema";

export type IUserCreate = z.infer<typeof userCreateSchema>;
export type IUserRead = Array<User>;
export type IUserUpdate = DeepPartial<IUserCreate>;
export type IUserRepo = Repository<User>;
