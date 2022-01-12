import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { BusSpeed } from './bus-speed.entity';
import { CapacityTypeAndFormFactor } from './capacity-type-and-form-factor.entity';
import { SpeedClass } from './speed-class.entity';

@Entity()
export class SDCard {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  img: string;

  @Column()
  storageCapacity: number;

  @Column()
  readSpeed: number;

  @Column()
  writeSpeed: number;

  @Column()
  marking: string;

  @ManyToOne(() => CapacityTypeAndFormFactor, capacityTypeAndFormFactor => capacityTypeAndFormFactor.sdCard)
  capacityTypeAndFormFactor: CapacityTypeAndFormFactor;

  @ManyToOne(() => BusSpeed, busSpeed => busSpeed.sdCard)
  busSpeed: BusSpeed;

  // @ManyToOne(() => SpeedClass, speedClass => speedClass.sdCard)
  // speedClass: SpeedClass;

  @ManyToMany(() => SpeedClass)
  @JoinTable()
  speedClasses: SpeedClass[];

}