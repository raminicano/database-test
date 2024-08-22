import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpeedController } from './speed.controller';
import { SpeedService } from './speed.service';
import { AutoIncrementEntity } from '../entities/auto-increment.entity';
import { ULIDEntity } from '../entities/ulid.entity';
import { UUIDv7Entity } from '../entities/uuidv7.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AutoIncrementEntity, ULIDEntity, UUIDv7Entity]),
  ],
  controllers: [SpeedController],
  providers: [SpeedService],
})
export class SpeedModule {}
