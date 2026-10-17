import { NestFactory } from '@nestjs/core';
import { RiderModule } from './rider.module.js';

async function bootstrap() {
  const app = await NestFactory.create(RiderModule);
  app.setGlobalPrefix("api");
  await app.listen(process.env.port ?? 3001);
}
await bootstrap();
