import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CompradoresService } from './compradores.service';
import { CompradorDto } from './dto/comprador.dto';

@Controller('compradores')
export class CompradoresController {

    constructor(private servicioCompradores: CompradoresService) {
    }

    @Get()
    getCompradores()
    {
        return this.servicioCompradores.getCompradores();
    }

    @Get(':id')
    getComprador(@Param('id') id:number)
    {
        return this.servicioCompradores.getComprador(id);
    }

    @Post()
    createComprador(@Body() comprador:CompradorDto)
    {
        return this.servicioCompradores.createComprador(comprador);
    }

    @Delete(':id')
    deleteComprador(@Param('id') id:number)
    {
        return this.servicioCompradores.deleteComprador(id);
    }
}
