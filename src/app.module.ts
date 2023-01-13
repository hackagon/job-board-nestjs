import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoModule } from './mongo/mongo.module';

@Module({
  imports: [MongoModule],
  controllers: [AppController], // *.route.ts GET POST PUT DELETE
  providers: [AppService], // *.service.ts
})
export class AppModule { }
