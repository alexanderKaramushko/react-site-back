import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Role } from 'common/types/role';
import { Repository } from 'typeorm';
import { CreateUserRequestDTO } from './dto';
import { User } from './user.entity';

@Injectable()
export class UsersService {

  constructor(
    // eslint-disable-next-line no-unused-vars
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOneByName(username: string): Promise<User | undefined> {
    return await this.userRepository.findOne({
      where: { username }
    });
  }

  async create({ username, password }: CreateUserRequestDTO): Promise<User | undefined> {
    const newUser = new User();

    const hashPassword = await hash(password, 10);

    newUser.username = username;
    newUser.password = hashPassword;
    newUser.role = Role.USER;

    const createdUser = await this.userRepository.save(newUser);

    return this.findOneByName(createdUser.id);
  }

}
