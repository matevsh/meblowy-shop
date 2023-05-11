import {
  Body,
  ConsoleLogger,
  Controller,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import { ProductService } from './product.service';
import { Files, ValidateFiles } from './product.decorator';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
    private config: ConfigService,
    private logger: ConsoleLogger,
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

    const fileNames = files.map((item) => item.filename);
    await this.productService.createProduct(body, fileNames);

    return {
      success: true,
    };
  }
}
