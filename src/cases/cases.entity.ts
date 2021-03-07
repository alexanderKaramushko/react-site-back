import { ApiResponseProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Case {

  @ApiResponseProperty()
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ApiResponseProperty()
  @Column({
    default: '',
    nullable: false,
  })
  name: string

}