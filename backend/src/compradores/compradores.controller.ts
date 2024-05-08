import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CompradoresService } from './compradores.service';
import { compradoresDto } from './dto/compradores.dto';

@Controller('compradores')
export class CompradoresController {
    constructor(private service:CompradoresService) { }

    @Get()
    allCompradores() {
        return this.service.allCompradores();
    }

    @Get(':id')
    oneComprador(@Param('id') id: number) {
        return this.service.oneComprador(id);
    }

    @Post()
    agregarComprador(@Body() newComprador: compradoresDto) {
        return this.service.agregarComprador(newComprador);
    }

    @Put(':id')
    eliminarComprador(@Param('id') id: number) {
        return this.service.eliminarComprador(id);
    }

  

   
}
