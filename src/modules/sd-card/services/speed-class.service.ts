import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpeedClass } from '../entities/speed-class.entity';

@Injectable()
export class SpeedClassService {
  constructor(
    @InjectRepository(SpeedClass)
    private speedClassRepository: Repository<SpeedClass>,
  ) {}

  findAll(): Promise<SpeedClass[]> {
    return this.speedClassRepository.find();
  }

  findOne(id: string): Promise<SpeedClass> {
    return this.speedClassRepository.findOne(id);
  }

  save(speedClass: SpeedClass): Promise<SpeedClass> {
    return this.speedClassRepository.save(speedClass);
  }

  async remove(id: string): Promise<void> {
    await this.speedClassRepository.delete(id);
  }
}