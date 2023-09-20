import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { IProductRepository } from './product.repository';
import { ProductServiceMemory } from './product.repository.memory';
import { ProductService } from './product.service';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: IProductRepository,
      useClass:
        process.env.NODE_ENV === 'production'
          ? ProductServiceMemory
          : ProductServiceMemory,
    },
  ],
})
export class ProductModule {}
