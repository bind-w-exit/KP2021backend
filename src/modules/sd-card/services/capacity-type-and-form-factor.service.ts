import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCapacityTypeAndFormFactorDto } from '../dto/create-capacity-type-and-form-factor.dto';
import { UpdateCapacityTypeAndFormFactorDto } from '../dto/update-capacity-type-and-form-factor.dto';
import { CapacityTypeAndFormFactor } from '../entities/capacity-type-and-form-factor.entity';

@Injectable()
export class CapacityTypeAndFormFactorService {

  constructor(
    @InjectRepository(CapacityTypeAndFormFactor)
    private capacityTypeAndFormFactorRepository: Repository<CapacityTypeAndFormFactor>,
  ) {}

  async findAll(): Promise<CapacityTypeAndFormFactor[]> {
    return this.capacityTypeAndFormFactorRepository.find();
  }

  async findOne(id: string): Promise<CapacityTypeAndFormFactor> {
    return this.capacityTypeAndFormFactorRepository.findOne(id);
  }

  async create(createCapacityTypeAndFormFactorDto: CreateCapacityTypeAndFormFactorDto): Promise<CapacityTypeAndFormFactor> {
    return this.capacityTypeAndFormFactorRepository.save(createCapacityTypeAndFormFactorDto);
  }

  async update(id: string, updateCapacityTypeAndFormFactorDto: UpdateCapacityTypeAndFormFactorDto): Promise<CapacityTypeAndFormFactor> {
    const entity = await this.capacityTypeAndFormFactorRepository.findOne(id)
    if (entity) {
      entity.name = updateCapacityTypeAndFormFactorDto.name;
      entity.description = updateCapacityTypeAndFormFactorDto.description;
      entity.logo = updateCapacityTypeAndFormFactorDto.logo;
      entity.width = updateCapacityTypeAndFormFactorDto.width;
      entity.length = updateCapacityTypeAndFormFactorDto.length;
      entity.thicknes = updateCapacityTypeAndFormFactorDto.thicknes;
      entity.minCapacity = updateCapacityTypeAndFormFactorDto.minCapacity;
      entity.maxCapacity = updateCapacityTypeAndFormFactorDto.maxCapacity;
      entity.typicalFS = updateCapacityTypeAndFormFactorDto.typicalFS;
      entity.sdCard = updateCapacityTypeAndFormFactorDto.sdCard;

      return await this.capacityTypeAndFormFactorRepository.save(entity);
    }
  }

  async remove(id: string): Promise<void> {
    await this.capacityTypeAndFormFactorRepository.delete(id);
  }
}