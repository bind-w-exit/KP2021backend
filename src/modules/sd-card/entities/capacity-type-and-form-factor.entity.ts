import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SDCard } from './sd-card.entity';

@Entity()
export class CapacityTypeAndFormFactor {

  @ApiProperty({
    description: 'CT&FF id',
    example: 1
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'CT&FF name',
    example: 'SDHC'
  })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({
    description: 'CT&FF description',
    example: 'The SDHC format, announced in January 2006, brought improvements such as 32 GB storage capacity and mandatory support for FAT32 file system.'
  })
  @Column({
    nullable: true
  })
  description: string;

  @ApiProperty({
    description: 'CT&FF logo',
    example: 'src:/sdhc-logo.svg'
  })
  @Column({
    nullable: true
  })
  logo: string;

  @ApiProperty({
    description: 'CT&FF width (mm)',
    example: 32
  })
  @Column({
    type: "decimal",
    nullable: false
  })
  width: number;

  @ApiProperty({
    description: 'CT&FF length (mm)',
    example: 24
  })
  @Column({
    type: "decimal",
    nullable: false
  })
  length: number;

  @ApiProperty({
    description: 'CT&FF thicknes (mm)',
    example: 2.1
  })
  @Column({
    type: "decimal",
    nullable: false
  })
  thicknes: number;

  @ApiProperty({
    description: 'CT&FF minimal capacity (GB)',
    example: 2
  })
  @Column({
    nullable: false
  })
  minCapacity: number;

  @ApiProperty({
    description: 'SD maximum capacity (GB)',
    example: 32
  })
  @Column({
    nullable: false
  })
  maxCapacity: number;

  @ApiProperty({
    description: 'CT&FF typical file system',
    example: 'FAT32'
  })
  @Column({
    nullable: true
  })
  typicalFS: string;

  @ApiProperty({
    description: 'SD cards with this CT&FF',
  })
  @OneToMany(() => SDCard, sdCard => sdCard.capacityTypeAndFormFactor)
  sdCard: SDCard[];

}