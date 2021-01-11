import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from 'express';

console.log('中间件2加载...');

@Injectable()
export class LoggerMiddleWare2 implements NestMiddleware{
    use(req: Request, res: Response, next: Function) {
        console.log('2号中间件捕获请求...');
        next();
    }
}