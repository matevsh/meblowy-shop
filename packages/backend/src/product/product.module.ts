import { ConsoleLogger, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MulterModule } from '@nestjs/platform-express';
import { PrismaService } from '../utils/prisma.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, PrismaService, ConsoleLogger],
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './temp',
      }),
    }),
  ],
})
export class ProductModule {}
