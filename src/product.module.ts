import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { IProductRepository } from './product.repository';
import { ProductServiceSQLite } from './product.repository.sqlite';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: IProductRepository,
      useClass: ProductServiceSQLite,
    },
  ],
})
export class ProductModule {}
