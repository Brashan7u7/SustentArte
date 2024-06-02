import { Test, TestingModule } from '@nestjs/testing';
import { SeguimientosController } from './seguimientos.controller';

describe('SeguimientosController', () => {
  let controller: SeguimientosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeguimientosController],
    }).compile();

    controller = module.get<SeguimientosController>(SeguimientosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
