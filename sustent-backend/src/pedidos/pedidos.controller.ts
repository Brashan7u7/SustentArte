import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PedidosService } from './pedidos.service';
import { pedidosDto } from './dto/pedidos.dto';

@Controller('pedidos')
export class PedidosController {


    constructor(private service:PedidosService)
    {

    }

    @Get()
    obtenerPedidos()
    {
        return this.service.obtenerPedidos()
    }

    @Get(':id')
    obtenerUnPedido(@Param('id') id:number)
    {
        return this.service.unPedido(id)
    }

    @Post()
    crearPedido(@Body() newPedido:pedidosDto)
    {
        return this.service.crearPedido(newPedido)
    }

    @Put(':id')
    actualizarPedido(@Param('id') id:number,@Body() updatePedido:pedidosDto)
    {
        return this.service.actualizarPedido(id,updatePedido)
    }

}
