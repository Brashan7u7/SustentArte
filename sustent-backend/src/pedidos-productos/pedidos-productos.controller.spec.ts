import { Test, TestingModule } from '@nestjs/testing';
import { PedidosProductosController } from './pedidos-productos.controller';
import { PedidosProductosService } from './pedidos-productos.service';

describe('PedidosProductosController', () => {
  let controller: PedidosProductosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PedidosProductosController],
      providers: [PedidosProductosService],
    }).compile();

    controller = module.get<PedidosProductosController>(PedidosProductosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
