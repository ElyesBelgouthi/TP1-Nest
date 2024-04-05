import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  designation: string;
}
