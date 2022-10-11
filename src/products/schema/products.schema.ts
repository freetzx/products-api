import { Prop, raw, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type ProductDocument = Product & Document;

export class Product {
   @Prop({ type: mongoose.Schema.Types.ObjectId })
   id: string;

   @Prop()
   name: string;

   @Prop()
   price: number;

   @Prop()
   description: string;

   @Prop()
   category: string;

   @Prop()
   image: string;

   @Prop(
      raw({
         rate: { type: Number },
         count: { type: Number },
      }),
   )
   rating: Record<string, number>;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
