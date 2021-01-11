import { Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from '../app.service';
//路径
@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get('/all')
  @HttpCode(255)
  getWorld(): string {
    return this.appService.getAll().toString();
  }
  @Post('/post')
  setNum(): Array<string> {
    return this.appService.getAll();
  }
}
