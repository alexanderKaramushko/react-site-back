import { Body, Controller, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateCaseRequestDTO } from './dto';
import { Case } from './cases.entity';
import { CasesService } from './cases.service';
import { Roles } from 'utils/authorization';
import { Role } from 'common/types/role';
import { Public } from 'utils';

@ApiTags('cases')
@Controller('cases')
export class CasesController {

  // eslint-disable-next-line no-unused-vars
  constructor(private casesService: CasesService) {}

  @Public()
  @Roles(Role.ADMIN)
  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({
    description: 'Создать кейс для портфолио',
    type: Case
  })
  async create(@Body() createWorkDTO: CreateCaseRequestDTO): Promise<Case> {
    return await this.casesService.create(createWorkDTO);
  }

}
