import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CapacityTypeAndFormFactor } from '../entities/capacity-type-and-form-factor.entity';

@Injectable()
export class CapacityTypeAndFormFactorService {
  constructor(
    @InjectRepository(CapacityTypeAndFormFactor)
    private capacityTypeAndFormFactorRepository: Repository<CapacityTypeAndFormFactor>,
  ) {}

  findAll(): Promise<CapacityTypeAndFormFactor[]> {
    return this.capacityTypeAndFormFactorRepository.find();
  }

  findOne(id: string): Promise<CapacityTypeAndFormFactor> {
    return this.capacityTypeAndFormFactorRepository.findOne(id);
  }

  save(capacityTypeAndFormFactor: CapacityTypeAndFormFactor): Promise<CapacityTypeAndFormFactor> {
    return this.capacityTypeAndFormFactorRepository.save(capacityTypeAndFormFactor);
  }

  async remove(id: string): Promise<void> {
    await this.capacityTypeAndFormFactorRepository.delete(id);
  }
}