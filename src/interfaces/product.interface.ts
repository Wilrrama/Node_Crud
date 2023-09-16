import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Product from "../entities/Product.entity";
import { productCreateSchema } from "../schemas/product.schema";

export type IproductCreate = z.infer<typeof productCreateSchema>;
export type IproductRead = Array<Product>;
export type IproductUpdate = DeepPartial<IproductCreate>;
export type IproductRepo = Repository<Product>;
