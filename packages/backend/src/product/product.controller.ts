import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";

import { ProductService } from './product.service';
import { Files, ValidateFiles } from './product.decorator';
import { CreateProductDto } from './dto/create-product.dto';
import { FirebaseService } from "../shared/firebase/firebase.service";
import {GetProductDto} from "./dto/get-product.dto";

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

  @Get('/:itemId')
  async getProduct(@Param() { itemId }: GetProductDto) {
    return await this.productService.getProduct(+itemId);
  }
}
