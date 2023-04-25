import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { hash } from 'bcrypt';

import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from '../utils/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async createUser({ name, password, email }: CreateUserDto) {
    const passwordHash = await this.hashPassword(password);
    const role = Role.USER;

    return this.prisma.user.create({
      data: { role, name, passwordHash, email },
    });
  }

  private async hashPassword(password: string) {
    return await hash(password, 10);
  }
}
