import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './utils/prisma.service';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import configuration from './config/configuration';

@Module({
  imports: [
    AuthModule,
    CategoryModule,
    ProductModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
