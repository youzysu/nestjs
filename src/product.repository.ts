import { Injectable } from '@nestjs/common';
import { Product } from './type';

@Injectable()
export class ProductService {
  private products: Product[] = [];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  createProduct(product: Product) {
    this.products.push(product);
  }

  getProduct(id: string): Product {
    return this.products.filter((product) => product.id === id)[0];
  }
}
