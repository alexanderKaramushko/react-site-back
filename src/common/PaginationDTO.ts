import { ApiProperty } from '@nestjs/swagger';

export default class PaginationDTO {

  @ApiProperty({
    default: 15,
  })
  take: number;

  @ApiProperty({
    default: '0',
  })
  skip: number;

}