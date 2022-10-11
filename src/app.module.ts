import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
   imports: [
      ConfigModule.forRoot(),
      MongooseModule.forRoot(process.env.MONGOOSE_URI),
      ProductsModule,
   ],
})
export class AppModule {}
