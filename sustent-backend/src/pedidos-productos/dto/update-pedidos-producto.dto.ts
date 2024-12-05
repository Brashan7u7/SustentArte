import { PartialType } from '@nestjs/mapped-types';
import { CreatePedidosProductoDto } from './create-pedidos-producto.dto';

export class UpdatePedidosProductoDto extends PartialType(CreatePedidosProductoDto) {}
