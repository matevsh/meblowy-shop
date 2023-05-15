import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { ProductService } from './product.service';
import { Files, ValidateFiles } from './product.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { FirebaseService } from "../shared/firebase/firebase.service";

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    private firebaseService: FirebaseService,
  ) {}

  @Files('file')
  @Post('/add')
  async addProduct(
    @ValidateFiles() files: Express.Multer.File[],
    @Body() body: CreateProductDto,
  ) {
    const fileNames = await this.firebaseService.upload(files);

    await this.productService.createProduct(body, fileNames);

    return {
      success: true,
    };
  }

  @Get()
  async getProducts(@Query('category') category: string) {
    return await this.productService.getProducts(category);
  }

  @Files('file')
  @Post('/upload')
  async uploadFile(@ValidateFiles() files: Express.Multer.File[]){
    await this.firebaseService.upload(files)

    return {
      success: true
    }
  }
}
