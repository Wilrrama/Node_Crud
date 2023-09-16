import { Router } from "express";

import { verifyProductId } from "../middlewares/verifyUserId.middleware";
import { verifyProductName } from "../middlewares/verifyProductName.middleware";
import {
  createProductController,
  deleteProductController,
  getProductsController,
  retrieveProductController,
  updateProductController,
} from "../controllers/product.controllers";

export const productRouter: Router = Router();

productRouter.post("", verifyProductName, createProductController);
productRouter.get("", getProductsController);
productRouter.get("/:productId", verifyProductId, retrieveProductController);
productRouter.delete("/:productId", verifyProductId, deleteProductController);
productRouter.patch(
  "/:productId",
  verifyProductId,
  verifyProductName,
  updateProductController
);
