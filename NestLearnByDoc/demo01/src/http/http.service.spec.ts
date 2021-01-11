import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from './http.service';

describe('HttpService', () => {
  let service: HttpService<string>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpService],
    }).compile();

    service = module.get<HttpService<string>>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
