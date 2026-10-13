import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller.js';
import { RiderCoordinatesService } from './rider-coordinates.service.js';

@Module({
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
  exports: [RiderCoordinatesService],
})
export class RiderCoordinatesModule {}