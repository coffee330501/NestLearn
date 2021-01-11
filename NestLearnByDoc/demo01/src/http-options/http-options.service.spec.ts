import { Test, TestingModule } from '@nestjs/testing';
import { HttpOptionsService } from './http-options.service';

describe('HttpOptionsService', () => {
  let service: HttpOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HttpOptionsService],
    }).compile();

    service = module.get<HttpOptionsService>(HttpOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
