import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BusSpeedController } from './controllers/bus-speed.controller';
import { CapacityTypeAndFormFactorController } from './controllers/capacity-type-and-form-factor.controller';
import { SDCardController } from './controllers/sd-card.controller';
import { SpeedClassController } from './controllers/speed-class.controller';
import { BusSpeed } from './entities/bus-speed.entity';
import { CapacityTypeAndFormFactor } from './entities/capacity-type-and-form-factor.entity';
import { SDCard } from './entities/sd-card.entity';
import { SpeedClass } from './entities/speed-class.entity';
import { BusSpeedService } from './services/bus-speed.service';
import { CapacityTypeAndFormFactorService } from './services/capacity-type-and-form-factor.service';
import { SDCardService } from './services/sd-card.service';
import { SpeedClassService } from './services/speed-class.service';

@Module({
  imports: [TypeOrmModule.forFeature([SDCard, BusSpeed, CapacityTypeAndFormFactor, SpeedClass])],
  controllers: [SDCardController, BusSpeedController, CapacityTypeAndFormFactorController, SpeedClassController],
  providers: [SDCardService, BusSpeedService, CapacityTypeAndFormFactorService, SpeedClassService],
})
export class SDCardModule {}
