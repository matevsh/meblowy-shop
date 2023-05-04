import {
  Body,
  Controller,
  Get,
  Post,
  Session,
  UnauthorizedException,
} from '@nestjs/common';

import { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/add-user')
  async createUser(@Body() body: CreateUserDto) {
    await this.authService.createUser(body);

    return {
      success: true,
    };
  }

  @Post('/login')
  async authenticate(@Body() body: LoginDto, @Session() session) {
    const user = await this.authService.validateUser(body);
    session.user = user;
    return user;
  }

  @Get('/me')
  async getUser(@Session() session) {
    if (!session?.user) throw new UnauthorizedException();
    return session.user;
  }
}
