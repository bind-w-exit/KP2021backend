import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SDCard } from './sd-card.entity';

@Entity()
export class SpeedClass {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logo: string;

  @Column()
  minWriteSpeed: number;

  @Column()
  maxWriteSpeed: number;

  // @OneToMany(() => SDCard, sdCard => sdCard.capacityTypeAndFormFactor)
  // sdCard: SDCard[];

}