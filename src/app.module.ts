import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

@Module({
  controllers: [AppController],
  imports: [
    TypeOrmModule.forRoot({
      database: DB_NAME || 'react-site',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      host: DB_HOST || 'localhost',
      password: DB_PASSWORD || 'postgres',
      port: Number(DB_PORT) || 5435,
      synchronize: true,
      type: 'postgres',
      username: DB_USERNAME || 'postgres',
    })
  ],
  providers: [AppService]
})
export class AppModule {}
