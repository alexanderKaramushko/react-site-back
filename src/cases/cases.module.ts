import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CasesController } from './cases.controller';
import { Case } from './cases.entity';
import { CasesService } from './cases.service';

@Module({
  controllers: [CasesController],
  exports: [CasesService],
  imports: [TypeOrmModule.forFeature([Case])],
  providers: [CasesService]
})
export class CasesModule {}
