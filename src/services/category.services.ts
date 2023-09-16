import Category from "../entities/Category.entity";
import {
  IcategoryCreate,
  IcategoryRead,
  IcategoryUpdate,
} from "../interfaces/category.interface";

import { categoryRepo } from "../repositories";

export const createCategoryService = async (
  payload: IcategoryCreate
): Promise<Category> => {
  const category: Category = await categoryRepo.save(payload);
  return category;
};

export const getCategoriesService = async (): Promise<IcategoryRead> => {
  const category = await categoryRepo.find();
  return category;
};

export const deleteCategoryService = async (
  category: Category
): Promise<void> => {
  await categoryRepo.remove(category);
};

export const updateCategoryService = async (
  category: Category,
  payload: IcategoryUpdate
): Promise<Category> => {
  return await categoryRepo.save({ ...category, ...payload });
};
