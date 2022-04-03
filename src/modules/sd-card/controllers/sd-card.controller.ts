import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSDCardDto } from '../dto/create-sd-card.dto';
import { UpdateSDCardDto } from '../dto/update-sd-card.dto';
import { SDCard } from '../entities/sd-card.entity';
import { SDCardService } from '../services/sd-card.service';

@ApiTags('SDCard')
@Controller('rest/SDCard')
export class SDCardController {

  constructor(private readonly sdCardService: SDCardService) {}

  @ApiResponse({ status: 200, type: [SDCard]})
  @Get()
  getAllAction(): Promise<SDCard[]> {
    return this.sdCardService.findAll();
  }

  @ApiResponse({ status: 200, type: SDCard})
  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<SDCard> {
    return this.sdCardService.findOne(id);
  }

  @ApiResponse({ status: 201, description: 'SD card successfully created', type: SDCard})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post()
  createAction(@Body() createSDCardDto: CreateSDCardDto): Promise<SDCard>{
    console.log(createSDCardDto);
    return this.sdCardService.create(createSDCardDto);
  }

  @ApiResponse({ status: 200, description: 'SD card successfully updated', type: SDCard})
  @Put(':id')
  updateAction(@Param('id', ParseIntPipe) id: string, @Body() updateSDCardDto: UpdateSDCardDto) {
    return this.sdCardService.update(id, updateSDCardDto);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.sdCardService.remove(id);
  }
}
