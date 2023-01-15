import { Injectable, ExecutionContext } from '@nestjs/common';
import {
  JsonApiResource,
  JsonApiCollection,
  SerializeOptions,
} from './json-api.interface';
import _ from 'lodash';

@Injectable()
export class JsonApiService {
  getOmittedProperties(instance: any, ctx: ExecutionContext) {
    const [request] = ctx.getArgs();

    return _.chain(instance)
      .keys()
      .map(key => {
        if (
          _.includes(_.toLower(key), 'id') &&
          _.isObject(instance[key]) &&
          !_.get(request, `query[${key}]`)
        )
          return key;
      })
      .filter()
      .value();
  }

  serializeResource(
    response: any,
    ctx?: ExecutionContext,
    options?: SerializeOptions,
  ): JsonApiResource {
    const instance = response._doc || response;
    const omittedAttributes = [...['createdAt', 'updatedAt', '__v']];

    return {
      _id: instance._id,
      type: _.get(response, '__proto__.constructor.modelName'),
      attributes: _.omit(instance, omittedAttributes),
      meta: {
        createdAt: _.get(instance, 'createdAt'),
        updatedAt: _.get(instance, 'updatedAt'),
      },
    };
  }

  serializeCollection(
    response: Array<any>,
    ctx: any,
    options?: SerializeOptions,
  ) {
    const [request] = ctx.getArgs();
    const data = _.map(response, instance =>
      _.omit(this.serializeResource(instance, ctx), ['schema']),
    );
    const serializedCollection: JsonApiCollection = {
      meta: {
        count: data.length,
        totalPages: 1,
        limit: null,
        skip: 0,
      },
      data,
    };
    return serializedCollection;
  }
}
