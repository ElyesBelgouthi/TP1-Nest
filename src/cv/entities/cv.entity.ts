import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cv extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  firstName: string;

  @Column()
  age: number;

  @Column()
  cin: string;

  @Column()
  job: string;

  @Column()
  path: string;
}
