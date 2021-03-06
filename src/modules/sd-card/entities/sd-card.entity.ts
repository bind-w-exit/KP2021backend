import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { CapacityTypeAndFormFactor } from './capacity-type-and-form-factor.entity';
import { SpeedClass } from './speed-class.entity';

@Entity()
export class SDCard {

  @ApiProperty({
    description: 'SD card id',
    example: 1
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'SD card name',
    example: 'EVO Plus'
  })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({
    description: 'SD card brand name',
    example: 'Samsung'
  })
  @Column({
    nullable: false
  })
  brand: string;

  @ApiProperty({
    description: 'SD card image',
    example: 'src://samsung.png'
  })
  @Column({
    nullable: false
  })
  img: string;

  @ApiProperty({
    description: 'SD card storage capacity (GB)',
    example: 32
  })
  @Column({
    nullable: false
  })
  storageCapacity: number;

  @ApiProperty({
    description: 'SD card read speed (MB/s)',
    example: 100
  })
  @Column({
    nullable: true
  })
  readSpeed: number;

  @ApiProperty({
    description: 'SD card write speed (MB/s)',
    example: 90
  })
  @Column({
    nullable: true
  })
  writeSpeed: number;

  @ApiProperty({
    description: 'SD card marking',
    example: 'MB-MC256GA'
  })
  @Column({
    nullable: true
  })
  marking: string;

  @ManyToOne(() => CapacityTypeAndFormFactor, capacityTypeAndFormFactor => capacityTypeAndFormFactor.sdCard)
  capacityTypeAndFormFactor: CapacityTypeAndFormFactor;

  @ManyToMany(() => SpeedClass)
  @JoinTable()
  speedClasses: SpeedClass[];

}