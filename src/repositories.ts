import { AppDataSource } from "./data-source";
import Category from "./entities/Category.entity";
import Product from "./entities/Product.entity";
import User from "./entities/User.entity";
import { IcategoryRepo } from "./interfaces/category.interface";
import { IproductRepo } from "./interfaces/product.interface";
import { IUserRepo } from "./interfaces/user.interface";

export const userRepo: IUserRepo = AppDataSource.getRepository(User);
export const categoryRepo: IcategoryRepo =
  AppDataSource.getRepository(Category);
export const productRepo: IproductRepo = AppDataSource.getRepository(Product);
