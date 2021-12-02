import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SDCard } from '../entities/sd-card.entity';


@Controller('rest/SDCard')
export class SDCardController {

  @Get()
  getAllAction(): string {
    return "Return all SD cards";
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): string {
    return "Return one SD card #" + id;
  }

  @Post()
  createAction(@Body() sdCard: SDCard): SDCard{
    delete sdCard.id;
    console.log(sdCard);
    return sdCard;
  }

  // @Put()
  // saveAction(@Body() sdCard: SDCard): SDCard{
  //   console.log("Shearch by id", sdCard.id);
  //   console.log(sdCard, 'save');
  //   return sdCard;
  // }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string{
    return "Delete SD card #" + id;
  }
}
