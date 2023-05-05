import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { type Role } from '@prisma/client';
import { AuthGuard } from './auth.guard';

// export const Auth = (...args: string[]) => SetMetadata('auth', args);

export const Auth = (role: Role) => {
  return applyDecorators(SetMetadata('role', role), UseGuards(AuthGuard));
};
