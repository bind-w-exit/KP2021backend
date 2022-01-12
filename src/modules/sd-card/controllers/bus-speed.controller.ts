import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BusSpeed } from '../entities/bus-speed.entity';
import { BusSpeedService } from '../services/bus-speed.service';


@Controller('rest/BusSpeed')
export class BusSpeedController {
  constructor(private readonly busSpeedService: BusSpeedService) {
  }
  @Get()
  getAllAction(): Promise<BusSpeed[]> {
    return this.busSpeedService.findAll();
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<BusSpeed> {
    return this.busSpeedService.findOne(id);
  }

  @Post()
  saveAction(@Body() busSpeed: BusSpeed): Promise<BusSpeed>{
    delete busSpeed.id;
    console.log(busSpeed);
    return this.busSpeedService.save(busSpeed);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.busSpeedService.remove(id);
  }
}
