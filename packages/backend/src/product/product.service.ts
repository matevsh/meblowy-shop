import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from '../shared/prisma/prisma.service';

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
