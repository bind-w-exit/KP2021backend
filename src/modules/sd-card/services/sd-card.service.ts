import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SDCard } from '../entities/sd-card.entity';

@Injectable()
export class SDCardsService {
  constructor(
    @InjectRepository(SDCard)
    private sdCardsRepository: Repository<SDCard>,
  ) {}

  findAll(): Promise<SDCard[]> {
    return this.sdCardsRepository.find();
  }

  findOne(id: string): Promise<SDCard> {
    return this.sdCardsRepository.findOne(id);
  }

  save(sdCard: SDCard): Promise<SDCard> {
    return this.sdCardsRepository.save(sdCard);
  }

  async remove(id: string): Promise<void> {
    await this.sdCardsRepository.delete(id);
  }
}