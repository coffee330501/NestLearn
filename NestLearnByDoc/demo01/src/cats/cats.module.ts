import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { HttpModule } from 'src/http/http.module';
import { HttpService } from 'src/http/http.service';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { LoggerMiddleWare } from './logger.middleware';
import { LoggerMiddleWare2 } from './logger2.middleware';

@Module({
    // imports: [HttpModule],
    controllers: [CatsController],
    providers: [CatsService],
    exports: [CatsService]
})
export class CatsModule implements NestModule{
    constructor(private readonly httpService: HttpService<string>){}
    configure(consumer: MiddlewareConsumer) {
        consumer
          // .apply(LoggerMiddleWare,LoggerMiddleWare2)
          .apply((req, res, next)=>{
            console.log(`函数中间件捕获请求`);
            next();
          })
          .exclude(
            'cats/1',
            'cats/param/1',
            {path:'cats/param/2(.*)',method:RequestMethod.GET})
          .forRoutes(CatsController)
          // .forRoutes('ab*cd')
        //   .forRoutes({path:'middler',method:RequestMethod.GET});
      }
}
