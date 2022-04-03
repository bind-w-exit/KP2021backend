import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CapacityTypeAndFormFactorController } from './controllers/capacity-type-and-form-factor.controller';
import { SDCardController } from './controllers/sd-card.controller';
import { SpeedClassController } from './controllers/speed-class.controller';
import { CapacityTypeAndFormFactor } from './entities/capacity-type-and-form-factor.entity';
import { SDCard } from './entities/sd-card.entity';
import { SpeedClass } from './entities/speed-class.entity';
import { CapacityTypeAndFormFactorService } from './services/capacity-type-and-form-factor.service';
import { SDCardService } from './services/sd-card.service';
import { SpeedClassService } from './services/speed-class.service';

@Module({
  imports: [TypeOrmModule.forFeature([SDCard, CapacityTypeAndFormFactor, SpeedClass])],
  controllers: [SDCardController, CapacityTypeAndFormFactorController, SpeedClassController],
  providers: [SDCardService, CapacityTypeAndFormFactorService, SpeedClassService],
})
export class SDCardModule {}
