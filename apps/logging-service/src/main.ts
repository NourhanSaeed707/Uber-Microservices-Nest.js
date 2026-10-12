import { NestFactory } from '@nestjs/core';
import { LoggingServiceModule } from './logging-service.module.js';

async function bootstrap() {
  const app = await NestFactory.create(LoggingServiceModule);
  await app.listen(process.env.port ?? 3002);
}
await bootstrap();
