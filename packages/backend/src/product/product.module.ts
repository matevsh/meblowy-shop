import { ConsoleLogger, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ConsoleLogger],
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './temp',
      }),
    }),
  ],
})
export class ProductModule {}
