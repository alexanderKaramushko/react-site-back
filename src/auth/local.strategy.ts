// eslint-disable-next-line import/named
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'users/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  // eslint-disable-next-line no-unused-vars
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<User | never> {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }

}