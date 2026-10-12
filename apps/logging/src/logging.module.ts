import { Module } from '@nestjs/common';
import { LoggingController } from './logging.controller.js';
import { LoggingService } from './logging.service.js';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('apps/logging-service')],
  controllers: [LoggingController],
  providers: [LoggingService],
})
export class LoggingModule {}
