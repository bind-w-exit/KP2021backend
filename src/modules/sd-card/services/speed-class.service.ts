import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSpeedClassDto } from '../dto/create-speed-class.dto';
import { UpdateSpeedClassDto } from '../dto/update-speed-class-dto';
import { SpeedClass } from '../entities/speed-class.entity';

@Injectable()
export class SpeedClassService {
  
  constructor(
    @InjectRepository(SpeedClass)
    private speedClassRepository: Repository<SpeedClass>,
  ) {}

  async findAll(): Promise<SpeedClass[]> {
    return this.speedClassRepository.find();
  }

  async findOne(id: string): Promise<SpeedClass> {
    return this.speedClassRepository.findOne(id);
  }

  async create(createSpeedClassDto: CreateSpeedClassDto): Promise<SpeedClass> {
    return this.speedClassRepository.save(createSpeedClassDto);
  }

  async update(id: string, updateSpeedClassDto: UpdateSpeedClassDto) {
    const entity = await this.speedClassRepository.findOne(id)
    if (entity) {
      entity.name = updateSpeedClassDto.name;
      entity.description = updateSpeedClassDto.description;
      entity.logo = updateSpeedClassDto.logo;
      entity.minWriteSpeed = updateSpeedClassDto.minWriteSpeed;

      return await this.speedClassRepository.save(entity);
    }
  }

  async remove(id: string): Promise<void> {
    await this.speedClassRepository.delete(id);
  }
}