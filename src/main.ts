import { LogLevel } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const LOG_LEVEL = ['error', 'warn', 'log', 'verbose', 'debug'].includes(
  process.env.LOG_LEVEL,
)
  ? ([process.env.LOG_LEVEL] as LogLevel[])
  : process.env.LOG_LEVEL === 'false'
  ? false
  : (['log'] as LogLevel[]);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: LOG_LEVEL,
  });
  await app.listen(3000);
}
bootstrap();
