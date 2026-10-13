import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller.js';
import { LoggingService } from './logging.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module.js';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/uber'), RiderCoordinatesModule],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
