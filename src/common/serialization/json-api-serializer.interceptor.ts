import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Query,
} from '@nestjs/common';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import _ from 'lodash';
import 'reflect-metadata';
import { JsonApiService } from './json-api.service';

@Injectable()
export class MongooseSerializerInterceptor implements NestInterceptor {
  constructor(private jsonApiService: JsonApiService) { }

  private async serializeResponse(response: any, ctx?: ExecutionContext) {
    if (response.meta) {
      return {
        meta: response.meta,
        data: _.map(response.data, item =>
          this.jsonApiService.serializeResource(item, ctx),
        ),
      };
    }

    if (_.isArray(response))
      return this.jsonApiService.serializeCollection(response, ctx);
    return this.jsonApiService.serializeResource(response, ctx);
  }

  intercept(ctx: ExecutionContext, next: CallHandler<any>): Observable<any> {
    return next.handle().pipe(
      switchMap(response => {
        if (!response) return of(response);

        return from(this.serializeResponse(response, ctx));
      }),
    );
  }
}
