import { NestFactory } from '@nestjs/core';

import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const host = configService.get<string>('API_HOST');
  const port = configService.get<number>('API_PORT');

  await app.listen(port || 3000).then(() => {
    console.log(`Application is started on ${host}:${port}`);
  });
}
bootstrap();
