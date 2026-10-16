import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller.js';
import { LoggingService } from './logging.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module.js';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017/logs_db?authSource=admin',
      {
        autoCreate: true,
        connectionFactory: (connection) => {
          console.log('MongoDB database:', connection.name);
          console.log('MongoDB host:', connection.host);
          console.log('MongoDB port:', connection.port);
          return connection;
        },

      },

    ),
    RiderCoordinatesModule],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule { }
