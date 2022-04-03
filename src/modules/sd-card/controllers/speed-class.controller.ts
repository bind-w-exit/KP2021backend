import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateSpeedClassDto } from '../dto/create-speed-class.dto';
import { UpdateSpeedClassDto } from '../dto/update-speed-class-dto';
import { SpeedClass } from '../entities/speed-class.entity';
import { SpeedClassService } from '../services/speed-class.service';

@ApiTags('SpeedClass')
@Controller('rest/SpeedClass')
export class SpeedClassController {
  
  constructor(private readonly speedClassService: SpeedClassService) {}

  @ApiResponse({ status: 200, type: [SpeedClass]})
  @Get()
  getAllAction(): Promise<SpeedClass[]> {
    return this.speedClassService.findAll();
  }

  @ApiResponse({ status: 200, type: SpeedClass})
  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<SpeedClass> {
    return this.speedClassService.findOne(id);
  }

  @ApiResponse({ status: 201, description: 'Speed class successfully created', type: SpeedClass})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @Post()
  createAction(@Body() createSpeedClassDto: CreateSpeedClassDto): Promise<SpeedClass>{
    console.log(createSpeedClassDto);
    return this.speedClassService.create(createSpeedClassDto);
  }

  @ApiResponse({ status: 200, description: 'Speed class successfully updated', type: SpeedClass})
  @Put(':id')
  updateAction(@Param('id', ParseIntPipe) id: string, @Body() updateSpeedClassDto: UpdateSpeedClassDto) {
    return this.speedClassService.update(id, updateSpeedClassDto);
  }


  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.speedClassService.remove(id);
  }
}
