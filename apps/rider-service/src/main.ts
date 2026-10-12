import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(RiderServiceModule);
  await app.listen(process.env.port ?? 3001);
}
await bootstrap();
