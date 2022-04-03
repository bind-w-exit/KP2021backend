import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCapacityTypeAndFormFactorDto } from '../dto/create-capacity-type-and-form-factor.dto';
import { UpdateCapacityTypeAndFormFactorDto } from '../dto/update-capacity-type-and-form-factor.dto';
import { CapacityTypeAndFormFactor } from '../entities/capacity-type-and-form-factor.entity';
import { CapacityTypeAndFormFactorService } from '../services/capacity-type-and-form-factor.service';

@ApiTags('Capacity type and form factor')
@Controller('rest/CapacityTypeAndFormFactor')
export class CapacityTypeAndFormFactorController {

  constructor(private readonly capacityTypeAndFormFactorService: CapacityTypeAndFormFactorService) {}

  @ApiResponse({ status: 200, type: [CapacityTypeAndFormFactor]})
  @Get()
  getAllAction(): Promise<CapacityTypeAndFormFactor[]> {
    return this.capacityTypeAndFormFactorService.findAll();
  }

  @ApiResponse({ status: 200, type: CapacityTypeAndFormFactor})
  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<CapacityTypeAndFormFactor> {
    return this.capacityTypeAndFormFactorService.findOne(id);
  }

  @ApiResponse({ status: 201, description: 'Capacity type and form factor successfully created', type: CapacityTypeAndFormFactor})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post()
  createAction(@Body() createCapacityTypeAndFormFactorDto: CreateCapacityTypeAndFormFactorDto): Promise<CapacityTypeAndFormFactor>{
    console.log(createCapacityTypeAndFormFactorDto);
    return this.capacityTypeAndFormFactorService.create(createCapacityTypeAndFormFactorDto);
  }

  @ApiResponse({ status: 200, description: 'Capacity type and form factor successfully updated', type: CapacityTypeAndFormFactor})
  @Put(':id')
  updateAction(@Param('id', ParseIntPipe) id: string, @Body() updateCapacityTypeAndFormFactorDto: UpdateCapacityTypeAndFormFactorDto) {
    return this.capacityTypeAndFormFactorService.update(id, updateCapacityTypeAndFormFactorDto);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.capacityTypeAndFormFactorService.remove(id);
  }
}
