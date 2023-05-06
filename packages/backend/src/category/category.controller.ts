import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.cto';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post('/add')
  async createCategory(@Body() body: CreateCategoryDto) {
    await this.categoryService.createCategory(body.name);

    return {
      success: true,
    };
  }

  @Get('')
  async getCategories() {
    return await this.categoryService.getCategories();
  }
}
