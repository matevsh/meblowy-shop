import { Global, Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { FirebaseModule } from './firebase/firebase.module';

@Global()
@Module({
  imports: [PrismaModule, FirebaseModule],
  exports: [PrismaModule, FirebaseModule],
})
export class SharedModule {}
