import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCaseRequestDTO } from './dto';
import { Case } from './cases.entity';

@Injectable()
export class CasesService {

  constructor(
    // eslint-disable-next-line no-unused-vars
    @InjectRepository(Case) private caseRepository: Repository<Case>,
  ) {}

  async findOneById(id: string): Promise<Case> {
    return await this.caseRepository.findOne(id);
  }

  async create({ name }: CreateCaseRequestDTO): Promise<Case> {
    const newCase = new Case();

    newCase.name = name;

    const createdCase = await this.caseRepository.save(newCase);

    return this.findOneById(createdCase.id);
  }

}
