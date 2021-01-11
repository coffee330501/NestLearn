import { Controller, Get, Inject, Optional } from "@nestjs/common";
import { HttpController } from "./http.controller";
import { HttpService } from './http.service';
@Controller('http2')
export class http2Controller extends HttpController{

 
  // constructor(protected  httpService: HttpService<string>){
  //     super(httpService);
  // }
  // @Get('testExtends')
  // ext(){
  //     console.log(this.httpService);
  //     return this.httpService;
  // }
}