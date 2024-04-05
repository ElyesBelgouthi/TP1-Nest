import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
