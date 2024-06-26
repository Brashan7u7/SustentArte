import { Test, TestingModule } from '@nestjs/testing';
import { ArtesanosService } from './artesanos.service';

describe('ArtesanosService', () => {
  let service: ArtesanosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArtesanosService],
    }).compile();

    service = module.get<ArtesanosService>(ArtesanosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
