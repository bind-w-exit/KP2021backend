import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SDCard } from './sd-card.entity';

@Entity()
export class BusSpeed {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logo: string;

  @Column()
  speed: number;

  @Column()
  duplex: string;

  @Column()
  specVersion: string;

  @OneToMany(() => SDCard, sdCard => sdCard.capacityTypeAndFormFactor)
  sdCard: SDCard[];
  
}