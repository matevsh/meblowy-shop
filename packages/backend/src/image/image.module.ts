import { Module } from '@nestjs/common';
import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { FirebaseService } from "../shared/firebase/firebase.service";

@Module({
  controllers: [ImageController],
  providers: [ImageService, FirebaseService]
})
export class ImageModule {}
