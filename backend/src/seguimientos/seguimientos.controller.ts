import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { seguimientosDto } from './dto/seguimientosCrear.dto';
import { SeguimientosService } from './seguimientos.service';

@Controller('seguimientos')
export class SeguimientosController {

    constructor(private readonly seguimientosService: SeguimientosService) { }

    @Get()
    async getAllSeguimientos() {
        return await this.seguimientosService.allSeguimientos();
    }

    @Get(':id')
    async getSeguimientoById(@Param('id') id: number) {
        return await this.seguimientosService.oneSeguimiento(id);
    }

    @Post()
    async createSeguimiento(@Body() seguimientoDto: seguimientosDto) {
        return await this.seguimientosService.agregarSeguimiento(seguimientoDto);
    }

    @Put(':id')
    async updateSeguimiento(@Param('id') id: number, @Body() seguimientoDto: seguimientosDto) {
        return await this.seguimientosService.actualizarSeguimiento(id, seguimientoDto);
    }

    @Delete(':id')
    async deleteSeguimiento(@Param('id') id: number) {
        return await this.seguimientosService.eliminarSeguimiento(id);
    }

}
