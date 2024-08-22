import { Entity, PrimaryColumn, Column } from 'typeorm';
import { uuidv7 } from 'uuidv7';

@Entity()
export class UUIDv7Entity {
  @PrimaryColumn({ type: 'char', length: 36 })
  id: string = uuidv7();

  @Column()
  data: string;
}
