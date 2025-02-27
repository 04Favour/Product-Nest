/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
