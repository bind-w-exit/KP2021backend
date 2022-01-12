import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SDCard } from '../entities/sd-card.entity';
import { SDCardService } from '../services/sd-card.service';


@Controller('rest/SDCard')
export class SDCardController {
  constructor(private readonly sdCardService: SDCardService) {
  }
  @Get()
  getAllAction(): Promise<SDCard[]> {
    return this.sdCardService.findAll();
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<SDCard> {
    return this.sdCardService.findOne(id);
  }

  @Post()
  saveAction(@Body() sdCard: SDCard): Promise<SDCard>{
    delete sdCard.id;
    console.log(sdCard);
    return this.sdCardService.save(sdCard);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.sdCardService.remove(id);
  }
}
