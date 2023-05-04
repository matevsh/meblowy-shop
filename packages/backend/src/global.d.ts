import { User } from '@prisma/client';

declare global {
  declare module 'express-session' {
    interface SessionData {
      user: User;
    }
  }
}
