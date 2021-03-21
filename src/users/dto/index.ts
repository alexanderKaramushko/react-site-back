import { ApiProperty } from '@nestjs/swagger';
import { Roles } from 'common/types/roles';

export class CreateUserRequestDTO {

  @ApiProperty()
  username: string;

  @ApiProperty()
  password: string;

  @ApiProperty({
    default: Roles.USER,
    enum: Roles,
  })
  role: Roles

}
