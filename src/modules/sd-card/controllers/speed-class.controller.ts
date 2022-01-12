import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SpeedClass } from '../entities/speed-class.entity';
import { SpeedClassService } from '../services/speed-class.service';


@Controller('rest/SpeedClass')
export class SpeedClassController {
  constructor(private readonly speedClassService: SpeedClassService) {
  }
  @Get()
  getAllAction(): Promise<SpeedClass[]> {
    return this.speedClassService.findAll();
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): Promise<SpeedClass> {
    return this.speedClassService.findOne(id);
  }

  @Post()
  saveAction(@Body() speedClass: SpeedClass): Promise<SpeedClass>{
    delete speedClass.id;
    console.log(speedClass);
    return this.speedClassService.save(speedClass);
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): Promise<void>{
    return this.speedClassService.remove(id);
  }
}
