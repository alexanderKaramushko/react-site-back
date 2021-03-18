import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCaseRequestDTO {

  @ApiPropertyOptional()
  name: string;

}
