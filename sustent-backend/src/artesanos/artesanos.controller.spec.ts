import { Test, TestingModule } from '@nestjs/testing';
import { ArtesanosController } from './artesanos.controller';

describe('ArtesanosController', () => {
  let controller: ArtesanosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArtesanosController],
    }).compile();

    controller = module.get<ArtesanosController>(ArtesanosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
