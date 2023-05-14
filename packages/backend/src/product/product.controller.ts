import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { ProductService } from './product.service';
import { Files, ValidateFiles } from './product.decorator';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
  ) {}

  @Files('file')
  @Post('/add')
  async addProduct(
    @ValidateFiles() files: Express.Multer.File[],
    @Body() body: CreateProductDto,
  ) {
    const fileSaving = [];
    files.forEach((item) => {
      fileSaving.push(
        fs.rename(
          item.path,
          `upload/${item.filename}${path.extname(item.originalname)}`,
        ),
      );
    });
    await Promise.all(fileSaving);

    const fileNames = files.map((item) =>
      `${item.filename}${path.extname(item.originalname)}`
    );

    await this.productService.createProduct(body, fileNames);

    return {
      success: true,
    };
  }

  @Get()
  async getProducts(@Query('category') category: string) {
    return await this.productService.getProducts(category);
  }
}
