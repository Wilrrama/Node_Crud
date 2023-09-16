import { Request, Response } from "express";
import Category from "../entities/Category.entity";
import { createUserController } from "./user.controllers";
import {
  createCategoryService,
  deleteCategoryService,
  getCategoriesService,
  updateCategoryService,
} from "../services/category.services";
import { IcategoryRead } from "../interfaces/category.interface";

export const createCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categoy: Category = await createCategoryService(req.body);
  return res.status(201).json(categoy);
};

export const getCategoriesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const categories: IcategoryRead = await getCategoriesService();
  return res.status(200).json(categories);
};

export const retrieveCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(res.locals.foundCategory);
};

export const deleteCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteCategoryService(res.locals.foundCategory);
  return res.status(204).json();
};

export const updateCategoryController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundCategory } = res.locals;
  const { body } = req;

  const categoy: Category = await updateCategoryService(foundCategory, body);

  return res.status(200).json(categoy);
};
