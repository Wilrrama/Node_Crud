import Product from "../entities/Product.entity";
import {
  IproductCreate,
  IproductRead,
  IproductUpdate,
} from "../interfaces/product.interface";
import { productRepo } from "../repositories";

export const createProductService = async (
  payload: IproductCreate
): Promise<Product> => {
  const product: Product = await productRepo.save(payload);
  return product;
};

export const getProductsService = async (): Promise<IproductRead> => {
  const products: IproductRead = await productRepo.find();
  return products;
};

export const deleteProductService = async (product: Product): Promise<void> => {
  await productRepo.remove(product);
};

export const updateProductService = async (
  product: Product,
  payload: IproductUpdate
): Promise<Product> => {
  return await productRepo.save({ ...product, ...payload });
};
