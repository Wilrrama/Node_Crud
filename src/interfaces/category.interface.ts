import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { categoryCreateSchema } from "../schemas/category.schema";
import Category from "../entities/Category.entity";

export type IcategoryCreate = z.infer<typeof categoryCreateSchema>;
export type IcategoryRead = Array<Category>;
export type IcategoryUpdate = DeepPartial<IcategoryCreate>;
export type IcategoryRepo = Repository<Category>;
