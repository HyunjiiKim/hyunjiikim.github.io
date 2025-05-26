import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const isProd = process.env.NODE_ENV === 'production';
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
