import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { LoggerMiddleWare } from './cats/logger.middleware';
import { LoggerMiddleWare3 } from './logger3.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});
  // app.use((req,res,next)=>{
  //   console.log('全局中间件');
  //   next();
    
  // });
  app.use(LoggerMiddleWare3);
  await app.listen(3000);
}
bootstrap();
