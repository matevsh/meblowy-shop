import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import configuration from './config/configuration';
import { APP_FILTER } from '@nestjs/core';
import { GlobalAppFilter } from './shared/filters/global-app.filter';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    AuthModule,
    CategoryModule,
    ProductModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    SharedModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: GlobalAppFilter,
    },
  ],
})
export class AppModule {}
