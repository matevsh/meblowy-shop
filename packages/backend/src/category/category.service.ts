import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  createCategory(name: string, imageName: string) {
    return this.prisma.category.create({
      data: { name, image: imageName },
    });
  }

  getCategories() {
    return this.prisma.category.findMany();
  }
}
