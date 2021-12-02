import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SDCardModule } from './modules/sd-card/sd-card.module';

@Module({
  imports: [TypeOrmModule.forRoot(), SDCardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
