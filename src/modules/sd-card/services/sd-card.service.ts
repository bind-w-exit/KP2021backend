import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { endianness } from 'os';
import { Repository } from 'typeorm';
import { CreateSDCardDto } from '../dto/create-sd-card.dto';
import { UpdateSDCardDto } from '../dto/update-sd-card.dto';
import { SDCard } from '../entities/sd-card.entity';

@Injectable()
export class SDCardService {
  
  constructor(
    @InjectRepository(SDCard)
    private sdCardRepository: Repository<SDCard>,
  ) {}

  async findAll(): Promise<SDCard[]> {
    return this.sdCardRepository.find();
  }

  async findOne(id: string): Promise<SDCard> {
    return this.sdCardRepository.findOne(id);
  }

  async create(createSDCardDto: CreateSDCardDto): Promise<SDCard> {
    return this.sdCardRepository.save(createSDCardDto);
  }

  async update(id: string, updateSDcardDto: UpdateSDCardDto): Promise<SDCard> {
    const entity = await this.sdCardRepository.findOne(id)
    if (entity) {
      entity.name = updateSDcardDto.name;
      entity.brand = updateSDcardDto.brand;
      entity.img = updateSDcardDto.img;
      entity.storageCapacity = updateSDcardDto.storageCapacity;
      entity.readSpeed = updateSDcardDto.readSpeed;
      entity.writeSpeed = updateSDcardDto.writeSpeed;
      entity.marking = updateSDcardDto.marking;
      entity.capacityTypeAndFormFactor = updateSDcardDto.capacityTypeAndFormFactor;
      entity.speedClasses = updateSDcardDto.speedClasses;

      return await this.sdCardRepository.save(entity);
    }
  }

  async remove(id: string): Promise<void> {
    await this.sdCardRepository.delete(id);
  }
}