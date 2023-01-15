import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './mongo/mongo.module';
import path from 'path';
import joi from 'joi';

console.log(__dirname);

const envFilePath = path.join(__dirname, '..', '.env')

@Module({
  imports: [
    MongoModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        PORT: joi.number().default(4000),
        JWT_SECRET_KEY: joi.string().required(),
        MONGO_URI: joi.string().required(),
      }),
      envFilePath
    })
  ],
  controllers: [AppController], // *.route.ts GET POST PUT DELETE
  providers: [AppService], // *.service.ts
})
export class AppModule { }
