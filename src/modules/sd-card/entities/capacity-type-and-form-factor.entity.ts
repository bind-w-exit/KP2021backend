import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SDCard } from './sd-card.entity';

@Entity()
export class CapacityTypeAndFormFactor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  logo: string;

  @Column("decimal")
  width: number;

  @Column("decimal")
  length: number;

  @Column("decimal")
  thicknes: number;

  @Column()
  minCapacity: number;

  @Column()
  maxCapacity: number;

  @Column()
  typicalFs: string;

  @OneToMany(() => SDCard, sdCard => sdCard.capacityTypeAndFormFactor)
  sdCard: SDCard[];

}