import {
  Body,
  Controller,
  Get,
  Header,
  Headers,
  HttpCode,
  Injectable,
  Ip,
  Optional,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCatDto } from './CreateCatDto';
import { CatsService } from './cats.service'
import { HttpService } from 'src/http/http.service';


@Controller({ path: 'cats', host: '127.0.0.1' })
export class CatsController {
  constructor(private readonly catsService: CatsService,protected readonly httpService: HttpService<string>) {}
  // private readonly catsService: CatsService;
  // constructor(catsService: CatsService){
  //   this.catsService=catsService;
  // }
  @Get('1')
  findAll1(): string {
    return JSON.stringify(this.catsService.findAll());
  }
  @Get('2') // 参数中注入请求和响应 ，使用request.query[key]获取请求参数
  findAll2(@Req() request: Request, @Res() response: Response): void {
    console.log(request.query);
    response.end();
  }
  @Get('3/:id') // 使用request.params获取url中的路由参数
  findAll3(@Req() request: Request, @Res() response: Response): void {
    console.log(request.params.id);
    response.end();
  }
  @Get('4') //获取请求头信息
  findAll4(@Headers('Accept') charset: string): string {
    return charset;
  }
  @Get('ip') //获取请求ip
  getIP(@Ip() ip: string): string {
    return ip;
  }
  @Post('body') //获取请求体数据
  getBody(@Body() body: string): string {
    return body;
  }
  @Get('mycode') //自定义响应状态码
  @HttpCode(205)
  myCode(): void {
    const a = '';
    console.log(a);
  }
  @Get('get*AndSay') //路由通配符
  getSomething(): string {
    return 'success';
  }
  @Get('diyHeader1') //自定义响应头，方式一
  @Header('myHeader01', 'haha')
  diyHeader1(): string {
    return 'success';
  }
  @Get('diyHeader2') //自定义响应头，方式二
  diyHeader2(@Res() res: Response): void {
    res.setHeader('myHeader02', 'heihei');
    res.end('success');
  }
  @Get('diyHeader3') //自定义响应头，方式三
  diyHeader3(@Res() res: Response): void {
    res.header('headerKey', 'headerValue');
    res.end('success');
  }
  @Get('redirect') //重定向，方式一
  redir(@Res() res: Response): void {
    res.redirect('diyHeader1');
  }
  @Get('redirect2') //重定向，方式二
  @Redirect('diyHeader1', 302)
  redir2(): void {
    console.log('success');
  }
  @Get('param/:id') //获取路由参数，方式一
  getParam(@Param() params): string {
    return params.id;
  }
  @Get('param2/:id') //获取路由参数，方式二
  getParam2(@Req() req: Request): string {
    return req.params.id;
  }
  @Post('dto')
  create(@Body() catDto: CreateCatDto){
    this.catsService.create(catDto);
    return `created a cat,name ${catDto.name},age ${catDto.age},${catDto.desc}`;
  }
  @Get('testImp')
  testImp(){    
    return this.httpService.test2();
  }
}
