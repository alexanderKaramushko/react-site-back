import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasesController } from './cases/cases.controller';
import { CasesModule } from './cases/cases.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthController } from 'auth/auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'authorization/roles.guard';
import { JwtAuthGuard } from 'auth/jwt-auth.guard';

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

@Module({
  controllers: [
    AppController,
    AuthController,
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
    CasesModule,
    AuthModule,
    UsersModule
  ],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    }
  ]
})
export class AppModule {}
