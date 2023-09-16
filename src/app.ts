import "express-async-errors";
import express, { Application, json } from "express";
import { categoryRouter, userRouter } from "./routers";
import { handleError } from "./middlewares/handleError.middleware";
import { productRouter } from "./routers/product.router";

const app: Application = express();

app.use(json());

app.use("/users", userRouter);
app.use("/categories", categoryRouter);
app.use("/products", productRouter);
app.use(handleError);

export default app;
