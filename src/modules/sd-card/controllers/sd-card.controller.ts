import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SDCard } from '../entities/sd-card.entity';
import { SDCardsService } from '../services/sd-card.service';


@Controller('rest/SDCard')
export class SDCardController {
  constructor(private readonly sdCardService: SDCardsService) {
  }
  @Get()
  getAllAction(): Promise<SDCard[]> {
    return this.sdCardService.findAll();
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<SDCard> {
    return this.sdCardService.findOne(id);
  }

  // @Post()
  // saveAction(@Body() sdCardDto: SDCard): Promise<SDCard>{
  //   // delete sdCard.id;
  //   const sdCard = new SDCard();
  //   sdCard.id = sdCardDto.id;
  //   sdCard.name = sdCardDto.name;
  //   sdCard.description = sdCardDto.description;
  //   sdCard.img = sdCardDto.img;
  //   sdCard.width = sdCardDto.width;
  //   sdCard.height = sdCardDto.height;
  //   sdCard.thickness = sdCardDto.thickness;
  //   sdCard.pins = sdCardDto.pins;
  //   console.log(sdCard);
  //   return this.sdCardService.save(sdCard);
  // }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.sdCardService.remove(id);
  }
}
