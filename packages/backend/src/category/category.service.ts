import { Injectable } from '@nestjs/common';
import { PrismaService } from '../utils/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  createCategory(name: string) {
    return this.prisma.category.create({
      data: { name },
    });
  }

  getCategories() {
    return this.prisma.category.findMany();
  }
}
