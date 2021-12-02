import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SDCardController } from './controllers/sd-card.controller';
import { CapacityStandart } from './entities/capacity-standards.entity';
import { SDCard } from './entities/sd-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SDCard, CapacityStandart])],
  controllers: [SDCardController],
  providers: [],
})
export class SDCardModule {}
