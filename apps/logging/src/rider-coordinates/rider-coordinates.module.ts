import { Module } from '@nestjs/common';
import { RiderCoordinatesController } from './rider-coordinates.controller.js';
import { RiderCoordinatesService } from './rider-coordinates.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinate, RiderCoordinateSchema } from './schemas/rider-coordinates.schema.js';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [MongooseModule.forFeature([
    { name: RiderCoordinate.name, schema: RiderCoordinateSchema }
  ]),
  ClientsModule.register([
    { name: "RIDER_SERVICE", transport: Transport.TCP }
  ])
  ],
  controllers: [RiderCoordinatesController],
  providers: [RiderCoordinatesService],
  exports: [RiderCoordinatesService],
})
export class RiderCoordinatesModule { }