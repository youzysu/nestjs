import { Product } from './type';

export interface IProductRepository {
  createProduct(product: Product): Promise<void>;
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product>;
}

export const IProductRepository = Symbol('IProductRepository');
