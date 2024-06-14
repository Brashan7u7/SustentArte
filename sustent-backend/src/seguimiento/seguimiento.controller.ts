import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SeguimientoService } from './seguimiento.service';
import { SeguimientoDto } from './dto/seguimiento.dto';
import { updateSeguimientoDto } from './dto/updateSeguimiento.dto';

@Controller('seguimientos')
export class SeguimientoController {

    constructor(private seguimientoService:SeguimientoService) { }

    @Get()
    async getSeguimientos() {
        return this.seguimientoService.getSeguimientos();
    }

    @Get(':id')
    async getSeguimiento(@Param('id') id:number) {
        return this.seguimientoService.getSeguimiento(id);
    }

    @Put(':id')
    async updateSeguimiento(@Param('id') id:number,@Body() seguimiento:updateSeguimientoDto) {
        return this.seguimientoService.updateSeguimiento(id,seguimiento);
    }

    @Delete(':id')
    async deleteSeguimiento(@Param('id') id:number) {
        return this.seguimientoService.deleteSeguimiento(id);
    }
}
