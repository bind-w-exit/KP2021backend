import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SDCardModule } from './modules/sd-card/sd-card.module';

@Module({
  imports: [TypeOrmModule.forRoot(), SDCardModule]
})
export class AppModule {}
