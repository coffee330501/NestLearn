import { Global, Module } from '@nestjs/common';
import { CatsModule } from 'src/cats/cats.module';
import { CatsService } from 'src/cats/cats.service';
import { HttpOptionsService } from 'src/http-options/http-options.service';
import { HttpController } from './http.controller';
import { HttpService } from './http.service';
import { http2Controller } from './http2.controller';

@Global()
@Module({
    controllers: [HttpController,http2Controller],
    providers: [HttpService,HttpOptionsService],
    exports: [HttpService]
    // imports: [CatsService]
})
export class HttpModule {
    
}
