import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompradoresService } from './compradores.service';
import { CompradorDto } from './dto/comprador.dto';
import { CompradorLoginDto } from './dto/compradorLogin.dto';

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

    @Put(':id')
    updateComprador(@Param('id') id:number,@Body() comprador:CompradorDto)
    {
        return this.servicioCompradores.updateComprador(comprador,id);
    }

    @Delete(':id')
    deleteComprador(@Param('id') id:number)
    {
        return this.servicioCompradores.deleteComprador(id);
    }

    @Post('/login')
    loginComprador(@Body() comprador:CompradorLoginDto)
    {
        return this.servicioCompradores.loginComprador(comprador.correo,comprador.password);
    }
}
