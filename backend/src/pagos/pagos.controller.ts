import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosDto } from './dto/pagos.dto';

@Controller('pagos')
export class PagosController {
    constructor(private service:PagosService)
    {}

    @Get()
    obtenerPagos()
    {
        return this.service.obtenerPagos()
    }

    @Get(':id')
    obtenerUnPago(@Param('id') id:number)
    {
        return this.service.onePago(id)
    }

    @Post()
    crearPago(@Body() newPago:PagosDto)
    {
        return this.service.crearPago(newPago)
    }

    @Put(':id')
    actualizarPago(@Param('id') id:number,@Body() updatePago:PagosDto)
    {
        return this.service.updatePago(id,updatePago)
    }
}
