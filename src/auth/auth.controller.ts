import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LoginRequestDTO } from './dto';
import { User } from 'users/user.entity';
import { AuthService } from 'auth/auth.service';
import { LocalAuthGuard } from 'auth/local.auth.guard';
import { JwtAuthGuard } from 'auth/jwt-auth.guard';

@Controller()
@ApiTags('auth')
export class AuthController {

  // eslint-disable-next-line no-unused-vars
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Аутентифицироваться',
  })
  async login(@Body() loginRequestDTO: LoginRequestDTO) {
    return this.authService.login(loginRequestDTO as any);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Получить аутентифицированного пользователя',
  })
  async getProfile(@Request() req: { user: User }) {
    return req.user;
  }

}
