import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class SpeedClass {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  name: string;

  @Column({
    nullable: true
  })
  description: string;

  @Column({
    nullable: true
  })
  logo: string;

  @Column({
    nullable: false
  })
  minWriteSpeed: number;

  @Column({
    nullable: false
  })
  maxWriteSpeed: number;

}