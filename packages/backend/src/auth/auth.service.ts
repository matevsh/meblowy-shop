import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Role } from '@prisma/client';
import { hash, compare } from 'bcrypt';

import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from '../utils/prisma.service';
import { LoginDto } from './dtos/login.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser({ login, password }: LoginDto) {
    const { passwordHash, ...user } = await this.prisma.user.findUnique({
      where: { login },
    });

    const compare = await this.comparePassword(password, passwordHash);

    if (compare) return user;
    else throw new UnauthorizedException();
  }

  async createUser({ login, password, email }: CreateUserDto) {
    const passwordHash = await this.hashPassword(password);
    const role = Role.USER;

    return this.prisma.user.create({
      data: { role, login, passwordHash, email },
    });
  }

  private hashPassword(password: string) {
    return hash(password, 10);
  }

  private comparePassword(password: string, passwordHash: string) {
    return compare(password, passwordHash);
  }
}
