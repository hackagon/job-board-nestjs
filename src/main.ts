import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
import dotenv from 'dotenv'
import path from 'path'

async function bootstrap() {
  dotenv.config({ path: path.join(__dirname + '/../.env') })
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api')

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors: ValidationError[] = []) => {
        return new BadRequestException(validationErrors);
      },
      validationError: {
        target: false,
      },
    }),
  );

  await app.listen(4000);
}
bootstrap();
