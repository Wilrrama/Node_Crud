import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  getUsersController,
  retrieveUserController,
  updateUserController,
} from "../controllers/user.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { userCreateSchema, userUpdateSchema } from "../schemas/user.schema";
import { verifyUserId } from "../middlewares/verifyUserId.middleware";

export const userRouter: Router = Router();

userRouter.post("", validateBody(userCreateSchema), createUserController);
userRouter.get("", getUsersController);
userRouter.get("/:userId", verifyUserId, retrieveUserController);
userRouter.delete("/:userId", verifyUserId, deleteUserController);
userRouter.patch(
  "/:userId",
  verifyUserId,
  validateBody(userUpdateSchema),
  updateUserController
);