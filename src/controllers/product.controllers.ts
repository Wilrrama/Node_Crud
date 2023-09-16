import { Request, Response } from "express";
import {
  createProductService,
  deleteProductService,
  getProductsService,
  updateProductService,
} from "../services/product.services";
import Product from "../entities/Product.entity";
import { IproductRead } from "../interfaces/product.interface";

export const createProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const product: Product = await createProductService(req.body);
  return res.status(201).json(product);
};

export const getProductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const products: IproductRead = await getProductsService();
  return res.status(200).json(products);
};

export const retrieveProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json(res.locals.foundProduct);
};

export const deleteProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  await deleteProductService(res.locals.foundProduct);
  return res.status(204).json();
};

export const updateProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { foundProduct } = res.locals;
  const { body } = req;

  const product: Product = await updateProductService(foundProduct, body);

  return res.status(200).json(product);
};
