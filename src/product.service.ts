import { Inject, Injectable } from '@nestjs/common';
import { IProductRepository } from './product.repository';
import { Product } from './type';

@Injectable()
export class ProductService {
  constructor(
    @Inject(IProductRepository)
    private readonly productRepository: IProductRepository,
  ) {}

  async createProduct(product: Product) {
    await this.productRepository.createProduct(product);
  }

  async getProducts(): Promise<Product[]> {
    return this.productRepository.getProducts();
  }

  async getProduct(id: number): Promise<Product> {
    return this.productRepository.getProduct(id);
  }
}
