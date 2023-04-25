import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { AuthService } from './auth.service';

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
}
