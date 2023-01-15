import { Module } from '@nestjs/common';
import { JsonApiService } from './json-api.service';

@Module({
  imports: [],
  providers: [JsonApiService],
  exports: [JsonApiService],
})
export class SerializationModule { }
