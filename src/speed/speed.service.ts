import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AutoIncrementEntity } from '../entities/auto-increment.entity';
import { ULIDEntity } from '../entities/ulid.entity';
import { UUIDv7Entity } from '../entities/uuidv7.entity';
import { ulid } from 'ulid';
import { uuidv7 } from 'uuidv7';

@Injectable()
export class SpeedService {
  constructor(
    @InjectRepository(AutoIncrementEntity)
    private autoIncrementRepo: Repository<AutoIncrementEntity>,

    @InjectRepository(ULIDEntity)
    private ulidRepo: Repository<ULIDEntity>,

    @InjectRepository(UUIDv7Entity)
    private uuidv7Repo: Repository<UUIDv7Entity>,
  ) {}

  async testAutoIncrement(data: string): Promise<number> {
    const start = Date.now();
    const entity = this.autoIncrementRepo.create({ data });
    await this.autoIncrementRepo.save(entity);
    return Date.now() - start;
  }

  async testULID(data: string): Promise<number> {
    const start = Date.now();
    const entity = this.ulidRepo.create({ id: ulid(), data });
    await this.ulidRepo.save(entity);
    return Date.now() - start;
  }

  async testUUIDv7(data: string): Promise<number> {
    const start = Date.now();
    const entity = this.uuidv7Repo.create({ id: uuidv7(), data });
    await this.uuidv7Repo.save(entity);
    return Date.now() - start;
  }
}
