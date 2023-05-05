import { User } from '@prisma/client';

export interface AuthSession {
  user: Omit<User, 'passwordHash'>;
}
