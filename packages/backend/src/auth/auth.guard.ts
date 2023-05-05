import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { type Role } from '@prisma/client';
import { AuthSession } from './auth.interface';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest().session as AuthSession;
    const role = this.reflector.get<Role>('role', context.getHandler());

    return user?.role === 'ADMIN' || role === user?.role;
  }
}
