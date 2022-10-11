import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.services';
import { Product } from './schema/products.schema';

@Controller('products')
export class ProductsController {
   constructor(private readonly productsService: ProductsService) {}

   @Get()
   async findAll(): Promise<Product[]> {
      return await this.productsService.findAll();
   }

   @Get(':id')
   async findOneById(@Param('id') id: string): Promise<Product> {
      return await this.productsService.findOneById(id);
   }
}
