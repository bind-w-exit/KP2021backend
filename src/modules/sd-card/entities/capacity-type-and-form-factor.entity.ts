import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SDCard } from './sd-card.entity';

@Entity()
export class CapacityTypeAndFormFactor {

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
    type: "decimal",
    nullable: false
  })
  width: number;

  @Column({
    type: "decimal",
    nullable: false
  })
  length: number;

  @Column({
    type: "decimal",
    nullable: false
  })
  thicknes: number;

  @Column({
    nullable: false
  })
  minCapacity: number;

  @Column({
    nullable: false
  })
  maxCapacity: number;

  @Column({
    nullable: true
  })
  typicalFs: string;

  @OneToMany(() => SDCard, sdCard => sdCard.capacityTypeAndFormFactor)
  sdCard: SDCard[];

}