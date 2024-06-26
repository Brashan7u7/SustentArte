import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PagosService } from './pagos.service';
import { PagosDto } from './dto/pagos.dto';

@Controller('pagos')
export class PagosController {
  constructor(private servicePago: PagosService) {}

  @Get()
  getPagos() {
    return this.servicePago.getPagos();
  }

  @Get(':id')
  getPago(@Param('id') id: number) {
    return this.servicePago.getPago(id);
  }

  @Post()
  createPago(@Body() pago: PagosDto) {
    return this.servicePago.createPago(pago);
  }

  @Put(':id')
  updatePago(@Param('id') id: number, @Body() pago: PagosDto) {
    return this.servicePago.updatePago(id, pago);
  }

  @Delete(':id')
  deletePago(@Param('id') id: number) {
    return this.servicePago.deletePago(id);
  }
}
