import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';


@Entity()
export class SpeedClass {

  @ApiProperty({
    description: 'Speed class id',
    example: 1
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'Speed class name',
    example: 'C10'
  })
  @Column({
    nullable: false
  })
  name: string;

  @ApiProperty({
    description: 'Speed class description',
    example: 'Speed Class ratings 2, 4, and 6 assert that the card supports the respective number of megabytes per second as a minimum sustained write speed for a card in a fragmented state.'
  })
  @Column({
    nullable: true
  })
  description: string;

  @ApiProperty({
    description: 'Speed class logo',
    example: 'src:/speed-class-logo.svg'
  })
  @Column({
    nullable: true
  })
  logo: string;

  @ApiProperty({
    description: 'Minimum write speed (MB/s)',
    example: 2
  })
  @Column({
    nullable: false
  })
  minWriteSpeed: number;

}