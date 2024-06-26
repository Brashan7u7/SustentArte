import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PedidosProductosService } from './pedidos-productos.service';
import { CreatePedidosProductoDto } from './dto/create-pedidos-producto.dto';
import { UpdatePedidosProductoDto } from './dto/update-pedidos-producto.dto';

@Controller('pedidos-productos')
export class PedidosProductosController {
  constructor(private readonly pedidosProductosService: PedidosProductosService) {}

  @Post()
  create(@Body() createPedidosProductoDto: CreatePedidosProductoDto) {
    return this.pedidosProductosService.create(createPedidosProductoDto);
  }

  @Get()
  findAll() {
    return this.pedidosProductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidosProductosService.findOne(+id);
  }

  @Get('productosPedido/:idPedido')
  productosPedido(@Param('idPedido') idPedido: number) {
    return this.pedidosProductosService.productosPedido(idPedido);
  }

  @Get('pedidosArtesano/:idArtesano')
  pedidosArtesano(@Param('idArtesano') idArtesano: number) {
    return this.pedidosProductosService.pedidosArtesano(idArtesano);
  }

  @Get('pedidosComprador/:idComprador')
  pedidosComprador(@Param('idComprador') idComprador: number) {
    return this.pedidosProductosService.pedidosComprador(idComprador);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePedidosProductoDto: UpdatePedidosProductoDto) {
    return this.pedidosProductosService.update(+id, updatePedidosProductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidosProductosService.remove(+id);
  }
}
