import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BusSpeed } from '../entities/bus-speed.entity';

@Injectable()
export class BusSpeedService {
  constructor(
    @InjectRepository(BusSpeed)
    private busSpeedRepository: Repository<BusSpeed>,
  ) {}

  findAll(): Promise<BusSpeed[]> {
    return this.busSpeedRepository.find();
  }

  findOne(id: string): Promise<BusSpeed> {
    return this.busSpeedRepository.findOne(id);
  }

  save(busSpeed: BusSpeed): Promise<BusSpeed> {
    return this.busSpeedRepository.save(busSpeed);
  }

  async remove(id: string): Promise<void> {
    await this.busSpeedRepository.delete(id);
  }
}