import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async login(user: User): Promise<{ access_token: string } | never> {
    const { id, username } = user;
    const foundUser = await this.getProfile(username);

    if (!foundUser) {
      throw new HttpException(`User ${username} not found`, HttpStatus.NOT_FOUND);
    }

    const payload: JwtPayload = { 
      role: foundUser.role,
      sub: id,
      username, 
    };

    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async getProfile(username: string): Promise<User | undefined> {
    const user = await this.usersService.findOneByName(username);

    return user;
  }

}