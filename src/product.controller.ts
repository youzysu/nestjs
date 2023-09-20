import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './type';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): Product[] {
    return this.productService.getProducts();
  }

  @Get('/:id')
  getProduct(@Param('id') id: string): Product {
    return this.productService.getProduct(id);
  }

  @Post()
  createProduct(@Body() product: Product) {
    this.productService.createProduct(product);
  }
}
