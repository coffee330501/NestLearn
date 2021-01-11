import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from 'express';

console.log('中间件加载...');

@Injectable()
export class LoggerMiddleWare implements NestMiddleware{
    use(req: Request, res: Response, next: Function) {
        console.log('req in...');
        next();
    }
}