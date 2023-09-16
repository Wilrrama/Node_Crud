import { Router } from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getCategoriesController,
  retrieveCategoryController,
  updateCategoryController,
} from "../controllers/category.controllers";
import { verifyCategoryId } from "../middlewares/verifyCategoryId.middleware";
import { verifyCategoryName } from "../middlewares/verifyCategoryName.middleware";

export const categoryRouter: Router = Router();

categoryRouter.post("", verifyCategoryName, createCategoryController);
categoryRouter.get("", getCategoriesController);
categoryRouter.get(
  "/:categoryId",
  verifyCategoryId,
  retrieveCategoryController
);
categoryRouter.patch(
  "/:categoryId",
  verifyCategoryId,
  verifyCategoryName,
  updateCategoryController
);
categoryRouter.delete(
  "/:categoryId",
  verifyCategoryId,
  deleteCategoryController
);
