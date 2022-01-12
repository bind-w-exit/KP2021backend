import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CapacityTypeAndFormFactor } from '../entities/capacity-type-and-form-factor.entity';
import { CapacityTypeAndFormFactorService } from '../services/capacity-type-and-form-factor.service';


@Controller('rest/CapacityTypeAndFormFactor')
export class CapacityTypeAndFormFactorController {
  constructor(private readonly capacityTypeAndFormFactorService: CapacityTypeAndFormFactorService) {
  }
  @Get()
  getAllAction(): Promise<CapacityTypeAndFormFactor[]> {
    return this.capacityTypeAndFormFactorService.findAll();
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<CapacityTypeAndFormFactor> {
    return this.capacityTypeAndFormFactorService.findOne(id);
  }

  @Post()
  saveAction(@Body() capacityTypeAndFormFactor: CapacityTypeAndFormFactor): Promise<CapacityTypeAndFormFactor>{
    delete capacityTypeAndFormFactor.id;
    console.log(capacityTypeAndFormFactor);
    return this.capacityTypeAndFormFactorService.save(capacityTypeAndFormFactor);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.capacityTypeAndFormFactorService.remove(id);
  }
}
