import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CapacityStandard } from '../entities/capacity-standards.entity';
import { CapacityStandardsService } from '../services/capacity-standards.service';



@Controller('rest/CapacityStandard')
export class CapacityStandardController {
  constructor(private readonly capacityStandardsService: CapacityStandardsService) {
  }
  @Get()
  getAllAction(): Promise<CapacityStandard[]> {
    return this.capacityStandardsService.findAll();
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<CapacityStandard> {
    return this.capacityStandardsService.findOne(id);
  }

  @Post()
  saveAction(@Body() capacityStandardDto: CapacityStandard): Promise<CapacityStandard>{
    // delete sdCard.id;
    const capacityStandard = new CapacityStandard();
    capacityStandard.id = capacityStandardDto.id;
    capacityStandard.name = capacityStandardDto.name;
    capacityStandard.description = capacityStandardDto.description;
    capacityStandard.logo = capacityStandardDto.logo;
    capacityStandard.min_capacity = capacityStandardDto.min_capacity;
    capacityStandard.max_capacity = capacityStandardDto.max_capacity;
    capacityStandard.typical_fs = capacityStandardDto.typical_fs;
    console.log(capacityStandard);
    return this.capacityStandardsService.save(capacityStandard);
  }

  // @Put()
  // saveAction(@Body() sdCard: SDCard): SDCard{
  //   console.log("Shearch by id", sdCard.id);
  //   console.log(sdCard, 'save');
  //   return sdCard;
  // }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.capacityStandardsService.remove(id);
  }
}
