import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
// import * as raygun from 'raygun';
import _ from 'lodash';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  // private raygunClient: raygun.Client;

  // constructor() {
  //   this.raygunClient = new raygun.Client().init({ apiKey: config.RAYGUN_API_KEY });
  // }

  catch(exception: HttpException, host: ArgumentsHost) {
    const status =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    // if (status >= 500) {
    //   this.raygunClient.send(exception);
    // }

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: exception.message,
      // exception,
    });
  }
}
