import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SDCard } from './sd-card.entity';

@Entity()
export class BusSpeed {

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
  speed: number;

  @Column({
    nullable: true
  })
  duplex: string;

  @Column({
    nullable: true
  })
  specVersion: string;

  @OneToMany(() => SDCard, sdCard => sdCard.capacityTypeAndFormFactor)
  sdCard: SDCard[];
  
}