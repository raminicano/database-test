import { Entity, PrimaryColumn, Column } from 'typeorm';
import { ulid } from 'ulid';

@Entity()
export class ULIDEntity {
  @PrimaryColumn({ type: 'char', length: 26 })
  id: string = ulid();

  @Column()
  data: string;
}
