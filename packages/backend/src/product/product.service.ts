import { Injectable, NotFoundException, Logger } from "@nestjs/common";
import { CreateProductDto } from './dto/create-product.dto';
import { PrismaService } from '../shared/prisma/prisma.service';

// eslint-disable-next-line prettier/prettier
@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  private addView(productId: number) {
    return this.prisma.item.update({
      where: { id: productId },
      data: { views: {  increment: 1 } }
    }).catch((err) => Logger.error(err));
  }

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

  getProducts(category: string | undefined) {
    const categoryId = parseInt(category) || undefined;

    return this.prisma.item.findMany({
      where: {
        categoryId
      },
      include: {
        Image: {
          take: 1,
          select: {
            path: true,
          }
        },
        category: true,
        Rating: true
      }
    });
  }

  async getProduct(productId: number) {
    const product = await this.prisma.item.findFirst({
      where: {
        id: productId
      },
      include: {
        Image: {
          select: {
            path: true,
          }
        },
        category: true,
        Rating: true
      }
    })

    if (!product) throw new NotFoundException('Product not found');
    else this.addView(productId);

    return product;
  }

  getPopularProducts() {
    return this.prisma.item.findMany({
      orderBy: {
        views: 'desc'
      },
      take: 20,
      include: {
        Image: {
          take: 1,
          select: {
            path: true,
          }
        },
        category: true,
        Rating: true,
      }
    })
  }
}