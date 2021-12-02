import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapacityStandart } from './entities/capacity-standards.entity';
import { SDCard } from './entities/sd-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SDCard, CapacityStandart])],
  controllers: [],
  providers: [],
})
export class SDCardModule {}
