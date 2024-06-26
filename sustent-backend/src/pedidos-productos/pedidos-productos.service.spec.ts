import { Test, TestingModule } from '@nestjs/testing';
import { PedidosProductosService } from './pedidos-productos.service';

describe('PedidosProductosService', () => {
  let service: PedidosProductosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PedidosProductosService],
    }).compile();

    service = module.get<PedidosProductosService>(PedidosProductosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
