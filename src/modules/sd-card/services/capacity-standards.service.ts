import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CapacityStandard} from '../entities/capacity-standards.entity';

@Injectable()
export class CapacityStandardsService {
  constructor(
    @InjectRepository(CapacityStandard)
    private capacityStandardsRepository: Repository<CapacityStandard>,
  ) {}

  findAll(): Promise<CapacityStandard[]> {
    return this.capacityStandardsRepository.find();
  }

  findOne(id: string): Promise<CapacityStandard> {
    return this.capacityStandardsRepository.findOne(id);
  }

  save(capacityStandard: CapacityStandard): Promise<CapacityStandard> {
    return this.capacityStandardsRepository.save(capacityStandard);
  }

  async remove(id: string): Promise<void> {
    await this.capacityStandardsRepository.delete(id);
  }
}