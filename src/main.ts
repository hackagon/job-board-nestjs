import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';
import dotenv from 'dotenv'
import path from 'path'
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  dotenv.config({ path: path.join(__dirname + '/../.env') })
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT')

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

  try {
    await app.listen(port);
    console.log("App is running:");
    console.table({
      port
    })

  } catch (error) {
    console.log(error);
  }
}
bootstrap();
