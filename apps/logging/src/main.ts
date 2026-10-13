import { NestFactory } from '@nestjs/core';
import { LoggingModule } from './logging.module.js';

async function bootstrap() {
  const app = await NestFactory.create(LoggingModule);
  app.setGlobalPrefix("api");
  await app.listen(process.env.port ?? 3002);
}
await bootstrap();
