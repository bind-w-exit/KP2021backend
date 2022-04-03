import { ApiProperty } from '@nestjs/swagger';
import { CapacityTypeAndFormFactor } from '../entities/capacity-type-and-form-factor.entity';
import { SpeedClass } from '../entities/speed-class.entity';

export class CreateSDCardDto {
  
  @ApiProperty({
    description: 'SD card id',
    example: 1
  })
  id: number;

  @ApiProperty({
    description: 'SD card name',
    example: 'EVO Plus'
  })
  name: string;

  @ApiProperty({
    description: 'SD card brand name',
    example: 'Samsung'
  })
  brand: string;

  @ApiProperty({
    description: 'SD card image',
    example: 'src:/samsung.png'
  })
  img: string;

  @ApiProperty({
    description: 'SD card storage capacity (GB)',
    example: 32
  })
  storageCapacity: number;

  @ApiProperty({
    description: 'SD card read speed (MB/s)',
    example: 100
  })
  readSpeed: number;

  @ApiProperty({
    description: 'SD card write speed (MB/s)',
    example: 90
  })
  writeSpeed: number;

  @ApiProperty({
    description: 'SD card marking',
    example: 'MB-MC256GA'
  })
  marking: string;

  @ApiProperty({
    description: 'capacityTypeAndFormFactor',
  }) 
  capacityTypeAndFormFactor: CapacityTypeAndFormFactor;

  @ApiProperty({
    description: 'SD card speed classes',
  })
  speedClasses: SpeedClass[];

}