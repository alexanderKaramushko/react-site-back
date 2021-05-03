import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt'
import { User } from 'users/user.entity';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './types';

@Injectable()
export class AuthService {

  constructor(
    // eslint-disable-next-line no-unused-vars
    private usersService: UsersService,
    // eslint-disable-next-line no-unused-vars
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.getProfile(username);

    const isPasswordCompare = await compare(password, user?.password ?? '');

    if (user && isPasswordCompare) {
      const { id, role, username } = user;

      return {
        id,
        role,
        username 
      };
    }
    return null;
  }

  async login(user: User) {
    const { id, username } = user;
    const payload: JwtPayload = { sub: id, username }

    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async getProfile(username: string) {
    const user = await this.usersService.findOneByName(username);

    return user;
  }

}