import { ApiProperty } from "@nestjs/swagger";

export class CreateSpeedClassDto {

  @ApiProperty({
    description: 'Speed class id',
    example: 1
  })
  id: number;

  @ApiProperty({
    description: 'Speed class name',
    example: 'C10'
  })
  name: string;

  @ApiProperty({
    description: 'Speed class description',
    example: 'Speed Class ratings 2, 4, and 6 assert that the card supports the respective number of megabytes per second as a minimum sustained write speed for a card in a fragmented state.'
  })
  description: string;

  @ApiProperty({
    description: 'Speed class logo',
    example: 'src:/speed-class-logo.svg'
  })
  logo: string;

  @ApiProperty({
    description: 'Minimum write speed (MB/s)',
    example: 2
  })
  minWriteSpeed: number;

}