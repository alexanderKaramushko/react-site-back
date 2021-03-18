import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasesController } from './cases/cases.controller';
import { CasesModule } from './cases/cases.module';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

@Module({
  controllers: [
    AppController,
    CasesController
  ],
  imports: [
    TypeOrmModule.forRoot({
      database: DB_NAME || 'react-site',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      host: DB_HOST || 'localhost',
      password: DB_PASSWORD || 'postgres',
      port: Number(DB_PORT) || 5432,
      synchronize: true,
      type: 'postgres',
      username: DB_USERNAME || 'postgres',
    }),
    CasesModule
  ],
  providers: [AppService]
})
export class AppModule {}
