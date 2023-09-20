import { Injectable } from '@nestjs/common';
import { IProductRepository } from './product.repository';
import { Product } from './type';

@Injectable()
export class ProductServiceMemory implements IProductRepository {
  private products: Product[] = [];

  constructor() {}

  async getProducts(): Promise<Product[]> {
    return this.products;
  }

  async createProduct(product: Product): Promise<void> {
    this.products.push(product);
  }

  async getProduct(id: number): Promise<Product> {
    return this.products.find((product) => product.id === id);
  }
}
