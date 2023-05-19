import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { FirebaseService } from "../shared/firebase/firebase.service";

@Module({
  controllers: [CategoryController, FirebaseService],
  providers: [CategoryService],
})
export class CategoryModule {}
