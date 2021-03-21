import { ApiResponseProperty } from '@nestjs/swagger';
import { Roles } from 'common/types/roles';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

  @ApiResponseProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiResponseProperty()
  @Column({
    default: '',
    nullable: false,
  })
  username: string

  @ApiResponseProperty()
  @Column({
    default: '',
    nullable: false,
  })
  password: string

  @Column({
    default: Roles.USER,
    nullable: false,
  })
  role: Roles

}