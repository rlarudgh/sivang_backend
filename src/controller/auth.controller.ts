import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from 'src/service/auth.service';
import { CreateUserDto } from 'src/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() createUserDto: CreateUserDto): Promise<any> {
    const user = await this.authService.createUser(createUserDto);
    return { user };
  }
}
