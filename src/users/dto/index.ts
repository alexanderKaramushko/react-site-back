import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'common/types/role';

export class CreateUserRequestDTO {

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty({
    default: Role.USER,
    enum: Role,
  })
  role: Role

}
