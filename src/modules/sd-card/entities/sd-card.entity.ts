import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SDCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  img: string;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  thickness: number;

  @Column()
  pins: number;
}