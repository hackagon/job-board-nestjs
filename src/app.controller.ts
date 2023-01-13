import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// localhost:3000/api/hfbdsjbdjhb
// decorator
// design pattern: 
// IoC(inversion of control)
// decorator: class, method, parameter, constructor
// socket => observer
@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('hello')
  getHello() {
    return this.appService.getHello();
  }

  @Get('/jobs')
  findJobs() {
    return [
      { id: 1, title: 'Senior Backend' },
      { id: 2, title: 'Intern Frontend' },
    ]
  }
}
