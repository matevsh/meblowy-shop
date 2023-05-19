import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.cto';
import { File, ValidateFile } from "./category.decorator";
import { FirebaseService } from "../shared/firebase/firebase.service";

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService, private firebase: FirebaseService) {}

  @Post('/add')
  @File('file')
  async createCategory(@Body() body: CreateCategoryDto, @ValidateFile() file: Express.Multer.File) {
    const [fileName] = await this.firebase.upload([file]);

    await this.categoryService.createCategory(body.name, fileName);

    return {
      success: true,
    };
  }

  @Get('')
  async getCategories() {
    return await this.categoryService.getCategories();
  }
}
