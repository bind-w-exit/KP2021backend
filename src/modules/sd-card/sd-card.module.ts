import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapacityStandardController } from './controllers/capacity-standard.controller';
import { SDCardController } from './controllers/sd-card.controller';
import { CapacityStandard } from './entities/capacity-standards.entity';
import { SDCard } from './entities/sd-card.entity';
import { CapacityStandardsService } from './services/capacity-standards.service';
import { SDCardsService } from './services/sd-card.service';

@Module({
  imports: [TypeOrmModule.forFeature([SDCard, CapacityStandard])],
  controllers: [SDCardController, CapacityStandardController],
  providers: [SDCardsService, CapacityStandardsService],
})
export class SDCardModule {}
