import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // async getHello() {
  //   return await this.appService.getTransaction();
  // }

  @Post()
  async activity(@Body() data: any) {
    return await this.appService.activity(data);
  }
}
