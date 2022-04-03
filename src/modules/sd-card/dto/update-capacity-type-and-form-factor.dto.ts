import { ApiProperty } from '@nestjs/swagger';
import { SDCard } from '../entities/sd-card.entity';

export class UpdateCapacityTypeAndFormFactorDto {

  @ApiProperty({
    description: 'CT&FF name',
    example: 'SDHC'
  })
  name: string;

  @ApiProperty({
    description: 'CT&FF description',
    example: 'The SDHC format, announced in January 2006, brought improvements such as 32 GB storage capacity and mandatory support for FAT32 file system.'
  })
  description: string;

  @ApiProperty({
    description: 'CT&FF logo',
    example: 'src:/sdhc-logo.svg'
  })
  logo: string;

  @ApiProperty({
    description: 'CT&FF width (mm)',
    example: 32
  })
  width: number;

  @ApiProperty({
    description: 'CT&FF length (mm)',
    example: 24
  })
  length: number;

  @ApiProperty({
    description: 'CT&FF thicknes (mm)',
    example: 2.1
  })
  thicknes: number;

  @ApiProperty({
    description: 'CT&FF minimal capacity (GB)',
    example: 2
  })
  minCapacity: number;

  @ApiProperty({
    description: 'SD maximum capacity (GB)',
    example: 32
  })
  maxCapacity: number;

  @ApiProperty({
    description: 'CT&FF typical file system',
    example: 'FAT32'
  })
  typicalFS: string;

  @ApiProperty({
    description: 'SD cards with this CT&FF',
  })
  sdCard: SDCard[];

}