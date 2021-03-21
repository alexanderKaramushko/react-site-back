import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserRequestDTO } from './dto';
import { User } from './user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {

  // eslint-disable-next-line no-unused-vars
  constructor(private usersService: UsersService) {}

  @Post()
  @ApiOkResponse({
    description: 'Создать пользователя',
    type: User
  })
  async create(@Body() createUserDTO: CreateUserRequestDTO): Promise<User> {
    return await this.usersService.create(createUserDTO);
  }

}
