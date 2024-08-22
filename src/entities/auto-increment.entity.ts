import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AutoIncrementEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: string;
}
