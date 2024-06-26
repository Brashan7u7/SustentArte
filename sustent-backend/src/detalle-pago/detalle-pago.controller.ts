import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DetallePagoService } from './detalle-pago.service';
import { DetallePagoDto } from './dto/detallePago.dto';

@Controller('detallepago')
export class DetallePagoController {

    constructor(private serviceDetalle:DetallePagoService) {

    }

    @Get()
    getDetallePagos()
    {
        return this.serviceDetalle.getDetallePagos();
    }

    @Get(':id')
    getDetallePago(@Param('id') id:number)
    {
        return this.serviceDetalle.getDetallePago(id);
    }

    @Post()
    createDetallePago(@Body() detallePago:DetallePagoDto)
    {
        return this.serviceDetalle.createDetallePago(detallePago);
    }

    @Put(':id')
    updateDetallePago(@Param('id') id:number,@Body() detallePago:DetallePagoDto)
    {
        return this.serviceDetalle.updateDetallePago(id,detallePago);
    }

    @Delete(':id')
    deleteDetallePago(@Param('id') id:number)
    {
        return this.serviceDetalle.deleteDetallePago(id);
    }


}
