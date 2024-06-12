import { Module } from '@nestjs/common';
import { PedidosProductosService } from './pedidos-productos.service';
import { PedidosProductosController } from './pedidos-productos.controller';

@Module({
  controllers: [PedidosProductosController],
  providers: [PedidosProductosService],
})
export class PedidosProductosModule {}
