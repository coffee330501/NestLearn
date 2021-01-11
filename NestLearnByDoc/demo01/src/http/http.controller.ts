import { Controller, Get, HttpServer } from '@nestjs/common';
import { CatsService } from 'src/cats/cats.service';
import { HttpService } from './http.service';

@Controller('http')
export class HttpController {
    constructor(protected readonly httpService: HttpService<string>){}

    @Get('opt')
    testOptional(){
        return this.httpService.test();
    }
    @Get('opt2')
    testOptional2(){
        const httpService2 = new HttpService<string>('option1');
        return httpService2.test();
    }
    @Get('opt4')
    testOptional4(){
        console.log(this.httpService.test2);
        
        return this.httpService.test2();
    }
}
