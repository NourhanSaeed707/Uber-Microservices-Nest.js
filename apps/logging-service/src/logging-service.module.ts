import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller.js';
import { LoggingServiceService } from './logging-service.service.js';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Log', schema: LogSchema }])],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
