import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArtesanosService } from './artesanos.service';
import { artesanosDto } from './dto/artesanosLogin.dto';

@Controller('artesanos')
export class ArtesanosController {

    constructor(private artesanosService: ArtesanosService) { }

    @Get()
    async getArtesanos() {
        return this.artesanosService.getArtesanos();
    }

    @Get(':id')
    async getArtesano(@Param('id') id: number) {
        return this.artesanosService.getArtesano(id);
    }

    @Post()
    async createArtesano(@Body() artesano:artesanosDto) {
        return this.artesanosService.createArtesano(artesano);
    }

    @Put(':id')
    async updateArtesano(@Param('id') id:number,@Body() artesano:artesanosDto) {
        return this.artesanosService.updateArtesano(id,artesano);
    }

    @Delete(':id')
    async deleteArtesano(@Param('id') id:number) {
        return this.artesanosService.deleteArtesano(id);
    }

    @Post('login')
    async loginArtesano(@Body() artesano:artesanosDto) {
        return this.artesanosService.loginArtesano(artesano.user,artesano.password);
    }

}
