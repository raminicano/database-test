import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeedModule } from './speed/speed.module';
import { databaseConfig } from './config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forRoot(databaseConfig), SpeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
