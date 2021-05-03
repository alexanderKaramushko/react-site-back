import { ApiResponseProperty } from '@nestjs/swagger';
import { Role } from 'common/types/role';
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
    default: Role.USER,
    nullable: false,
  })
  role: Role

}