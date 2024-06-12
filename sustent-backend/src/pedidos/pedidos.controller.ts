import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { PedidosDto } from './dto/pedidos.dto';

@Controller('pedidos')
export class PedidosController {

    constructor(private servicePedido:PedidosService) { }

    @Get()
    async getPedidos() {
        return this.servicePedido.getPedidos();
    }

    @Get(':id')
    async getPedido(@Param('id') id:number) {
        return this.servicePedido.getPedido(id);
    }

    @Get('comprador/:id')
    async pedidosComprador(@Param('id') id:number) {
        return this.servicePedido.pedidosComprador(id);
    }

    @Post()
    async createPedido(@Body() pedido:PedidosDto) {
        return this.servicePedido.createPedido(pedido);
    }

    @Put(':id')
    async updatePedido(@Param('id') id:number,@Body() pedido:PedidosDto) {
        return this.servicePedido.updatePedido(id,pedido);
    }

    @Delete(':id')
    async deletePedido(@Param('id') id:number) {
        return this.servicePedido.deletePedido(id);
    }
}
