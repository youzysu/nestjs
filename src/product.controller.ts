import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './type';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.productService.getProducts();
  }

  @Get('/:id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return await this.productService.getProduct(id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    this.productService.createProduct(product);
  }
}
