import { Injectable } from '@nestjs/common';
import { PrismaService } from '../utils/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  createProduct(product: CreateProductDto, images: string[]) {
    const imagesData = images.map((item) => ({ path: item }));

    return this.prisma.item.create({
      data: {
        name: product.name,
        description: product.description,
        price: product.price,
        category: {
          connect: {
            id: product.categoryId,
          },
        },
        Image: {
          create: imagesData,
        },
      },
    });
  }
}
