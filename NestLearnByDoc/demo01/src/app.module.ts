import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { http2Controller } from './http/http2.controller';
import { HttpOptionsService } from './http-options/http-options.service';
import { CatsModule } from './cats/cats.module';
import { HttpModule } from './http/http.module';
import { LoggerMiddleWare } from './cats/logger.middleware';

@Module({
  imports: [CatsModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
