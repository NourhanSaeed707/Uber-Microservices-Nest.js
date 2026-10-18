import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module.js';
import { MicroservicesModule } from '@nestjs/microservices/microservices-module.js';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(RiderModule);
  // app.setGlobalPrefix("api");
  // await app.listen(process.env.port ?? 3001);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderModule,
    {
      transport: Transport.TCP
    }
  )
}
await bootstrap();
