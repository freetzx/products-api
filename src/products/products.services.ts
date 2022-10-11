import {
   BadRequestException,
   Injectable,
   NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Product, ProductDocument } from './schema/products.schema';

@Injectable()
export class ProductsService {
   constructor(
      @InjectModel(Product.name)
      private productModel: mongoose.Model<ProductDocument>,
   ) {}

   async findAll(): Promise<Product[]> {
      return this.productModel.find();
   }

   async findOneById(id: string): Promise<Product> {
      if (!mongoose.isValidObjectId(id)) {
         throw new BadRequestException();
      }

      var productId = new mongoose.Types.ObjectId(id.toString());

      const result = await this.productModel.findById(productId);

      if (!result) {
         throw new NotFoundException();
      }

      return result;
   }
}
