import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ArtesanosService } from './artesanos.service';
import { artesanosDto } from './dto/artesanos.dto';

@Controller('artesanos')
export class ArtesanosController {

    constructor(private service:ArtesanosService)
    {

    }

    @Get()
    obtenerArtesanos()
    {
        return this.service.obtenerArtesanos()
    }

    @Get(':id')
    obtenerUnArtesano(@Param('id') id:number)
    {
        return this.service.unArtesano(id)
    }

    @Post()
    crearArtesano(@Body() newArtesano:artesanosDto)
    {
        return this.service.crearArtesano(newArtesano)
    }

    @Put(':id')
    actualizarArtesano(@Param('id') id:number,@Body() updateArtesano:artesanosDto)
    {
        return this.service.actualizarArtesanos(id,updateArtesano)
    }

}
