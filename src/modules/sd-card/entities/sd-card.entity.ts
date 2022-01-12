import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { BusSpeed } from './bus-speed.entity';
import { CapacityTypeAndFormFactor } from './capacity-type-and-form-factor.entity';
import { SpeedClass } from './speed-class.entity';

@Entity()
export class SDCard {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false
  })
  name: string;

  @Column({
    nullable: false
  })
  brand: string;

  @Column({
    nullable: false
  })
  img: string;

  @Column({
    nullable: false
  })
  storageCapacity: number;

  @Column({
    nullable: true
  })
  readSpeed: number;

  @Column({
    nullable: true
  })
  writeSpeed: number;

  @Column({
    nullable: true
  })
  marking: string;

  @ManyToOne(() => CapacityTypeAndFormFactor, capacityTypeAndFormFactor => capacityTypeAndFormFactor.sdCard)
  capacityTypeAndFormFactor: CapacityTypeAndFormFactor;

  @ManyToOne(() => BusSpeed, busSpeed => busSpeed.sdCard)
  busSpeed: BusSpeed;

  @ManyToMany(() => SpeedClass)
  @JoinTable()
  speedClasses: SpeedClass[];

}