import { ConsoleLogger, Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
// import { MulterModule } from '@nestjs/platform-express';
import { FirebaseService } from "../shared/firebase/firebase.service";

@Module({
  controllers: [ProductController],
  providers: [ProductService, ConsoleLogger, FirebaseService],
  // imports: [
  //   MulterModule.registerAsync({
  //     useFactory: () => ({
  //       dest: './temp',
  //     }),
  //   }),
  // ],
})
export class ProductModule {}
