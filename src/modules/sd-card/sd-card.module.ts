import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SDCardController } from './controllers/sd-card.controller';
import { SDCard } from './entities/sd-card.entity';
import { SDCardsService } from './services/sd-card.service';

@Module({
  imports: [TypeOrmModule.forFeature([SDCard])],
  controllers: [SDCardController],
  providers: [SDCardsService],
})
export class SDCardModule {}
